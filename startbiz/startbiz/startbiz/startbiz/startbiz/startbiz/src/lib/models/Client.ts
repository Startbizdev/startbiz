import { Schema, model, models } from "mongoose";

export interface IClientProject {
  title: string;
  description?: string;
  url?: string;
}

export interface IClient {
  name: string;
  slug: string;
  logoUrl?: string;
  sector?: string;
  projects?: IClientProject[];
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IClientProject>({
  title: { type: String, required: true },
  description: String,
  url: String,
});

const ClientSchema = new Schema<IClient>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    logoUrl: String,
    sector: String,
    projects: [ProjectSchema],
  },
  { timestamps: true }
);

export const Client = models.Client || model<IClient>("Client", ClientSchema);

