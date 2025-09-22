import { Schema, model, models } from "mongoose";

export type HostingStatus = "active" | "renewal" | "expired";

export interface IHostingNotifyEntry {
  at: Date;
  type: "J-60" | "J-30" | "J-7";
}

export interface IHostingAsset {
  clientName: string;
  domain: string;
  provider?: string;
  plan?: string;
  expiresAt: Date;
  status: HostingStatus;
  notes?: string;
  lastNotifiedAt?: Date;
  notifyHistory?: IHostingNotifyEntry[];
}

const HostingNotifySchema = new Schema<IHostingNotifyEntry>({
  at: { type: Date, default: Date.now },
  type: { type: String, enum: ["J-60", "J-30", "J-7"], required: true },
});

const HostingAssetSchema = new Schema<IHostingAsset>(
  {
    clientName: { type: String, required: true },
    domain: { type: String, required: true },
    provider: String,
    plan: String,
    expiresAt: { type: Date, required: true, index: true },
    status: { type: String, enum: ["active", "renewal", "expired"], required: true, index: true },
    notes: String,
    lastNotifiedAt: Date,
    notifyHistory: [HostingNotifySchema],
  },
  { timestamps: true }
);

HostingAssetSchema.index({ expiresAt: 1, status: 1 });

export const HostingAsset =
  models.HostingAsset || model<IHostingAsset>("HostingAsset", HostingAssetSchema);

