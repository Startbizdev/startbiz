import { Schema, model, models } from "mongoose";

export type LeadStatus =
  | "new"
  | "qualified"
  | "contacted"
  | "meeting"
  | "proposal"
  | "won"
  | "lost"
  | "cold";

export interface ILeadNote { by: string; body: string; at: Date }

export interface ILead {
  createdAt: Date;
  status: LeadStatus;
  score: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  role?: string;
  serviceSlug?: string;
  citySlug?: string;
  budgetRange?: "5-10k" | "10-25k" | "25-50k" | "50-100k" | "100k+";
  timeline?: "urgent" | "1-3m" | ">3m" | "tbd";
  projectSummary?: string;
  pageUrl?: string;
  utm?: { source?: string; medium?: string; campaign?: string };
  tags?: string[];
  notes?: ILeadNote[];
  nextActionAt?: Date;
  owner?: string;
  consentAt?: Date;
  consentIpHash?: string;
  // Champs de rendez-vous
  appointmentDate?: Date;
  appointmentTime?: string;
  appointmentDateTime?: string;
  leadType?: "lead" | "appointment";
}

const LeadNoteSchema = new Schema<ILeadNote>({
  by: { type: String, required: true },
  body: { type: String, required: true },
  at: { type: Date, default: Date.now },
});

const LeadSchema = new Schema<ILead>(
  {
    status: {
      type: String,
      enum: [
        "new",
        "qualified",
        "contacted",
        "meeting",
        "proposal",
        "won",
        "lost",
        "cold",
      ],
      default: "new",
      index: true,
    },
    score: { type: Number, default: 0, index: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    company: String,
    role: String,
    serviceSlug: { type: String, index: true },
    citySlug: { type: String, index: true },
    budgetRange: String,
    timeline: String,
    projectSummary: String,
    pageUrl: String,
    utm: {
      source: String,
      medium: String,
      campaign: String,
    },
    tags: [String],
    notes: [LeadNoteSchema],
    nextActionAt: Date,
    owner: String,
    consentAt: Date,
    consentIpHash: String,
    // Champs de rendez-vous
    appointmentDate: Date,
    appointmentTime: String,
    appointmentDateTime: String,
    leadType: { type: String, enum: ["lead", "appointment"], default: "lead" },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

LeadSchema.index({ email: 1, serviceSlug: 1, createdAt: -1 });
LeadSchema.index({ status: 1, score: -1, createdAt: -1 });
LeadSchema.index({ citySlug: 1, serviceSlug: 1 });

export const Lead = models.Lead || model<ILead>("Lead", LeadSchema);

