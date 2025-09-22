import { Schema, model, models } from "mongoose";

export interface INewsletter {
  name: string;
  segmentQuery?: Record<string, unknown>;
  subject?: string;
  html?: string;
  sentAt?: Date;
  stats?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

const NewsletterSchema = new Schema<INewsletter>(
  {
    name: { type: String, required: true },
    segmentQuery: { type: Schema.Types.Mixed },
    subject: String,
    html: String,
    sentAt: Date,
    stats: { type: Schema.Types.Mixed },
  },
  { timestamps: true }
);

export const Newsletter =
  models.Newsletter || model<INewsletter>("Newsletter", NewsletterSchema);

