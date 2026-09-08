import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
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

    // Save lead to local CRM storage
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const leadsFile = path.join(dataDir, 'crm_leads.json');
    let existingLeads = [];
    if (fs.existsSync(leadsFile)) {
      try {
        const fileContent = fs.readFileSync(leadsFile, 'utf-8');
        existingLeads = JSON.parse(fileContent);
      } catch {
        existingLeads = [];
      }
    }

    existingLeads.unshift(leadRecord);
    fs.writeFileSync(leadsFile, JSON.stringify(existingLeads, null, 2), 'utf-8');

    console.log(`[CRM Lead Captured] ID: ${leadRecord.id} | ${leadRecord.name} (${leadRecord.company}) | Phone: ${leadRecord.phone} | Messenger: ${leadRecord.messenger}`);

    return NextResponse.json({
      success: true,
      leadId: leadRecord.id,
      message: 'Заявку успішно збережено в CRM системі Recruiter I Club',
      founderAssigned: 'Роман Яновський & Станіслав Лухменко',
      telegramLink: `https://t.me/RecruiterIClub?text=${encodeURIComponent(`Доброго дня! Я щойно зробив аудит кадрів для компанії ${leadRecord.company || ''} (${leadRecord.workersNeeded} працівників). Номер заявки: ${leadRecord.id}`)}`,
      whatsappLink: `https://wa.me/380670000000?text=${encodeURIComponent(`Доброго дня! Я щодо розрахунку найму працівників для ${leadRecord.company || ''}. Заявка ${leadRecord.id}`)}`
    });

  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error';
    console.error('Error saving lead:', err);
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}

export async function GET() {
  try {
    const leadsFile = path.join(process.cwd(), 'data', 'crm_leads.json');
    if (fs.existsSync(leadsFile)) {
      const content = fs.readFileSync(leadsFile, 'utf-8');
      return NextResponse.json({ leads: JSON.parse(content) });
    }
    return NextResponse.json({ leads: [] });
  } catch {
    return NextResponse.json({ leads: [] });
  }
}
