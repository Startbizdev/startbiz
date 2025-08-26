import { Schema, model, models } from "mongoose";

export interface IServiceFAQ {
  q: string;
  a: string;
}

export interface IService {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  sections?: string; // rich text serialized (e.g., markdown/JSON)
  faq?: IServiceFAQ[];
  schemaJsonLd?: string;
  pillar: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const FAQSchema = new Schema<IServiceFAQ>({
  q: { type: String, required: true },
  a: { type: String, required: true },
});

const ServiceSchema = new Schema<IService>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    metaTitle: String,
    metaDescription: String,
    ogImage: String,
    sections: String,
    faq: [FAQSchema],
    schemaJsonLd: String,
    pillar: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Service = models.Service || model<IService>("Service", ServiceSchema);

