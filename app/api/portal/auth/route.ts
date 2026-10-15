import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { dbQuery } from '@/lib/db';
import { signSessionToken, verifySessionToken } from '@/lib/auth';

// DB-backed rate limiting for failed login attempts (works across serverless instances).
// Requires the "LoginAttempt" table (see MIGRATION_login_attempts.sql). Fails open if the
// table does not exist yet, so login keeps working before the migration is applied.
async function checkRateLimit(phone: string): Promise<{ allowed: boolean; remainingMinutes?: number }> {
  try {
    const res = await dbQuery(`SELECT attempts, "lockedUntil" FROM "LoginAttempt" WHERE phone = $1`, [phone]);
    if (res.rows.length === 0) return { allowed: true };
    const row = res.rows[0];
    const now = Date.now();
    if (row.lockedUntil && new Date(row.lockedUntil).getTime() > now) {
      return { allowed: false, remainingMinutes: Math.ceil((new Date(row.lockedUntil).getTime() - now) / 60000) };
    }
    if (row.lockedUntil) {
      await dbQuery(`DELETE FROM "LoginAttempt" WHERE phone = $1`, [phone]);
    }
    return { allowed: true };
  } catch {
    return { allowed: true };
  }
}

async function recordFailure(phone: string) {
  try {
    const res = await dbQuery(`SELECT attempts FROM "LoginAttempt" WHERE phone = $1`, [phone]);
    const attempts = (res.rows[0]?.attempts || 0) + 1;
    const lockedUntil = attempts >= 5 ? new Date(Date.now() + 15 * 60 * 1000).toISOString() : null;
    await dbQuery(
      `INSERT INTO "LoginAttempt" (phone, attempts, "lockedUntil", "updatedAt")
       VALUES ($1, $2, $3, NOW())
       ON CONFLICT (phone) DO UPDATE SET attempts = $2, "lockedUntil" = $3, "updatedAt" = NOW()`,
      [phone, attempts, lockedUntil]
    );
  } catch {
    /* rate-limit storage unavailable — fail open */
  }
}

async function clearFailures(phone: string) {
  try {
    await dbQuery(`DELETE FROM "LoginAttempt" WHERE phone = $1`, [phone]);
  } catch {
    /* ignore */
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, phone, companyName, contactName, email, otp } = body;

    // Helper to generate authenticated response with cookie & token
    const createAuthResponse = (user: any) => {
      const token = signSessionToken({
        companyId: user.companyId,
        contactId: user.contactId,
        companyName: user.companyName,
        contactName: user.contactName,
        phone: user.phone,
        role: user.role,
        isDemo: user.isDemo || false
      });

      const response = NextResponse.json({
        success: true,
        user,
        token
      });

      response.cookies.set('riclub_session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 7 * 24 * 3600
      });

      return response;
    };

    // 1. DEMO LOGIN (Instant 1-Click Evaluation)
    if (action === 'demo') {
      let companyRes = await dbQuery(`
        SELECT id, name, phone, email, address 
        FROM "Company" 
        WHERE id = '1e7c0ccf-9666-48db-b792-1be182f9a4fa' AND "isDeleted" = false
      `);

      if (companyRes.rows.length === 0) {
        companyRes = await dbQuery(`
          SELECT id, name, phone, email, address 
          FROM "Company" 
          WHERE "isDeleted" = false 
          LIMIT 1
        `);
      }

      const company = companyRes.rows[0] || {
        id: '1e7c0ccf-9666-48db-b792-1be182f9a4fa',
        name: 'ТОВ «Агро-Переробка Тест»',
        phone: '+380442994820',
        email: 'agro.test@riclub.ua'
      };

      return createAuthResponse({
        contactId: 'demo-contact-uuid',
        contactName: 'Олег Васильович (Керівник)',
        phone: '+380734277174',
        email: 'oleg.test@enterprise.ua',
        companyId: company.id,
        companyName: company.name,
        role: 'employer_director',
        isDemo: true
      });
    }

    // 2. SECURE B2B LOGIN (PHONE + CRM PIN-CODE)
    if (action === 'login') {
      const pin = body.pin || body.pinCode;

      if (!phone) {
        return NextResponse.json({ success: false, error: 'Вкажіть номер телефону' }, { status: 400 });
      }

      if (!pin) {
        return NextResponse.json({ 
          success: false, 
          requirePin: true,
          error: 'Введіть 4-значний PIN-код доступу, наданий координатором клубу.' 
        }, { status: 400 });
      }

      const cleanPhone = phone.replace(/[^\d+]/g, '');
      const cleanPin = pin.toString().trim();

      // Check brute-force rate limit
      const rateCheck = await checkRateLimit(cleanPhone);
      if (!rateCheck.allowed) {
        return NextResponse.json({
          success: false,
          error: `Забагато невірних спроб входу. Спробуйте через ${rateCheck.remainingMinutes} хв або зверніться до координатора.`
        }, { status: 429 });
      }

      // Find company in CRM
      const companyRes = await dbQuery(`
        SELECT id, name, phone, email, "pinCode", "portalStatus"
        FROM "Company"
        WHERE (phone LIKE $1 OR phone LIKE $2) AND "isDeleted" = false
        ORDER BY "createdAt" DESC
        LIMIT 1
      `, [`%${cleanPhone.slice(-9)}%`, `%${cleanPhone}%`]);

      let company = companyRes.rows[0];
      let contact = null;

      // If not directly found in Company, check B2B contacts
      if (!company) {
        const contactRes = await dbQuery(`
          SELECT c.id, c.name, c.phone, c.email, c.position, c."companyId", 
                 co.name as company_name, co."pinCode", co."portalStatus"
          FROM "Contact" c
          LEFT JOIN "Company" co ON c."companyId" = co.id
          WHERE c.type = 'b2b_contact' 
            AND (c.phone LIKE $1 OR c.phone LIKE $2)
            AND c."isDeleted" = false
          LIMIT 1
        `, [`%${cleanPhone.slice(-9)}%`, `%${cleanPhone}%`]);

        if (contactRes.rows.length > 0) {
          const row = contactRes.rows[0];
          contact = row;
          company = {
            id: row.companyId,
            name: row.company_name || 'Ваше підприємство',
            phone: row.phone,
            email: row.email,
            pinCode: row.pinCode,
            portalStatus: row.portalStatus
          };
        }
      }

      // 1. If company not found at all in CRM
      if (!company) {
        return NextResponse.json({
          success: false,
          notFound: true,
          error: 'Підприємство з таким номером не зареєстровано в базі роботодавців. Будь ласка, заповніть заявку на підключення.'
        }, { status: 404 });
      }

      // 2. Check portalStatus (Only 'active' allowed)
      const status = (company.portalStatus || 'pending').toLowerCase();
      if (status !== 'active') {
        return NextResponse.json({
          success: false,
          pendingApproval: true,
          companyName: company.name,
          error: `Доступ до бази кандидатів для «${company.name}» ще очікує активації. Доступ надається після підписання договору та узгодження квоти. Зверніться до чергового координатора: +38 (067) 800-40-40`
        }, { status: 403 });
      }

      // 3. Verify PIN code
      const expectedPin = company.pinCode ? company.pinCode.toString().trim() : null;
      const isCorrectPin = expectedPin && expectedPin === cleanPin;

      if (!isCorrectPin) {
        await recordFailure(cleanPhone);
        return NextResponse.json({
          success: false,
          invalidPin: true,
          error: 'Невірний PIN-код. Перевірте код у повідомленні від вашого координатора (або зверніться на гарячу лінію).'
        }, { status: 401 });
      }

      await clearFailures(cleanPhone);

      // Successful verified B2B authentication
      return createAuthResponse({
        contactId: contact ? contact.id : 'contact-' + company.id,
        contactName: contact ? contact.name : 'Керівник ' + company.name,
        phone: company.phone || phone,
        email: company.email,
        companyId: company.id,
        companyName: company.name,
        role: 'verified_employer'
      });
    }

    // 3. APPLICATION FOR PORTAL ACCESS (NEW EMPLOYER)
    if (action === 'register' || action === 'request_access') {
      const { industry, workersNeeded } = body;
      if (!phone || !companyName) {
        return NextResponse.json({ success: false, error: 'Вкажіть назву компанії та контактний телефон' }, { status: 400 });
      }

      const cleanPhone = phone.replace(/[^\d+]/g, '');
      const generatedPin = crypto.randomInt(1000, 10000).toString();

      // Check if already exists
      const existingComp = await dbQuery(`
        SELECT id, name, "portalStatus", "pinCode" 
        FROM "Company" 
        WHERE (phone LIKE $1) AND "isDeleted" = false
        LIMIT 1
      `, [`%${cleanPhone.slice(-9)}%`]);

      if (existingComp.rows.length > 0) {
        const comp = existingComp.rows[0];
        return NextResponse.json({
          success: false,
          alreadyExists: true,
          pendingApproval: comp.portalStatus !== 'active',
          error: comp.portalStatus === 'active' 
            ? 'Цей номер вже активовано. Введіть ваш PIN-код у формі входу.' 
            : 'Заявку від вашого підприємства вже отримано та передано в обробку координатору.'
        }, { status: 409 });
      }

      // Create company in CRM with 'pending' status and generated PIN
      const newCompanyRes = await dbQuery(`
        INSERT INTO "Company" (id, name, phone, email, "pinCode", "portalStatus", "createdAt", "updatedAt", "isDeleted")
        VALUES (gen_random_uuid(), $1, $2, $3, $4, 'pending', NOW(), NOW(), false)
        RETURNING id, name, phone, email, "pinCode", "portalStatus"
      `, [companyName, cleanPhone, email || null, generatedPin]);

      const newCompany = newCompanyRes.rows[0];

      // Create B2B contact
      const newContactRes = await dbQuery(`
        INSERT INTO "Contact" (id, "companyId", name, phone, email, type, position, "pinCode", "createdAt", "updatedAt", "isDeleted")
        VALUES (gen_random_uuid(), $1, $2, $3, $4, 'b2b_contact', 'Керівник / HR-директор', $5, NOW(), NOW(), false)
        RETURNING id, name, phone, email
      `, [newCompany.id, contactName || 'Керівник', cleanPhone, email || null, generatedPin]);

      const newContact = newContactRes.rows[0];

      // Create Deal in pipeline so managers immediately see it in CRM
      try {
        const pipelineRes = await dbQuery(`SELECT id FROM "Pipeline" WHERE "isDefault" = true LIMIT 1`);
        const pipelineId = pipelineRes.rows[0]?.id;
        let stageId = null;
        if (pipelineId) {
          const stageRes = await dbQuery(`SELECT id FROM "Stage" WHERE "pipelineId" = $1 ORDER BY "sortOrder" ASC LIMIT 1`, [pipelineId]);
          stageId = stageRes.rows[0]?.id;
        }

        if (pipelineId && stageId) {
          await dbQuery(`
            INSERT INTO "Deal" (id, title, budget, "pipelineId", "stageId", "companyId", "contactId", "createdAt", "updatedAt", "isDeleted")
            VALUES (gen_random_uuid(), $1, 0, $2, $3, $4, $5, NOW(), NOW(), false)
          `, [
            `Запит на доступ до кабінету: ${newCompany.name} (${workersNeeded || '5+'} робітників, ${industry || 'виробництво'})`,
            pipelineId,
            stageId,
            newCompany.id,
            newContact.id
          ]);
        }
      } catch (dealErr) {
        console.warn('Could not auto-create initial deal:', dealErr);
      }

      return NextResponse.json({
        success: true,
        pendingApproval: true,
        companyName: newCompany.name,
        pinHint: process.env.NODE_ENV !== 'production' ? generatedPin : undefined,
        message: `Дякуємо! Заявку підприємства «${newCompany.name}» прийнято в CRM. Протягом 15 хвилин координатор клубу підтвердить реквізити та надішле вам персональний 4-значний PIN-код для входу.`
      });
    }

    return NextResponse.json({ success: false, error: 'Невідома дія' }, { status: 400 });

  } catch (err: any) {
    console.error('Portal auth API error:', err);
    return NextResponse.json({ success: false, error: 'Помилка авторизації сервера' }, { status: 500 });
  }
}
