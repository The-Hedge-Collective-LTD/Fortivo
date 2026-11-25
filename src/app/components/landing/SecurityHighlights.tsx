"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, SectionLabel } from "./MotionBits";

const left = [
  {
    title: "AES-256 Encryption",
    body: "Your data is protected with military-grade encryption used by banks and governments.",
    icon: "/images/landing/icon-shield.png",
  },
  {
    title: "No-Logs Policy",
    body: "We never track, store, or monitor your browsing activity — your privacy stays private.",
    icon: "/images/landing/icon-shield.png",
  },
];

const right = [
  {
    title: "DNS Leak Protection",
    body: "Keeps your real IP and DNS requests hidden at all times, even during network changes.",
    icon: "/images/landing/icon-globe-lock.png",
  },
  {
    title: "Secure Protocols",
    body: "Supports WireGuard, OpenVPN, and IKEv2 for fast, stable, and secure connections.",
    icon: "/images/landing/icon-shield.png",
  },
];

function FlipIcon({ src }: { src: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="relative mb-4 h-11 w-11">
        <Image src={src} alt="" fill className="object-contain" />
      </div>
    );
  }

  return (
    <div className="mb-4 h-11 w-11 [perspective:600px]">
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateY: 0 }}
        whileInView={{ rotateY: [0, 180, 360] }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 4,
        }}
      >
        <Image src={src} alt="" fill className="object-contain" />
      </motion.div>
    </div>
  );
}

function FeatureBlock({
  title,
  body,
  icon,
  last = false,
}: {
  title: string;
  body: string;
  icon: string;
  last?: boolean;
}) {
  return (
    <div className={`${last ? "pt-8" : "border-b border-white/15 pb-8"}`}>
      <FlipIcon src={icon} />
      <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
        {body}
      </p>
    </div>
  );
}

export default function SecurityHighlights() {
  return (
    <section className="w-full bg-[#05070a] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1380px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <Reveal mode="fade">
            <SectionLabel>Security Highlights</SectionLabel>
          </Reveal>
          <Reveal mode="compact" className="lg:max-w-2xl lg:text-right">
            <h2 className="text-3xl font-bold tracking-[-0.01em] text-white uppercase sm:text-4xl md:text-[42px] md:leading-[1.15]">
              SECURITY WITHOUT
              <br className="hidden sm:block" /> COMPROMISE
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_minmax(260px,380px)_1fr] lg:gap-12 xl:gap-16">
          <Reveal mode="compact" className="order-2 space-y-0 lg:order-1">
            {left.map((item, i) => (
              <FeatureBlock
                key={item.title}
                {...item}
                last={i === left.length - 1}
              />
            ))}
          </Reveal>

          <Reveal mode="rise" className="order-1 mx-auto w-full max-w-[360px] lg:order-2 lg:max-w-none">
            <div className="relative aspect-[427/546] w-full overflow-hidden bg-[radial-gradient(ellipse_at_50%_40%,rgba(234,100,42,0.45),#05070a_70%)]">
              <Image
                src="/images/landing/security-phone.png"
                alt="Fortivo VPN app on phone"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 360px, 380px"
              />
            </div>
          </Reveal>

          <Reveal mode="compact" className="order-3 space-y-0">
            {right.map((item, i) => (
              <FeatureBlock
                key={item.title}
                {...item}
                last={i === right.length - 1}
              />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
