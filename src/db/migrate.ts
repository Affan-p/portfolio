import { config } from 'dotenv';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { migrate } from 'drizzle-orm/neon-http/migrator';

config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function main() {
  await migrate(db, { migrationsFolder: 'drizzle' });
  console.log('Migration completed');
  process.exit(0);
}

main().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
