import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as auth from './schema/auth-schema'

export * from './schema/auth-schema'

const client = postgres(process.env.DATABASE_URL!)

export const db = drizzle(client, {
  logger: true,
  casing: 'snake_case',
  schema: {
    ...auth,
  },
})