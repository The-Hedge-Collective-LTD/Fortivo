"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./MotionBits";
import { PLAY_STORE } from "@/lib/motion-presets";

function RevealWords({
  text,
  className,
  as: Tag = "p",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h2" | "h3" | "p";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="mr-[0.28em] inline-block last:mr-0"
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4, margin: "0px 0px -12% 0px" }}
          transition={{
            duration: 0.65,
            delay: delay + i * 0.045,
            ease: [0.25, 0, 0.25, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

function FeatureHeadline() {
  const reduce = useReducedMotion();
  const lines = ["ADVANCED PROTECTION", "AT EVERY LEVEL"];

  if (reduce) {
    return (
      <h2 className="max-w-xl text-left text-3xl font-bold tracking-[-0.01em] text-white uppercase sm:text-4xl md:text-[44px] md:leading-[1.12]">
        ADVANCED PROTECTION
        <br />
        AT EVERY LEVEL
      </h2>
    );
  }

  return (
    <h2
      className="max-w-xl text-left text-3xl font-bold tracking-[-0.01em] text-white uppercase sm:text-4xl md:text-[44px] md:leading-[1.12]"
      aria-label="ADVANCED PROTECTION AT EVERY LEVEL"
    >
      {lines.map((line, lineIndex) => (
        <span key={line} className="block">
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              key={`${line}-${word}`}
              className="mr-[0.28em] inline-block last:mr-0"
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4, margin: "0px 0px -12% 0px" }}
              transition={{
                duration: 0.7,
                delay: lineIndex * 0.18 + wordIndex * 0.06,
                ease: [0.25, 0, 0.25, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </h2>
  );
}

const features = [
  {
    label: "FEATURE 01",
    title: "Lightning-Fast Global Speed",
    image: "/images/landing/feature-speed.jpg",
  },
  {
    label: "FEATURE 02",
    title: "Strict No-Logs Policy",
    image: "/images/landing/feature-nologs.jpg",
  },
  {
    label: "FEATURE 03",
    title: "Global Server Network",
    image: "/images/landing/feature-servers.jpg",
  },
] as const;

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full bg-[#05070a] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1380px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-10 md:gap-14">
          <Reveal mode="fade">
            <div className="flex shrink-0 items-center gap-2.5 pt-2 text-sm text-white">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4A7BFF]/50 opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#4A7BFF] shadow-[0_0_10px_rgba(74,123,255,0.9)]" />
              </span>
              Features
            </div>
          </Reveal>

          <FeatureHeadline />
        </div>

        <Reveal mode="fade" className="mt-12 md:mt-14" delay={0.15}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {features.map((feature) => (
              <article key={feature.label} className="group flex flex-col">
                <p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-[#4A7BFF] uppercase sm:text-xs">
                  {feature.label}
                </p>

                <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#0b1018]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {feature.title}
                </h3>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 md:mt-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#c45a28]/40 bg-[radial-gradient(ellipse_at_30%_50%,#c45a28_0%,#8a3418_45%,#4a1a0c_100%)] px-7 py-9 sm:flex-row sm:items-center sm:gap-10 sm:px-10 sm:py-10 md:px-12">
            <div className="max-w-2xl text-left">
              <RevealWords
                as="h3"
                text="One-Click Secure Connection"
                className="text-xl font-bold text-white sm:text-2xl"
              />
              <RevealWords
                as="p"
                text="Access thousands of high-speed servers across multiple countries. Switch locations instantly for unrestricted internet"
                className="mt-3 text-sm leading-relaxed text-white/90 sm:text-[15px]"
                delay={0.2}
              />
            </div>
            <Reveal mode="fade" delay={0.35}>
              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 bg-[#0a0e18] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-black"
              >
                Download Now
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
