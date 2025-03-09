import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  message: text("message").notNull(),
  avatar: text("avatar"),
});

export const transportTerms = pgTable("transport_terms", {
  id: serial("id").primaryKey(),
  term: text("term").notNull(),
  definition: text("definition").notNull(),
  category: text("category").notNull(),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).pick({
  name: true,
  role: true,
  message: true,
  avatar: true,
});

export const insertTransportTermSchema = createInsertSchema(transportTerms).pick({
  term: true,
  definition: true,
  category: true,
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
export type TransportTerm = typeof transportTerms.$inferSelect;
