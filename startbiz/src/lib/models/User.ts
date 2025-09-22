import { Schema, model, models } from "mongoose";

export interface IUser {
  email: string;
  hash: string;
  role: "admin";
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, index: true },
    hash: { type: String, required: true },
    role: { type: String, enum: ["admin"], default: "admin" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

export const User = models.User || model<IUser>("User", UserSchema);

