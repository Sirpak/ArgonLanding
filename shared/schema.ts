import { sql } from "drizzle-orm"
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core"
import { createInsertSchema } from "drizzle-zod"
import { z } from "zod"

// Users table
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
})

// Consultation requests table
export const consultationRequests = pgTable("consultation_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  processDescription: text("process_description").notNull(),
  status: text("status").notNull().default("pending"), // pending, contacted, completed
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

// Zod schemas for inserting data
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
})

export const insertConsultationRequestSchema = createInsertSchema(consultationRequests).pick({
  firstName: true,
  lastName: true,
  email: true,
  company: true,
  processDescription: true,
})
