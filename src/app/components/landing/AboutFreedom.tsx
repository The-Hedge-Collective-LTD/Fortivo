"use client";

import Image from "next/image";
import { AnimatedCounter, Reveal, SectionLabel } from "./MotionBits";

export default function AboutFreedom() {
  return (
    <section id="about" className="w-full bg-[#05070a] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20 lg:items-start">
        {/* Left */}
        <div>
          <Reveal mode="fade">
            <SectionLabel>About</SectionLabel>
          </Reveal>
          <Reveal mode="compact">
            <h2 className="max-w-md text-3xl font-bold tracking-[-0.01em] text-white uppercase sm:text-4xl md:text-[42px] md:leading-[1.15]">
              PROTECTING YOUR DIGITAL FREEDOM
            </h2>
          </Reveal>
        </div>

        {/* Right stats */}
        <Reveal mode="compact" className="w-full">
          {/* Row 1 */}
          <div className="flex items-start justify-between gap-6 border-b border-white/15 pb-7">
            <div>
              <p className="text-4xl font-bold text-white sm:text-5xl">
                <AnimatedCounter to={150} suffix="M+" speedMs={15} />
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Protected Connections Worldwide
              </p>
            </div>
            <div className="relative h-28 w-52 shrink-0 overflow-hidden sm:h-32 sm:w-64">
              <Image
                src="/images/landing/map-network.jpg"
                alt="Global network map"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-between gap-6 border-b border-white/15 py-7">
            <p className="text-4xl font-bold text-white sm:text-5xl">
              <AnimatedCounter to={98} suffix="%" speedMs={30} />
            </p>
            <p className="text-right text-sm text-slate-300 sm:text-base">
              Enhanced Online Privacy
            </p>
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-between gap-6 pt-7">
            <p className="text-4xl font-bold text-white sm:text-5xl">
              <AnimatedCounter to={100} suffix="+" speedMs={30} />
            </p>
            <p className="text-right text-sm text-slate-300 sm:text-base">
              Streaming Platforms Unlocked
            </p>
          </div>
        </Reveal>
      </div>

      {/* Figma node 915:1547 — 1380 × 484 quote / latest block */}
      <Reveal mode="compact" className="mx-auto mt-14 w-full max-w-[1380px] md:mt-20">
        <div className="relative aspect-[1380/484] w-full overflow-hidden">
          <Image
            src="/images/landing/quote-bg.png"
            alt="Fortivo VPN connect screen"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1380px) 100vw, 1380px"
          />

          {/* Inner glass strip — full-width horizontal bar at bottom */}
          <blockquote className="absolute inset-x-[4%] bottom-[6%] border border-white/30 bg-white/[0.06] px-5 py-5 backdrop-blur-md sm:inset-x-[5%] sm:bottom-[8%] sm:px-8 sm:py-7 md:px-10 md:py-8">
            <p className="max-w-2xl text-[15px] leading-[1.6] text-white sm:text-lg md:text-[20px] md:leading-[1.55]">
              Privacy isn&apos;t just a feature we offer—it&apos;s a
              fundamental right we believe everyone deserves, everywhere.
            </p>
            <div className="mt-4 inline-flex w-fit items-center gap-3 border border-white/35 px-4 py-2.5 text-[13px] text-white sm:mt-5 sm:text-sm">
              <span className="h-px w-7 shrink-0 bg-[#4A7BFF]" aria-hidden />
               Founder &amp; CEO
            </div>
          </blockquote>
        </div>
      </Reveal>
    </section>
  );
}
