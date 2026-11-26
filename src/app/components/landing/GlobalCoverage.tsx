"use client";

import Image from "next/image";
import { Reveal, SectionLabel } from "./MotionBits";

const servers = [
  {
    flag: "/images/landing/flag-de.png",
    name: "Germany",
    bars: 4,
  },
  {
    flag: "/images/landing/flag-ca.png",
    name: "Canada",
    bars: 3,
  },
  {
    flag: "/images/landing/flag-us.png",
    name: "United States",
    bars: 4,
  },
  {
    flag: "/images/landing/flag-uk.png",
    name: "United Kingdom",
    bars: 3,
  },
  {
    flag: "/images/landing/flag-in.png",
    name: "India",
    bars: 4,
  },
];

const loopServers = [...servers, ...servers];

function ServerCard({
  server,
}: {
  server: (typeof servers)[number];
}) {
  return (
    <div className="flex w-[220px] shrink-0 items-center justify-between gap-4 rounded-2xl border border-white/15 bg-[#0c1018]/95 px-4 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:w-[240px] sm:px-5 sm:py-4">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
        <Image
          src={server.flag}
          alt={server.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <div className="flex items-end gap-[3px]">
          {Array.from({ length: 4 }).map((_, idx) => (
            <span
              key={idx}
              className={`w-[3px] rounded-sm ${
                idx < server.bars ? "bg-[#7B93B8]" : "bg-slate-700"
              }`}
              style={{ height: `${8 + idx * 3}px` }}
            />
          ))}
        </div>
        <p className="text-sm font-medium text-white">{server.name}</p>
      </div>
    </div>
  );
}

export default function GlobalCoverage() {
  return (
    <section id="privacy" className="w-full bg-[#05070a] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1380px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <Reveal mode="fade">
            <SectionLabel>Global Network Coverage</SectionLabel>
          </Reveal>
          <Reveal mode="fade">
            <p className="text-sm text-slate-400 sm:text-right">
              Secure connections delivered through our global VPN
              infrastructure
            </p>
          </Reveal>
        </div>

        <Reveal mode="compact" className="relative mt-8 w-full md:mt-10">
          <div className="relative aspect-[1024/541] w-full overflow-hidden sm:min-h-[420px] md:min-h-[520px]">
            <Image
              src="/images/landing/coverage-map.png"
              alt="Global VPN network map"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1380px) 100vw, 1380px"
            />

            <div className="absolute inset-0 flex items-center overflow-hidden">
              <div
                className="animate-coverage-marquee flex w-max gap-4 px-4 sm:gap-5 sm:px-6"
                aria-label="Server locations carousel"
              >
                {loopServers.map((server, i) => (
                  <ServerCard key={`${server.name}-${i}`} server={server} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
