import { auditLog, db } from '../../db'

export default defineEventHandler(async () => {
  const entries = await db.select().from(auditLog).execute()
  return { entries }
})
