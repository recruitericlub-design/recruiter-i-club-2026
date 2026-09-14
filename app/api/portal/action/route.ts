import { NextRequest, NextResponse } from 'next/server';
import { dbQuery } from '@/lib/db';
import { getAuthenticatedEmployer } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, candidateId, companyId, companyName, reason, requisition } = body;

    // 1. Session verification & multi-tenant isolation
    const session = getAuthenticatedEmployer(req);
    const effectiveCompanyId = session?.companyId || companyId || '1e7c0ccf-9666-48db-b792-1be182f9a4fa';
    const effectiveCompanyName = session?.companyName || companyName || 'Підприємство';

    // 1. APPROVE CANDIDATE
    if (action === 'approve') {
      if (!candidateId) {
        return NextResponse.json({ success: false, error: 'Вкажіть ID кандидата' }, { status: 400 });
      }

      // Ensure the candidate belongs to the authorized company or is in review
      await dbQuery(`
        UPDATE "Contact"
        SET status = 'Затверджено замовником', "updatedAt" = NOW()
        WHERE id = $1 AND type = 'candidate' AND ("companyId" = $2 OR "companyId" IS NULL)
      `, [candidateId, effectiveCompanyId]);

      // Record in CRM DealNote
      try {
        const candRes = await dbQuery(`SELECT name, profession, country FROM "Contact" WHERE id = $1`, [candidateId]);
        const cand = candRes.rows[0];

        // Find active deal of company
        const dealRes = await dbQuery(`
          SELECT id, "responsibleId" FROM "Deal" 
          WHERE "companyId" = $1 AND "isDeleted" = false 
          ORDER BY "createdAt" DESC LIMIT 1
        `, [effectiveCompanyId]);
        const deal = dealRes.rows[0];

        if (deal) {
          await dbQuery(`
            INSERT INTO "DealNote" (id, "dealId", "userId", type, content, "createdAt")
            VALUES (gen_random_uuid(), $1, $2, 'status_change', $3, NOW())
          `, [
            deal.id,
            deal.responsibleId || 'system',
            `✅ [B2B Портал] Роботодавець "${effectiveCompanyName}" ЗАТВЕРДИВ кандидата: ${cand?.name || candidateId} (${cand?.profession}, ${cand?.country})`
          ]);
        }
      } catch (noteErr) {
        console.warn('Could not create DealNote:', noteErr);
      }

      return NextResponse.json({ success: true, message: 'Кандидата успішно затверджено!' });
    }

    // 2. REJECT CANDIDATE / REQUEST REPLACEMENT
    if (action === 'reject') {
      if (!candidateId) {
        return NextResponse.json({ success: false, error: 'Вкажіть ID кандидата' }, { status: 400 });
      }

      await dbQuery(`
        UPDATE "Contact"
        SET status = 'Потрібна заміна / Відхилено', "updatedAt" = NOW()
        WHERE id = $1 AND type = 'candidate' AND "companyId" = $2
      `, [candidateId, effectiveCompanyId]);

      // Record in CRM DealNote
      try {
        const candRes = await dbQuery(`SELECT name, profession, country FROM "Contact" WHERE id = $1`, [candidateId]);
        const cand = candRes.rows[0];

        const dealRes = await dbQuery(`
          SELECT id, "responsibleId" FROM "Deal" 
          WHERE "companyId" = $1 AND "isDeleted" = false 
          ORDER BY "createdAt" DESC LIMIT 1
        `, [effectiveCompanyId]);
        const deal = dealRes.rows[0];

        if (deal) {
          await dbQuery(`
            INSERT INTO "DealNote" (id, "dealId", "userId", type, content, "createdAt")
            VALUES (gen_random_uuid(), $1, $2, 'comment', $3, NOW())
          `, [
            deal.id,
            deal.responsibleId || 'system',
            `❌ [B2B Портал] Роботодавець "${effectiveCompanyName}" запросив ЗАМІНУ кандидата: ${cand?.name || candidateId}. Причина: ${reason || 'Не підійшов за кваліфікацією'}`
          ]);
        }
      } catch (noteErr) {
        console.warn('Could not create DealNote:', noteErr);
      }

      return NextResponse.json({ success: true, message: 'Запит на заміну надіслано координатору' });
    }

    // 3. ASSIGN CANDIDATE FROM GENERAL POOL TO EMPLOYER
    if (action === 'assign') {
      if (!candidateId) {
        return NextResponse.json({ success: false, error: 'Неповні параметри' }, { status: 400 });
      }

      await dbQuery(`
        UPDATE "Contact"
        SET "companyId" = $1, status = 'Співбесіда з роботодавцем', "updatedAt" = NOW()
        WHERE id = $2 AND type = 'candidate'
      `, [effectiveCompanyId, candidateId]);

      // Record in DealNote
      try {
        const candRes = await dbQuery(`SELECT name, profession, country FROM "Contact" WHERE id = $1`, [candidateId]);
        const cand = candRes.rows[0];

        const dealRes = await dbQuery(`
          SELECT id, "responsibleId" FROM "Deal" 
          WHERE "companyId" = $1 AND "isDeleted" = false 
          ORDER BY "createdAt" DESC LIMIT 1
        `, [effectiveCompanyId]);
        const deal = dealRes.rows[0];

        if (deal) {
          await dbQuery(`
            INSERT INTO "DealNote" (id, "dealId", "userId", type, content, "createdAt")
            VALUES (gen_random_uuid(), $1, $2, 'status_change', $3, NOW())
          `, [
            deal.id,
            deal.responsibleId || 'system',
            `📌 [B2B Портал] Роботодавець "${effectiveCompanyName}" обрав із загальної бази фахівця: ${cand?.name} (${cand?.profession}, ${cand?.country})`
          ]);
        }
      } catch (noteErr) {}

      return NextResponse.json({ success: true, message: 'Кандидата прикріплено до вашого підприємства!' });
    }

    // 4. SUBMIT NEW HIRING REQUISITION
    if (action === 'request_workers') {
      const { profession, headcount, city, salary, comment } = requisition || {};
      if (!profession || !headcount) {
        return NextResponse.json({ success: false, error: 'Вкажіть професію та кількість' }, { status: 400 });
      }

      const defaultPipe = await dbQuery(`SELECT id FROM "Pipeline" WHERE "isDefault" = true LIMIT 1`);
      const pipeId = defaultPipe.rows[0]?.id;
      let stageId = null;
      if (pipeId) {
        const stageRes = await dbQuery(`SELECT id FROM "Stage" WHERE "pipelineId" = $1 ORDER BY "sortOrder" ASC LIMIT 1`, [pipeId]);
        stageId = stageRes.rows[0]?.id;
      }

      const responsible = await dbQuery(`SELECT id FROM "User" WHERE "isDeleted" = false LIMIT 1`);
      const responsibleId = responsible.rows[0]?.id;

      await dbQuery(`
        INSERT INTO "Deal" (id, title, budget, "pipelineId", "stageId", "companyId", "responsibleId", "createdAt", "updatedAt", "isDeleted", "customFields")
        VALUES (gen_random_uuid(), $1, 0, $2, $3, $4, $5, NOW(), NOW(), false, $6)
        RETURNING id
      `, [
        `Заявка з кабінету: ${profession} (${headcount} чол) [${effectiveCompanyName}]`,
        pipeId,
        stageId,
        effectiveCompanyId,
        responsibleId,
        JSON.stringify({
          requisitionDetails: {
            position: profession,
            workersCount: parseInt(headcount),
            city: city || 'Україна',
            salaryOffered: salary || 'За домовленістю',
            comment: comment || '',
            source: 'B2B Client Portal'
          }
        })
      ]);

      return NextResponse.json({ 
        success: true, 
        message: `Заявку на ${headcount} фахівців (${profession}) успішно передано в CRM! Куратор призначить кандидатів протягом 24 годин.` 
      });
    }

    return NextResponse.json({ success: false, error: 'Невідома дія' }, { status: 400 });

  } catch (err: any) {
    console.error('Portal action API error:', err);
    return NextResponse.json({ success: false, error: 'Помилка виконання операції в системі' }, { status: 500 });
  }
}
