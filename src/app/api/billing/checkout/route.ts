import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { BILLING_API_BASE } from "@/lib/billing";

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) {
    return NextResponse.json(
      { code: "UNAUTHORIZED", message: "Missing access token." },
      { status: 401 },
    );
  }

  const body = (await req.json()) as {
    planId?: number;
    interval?: string;
    startTrial?: boolean;
  };

  if (!body.planId || (body.interval !== "month" && body.interval !== "year")) {
    return NextResponse.json(
      {
        code: "INVALID_REQUEST",
        message: "planId and interval (month|year) are required.",
      },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(`${BILLING_API_BASE}/api/Billing/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
      body: JSON.stringify({
        planId: body.planId,
        interval: body.interval,
        startTrial: body.startTrial === true,
      }),
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      {
        code: "UPSTREAM_ERROR",
        message: "Could not reach billing checkout service.",
      },
      { status: 502 },
    );
  }
}
