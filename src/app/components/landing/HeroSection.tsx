"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./MotionBits";

const cards = [
  {
    type: "image" as const,
    src: "/images/landing/hero-card-1.jpg",
    alt: "Secure connection on desktop",
  },
  {
    type: "image" as const,
    src: "/images/landing/hero-card-2.jpg",
    alt: "Connected VPN dashboard",
  },
  {
    type: "video" as const,
    src: "/videos/hero-phone.mp4",
    alt: "Fortivo mobile app connected",
  },
  {
    type: "image" as const,
    src: "/images/landing/hero-card-4.jpg",
    alt: "Verified customer review",
  },
] as const;

/** Duplicate once for seamless infinite marquee */
const loopCards = [...cards, ...cards];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover object-[center_40%] blur-[1px]"
          src="/videos/hero-bg.mp4"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#05070a]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-16 pb-10 text-center sm:px-6 md:pt-20 md:pb-12">
        <Reveal mode="fade">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-black/35 px-5 py-2.5 text-[13px] text-white backdrop-blur-md sm:text-sm">
            <Image
              src="/images/landing/badge-shield.png"
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain"
            />
            Advanced Privacy Protection
          </div>
        </Reveal>

        <Reveal mode="fade" className="mt-8 sm:mt-10" delay={0.05}>
          <h1 className="max-w-[980px] text-[clamp(1.2rem,4.1vw,3.5rem)] leading-[1.12] font-bold tracking-[-0.01em] text-white uppercase">
            <span className="inline-block whitespace-nowrap">
              EXPERIENCE SECURITY WITHOUT
            </span>
            <br />
            <span className="inline-block whitespace-nowrap">
              COMPROMISING SPEED
            </span>
          </h1>
        </Reveal>

        <Reveal mode="fade" className="mt-9 sm:mt-11" delay={0.1}>
          <Link
            href="/contact"
            className="inline-flex rounded-[4px] bg-[#4A7BFF] px-9 py-3.5 text-[15px] font-medium text-white transition hover:bg-[#3d6aee]"
          >
            Contact Us
          </Link>
        </Reveal>
      </div>

      {/* Viewport clips to 1 / 2 / 3 cards while track keeps moving */}
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 md:pb-20">
        <div
          className="hero-carousel-viewport mx-auto overflow-hidden"
          aria-label="Product highlights carousel"
        >
          <div className="animate-hero-marquee flex w-max gap-5">
            {loopCards.map((card, i) => (
              <article
                key={`${card.src}-${i}`}
                className="relative h-[220px] w-[min(280px,85vw)] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#0b0e14] shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:h-[240px] sm:w-[300px] md:h-[260px] md:w-[340px]"
              >
                {card.type === "video" ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={card.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    aria-label={card.alt}
                  />
                ) : (
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="340px"
                    priority={i < 3}
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
