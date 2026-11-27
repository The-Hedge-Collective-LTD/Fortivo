import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { BILLING_API_BASE } from "@/lib/billing";

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as { code?: string };
  const code = body.code?.trim();

  if (!code) {
    return NextResponse.json(
      { code: "INVALID_REQUEST", message: "One-time code is required." },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(`${BILLING_API_BASE}/api/account/web-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      {
        code: "UPSTREAM_ERROR",
        message: "Could not reach web-session service.",
      },
      { status: 502 },
    );
  }
}
