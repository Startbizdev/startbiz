import { Schema, model, models } from "mongoose";

export interface IUseCase { title: string; body: string }
export interface IFAQ { q: string; a: string }

export interface IPage {
  serviceSlug: string;
  citySlug?: string;
  url: string;
  title: string;
  metaDescription?: string;
  h1?: string;
  intro?: string;
  useCases?: IUseCase[];
  methodology?: string[];
  faq?: IFAQ[];
  canonical?: string;
  noindex?: boolean;
  schemaType?: string; // e.g., "Service"
  createdAt: Date;
  updatedAt: Date;
}

const UseCaseSchema = new Schema<IUseCase>({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

const FAQSchema = new Schema<IFAQ>({
  q: { type: String, required: true },
  a: { type: String, required: true },
});

const PageSchema = new Schema<IPage>(
  {
    serviceSlug: { type: String, required: true, index: true },
    citySlug: { type: String, index: true },
    url: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    metaDescription: String,
    h1: String,
    intro: String,
    useCases: [UseCaseSchema],
    methodology: [String],
    faq: [FAQSchema],
    canonical: String,
    noindex: { type: Boolean, default: false },
    schemaType: String,
  },
  { timestamps: true }
);

PageSchema.index({ citySlug: 1, serviceSlug: 1, url: 1 }, { unique: true });

export const Page = models.Page || model<IPage>("Page", PageSchema);

