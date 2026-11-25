import type { Metadata } from "next";
import PricingView from "./pricing-view";

export const metadata: Metadata = {
  title: "Pricing | Fortivo VPN",
  description:
    "Choose your Fortivo VPN protection tier — Basic Free, Monthly Pro at $3.99, or Yearly Premium at $35.99.",
};

export default function PricingPage() {
  return <PricingView />;
}
