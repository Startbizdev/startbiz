import { Schema, model, models } from "mongoose";

export interface ICity {
  slug: string;
  name: string;
  region?: string;
  sectorHints?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const CitySchema = new Schema<ICity>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    region: String,
    sectorHints: [String],
  },
  { timestamps: true }
);

export const City = models.City || model<ICity>("City", CitySchema);

