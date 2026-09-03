// Per-key fixed-window rate limiter. In-memory, so on serverless it only
// bounds bursts within a warm instance — a Vercel WAF rule is the real
// backstop; this keeps casual scripting from spamming Resend/Stripe.
const hits = new Map<string, { count: number; windowStart: number }>()

export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const entry = hits.get(key)
  if (!entry || now - entry.windowStart >= windowMs) {
    if (hits.size > 10_000) hits.clear()
    hits.set(key, { count: 1, windowStart: now })
    return true
  }
  entry.count += 1
  return entry.count <= limit
}

export function clientIp(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
}
