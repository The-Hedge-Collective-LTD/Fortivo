"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-[60] flex w-full border-b border-blue-500/20 bg-gray-900/95 shadow-2xl backdrop-blur-xl">
        {/* <div className="container mx-auto flex w-full flex-col items-center justify-center bg-transparent px-3 py-2 md:flex-row md:justify-between md:px-4 md:py-4"> */}
        <div className="container mx-auto flex w-full flex-col items-center justify-center bg-transparent px-3 py-2 md:flex-row md:justify-between">
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link
              href={"/"}
              className="group z-[70] flex flex-row items-center justify-center gap-2 md:gap-3"
            >
              <Image
                src="/logo.svg"
                alt="Fortivo VPN Logo"
                width={100}
                height={100}
                className="h-auto w-30 md:w-50"
              />
            </Link>

            <button
              className="relative z-[70] flex h-8 w-8 flex-col items-center justify-center space-y-1 rounded-md p-1 md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              ></span>
            </button>
          </div>

          <div className="font-roboto hidden items-center justify-center gap-3 md:flex md:gap-8">
            <Link
              className="group relative text-xs font-medium tracking-wide text-gray-300 decoration-blue-400 decoration-2 underline-offset-4 duration-300 hover:text-blue-400 hover:underline md:text-sm"
              href="/#about"
            >
              <span className="relative z-10">ABOUT</span>
              <div className="absolute inset-0 -z-10 scale-0 rounded-lg bg-blue-500/10 transition-transform duration-300 group-hover:scale-100"></div>
            </Link>
            <Link
              className="group relative text-xs font-medium tracking-wide text-gray-300 decoration-blue-400 decoration-2 underline-offset-4 duration-300 hover:text-blue-400 hover:underline md:text-sm"
              href="/#features"
            >
              <span className="relative z-10">FEATURES</span>
              <div className="absolute inset-0 -z-10 scale-0 rounded-lg bg-blue-500/10 transition-transform duration-300 group-hover:scale-100"></div>
            </Link>
            <Link
              className="group relative text-xs font-medium tracking-wide text-gray-300 decoration-blue-400 decoration-2 underline-offset-4 duration-300 hover:text-blue-400 hover:underline md:text-sm"
              href="/#security"
            >
              <span className="relative z-10">SECURITY</span>
              <div className="absolute inset-0 -z-10 scale-0 rounded-lg bg-blue-500/10 transition-transform duration-300 group-hover:scale-100"></div>
            </Link>
            <Link
              className="group relative text-xs font-medium tracking-wide text-gray-300 decoration-blue-400 decoration-2 underline-offset-4 duration-300 hover:text-blue-400 hover:underline md:text-sm"
              href="/#privacy"
            >
              <span className="relative z-10">PRIVACY</span>
              <div className="absolute inset-0 -z-10 scale-0 rounded-lg bg-blue-500/10 transition-transform duration-300 group-hover:scale-100"></div>
            </Link>
            <Link
              className="group relative text-xs font-medium tracking-wide text-gray-300 decoration-blue-400 decoration-2 underline-offset-4 duration-300 hover:text-blue-400 hover:underline md:text-sm"
              href="/pricing"
            >
              <span className="relative z-10">PRICING</span>
              <div className="absolute inset-0 -z-10 scale-0 rounded-lg bg-blue-500/10 transition-transform duration-300 group-hover:scale-100"></div>
            </Link>
            <Link
              className="group relative text-xs font-medium tracking-wide text-gray-300 decoration-blue-400 decoration-2 underline-offset-4 duration-300 hover:text-blue-400 hover:underline md:text-sm"
              href="/#team"
            >
              <span className="relative z-10">TEAM</span>
              <div className="absolute inset-0 -z-10 scale-0 rounded-lg bg-blue-500/10 transition-transform duration-300 group-hover:scale-100"></div>
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.thehedgecollective.fortivoVPN"
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-lg border border-blue-500/20 bg-blue-600 px-4 py-2 text-xs font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-blue-400/40 hover:bg-blue-700 hover:shadow-xl md:px-6 md:py-2.5 md:text-sm"
            >
              DOWNLOAD NOW
            </a>
          </div>
        </div>
      </div>

      <div className="h-16 md:h-20"></div>

      <div
        className={`fixed inset-0 z-[50] transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-20 right-4 left-4 transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-4 scale-95 opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-2xl border border-blue-500/20 bg-gray-800/95 shadow-2xl backdrop-blur-xl">
            <div className="border-b border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-blue-500/20 px-6 py-4">
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="font-bebas text-lg tracking-wider text-white">
                  FORTIVO VPN
                </span>
              </div>
            </div>

            <div className="font-roboto flex flex-col">
              <Link
                className="flex items-center gap-3 border-b border-gray-700/50 px-6 py-5 text-lg font-medium text-gray-300 transition-all duration-300 last:border-b-0 hover:bg-blue-500/10 hover:text-blue-400 active:bg-blue-500/20"
                href="/#features"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="h-5 w-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="flex-1">FEATURES</span>
                <span className="text-sm text-blue-400">→</span>
              </Link>
              <Link
                className="flex items-center gap-3 border-b border-gray-700/50 px-6 py-5 text-lg font-medium text-gray-300 transition-all duration-300 last:border-b-0 hover:bg-blue-500/10 hover:text-blue-400 active:bg-blue-500/20"
                href="/#security"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="h-5 w-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="flex-1">SECURITY</span>
                <span className="text-sm text-blue-400">→</span>
              </Link>
              <Link
                className="flex items-center gap-3 border-b border-gray-700/50 px-6 py-5 text-lg font-medium text-gray-300 transition-all duration-300 last:border-b-0 hover:bg-blue-500/10 hover:text-blue-400 active:bg-blue-500/20"
                href="/pricing"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="h-5 w-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
                <span className="flex-1">PRICING</span>
                <span className="text-sm text-blue-400">→</span>
              </Link>
              <Link
                className="flex items-center gap-3 border-b border-gray-700/50 px-6 py-5 text-lg font-medium text-gray-300 transition-all duration-300 last:border-b-0 hover:bg-blue-500/10 hover:text-blue-400 active:bg-blue-500/20"
                href="/#team"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="h-5 w-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="flex-1">TEAM</span>
                <span className="text-sm text-blue-400">→</span>
              </Link>
              <Link
                className="flex items-center gap-3 border-b border-gray-700/50 px-6 py-5 text-lg font-medium text-gray-300 transition-all duration-300 last:border-b-0 hover:bg-blue-500/10 hover:text-blue-400 active:bg-blue-500/20"
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="h-5 w-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="flex-1">ABOUT</span>
                <span className="text-sm text-blue-400">→</span>
              </Link>
            </div>

            <div className="border-t border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-blue-500/10 p-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.thehedgecollective.fortivoVPN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-center font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                DOWNLOAD NOW FREE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

