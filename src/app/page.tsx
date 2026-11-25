import HeroSection from "./components/landing/HeroSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import AboutFreedom from "./components/landing/AboutFreedom";
import HowItWorks from "./components/landing/HowItWorks";
import GlobalCoverage from "./components/landing/GlobalCoverage";
import SecurityHighlights from "./components/landing/SecurityHighlights";
import DevicesCta from "./components/landing/DevicesCta";
import SiteFooter from "./components/landing/SiteFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070a] text-white">
      <HeroSection />
      <FeaturesSection />
      <AboutFreedom />
      <HowItWorks />
      <GlobalCoverage />
      <SecurityHighlights />
      <DevicesCta />
      <SiteFooter />
    </main>
  );
}
