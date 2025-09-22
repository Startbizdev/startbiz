import crypto from "crypto";

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "";
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";

export function getCloudinaryConfig() {
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    throw new Error("Cloudinary config missing");
  }
  return {
    cloudName: CLOUDINARY_CLOUD_NAME,
    apiKey: CLOUDINARY_API_KEY,
    apiSecret: CLOUDINARY_API_SECRET,
  };
}

export function createSignedUploadParams(
  folder: string,
  options: Record<string, string | number | boolean> = {}
) {
  const timestamp = Math.floor(Date.now() / 1000);
  const params = new URLSearchParams({
    timestamp: String(timestamp),
    folder,
    ...Object.fromEntries(
      Object.entries(options).map(([k, v]) => [k, String(v)])
    ),
  });

  const toSign = Array.from(params.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v}`)
    .join("&");

  const signature = crypto
    .createHash("sha1")
    .update(toSign + CLOUDINARY_API_SECRET)
    .digest("hex");

  return {
    api_key: CLOUDINARY_API_KEY,
    timestamp,
    folder,
    signature,
    cloud_name: CLOUDINARY_CLOUD_NAME,
  };
}

