import crypto from 'crypto';
import { NextRequest } from 'next/server';

const SECRET: string = process.env.JWT_SECRET || process.env.CRM_INTERNAL_SECRET || '';
if (!SECRET) {
  throw new Error(
    '[auth] JWT_SECRET is not set. Generate a strong secret (e.g. `openssl rand -hex 32`) ' +
    'and add it to your environment variables. Refusing to sign tokens with a weak default.'
  );
}

export interface EmployerSession {
  companyId: string;
  contactId: string;
  companyName: string;
  contactName: string;
  phone: string;
  role: string;
  isDemo?: boolean;
  exp: number;
}

export function signSessionToken(payload: Omit<EmployerSession, 'exp'>, expiresInSeconds = 7 * 24 * 3600): string {
  const exp = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const data: EmployerSession = { ...payload, exp };
  const jsonStr = JSON.stringify(data);
  const base64Data = Buffer.from(jsonStr, 'utf-8').toString('base64url');
  const signature = crypto.createHmac('sha256', SECRET).update(base64Data).digest('base64url');
  return `${base64Data}.${signature}`;
}

export function verifySessionToken(token: string): EmployerSession | null {
  try {
    if (!token || !token.includes('.')) return null;
    const [base64Data, signature] = token.split('.');
    const expectedSignature = crypto.createHmac('sha256', SECRET).update(base64Data).digest('base64url');
    
    const sigBuffer = Buffer.from(signature);
    const expBuffer = Buffer.from(expectedSignature);
    if (sigBuffer.length !== expBuffer.length || !crypto.timingSafeEqual(sigBuffer, expBuffer)) {
      return null;
    }
    
    const jsonStr = Buffer.from(base64Data, 'base64url').toString('utf-8');
    const session: EmployerSession = JSON.parse(jsonStr);
    
    if (session.exp && session.exp < Math.floor(Date.now() / 1000)) {
      return null; // Expired
    }
    
    return session;
  } catch (err) {
    return null;
  }
}

export function getAuthenticatedEmployer(req: NextRequest): EmployerSession | null {
  // 1. Check Authorization header
  const authHeader = req.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7).trim();
    const session = verifySessionToken(token);
    if (session) return session;
  }

  // 2. Check Cookie
  const cookieToken = req.cookies.get('riclub_session')?.value;
  if (cookieToken) {
    const session = verifySessionToken(cookieToken);
    if (session) return session;
  }

  return null;
}
