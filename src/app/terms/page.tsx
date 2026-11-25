"use client";

import Link from "next/link";
import SiteFooter from "../components/landing/SiteFooter";

const lastUpdated = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function TermsOfService() {
  return (
    <main className="w-full bg-[#05070a] text-white">
      <section className="relative overflow-hidden px-4 pt-14 pb-16 sm:px-6 md:pt-20 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(74,123,255,0.14),transparent_55%)]" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-12 text-center md:mb-16">
            <div className="mb-5 inline-flex items-center gap-2 text-sm text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4A7BFF]" />
              Legal Terms
            </div>
            <h1 className="text-3xl font-bold tracking-[-0.02em] text-white uppercase sm:text-4xl md:text-[48px] md:leading-[1.08]">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-slate-400 sm:text-base">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="space-y-10 rounded-xl border border-white/10 bg-[#0b0e14]/80 p-6 sm:p-8 md:space-y-12 md:p-12">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                By accessing and using FortivoVPN services, you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                2. Service Description
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                FortivoVPN provides Virtual Private Network (VPN) services that
                encrypt your internet connection and route it through our secure
                servers. Our service is designed to protect your privacy and
                enhance your online security.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                3. Acceptable Use
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-white">
                    Permitted Uses
                  </h3>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                    <li>Protecting your privacy and personal data</li>
                    <li>Securing your connection on public Wi-Fi</li>
                    <li>Accessing geo-restricted content legally</li>
                    <li>Enhancing your online security and anonymity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-white">
                    Prohibited Activities
                  </h3>
                  <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-5">
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                      <li>Illegal activities or violating laws in any jurisdiction</li>
                      <li>Distributing malware, viruses, or harmful code</li>
                      <li>Spamming, phishing, or fraudulent activities</li>
                      <li>Hacking, network intrusion, or unauthorized access</li>
                      <li>Copyright infringement or intellectual property violations</li>
                      <li>Activities that could harm our infrastructure or other users</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                4. Account Responsibility
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You must notify us immediately of any unauthorized use
                of your account.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                5. Payment &amp; Refunds
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                All payments are processed securely through our payment partners.
                We offer a 30-day money-back guarantee for new subscribers.
                Refund requests must be submitted within 30 days of initial
                purchase.
              </p>
              <div className="mt-4 rounded-lg border border-[#4A7BFF]/25 bg-[#4A7BFF]/10 p-4">
                <p className="text-sm text-[#4A7BFF]">
                  <strong className="text-white">Money-Back Guarantee:</strong>{" "}
                  Try FortivoVPN risk-free with our 30-day refund policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                6. Service Availability
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                While we strive for 99.9% uptime, we cannot guarantee
                uninterrupted service. We may perform maintenance that could
                temporarily affect service availability. We will provide advance
                notice when possible.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                7. Limitation of Liability
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                FortivoVPN provides services &quot;as is&quot; without warranties. We are
                not liable for any indirect, incidental, or consequential damages
                arising from the use of our service. Our total liability is
                limited to the amount paid for the service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                8. Termination
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                We reserve the right to terminate accounts that violate these
                terms. You may cancel your subscription at any time through your
                account settings or by contacting support.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                9. Changes to Terms
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                We may update these terms periodically. Significant changes will
                be communicated via email or through our service. Continued use
                after changes constitutes acceptance of new terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                10. Contact Information
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                For questions about these Terms of Service, contact us at:{" "}
                <a
                  href="mailto:innovate@thehedgecollective.com"
                  className="text-[#4A7BFF] transition hover:text-[#6b93ff]"
                >
                  innovate@thehedgecollective.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-[4px] border border-[#4A7BFF] px-6 py-3 text-sm font-medium text-[#4A7BFF] transition hover:bg-[#4A7BFF] hover:text-white"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
