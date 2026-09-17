import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { dbQuery } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const leadRecord = {
      id: `LEAD-${Date.now()}`,
      name: data.name || 'Не вказано',
      phone: data.phone || 'Не вказано',
      company: data.company || 'Не вказано',
      messenger: data.messenger || 'telegram',
      handle: data.handle || '',
      industry: data.industry || 'Не вказано',
      workersNeeded: data.workersNeeded || '5-10',
      country: data.country || 'Узбекистан / Індія',
      currentExpenses: data.currentExpenses || '',
      source: data.source || 'ai_workforce_audit',
      ip: request.headers.get('x-forwarded-for') || '127.0.0.1',
      createdAt: new Date().toISOString(),
      status: 'NEW_UNPROCESSED'
    };

    const parsedHeadcount = parseInt(String(data.headcount || data.workersNeeded || '').replace(/\D/g, '')) || 5;
    const cleanPhone = String(leadRecord.phone).replace(/[^\d+]/g, '');

    // 1. Persistent Storage in Neon PostgreSQL CRM
    try {
      // Find or create Company record
      let companyId: string | null = null;
      if (leadRecord.company && leadRecord.company !== 'Не вказано') {
        const compRes = await dbQuery(
          `SELECT id FROM "Company" WHERE name ILIKE $1 AND "isDeleted" = false LIMIT 1`,
          [leadRecord.company]
        );
        if (compRes.rows.length > 0) {
          companyId = compRes.rows[0].id;
        } else {
          const newComp = await dbQuery(
            `INSERT INTO "Company" (id, name, phone, "createdAt", "updatedAt", "isDeleted")
             VALUES (gen_random_uuid(), $1, $2, NOW(), NOW(), false) RETURNING id`,
            [leadRecord.company, cleanPhone]
          );
          companyId = newComp.rows[0]?.id;
        }
      }

      // Find or create B2B Contact
      let contactId: string | null = null;
      const contactRes = await dbQuery(
        `SELECT id FROM "Contact" WHERE phone LIKE $1 AND "isDeleted" = false LIMIT 1`,
        [`%${cleanPhone.slice(-9)}%`]
      );
      if (contactRes.rows.length > 0) {
        contactId = contactRes.rows[0].id;
      } else {
        const newContact = await dbQuery(
          `INSERT INTO "Contact" (id, name, phone, type, "companyId", bio, "createdAt", "updatedAt", "isDeleted")
           VALUES (gen_random_uuid(), $1, $2, 'b2b_contact', $3, $4, NOW(), NOW(), false) RETURNING id`,
          [
            leadRecord.name,
            cleanPhone,
            companyId,
            `Джерело ліда: ${leadRecord.source} | Галузь: ${leadRecord.industry}`
          ]
        );
        contactId = newContact.rows[0]?.id;
      }

      // Create Deal in default Pipeline
      const pipeRes = await dbQuery(`SELECT id FROM "Pipeline" WHERE "isDefault" = true LIMIT 1`);
      const pipeId = pipeRes.rows[0]?.id;
      let stageId = null;
      if (pipeId) {
        const stageRes = await dbQuery(`SELECT id FROM "Stage" WHERE "pipelineId" = $1 ORDER BY "sortOrder" ASC LIMIT 1`, [pipeId]);
        stageId = stageRes.rows[0]?.id;
      }

      const responsible = await dbQuery(`SELECT id FROM "User" WHERE "isDeleted" = false LIMIT 1`);
      const responsibleId = responsible.rows[0]?.id;

      if (pipeId && stageId) {
        await dbQuery(
          `INSERT INTO "Deal" (id, title, budget, "pipelineId", "stageId", "companyId", "contactId", "responsibleId", "createdAt", "updatedAt", "isDeleted", "customFields")
           VALUES (gen_random_uuid(), $1, 0, $2, $3, $4, $5, $6, NOW(), NOW(), false, $7)`,
          [
            `Заявка з сайту: ${leadRecord.name} (${leadRecord.company}) [${leadRecord.workersNeeded} робітників]`,
            pipeId,
            stageId,
            companyId,
            contactId,
            responsibleId,
            JSON.stringify({
              source: leadRecord.source,
              workersNeeded: leadRecord.workersNeeded,
              industry: leadRecord.industry,
              country: leadRecord.country,
              ip: leadRecord.ip
            })
          ]
        );
      }
      console.log(`[Neon DB Lead Persisted] ID: ${leadRecord.id} | Phone: ${cleanPhone}`);
    } catch (dbErr) {
      console.warn('[Neon DB Lead Save Warning]:', dbErr);
    }

    // 2. Forward to official CRM Webhook gateway (Non-blocking with 5s timeout)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      fetch('https://online-crm.onrender.com/api/webhooks/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          name: leadRecord.name,
          phone: cleanPhone,
          email: data.email || '',
          company: leadRecord.company,
          headcount: parsedHeadcount,
          message: data.message || `Спеціалізація: ${data.specialization || leadRecord.industry}. Потрібно: ${leadRecord.workersNeeded} робітників. Джерело: ${leadRecord.source}`,
          utm_source: data.utm_source || 'Next.js API Gateway',
          utm_campaign: data.utm_campaign || 'B2B Recruitment 2026',
          utm_medium: data.utm_medium || 'website_lead'
        })
      }).then(() => clearTimeout(timeoutId)).catch(() => clearTimeout(timeoutId));
    } catch (crmErr) {
      console.error('[CRM Webhook Forward Error]:', crmErr);
    }

    return NextResponse.json({
      success: true,
      leadId: leadRecord.id,
      message: 'Заявку успішно збережено в системі Recruiter I Club',
      founderAssigned: 'Роман Яновський & Станіслав Лухменко',
      telegramLink: `https://t.me/RecruiterIClub?text=${encodeURIComponent(`Доброго дня! Я щойно зробив запит для компанії ${leadRecord.company || ''} (${leadRecord.workersNeeded} працівників). Номер заявки: ${leadRecord.id}`)}`,
      whatsappLink: `https://wa.me/380678004040?text=${encodeURIComponent(`Доброго дня! Я щодо розрахунку найму працівників для ${leadRecord.company || ''}. Заявка ${leadRecord.id}`)}`
    });

  } catch (err: unknown) {
    console.error('Error processing lead:', err);
    return NextResponse.json({ success: false, error: 'Помилка збереження заявки' }, { status: 500 });
  }
}

// 3. SECURED GET ROUTE (Protected against data leaks)
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const secret = process.env.CRM_INTERNAL_SECRET;
  
  if (!secret || !authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json(
      { error: 'Unauthorized: Access restricted to authenticated internal services' }, 
      { status: 401 }
    );
  }

  const token = authHeader.substring(7);
  const tokenBuf = Buffer.from(token);
  const secretBuf = Buffer.from(secret);
  if (tokenBuf.length !== secretBuf.length || !crypto.timingSafeEqual(tokenBuf, secretBuf)) {
    return NextResponse.json(
      { error: 'Unauthorized: Access restricted to authenticated internal services' }, 
      { status: 401 }
    );
  }

  try {
    const deals = await dbQuery(`
      SELECT d.id, d.title, d."createdAt", c.name as contact_name, c.phone, co.name as company_name
      FROM "Deal" d
      LEFT JOIN "Contact" c ON d."contactId" = c.id
      LEFT JOIN "Company" co ON d."companyId" = co.id
      WHERE d."isDeleted" = false
      ORDER BY d."createdAt" DESC
      LIMIT 100
    `);
    return NextResponse.json({ success: true, count: deals.rowCount, leads: deals.rows });
  } catch (err) {
    return NextResponse.json({ error: 'Database query failed' }, { status: 500 });
  }
}
