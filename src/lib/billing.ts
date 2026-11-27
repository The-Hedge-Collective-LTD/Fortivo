export const BILLING_API_BASE = "https://nexoralayer.com";
export const PREMIUM_PLAN_ID = 6;

export type CheckoutInterval = "month" | "year";

/** Decode JWT payload (no verify — server already issued the token). */
export function getUserIdFromAccessToken(token: string): string | null {
  try {
    const parts = token.split(".");
    if (parts.length < 2) return null;
    const payload = parts[1]!.replace(/-/g, "+").replace(/_/g, "/");
    const padded = payload + "=".repeat((4 - (payload.length % 4)) % 4);
    const json = JSON.parse(atob(padded)) as Record<string, unknown>;
    const candidates = [
      json.userId,
      json.userid,
      json.uid,
      json.sub,
      json.nameId,
      json.nameid,
      json[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ],
    ];
    for (const value of candidates) {
      if (typeof value === "string" && value.length > 0) return value;
      if (typeof value === "number") return String(value);
    }
    return null;
  } catch {
    return null;
  }
}
