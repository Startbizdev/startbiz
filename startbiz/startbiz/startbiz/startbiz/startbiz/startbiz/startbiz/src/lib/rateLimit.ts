type IdentifierFn = (req: Request) => Promise<string> | string;

export function createRateLimiter({
  windowMs,
  max,
  identifier = (req) => req.headers.get("x-forwarded-for") || "anon",
}: {
  windowMs: number;
  max: number;
  identifier?: IdentifierFn;
}) {
  const hits = new Map<string, { count: number; resetAt: number }>();

  return async function rateLimit(req: Request) {
    const id = await identifier(req);
    const now = Date.now();
    const entry = hits.get(id);

    if (!entry || now > entry.resetAt) {
      hits.set(id, { count: 1, resetAt: now + windowMs });
      return { ok: true } as const;
    }

    if (entry.count >= max) {
      const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
      return { ok: false, retryAfter } as const;
    }

    entry.count += 1;
    return { ok: true } as const;
  };
}

