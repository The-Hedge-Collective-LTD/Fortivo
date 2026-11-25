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
  as?: "h2" | "h3" | "p" | "span";
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

function DevicesHeadline() {
  const reduce = useReducedMotion();
  const lines = ["SEAMLESS PROTECTION", "ACROSS ALL YOUR DEVICES"];

  if (reduce) {
    return (
      <h2 className="mt-2 text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-white uppercase sm:text-4xl md:text-[44px] md:leading-[1.08]">
        SEAMLESS PROTECTION
        <br />
        ACROSS ALL YOUR DEVICES
      </h2>
    );
  }

  return (
    <h2
      className="mt-2 text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-white uppercase sm:text-4xl md:text-[44px] md:leading-[1.08]"
      aria-label="SEAMLESS PROTECTION ACROSS ALL YOUR DEVICES"
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
                delay: 0.1 + lineIndex * 0.16 + wordIndex * 0.05,
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

export default function DevicesCta() {
  return (
    <section id="team" className="w-full bg-[#05070a]">
      <div className="relative w-full overflow-hidden">
        <div className="relative aspect-[1024/538] min-h-[360px] w-full sm:min-h-[440px] md:min-h-[520px]">
          <Image
            src="/images/landing/devices-bg.jpg"
            alt="Fortivo VPN on Android"
            fill
            className="object-cover object-[70%_center] opacity-55"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-[#05070a]/55 to-transparent" />

          <div className="absolute inset-0 mx-auto flex max-w-[1380px] flex-col px-4 pt-10 sm:px-6 sm:pt-12 md:pt-14 lg:flex-row lg:items-end lg:justify-between lg:pb-12 lg:pt-14">
            <div className="max-w-2xl self-start">
              <Reveal mode="fade">
                <div className="flex items-center gap-2.5 text-sm text-white">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4A7BFF]/50 opacity-60" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-[#4A7BFF] shadow-[0_0_10px_rgba(74,123,255,0.9)]" />
                  </span>
                  Device Compatibility
                </div>
              </Reveal>
              <DevicesHeadline />
            </div>

            <Reveal mode="fade" className="mt-8 self-start lg:mt-0 lg:self-end" delay={0.35}>
              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-white/50 pb-2 text-sm text-white transition hover:border-[#4A7BFF] hover:text-[#4A7BFF] sm:text-base"
              >
                Get App
                <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1380px] px-4 py-16 sm:px-6 md:py-20">
        <div className="flex flex-col gap-8 border-t border-white/10 pt-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal mode="fade">
              <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white">
                <span className="text-orange-400" aria-hidden>
                  ●
                </span>
                10M+ Protected Users
              </div>
            </Reveal>
            <RevealWords
              as="h3"
              text="GETTING STARTED WITH SECURE AND PRIVATE."
              className="max-w-md text-3xl font-bold tracking-[-0.01em] text-white uppercase sm:text-4xl"
              delay={0.08}
            />
          </div>
          <div className="max-w-sm">
            <RevealWords
              as="p"
              text="Join millions of users protecting their online activity with fast, secure, and reliable VPN access."
              className="text-sm text-slate-300"
              delay={0.2}
            />
            <Reveal mode="fade" delay={0.4}>
              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-[#4A7BFF] hover:text-blue-300"
              >
                [ Download it here ]
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
