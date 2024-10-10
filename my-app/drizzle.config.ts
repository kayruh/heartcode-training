import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import "./envConfig"

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  tablesFilter: ("heartcode-training_*")
});