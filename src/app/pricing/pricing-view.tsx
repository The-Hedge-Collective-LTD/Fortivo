"use client";

import Link from "next/link";
import { useState } from "react";
import SiteFooter from "../components/landing/SiteFooter";

type Billing = "monthly" | "yearly";

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
    popular: true,
  },
] as const;

export default function PricingView() {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070a] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(74,123,255,0.14),transparent_65%)]" />

      <div className="relative mx-auto w-full max-w-[1380px] px-4 pt-12 pb-16 sm:px-6 md:pt-16 md:pb-20">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-[-0.02em] text-white uppercase sm:text-4xl md:text-[42px] md:leading-[1.1]">
            Choose Your Level of
            <span className="mt-1 block text-[#4A7BFF]">Digital Freedom</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            Select your protection tier. Instant app synchronization across all
            platforms.
          </p>

          <div
            className="mx-auto mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#0b0e14] p-1"
            role="group"
            aria-label="Billing period"
          >
            <button
              type="button"
              aria-pressed={billing === "monthly"}
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                billing === "monthly"
                  ? "bg-[#4A7BFF] text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={billing === "yearly"}
              onClick={() => setBilling("yearly")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition ${
                billing === "yearly"
                  ? "bg-[#4A7BFF] text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Yearly
              <span
                className={`text-xs ${
                  billing === "yearly" ? "text-white/90" : "text-[#4A7BFF]"
                }`}
              >
                (Save 50%)
              </span>
            </button>
          </div>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {plans.map((plan) => {
            const emphasize =
              (billing === "yearly" && plan.popular) ||
              (billing === "monthly" && plan.id === "monthly");

            return (
              <article
                key={plan.id}
                className={`relative flex h-full flex-col rounded-2xl border bg-[#0b0e14] p-6 sm:p-7 ${
                  emphasize || plan.popular
                    ? "border-[#4A7BFF]"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-[#4A7BFF] px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-white uppercase">
                    Most Popular
                  </span>
                )}

                <h2 className="text-xl font-semibold text-white">{plan.name}</h2>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight text-white sm:text-[42px]">
                    {plan.price}
                  </span>
                  <span className="mb-1.5 text-sm text-slate-400">
                    {plan.period}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {plan.blurb}
                </p>

                <p className="mt-7 text-sm text-slate-500">Specs included:</p>
                <ul className="mt-3 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-200"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4A7BFF]"
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs text-slate-500">{plan.footer}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 text-sm text-slate-500">
          <Link href="/privacy" className="transition hover:text-[#4A7BFF]">
            Privacy Policy
          </Link>
          <span aria-hidden="true">•</span>
          <Link href="/terms" className="transition hover:text-[#4A7BFF]">
            Terms of Service
          </Link>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
