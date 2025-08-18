import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const consultationRequests = pgTable("consultation_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  processDescription: text("process_description").notNull(),
  status: text("status").notNull().default("pending"), // pending, contacted, completed
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertConsultationRequestSchema = createInsertSchema(consultationRequests).pick({
  firstName: true,
  lastName: true,
  email: true,
  company: true,
  processDescription: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertConsultationRequest = z.infer<typeof insertConsultationRequestSchema>;
export type ConsultationRequest = typeof consultationRequests.$inferSelect;
