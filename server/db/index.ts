import { drizzle } from 'drizzle-orm/node-postgres'
import { pgEnum, pgTable, jsonb, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

export const action = pgEnum('action', ['resend_doi', 'delete_pending'])

export const auditLog = pgTable('audit_log', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull(),
  action: action('action').notNull(),
  reason: text('reason'),
  details: jsonb('details'),
  createdAt: timestamp('created_at').defaultNow().notNull()
})

export const db = drizzle(process.env.DATABASE_URL!)
