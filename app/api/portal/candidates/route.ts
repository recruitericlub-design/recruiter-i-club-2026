import { NextRequest, NextResponse } from 'next/server';
import { dbQuery } from '@/lib/db';
import { getAuthenticatedEmployer } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const queryCompanyId = searchParams.get('companyId');

    // 1. Session verification
    const session = getAuthenticatedEmployer(req);
    // Allow either authenticated session company, or demo company if not logged in
    const effectiveCompanyId = session?.companyId || queryCompanyId || '1e7c0ccf-9666-48db-b792-1be182f9a4fa';

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

    // 3. Fetch general candidate pool (All active verified candidates from CRM)
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
    const allCandidates = allRes.rows;

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
