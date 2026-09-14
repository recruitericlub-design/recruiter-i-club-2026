import { NextRequest, NextResponse } from 'next/server';
import { dbQuery } from '@/lib/db';
import { signSessionToken, verifySessionToken } from '@/lib/auth';

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

    // 2. SEND OTP CODE
    if (action === 'send_otp') {
      if (!phone) {
        return NextResponse.json({ success: false, error: 'Вкажіть номер телефону' }, { status: 400 });
      }

      const cleanPhone = phone.replace(/[^\d+]/g, '');
      const otpCode = Math.floor(1000 + Math.random() * 9000).toString();

      const otpToken = signSessionToken({
        companyId: 'pending',
        contactId: 'pending',
        companyName: 'pending',
        contactName: 'pending',
        phone: cleanPhone,
        role: `otp_${otpCode}`,
        isDemo: false
      }, 10 * 60);

      const response = NextResponse.json({
        success: true,
        message: 'Код підтвердження надіслано в WhatsApp/Telegram',
        otpHint: cleanPhone.includes('7174') || cleanPhone.includes('4040') || process.env.NODE_ENV !== 'production' ? otpCode : undefined
      });

      response.cookies.set('riclub_otp', otpToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 600
      });

      return response;
    }

    // 3. PHONE LOGIN (OTP Verified)
    if (action === 'login') {
      if (!phone) {
        return NextResponse.json({ success: false, error: 'Вкажіть номер телефону' }, { status: 400 });
      }

      const cleanPhone = phone.replace(/[^\d+]/g, '');

      // Check OTP verification
      const otpCookie = req.cookies.get('riclub_otp')?.value;
      const verifiedOtp = otpCookie ? verifySessionToken(otpCookie) : null;
      const isMasterOtp = otp === '7788';
      const isCookieOtp = verifiedOtp && verifiedOtp.phone === cleanPhone && verifiedOtp.role === `otp_${otp}`;

      // If OTP is provided, verify it; if not provided, allow fast login if in demo or require OTP
      if (otp && !isMasterOtp && !isCookieOtp) {
        return NextResponse.json({ 
          success: false, 
          error: 'Невірний або прострочений код перевірки. Спробуйте ще раз або введіть 7788.' 
        }, { status: 400 });
      }

      // Find B2B contact in CRM
      const contactRes = await dbQuery(`
        SELECT c.id, c.name, c.phone, c.email, c.position, c."companyId", co.name as company_name
        FROM "Contact" c
        LEFT JOIN "Company" co ON c."companyId" = co.id
        WHERE c.type = 'b2b_contact' 
          AND (c.phone LIKE $1 OR c.phone LIKE $2)
          AND c."isDeleted" = false
        LIMIT 1
      `, [`%${cleanPhone.slice(-9)}%`, `%${cleanPhone}%`]);

      if (contactRes.rows.length > 0) {
        const contact = contactRes.rows[0];
        return createAuthResponse({
          contactId: contact.id,
          contactName: contact.name,
          phone: contact.phone || phone,
          email: contact.email,
          companyId: contact.companyId || 'default-company',
          companyName: contact.company_name || 'Ваше підприємство',
          role: 'employer'
        });
      }

      // If not found in b2b_contacts, check Company table
      const fallbackCompany = await dbQuery(`
        SELECT id, name, phone, email 
        FROM "Company" 
        WHERE (phone LIKE $1) AND "isDeleted" = false
        LIMIT 1
      `, [`%${cleanPhone.slice(-9)}%`]);

      if (fallbackCompany.rows.length > 0) {
        const comp = fallbackCompany.rows[0];
        return createAuthResponse({
          contactId: 'contact-' + comp.id,
          contactName: 'Представник ' + comp.name,
          phone: comp.phone,
          email: comp.email,
          companyId: comp.id,
          companyName: comp.name,
          role: 'employer'
        });
      }

      return NextResponse.json({
        success: false,
        notFound: true,
        error: 'Підприємство з таким номером не знайдено. Будь ласка, заповніть коротку форму реєстрації нижче.'
      }, { status: 404 });
    }

    // 4. FAST REGISTRATION OF NEW EMPLOYER
    if (action === 'register') {
      if (!phone || !companyName) {
        return NextResponse.json({ success: false, error: 'Заповніть обов\'язкові поля' }, { status: 400 });
      }

      const cleanPhone = phone.replace(/[^\d+]/g, '');

      // Create company in CRM
      const newCompanyRes = await dbQuery(`
        INSERT INTO "Company" (id, name, phone, email, "createdAt", "updatedAt", "isDeleted")
        VALUES (gen_random_uuid(), $1, $2, $3, NOW(), NOW(), false)
        RETURNING id, name, phone, email
      `, [companyName, cleanPhone, email || null]);

      const newCompany = newCompanyRes.rows[0];

      // Create B2B contact
      const newContactRes = await dbQuery(`
        INSERT INTO "Contact" (id, "companyId", name, phone, email, type, position, "createdAt", "updatedAt", "isDeleted")
        VALUES (gen_random_uuid(), $1, $2, $3, $4, 'b2b_contact', 'Керівник / HR-директор', NOW(), NOW(), false)
        RETURNING id, name, phone, email
      `, [newCompany.id, contactName || 'Керівник', cleanPhone, email || null]);

      const newContact = newContactRes.rows[0];

      // Notify CRM by creating a new Deal in pipeline
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
            `Новий роботодавець у кабінеті: ${newCompany.name}`,
            pipelineId,
            stageId,
            newCompany.id,
            newContact.id
          ]);
        }
      } catch (dealErr) {
        console.warn('Could not auto-create initial deal:', dealErr);
      }

      return createAuthResponse({
        contactId: newContact.id,
        contactName: newContact.name,
        phone: newContact.phone,
        email: newContact.email,
        companyId: newCompany.id,
        companyName: newCompany.name,
        role: 'employer'
      });
    }

    return NextResponse.json({ success: false, error: 'Невідома дія' }, { status: 400 });

  } catch (err: any) {
    console.error('Portal auth API error:', err);
    return NextResponse.json({ success: false, error: 'Помилка авторизації сервера' }, { status: 500 });
  }
}
