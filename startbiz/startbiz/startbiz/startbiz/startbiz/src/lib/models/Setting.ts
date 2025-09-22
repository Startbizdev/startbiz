import { Schema, model, models } from "mongoose";

export interface ISetting {
  key: string;
  value?: Record<string, unknown>;
}

const SettingSchema = new Schema<ISetting>(
  {
    key: { type: String, required: true, unique: true, index: true },
    value: { type: Schema.Types.Mixed },
  },
  { timestamps: false }
);

export const Setting = models.Setting || model<ISetting>("Setting", SettingSchema);

