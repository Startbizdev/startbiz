import mongoose from "mongoose";

let isConnected = 0 as 0 | 1;

export async function connectToDatabase(): Promise<typeof mongoose> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");
  if (isConnected && mongoose.connection.readyState === 1) return mongoose;
  if (mongoose.connection.readyState === 1) {
    isConnected = 1;
    return mongoose;
  }
  await mongoose.connect(uri, {
    dbName: undefined,
  });
  isConnected = 1;
  return mongoose;
}

