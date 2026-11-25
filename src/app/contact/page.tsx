"use client";

import { useState } from "react";
import Image from "next/image";
import SiteFooter from "../components/landing/SiteFooter";

const fieldClass =
  "w-full rounded-md border border-white/15 bg-[#0b0e14] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#4A7BFF]/60";

const labelClass = "mb-2 block text-sm text-white";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (res.ok && json?.message) {
        setSubmitMessage(json.message);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });
      } else {
        setSubmitMessage(
          json?.message ??
            "There was an error sending your message. Please try again later.",
        );
      }
    } catch {
      setSubmitMessage(
        "There was an error sending your message. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-[#05070a] text-white">
      {/* Hero */}
      <section className="relative w-full overflow-hidden px-4 pt-14 pb-10 sm:px-6 md:pt-20 md:pb-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_45%,rgba(74,123,255,0.16),transparent_55%)]" />

        <div className="relative mx-auto grid max-w-[1380px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold tracking-[-0.02em] text-white uppercase sm:text-4xl md:text-[48px] md:leading-[1.08]">
              LET&apos;S START A
              <br />
              CONVERSATION
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
              Start a conversation with our friendly support team and get
              quick, helpful assistance tailored to your needs.
            </p>
            <a
              href="mailto:innovate@thehedgecollective.com"
              className="mt-8 inline-flex items-center gap-3 text-sm text-white transition hover:text-[#4A7BFF]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 6h16v12H4V6zm0 0l8 7 8-7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              innovate@thehedgecollective.com
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
            <div className="relative aspect-[593/630] w-full">
              <Image
                src="/images/landing/contact-visual.png"
                alt="Fortivo secure support chat"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 90vw, 520px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="w-full px-4 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4A7BFF]" />
            <span>Contact form</span>
          </div>

          <h2 className="text-3xl font-bold tracking-[-0.01em] text-white uppercase sm:text-4xl md:text-[42px] md:leading-[1.1]">
            HOW CAN WE HELP?
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-lg border border-white/15 p-5 sm:mt-10 sm:p-7 md:p-8"
          >
            {submitMessage && (
              <div className="mb-6 rounded-md border border-[#4A7BFF]/30 bg-[#4A7BFF]/10 px-4 py-3 text-sm text-slate-200">
                {submitMessage}
              </div>
            )}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={fieldClass}
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={fieldClass}
                  placeholder="Enter Your Email Address"
                />
              </div>
            </div>

            <div className="mt-5 sm:mt-6">
              <label htmlFor="subject" className={labelClass}>
                Subject / Topic
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className={fieldClass}
                placeholder="Enter Your Subject"
              />
            </div>

            <div className="mt-5 sm:mt-6">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={7}
                className={`${fieldClass} resize-y`}
                placeholder="Tell us how can we help you......."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#4A7BFF] px-8 py-3.5 text-[15px] font-medium text-white transition hover:bg-[#3d6aee] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
