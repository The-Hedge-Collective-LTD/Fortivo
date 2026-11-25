"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./MotionBits";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#05070a] px-4 py-14 sm:px-6">
      <Reveal mode="compact" className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Quick Link</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact Us</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Contact Form</li>
              <li>24/7 Customer Support</li>
              <li>Live Chat Available</li>
              <li className="pt-2">
                <span className="text-blue-400">Email</span>
                <br />
                <a
                  href="mailto:innovate@thehedgecollective.com"
                  className="text-white hover:text-blue-300"
                >
                  innovate@thehedgecollective.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Fortivo VPN" width={120} height={40} />
          </Link>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Fortivo VPN. All rights reserved.
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
