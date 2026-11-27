import type { Metadata } from "next";
import { Suspense } from "react";
import PricingView from "./pricing-view";

export const metadata: Metadata = {
  title: "Pricing | Fortivo VPN",
  description:
    "Choose your Fortivo VPN protection tier — Basic Free, Monthly Pro at $3.99, or Yearly Premium at $35.99.",
};

export default function PricingPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-blue-300">
          Loading pricing…
        </main>
      }
    >
      <PricingView />
    </Suspense>
  );
}
