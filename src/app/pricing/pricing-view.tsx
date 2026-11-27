"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getUserIdFromAccessToken,
  PREMIUM_PLAN_ID,
  type CheckoutInterval,
} from "@/lib/billing";

type Billing = "monthly" | "yearly";
type SessionStatus = "idle" | "loading" | "ready" | "error";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.thehedgecollective.fortivoVPN";

const SESSION_KEY = "fortivo_web_access_token";

const plans = [
  {
    id: "basic",
    name: "Basic Free",
    price: "$0.00",
    period: "/forever",
    blurb: "Essential shield for occasional casual anonymous browsing.",
    features: [
      "2 Basic Server Locations (US, NL, JP)",
      "Ad-Supported Speed (~2 Mbps cap)",
      "Standard 256-bit AES Encryption",
      "Single (1) Device Connection",
      "Dedicated Streaming & P2P",
      "Automated Multi-Hop Kill Switch",
    ],
    footer: "No credit card needed • Free forever",
    cta: "Get Started Free",
    popular: false,
  },
  {
    id: "monthly",
    name: "Monthly Pro",
    price: "$3.99",
    period: "/month",
    blurb: "Full cryptographic agility with flexible month-to-month freedom.",
    features: [
      "100+ High-Speed Secure Nodes",
      "Uncapped Speeds up to 1 Gbps",
      "Strict Zero-Logs & RAM-Only Disks",
      "24/7 Priority Live Support Desk",
      "Quantum-Resistant WireGuard Double-Hop",
    ],
    footer: "Billed monthly • Cancel anytime in 1-click",
    cta: "Get Monthly Pro",
    popular: false,
  },
  {
    id: "yearly",
    name: "Yearly Premium",
    price: "$35.99",
    period: "/year",
    blurb: "Maximum multi-hop protection, lowest latency, all endpoints.",
    features: [
      "5+ Countries & 5,000+ Bare-Metal Nodes",
      "10Gbps Tier-1 Low-Latency Bandwidth",
      "Dedicated High-Tick Gaming & 4K Routes",
      "Multi-Interface Kill Switch & Double-Hop",
      "Priority 24/7 VIP Engineering Support",
    ],
    footer: "$2.99 / mo • Save 50% • 30-Day Money-Back Guarantee",
    cta: "Get Yearly Premium",
    popular: true,
  },
] as const;

function buttonClass(emphasize: boolean, disabled?: boolean) {
  const base =
    "mt-8 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-medium font-roboto shadow-lg transition-all duration-300";
  if (disabled) {
    return `${base} cursor-not-allowed border border-gray-600 bg-gray-700/50 text-gray-400`;
  }
  if (emphasize) {
    return `${base} bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:scale-[1.02] hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/20`;
  }
  return `${base} border border-blue-500/40 bg-blue-500/10 text-blue-400 hover:scale-[1.02] hover:border-blue-400/60 hover:bg-blue-600 hover:text-white`;
}

export default function PricingView() {
  const searchParams = useSearchParams();
  const [billing, setBilling] = useState<Billing>("yearly");
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>("idle");
  const [sessionMessage, setSessionMessage] = useState("");
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState("");

  useEffect(() => {
    const code = searchParams.get("code")?.trim();
    if (!code) {
      const cached =
        typeof window !== "undefined"
          ? sessionStorage.getItem(SESSION_KEY)
          : null;
      if (cached) {
        setAccessToken(cached);
        setUserId(getUserIdFromAccessToken(cached));
        setSessionStatus("ready");
      }
      return;
    }

    let cancelled = false;
    setSessionStatus("loading");
    setSessionMessage("Signing you in from the Fortivo app…");

    void (async () => {
      try {
        const res = await fetch("/api/account/web-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });
        const data = (await res.json().catch(() => ({}))) as {
          accessToken?: string;
          message?: string;
          code?: string;
        };

        if (cancelled) return;

        if (!res.ok || !data.accessToken) {
          setSessionStatus("error");
          setSessionMessage(
            data.message ??
              "Could not start a web session. Open pricing again from the Fortivo app.",
          );
          return;
        }

        sessionStorage.setItem(SESSION_KEY, data.accessToken);
        setAccessToken(data.accessToken);
        setUserId(getUserIdFromAccessToken(data.accessToken));
        setSessionStatus("ready");
        setSessionMessage("");

        // Drop one-time code from the URL so it can't be reused from history.
        const url = new URL(window.location.href);
        url.searchParams.delete("code");
        window.history.replaceState({}, "", url.pathname + url.search);
      } catch {
        if (cancelled) return;
        setSessionStatus("error");
        setSessionMessage(
          "Could not reach the session service. Try opening pricing from the app again.",
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [searchParams]);

  const startPremiumCheckout = useCallback(
    async (interval: CheckoutInterval, planKey: string) => {
      setActionMessage("");

      if (!accessToken) {
        setActionMessage(
          "Open this page from the Fortivo app to subscribe (one-time code required).",
        );
        return;
      }

      setCheckoutLoading(planKey);
      try {
        const auth = `Bearer ${accessToken}`;
        const subscribeRes = await fetch("/api/billing/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: auth,
          },
          body: JSON.stringify({
            planId: PREMIUM_PLAN_ID,
            ...(userId ? { userId } : {}),
          }),
        });
        const subscribeData = (await subscribeRes.json().catch(() => ({}))) as {
          code?: string;
          message?: string;
          url?: string;
        };

        if (
          subscribeData.code === "USE_CHECKOUT" ||
          (!subscribeRes.ok && subscribeData.code === "USE_CHECKOUT")
        ) {
          const checkoutRes = await fetch("/api/billing/checkout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: auth,
            },
            body: JSON.stringify({
              planId: PREMIUM_PLAN_ID,
              interval,
              startTrial: false,
              ...(userId ? { userId } : {}),
            }),
          });
          const checkoutData = (await checkoutRes.json().catch(() => ({}))) as {
            url?: string;
            message?: string;
            code?: string;
          };

          if (!checkoutRes.ok || !checkoutData.url) {
            setActionMessage(
              checkoutData.message ??
                "Checkout failed. Please try again from the app.",
            );
            return;
          }

          window.location.assign(checkoutData.url);
          return;
        }

        if (subscribeData.url) {
          window.location.assign(subscribeData.url);
          return;
        }

        if (!subscribeRes.ok) {
          setActionMessage(
            subscribeData.message ??
              "Subscription request failed. Please try again.",
          );
          return;
        }

        setActionMessage(
          subscribeData.message ?? "Subscription updated successfully.",
        );
      } catch {
        setActionMessage(
          "Something went wrong starting checkout. Please try again.",
        );
      } finally {
        setCheckoutLoading(null);
      }
    },
    [accessToken, userId],
  );

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-20 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-[-5rem] bottom-20 h-80 w-80 rounded-full bg-purple-500/8 blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 0.8, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-16 pb-20 sm:px-6 md:pt-20 md:pb-24">
        <header className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-6 py-2 text-sm font-medium text-blue-400 font-roboto"
          >
            Plans & Pricing
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-roboto text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl md:text-5xl"
          >
            Choose Your Level of{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Digital Freedom
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 mb-6 h-1 w-32 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"
          />

          <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-400 font-roboto sm:text-base">
            Select your protection tier. Instant app synchronization across all
            platforms.
          </p>

          {sessionStatus === "loading" && (
            <p className="mt-4 text-sm text-blue-300 font-roboto">
              {sessionMessage}
            </p>
          )}
          {sessionStatus === "error" && (
            <p className="mt-4 text-sm text-red-400 font-roboto">
              {sessionMessage}
            </p>
          )}
          {sessionStatus === "ready" && userId && (
            <p className="mt-4 text-sm text-green-400/90 font-roboto">
              Signed in for checkout
            </p>
          )}
          {actionMessage && (
            <p className="mt-4 text-sm text-amber-300 font-roboto">
              {actionMessage}
            </p>
          )}

          <div
            className="mx-auto mt-8 inline-flex items-center gap-1 rounded-full border border-blue-500/20 bg-gray-800/80 p-1 backdrop-blur-sm"
            role="group"
            aria-label="Billing period"
          >
            <button
              type="button"
              aria-pressed={billing === "monthly"}
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-medium font-roboto transition ${
                billing === "monthly"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={billing === "yearly"}
              onClick={() => setBilling("yearly")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium font-roboto transition ${
                billing === "yearly"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
              <span
                className={`text-xs ${
                  billing === "yearly" ? "text-white/90" : "text-blue-400"
                }`}
              >
                (Save 50%)
              </span>
            </button>
          </div>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {plans.map((plan, index) => {
            const emphasize =
              (billing === "yearly" && plan.popular) ||
              (billing === "monthly" && plan.id === "monthly");
            const isPaid = plan.id === "monthly" || plan.id === "yearly";
            const busy = checkoutLoading === plan.id;
            const premiumDisabled =
              isPaid &&
              (sessionStatus === "loading" ||
                busy ||
                (sessionStatus === "error" && !accessToken));

            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
                className={`relative flex h-full flex-col rounded-2xl border bg-gray-800/80 p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 sm:p-7 ${
                  emphasize
                    ? "border-blue-500/60 shadow-blue-500/10"
                    : "border-gray-700 hover:border-blue-500/30 hover:shadow-blue-500/5"
                }`}
              >
                {emphasize && plan.popular && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-white uppercase font-roboto">
                    Most Popular
                  </span>
                )}

                <h2 className="text-xl font-semibold text-white font-roboto">
                  {plan.name}
                </h2>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight text-white sm:text-[42px]">
                    {plan.price}
                  </span>
                  <span className="mb-1.5 text-sm text-gray-400 font-roboto">
                    {plan.period}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-400 font-roboto">
                  {plan.blurb}
                </p>

                <p className="mt-7 text-sm text-gray-500 font-roboto">
                  Specs included:
                </p>
                <ul className="mt-3 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-gray-200 font-roboto"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.id === "basic" ? (
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass(emphasize)}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled={premiumDisabled}
                    onClick={() =>
                      void startPremiumCheckout(
                        plan.id === "monthly" ? "month" : "year",
                        plan.id,
                      )
                    }
                    className={buttonClass(emphasize, premiumDisabled)}
                  >
                    {busy
                      ? "Starting checkout…"
                      : sessionStatus === "loading"
                        ? "Signing in…"
                        : plan.cta}
                  </button>
                )}

                <p className="mt-4 text-xs text-gray-500 font-roboto">
                  {plan.footer}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 text-sm text-gray-500 font-roboto">
          <Link href="/privacy" className="transition hover:text-blue-400">
            Privacy Policy
          </Link>
          <span aria-hidden="true">•</span>
          <Link href="/terms" className="transition hover:text-blue-400">
            Terms of Service
          </Link>
          <span aria-hidden="true">•</span>
          <Link href="/contact" className="transition hover:text-blue-400">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
