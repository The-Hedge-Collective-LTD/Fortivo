"use client";

import Link from "next/link";
import SiteFooter from "../components/landing/SiteFooter";

const lastUpdated = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function PrivacyPolicy() {
  return (
    <main className="w-full bg-[#05070a] text-white">
      <section className="relative overflow-hidden px-4 pt-14 pb-16 sm:px-6 md:pt-20 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(74,123,255,0.14),transparent_55%)]" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-12 text-center md:mb-16">
            <div className="mb-5 inline-flex items-center gap-2 text-sm text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4A7BFF]" />
              Legal Information
            </div>
            <h1 className="text-3xl font-bold tracking-[-0.02em] text-white uppercase sm:text-4xl md:text-[48px] md:leading-[1.08]">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-slate-400 sm:text-base">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="space-y-10 rounded-xl border border-white/10 bg-[#0b0e14]/80 p-6 sm:p-8 md:space-y-12 md:p-12">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                Introduction
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                This Privacy Policy is a legal contract between you and
                theHedgeCollective Inc. (&quot;theHedgeCollective&quot;). By downloading,
                installing, and using FortivoVPN, you acknowledge that you have
                read, understood, and accepted this agreement in its entirety,
                and agree to be bound by its terms.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                theHedgeCollective Inc. reserves the right, at our discretion, to
                change, modify, add, or remove portions of this Privacy Policy
                at any time. Please check this Policy periodically for changes.
                Your continued use of the Service constitutes your acceptance of
                the Policy as modified. For any material changes to this Policy,
                such amended terms will automatically be effective thirty days
                after they are initially posted on the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                Zero-Log Commitment
              </h2>
              <div className="rounded-lg border border-[#4A7BFF]/25 bg-[#4A7BFF]/10 p-5">
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  <strong className="text-white">
                    FortivoVPN adheres to a strict no-log policy.
                  </strong>{" "}
                  We do not collect, store, or share any user data with anyone.
                  Your privacy is our utmost priority, and we ensure that no
                  user data is being shared or can be shared under any
                  circumstances. We do not collect, store, or monitor any of
                  your online activities, browsing history, traffic data, DNS
                  queries, or connection logs.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                License &amp; Service Terms
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Subject to the terms and conditions set forth in this agreement,
                FortivoVPN grants you a limited, non-exclusive, personal,
                non-transferable right to use our service solely for internal
                and personal purposes. All rights not expressly granted to you
                are reserved by FortivoVPN.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                The visual interfaces, graphics, design, information, computer
                code (including source code and object code), products,
                software, services, and all other elements of the Service are
                proprietary to theHedgeCollective or its subsidiaries,
                affiliated companies, or third-party licensors.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                Information We Collect
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-white">
                    Minimal Account Information
                  </h3>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                    <li>Email address (for account creation and support only)</li>
                    <li>
                      Payment information (processed securely by third-party
                      providers)
                    </li>
                    <li>Account preferences and settings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-white">
                    Anonymous Technical Information
                  </h3>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                    <li>
                      Device type and operating system (for app compatibility
                      only)
                    </li>
                    <li>App version information (for support purposes only)</li>
                    <li>
                      Anonymous usage statistics (bandwidth used, connection
                      frequency — no personal data)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                What We Never Collect
              </h2>
              <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-5">
                <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  <li>Your real IP address while connected to FortivoVPN</li>
                  <li>Websites you visit or content you access</li>
                  <li>Your browsing history or online activities</li>
                  <li>DNS queries or traffic metadata</li>
                  <li>Connection timestamps or session durations</li>
                  <li>Any data that could identify your online behavior</li>
                  <li>Personal communications or file transfers</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                Acceptable Use Policy
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                You may use FortivoVPN only for personal purposes and shall not:
              </p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                <li>Use the service for anything other than lawful purposes</li>
                <li>
                  Send spam or otherwise duplicate or unsolicited messages in
                  violation of applicable laws
                </li>
                <li>
                  Send infringing, obscene, threatening, libelous, or otherwise
                  unlawful or tortious material
                </li>
                <li>
                  Send or store material containing harmful computer code, files,
                  scripts, agents, or programs
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of the
                  Service
                </li>
                <li>
                  Attempt to gain unauthorized access to the Service or its
                  related systems
                </li>
                <li>
                  Distribute copyright-protected material through our servers
                </li>
                <li>Use the Service for commercial gain without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                Data Protection &amp; Security
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                All data is protected using advanced AES-256 encryption. We
                implement multiple security layers including perfect forward
                secrecy, secure key exchange protocols, and regular security
                audits conducted by independent third parties. FortivoVPN
                provides the service on an &quot;as is&quot; basis while maintaining the
                highest security standards possible.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                Third-Party Services
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                We use trusted third-party payment processors and may integrate
                with app stores. These services have their own privacy policies.
                We ensure all partners meet our strict privacy standards and
                data protection requirements. A computer or other equipment
                enabled to access the Internet is required to use the service.
                You are solely responsible for ensuring that your device is
                sufficient and compatible for use with FortivoVPN.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                Jurisdiction &amp; Legal Requests
              </h2>
              <div className="rounded-lg border border-[#4A7BFF]/25 bg-[#4A7BFF]/10 p-5">
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  <strong className="text-white">
                    FortivoVPN operates under privacy-friendly jurisdiction.
                  </strong>{" "}
                  Even if compelled by legal authorities, we cannot provide user
                  activity data because we simply don&apos;t collect it. Our
                  zero-log policy ensures we have nothing to hand over.
                  FortivoVPN may impose usage limits, suspend service, or block
                  certain kinds of usage solely at our discretion to maintain
                  service integrity.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                Disclaimers &amp; Limitations
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-white">
                    Disclaimer of Warranties
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                    FortivoVPN makes no representation, warranty, or guarantee
                    as to the reliability, timeliness, quality, suitability,
                    availability, accuracy, or completeness of the Services.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-white">
                    Limitation of Liability
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                    Under no circumstances shall theHedgeCollective or its
                    affiliates, contractors, employees, agents, or third-party
                    partners be liable for any lost profits or special,
                    indirect, incidental, punitive, or consequential damages of
                    any kind whatsoever.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#4A7BFF] sm:text-2xl">
                Contact Us
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                For privacy-related questions or concerns, contact our Privacy
                Officer at:{" "}
                <a
                  href="mailto:privacy@thehedgecollective.com"
                  className="text-[#4A7BFF] transition hover:text-[#6b93ff]"
                >
                  privacy@thehedgecollective.com
                </a>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                For general inquiries, contact:{" "}
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
