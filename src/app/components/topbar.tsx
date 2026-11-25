"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PLAY_STORE } from "@/lib/motion-presets";

const primaryLinks = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#features", label: "FEATURES" },
  { href: "/#security", label: "SECURITY" },
  { href: "/#privacy", label: "PRIVACY" },
  { href: "/pricing", label: "PRICING" },
] as const;

const linkClass =
  "text-[11px] font-medium tracking-[0.16em] text-white transition hover:text-white/65 sm:text-xs lg:text-[13px]";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-[60] bg-[#05070a]/70 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-stretch border-b border-white/15 lg:h-[76px]">
          <div className="flex shrink-0 items-center justify-center border-r border-white/15 px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              aria-label="Fortivo VPN home"
              className="relative flex h-12 items-center sm:h-14"
            >
              <Image
                src="/logo.svg"
                alt="Fortivo VPN"
                width={200}
                height={72}
                className="h-11 w-auto object-contain sm:h-12 lg:h-[52px]"
                priority
                unoptimized
              />
            </Link>
          </div>

          <nav className="hidden min-w-0 flex-1 items-stretch md:flex">
            <div className="flex w-full items-center justify-evenly gap-2 px-4 lg:gap-6 lg:px-10">
              {primaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-5 border-l border-white/15 px-4 sm:gap-8 sm:px-6 lg:gap-10 lg:px-10">
            <div className="hidden items-center md:flex">
              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                DOWNLOAD NOW
              </a>
            </div>

            <button
              type="button"
              className="relative z-[70] flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block h-px w-5 bg-white transition ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-white transition ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-white transition ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div className="h-[68px] lg:h-[76px]" />

      <div
        className={`fixed inset-0 z-[50] transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute top-20 right-4 left-4 overflow-hidden rounded-xl border border-white/10 bg-[#0b1018] transition-all duration-300 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <nav className="flex flex-col">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-white/10 px-5 py-4 text-sm tracking-[0.14em] text-white hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="px-5 py-4 text-sm tracking-[0.14em] text-white hover:bg-white/5"
            >
              DOWNLOAD NOW
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
