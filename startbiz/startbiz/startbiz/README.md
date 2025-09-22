Startbiz — Next.js App Router platform

Setup
1. Copy `.env.local.example` to `.env.local` and fill values
2. `pnpm i`
3. Seed database: `pnpm dlx tsx scripts/seed.ts`
4. Run dev: `pnpm dev`

Environment
- Mongo: `MONGODB_URI`
- SMTP Ionos: `SMTP_HOST` `SMTP_PORT` `SMTP_USER` `SMTP_PASS` `SMTP_FROM`
- Cloudinary: `CLOUDINARY_CLOUD_NAME` `CLOUDINARY_API_KEY` `CLOUDINARY_API_SECRET`
- Turnstile: `TURNSTILE_SITE_KEY` `TURNSTILE_SECRET_KEY`
- Admin access: `BACKOFFICE_PROTECTED_EMAIL`

API routes
- POST `/api/leads`
- POST `/api/revalidate`
- POST `/api/newsletters/send`
- POST `/api/hosting/notify`
- POST `/api/upload`

Revalidate ISR
POST `/api/revalidate` with `{ "path": "/paris/developpement-application-mobile" }`
