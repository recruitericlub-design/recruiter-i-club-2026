import { NextRequest, NextResponse } from 'next/server';
import { dbQuery } from '@/lib/db';
import { getAuthenticatedEmployer } from '@/lib/auth';

export const dynamic = 'force-dynamic';

const DEMO_COMPANY_ID = '1e7c0ccf-9666-48db-b792-1be182f9a4fa';

export async function GET(req: NextRequest) {
  try {
    // 1. Session is REQUIRED — candidate personal data (names, videos, resumes)
    // must never be served anonymously.
    const session = getAuthenticatedEmployer(req);
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Необхідна авторизація в кабінеті роботодавця' },
        { status: 401 }
      );
    }

    const isDemo = session.isDemo === true;
    // Strict tenant isolation: a company sees only its own candidates.
    // The old ?companyId= override allowed reading other companies' data.
    const effectiveCompanyId = isDemo ? DEMO_COMPANY_ID : session.companyId;

    // 2. Fetch assigned candidates (My Candidates)
    let myCandidates: any[] = [];
    if (effectiveCompanyId && effectiveCompanyId !== 'unassigned') {
      const myRes = await dbQuery(`
        SELECT
          id, name, country, profession, status, "companyId", phone, skills,
          "videoUrl", "resumeUrl", "documents", "experienceYears", "salaryExpectation",
          languages, bio, "driverLicense", "createdAt", "updatedAt"
        FROM "Contact"
        WHERE type = 'candidate'
          AND "companyId" = $1
          AND "isDeleted" = false
        ORDER BY "updatedAt" DESC
      `, [effectiveCompanyId]);

      // Protect candidate privacy: mask phone unless fully approved
      myCandidates = myRes.rows.map(c => ({
        ...c,
        phone: c.status?.includes('Затверджено') || c.status?.includes('Працевлаш')
          ? c.phone
          : (c.phone ? c.phone.slice(0, 4) + ' ••• •• ' + c.phone.slice(-2) : 'Контакт закріплено')
      }));
    }

    // 3. General candidate pool — verified employers only.
    // Demo sessions see an empty pool: demo data lives on the demo company.
    let allCandidates: any[] = [];
    if (!isDemo) {
      const allRes = await dbQuery(`
        SELECT
          id, name, country, profession, status, "companyId", skills,
          "videoUrl", "resumeUrl", "documents", "experienceYears", "salaryExpectation",
          languages, bio, "driverLicense", "createdAt"
        FROM "Contact"
        WHERE type = 'candidate'
          AND "isDeleted" = false
        ORDER BY "createdAt" DESC
        LIMIT 100
      `);
      allCandidates = allRes.rows;
    }

    // 4. Aggregate metrics for the dashboard
    const metrics = {
      myTotal: myCandidates.length,
      allTotal: allCandidates.length,
      myActiveOnShift: myCandidates.filter(c =>
        c.status && (c.status.toLowerCase().includes('працевлаш') || c.status.toLowerCase().includes('змін') || c.status.toLowerCase().includes('робот'))
      ).length,
      myInTransit: myCandidates.filter(c =>
        c.status && (c.status.toLowerCase().includes('дороз') || c.status.toLowerCase().includes('транзит') || c.status.toLowerCase().includes('віз') || c.status.toLowerCase().includes('виїзд'))
      ).length,
      myUnderReview: myCandidates.filter(c =>
        c.status && (c.status.toLowerCase().includes('співбесід') || c.status.toLowerCase().includes('скринінг') || c.status.toLowerCase().includes('розгляд') || c.status.toLowerCase().includes('анкет'))
      ).length
    };

    return NextResponse.json({
      success: true,
      myCandidates,
      allCandidates,
      metrics
    });

  } catch (err: any) {
    console.error('Portal candidates API error:', err);
    return NextResponse.json({
      success: false,
      error: 'Помилка отримання реєстру кандидатів'
    }, { status: 500 });
  }
}
