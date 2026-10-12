/**
 * Fixed-window, in-memory rate limiter.
 *
 * State lives in the memory of one server instance, so limits apply per
 * instance. This is a first line of defense for a low-volume contact form;
 * docs/deployment.md lists stronger platform-level options.
 */
export interface RateLimiter {
  check(key: string): { allowed: boolean; retryAfterSeconds: number };
}

export function createRateLimiter(options: {
  limit: number;
  windowMs: number;
  now?: () => number;
  maxKeys?: number;
}): RateLimiter {
  const { limit, windowMs, now = Date.now, maxKeys = 5000 } = options;
  const windows = new Map<string, { count: number; resetAt: number }>();

  function prune(current: number) {
    for (const [key, entry] of windows) {
      if (entry.resetAt <= current) windows.delete(key);
    }
  }

  return {
    check(key) {
      const current = now();
      if (windows.size >= maxKeys) prune(current);

      const entry = windows.get(key);
      if (!entry || entry.resetAt <= current) {
        windows.set(key, { count: 1, resetAt: current + windowMs });
        return { allowed: true, retryAfterSeconds: 0 };
      }

      if (entry.count >= limit) {
        return {
          allowed: false,
          retryAfterSeconds: Math.ceil((entry.resetAt - current) / 1000),
        };
      }

      entry.count += 1;
      return { allowed: true, retryAfterSeconds: 0 };
    },
  };
}

/** First address in x-forwarded-for, as set by Vercel and most proxies. */
export function clientIpFrom(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return headers.get("x-real-ip")?.trim() || "unknown";
}
