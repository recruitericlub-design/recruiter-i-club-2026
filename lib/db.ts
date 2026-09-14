import { Pool, QueryResult, QueryResultRow } from 'pg';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn('[DB Warning] DATABASE_URL environment variable is not defined.');
}

// Global singleton pool for Next.js / Serverless to avoid exhausting database connections
declare global {
  var _neonPool: Pool | undefined;
}

let pool: Pool;

if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    connectionString,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
    ssl: { rejectUnauthorized: false }
  });
} else {
  if (!global._neonPool) {
    global._neonPool = new Pool({
      connectionString,
      max: 5,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
      ssl: { rejectUnauthorized: false }
    });
  }
  pool = global._neonPool;
}

export async function dbQuery<T extends QueryResultRow = any>(
  text: string, 
  params?: any[]
): Promise<QueryResult<T>> {
  if (!pool) {
    throw new Error('Database connection pool is not initialized. DATABASE_URL is missing.');
  }
  const start = Date.now();
  try {
    const res = await pool.query<T>(text, params);
    const duration = Date.now() - start;
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[DB] executed query: ${text.substring(0, 80)}... | ${duration}ms | rows: ${res.rowCount}`);
    }
    return res;
  } catch (error) {
    console.error(`[DB Error] query failed: ${text}`, error);
    throw error;
  }
}

export default pool;
