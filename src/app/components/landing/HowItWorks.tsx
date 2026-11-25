"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./MotionBits";

const steps = [
  {
    step: "Step 01",
    title: "Install the App",
    copy: "Download and install our VPN software on your preferred device.",
    image: "/images/landing/step-install.png",
  },
  {
    step: "Step 02",
    title: "Connect Securely",
    copy: "Open the app and choose from our global network of high-speed servers.",
    image: "/images/landing/step-connect.jpg",
  },
  {
    step: "Step 03",
    title: "Browse Freely",
    copy: "Stream, work, and browse with military-grade encryption on every packet.",
    image: "/images/landing/devices-phone.jpg",
  },
];

const loopSteps = [...steps, ...steps];

function StepsHeadline() {
  const reduce = useReducedMotion();
  const lines = ["SECURE YOUR CONNECTION IN 3", "SIMPLE STEPS"];

  if (reduce) {
    return (
      <h2 className="text-3xl font-bold tracking-[-0.01em] text-white uppercase sm:text-4xl md:text-[42px] md:leading-[1.15]">
        SECURE YOUR CONNECTION IN 3
        <br />
        SIMPLE STEPS
      </h2>
    );
  }

  return (
    <h2
      className="text-3xl font-bold tracking-[-0.01em] text-white uppercase sm:text-4xl md:text-[42px] md:leading-[1.15]"
      aria-label="SECURE YOUR CONNECTION IN 3 SIMPLE STEPS"
    >
      {lines.map((line, lineIndex) => (
        <span key={line} className="block">
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              key={`${line}-${word}`}
              className="mr-[0.28em] inline-block last:mr-0"
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4, margin: "0px 0px -12% 0px" }}
              transition={{
                duration: 0.65,
                delay: lineIndex * 0.15 + wordIndex * 0.05,
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

function StepCard({ item }: { item: (typeof steps)[number] }) {
  return (
    <article className="w-[min(320px,85vw)] shrink-0 overflow-hidden border border-white/15 bg-black/55 backdrop-blur-md sm:w-[360px]">
      <div className="p-5 pb-4 sm:p-6">
        <p className="text-xs font-medium tracking-wide text-[#4A7BFF]">
          {item.step}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
          {item.title}
        </h3>
      </div>
      <div className="relative mx-5 mb-4 aspect-[16/10] overflow-hidden bg-[#111827] sm:mx-6">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="360px"
        />
      </div>
      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300 sm:px-6 sm:pb-6">
        {item.copy}
      </p>
    </article>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="security"
      className="relative w-full overflow-hidden py-16 md:py-24"
    >
      <Image
        src="/images/landing/how-bg.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/70" />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6">
        {/* Heading on top — previous layout */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-10 md:gap-14">
          <Reveal mode="fade">
            <div className="flex shrink-0 items-center gap-2.5 pt-2 text-sm text-white">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4A7BFF]/50 opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#4A7BFF] shadow-[0_0_10px_rgba(74,123,255,0.9)]" />
              </span>
              How It Works
            </div>
          </Reveal>
          <StepsHeadline />
        </div>
      </div>

      {/* Carousel below — only right half, soft fade on left edge */}
      <div className="relative mx-auto mt-10 w-full max-w-[1380px] px-4 sm:px-6 md:mt-14">
        <div className="steps-carousel-fade ml-auto w-full overflow-hidden lg:w-1/2">
          <div
            className="animate-steps-marquee flex w-max gap-5"
            aria-label="How it works steps carousel"
          >
            {loopSteps.map((item, i) => (
              <StepCard key={`${item.step}-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
