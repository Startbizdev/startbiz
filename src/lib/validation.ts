import { z } from "zod";

export const leadSchema = z.object({
  firstName: z.string().min(1).max(100).transform((s) => s.trim()),
  lastName: z.string().min(1).max(100).transform((s) => s.trim()),
  email: z
    .string()
    .email()
    .transform((s) => s.trim().toLowerCase()),
  phone: z.string().optional(),
  company: z.string().optional(),
  role: z.enum(["Dirigeant", "CTO", "Responsable", "Autre"]).optional(),
  budgetRange: z
    .enum(["5-10k", "10-25k", "25-50k", "50-100k", "100k+"]) 
    .optional(),
  timeline: z.enum(["urgent", "1-3m", ">3m", "tbd"]).optional(),
  projectSummary: z.string().min(10).max(2000),
  pageUrl: z.string().url().optional(),
  serviceSlug: z.string().optional(),
  citySlug: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  token: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const revalidateSchema = z.object({ path: z.string().min(1) });

export const newsletterSendSchema = z.object({
  segmentQuery: z.record(z.string(), z.unknown()).optional().default({}),
  subject: z.string().min(1),
  html: z.string().min(1),
});

