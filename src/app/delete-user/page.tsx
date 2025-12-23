"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DeleteUserPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setIsError(false);

    try {
      const res = await fetch("/User/DeleteUsersProfile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = (await res.json()) as {
        success?: boolean;
        message?: string;
      };

      if (res.ok && json.success) {
        setSubmitMessage(
          json.message ||
            "Your account deletion request has been submitted successfully.",
        );
        setIsError(false);
        setFormData({ email: "", reason: "" });
      } else {
        setSubmitMessage(
          json.message ||
            "Failed to submit deletion request. Please try again.",
        );
        setIsError(true);
      }
    } catch {
      setSubmitMessage(
        "An error occurred while submitting your request. Please try again later.",
      );
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Dark themed background effects */}
      <div className="fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 h-96 w-96 rounded-full bg-red-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-orange-500/8 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-20 container mx-auto w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12">
        <div className="mx-auto w-full max-w-2xl">
          {/* Header */}
          <motion.div
            className="mb-2 text-center sm:mb-3 md:mb-3"
            initial={{ opacity: 0, y: 60 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="font-roboto mb-1.5 inline-block rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-0.5 text-[10px] font-medium text-red-400 sm:px-3 sm:py-1 sm:text-xs md:px-4 md:text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ACCOUNT MANAGEMENT
            </motion.div>

            <h1 className="font-bebas mb-1.5 text-2xl font-extrabold tracking-wider text-white sm:mb-2 sm:text-3xl md:mb-2 md:text-4xl lg:text-5xl">
              DELETE{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                ACCOUNT
              </span>
            </h1>

            <motion.div
              className="mx-auto mb-1.5 h-0.5 w-20 rounded-full bg-gradient-to-r from-red-400 to-orange-500 sm:mb-2 sm:h-0.5 sm:w-28 md:mb-2 md:w-36"
              initial={{ width: 0 }}
              animate={isLoaded ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <p className="font-roboto mx-auto max-w-xl text-[11px] leading-tight font-light text-gray-300 sm:max-w-xl sm:text-xs md:text-sm">
              Request to permanently delete your FortivoVPN account. This action
              cannot be undone.
            </p>
          </motion.div>

          {/* Form Content */}
          <motion.div
            className="mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-gray-700 bg-gray-800/80 p-6 shadow-2xl backdrop-blur-sm sm:p-8 md:p-10">
              <div className="mb-6 sm:mb-8">
                <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600 sm:h-12 sm:w-12 md:h-14 md:w-14">
                    <svg
                      className="h-5 w-5 text-white sm:h-6 sm:w-6 md:h-7 md:w-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h2 className="font-bebas text-xl font-extrabold tracking-wider text-white sm:text-2xl md:text-3xl">
                    ACCOUNT DELETION REQUEST
                  </h2>
                </div>

                <div className="rounded-lg border border-red-500/20 bg-red-500/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400 sm:h-6 sm:w-6 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-roboto mb-2 text-sm font-medium text-red-400 sm:text-base md:text-lg">
                        Warning: Irreversible Action
                      </h4>
                      <p className="font-roboto text-xs leading-relaxed text-gray-300 sm:text-sm md:text-base">
                        Deleting your account will permanently remove all your
                        data, subscription information, and account history.
                        This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {submitMessage && (
                <motion.div
                  className={`mb-6 p-4 ${isError ? "border border-red-500/20 bg-red-500/10 text-red-400" : "border border-green-500/20 bg-green-500/10 text-green-400"} font-roboto flex items-center gap-3 rounded-lg text-sm sm:mb-6 sm:p-5 sm:text-base md:mb-8 md:p-6 md:text-lg`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6 md:h-6 md:w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {isError ? (
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                  {submitMessage}
                </motion.div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6 sm:space-y-7 md:space-y-8"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="font-roboto mb-2 block text-sm font-medium text-gray-300 sm:mb-2.5 sm:text-base md:mb-3 md:text-lg"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="font-roboto w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-sm text-white placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-red-500 sm:px-5 sm:py-3.5 sm:text-base md:px-6 md:py-4 md:text-lg"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="font-roboto mb-2 block text-sm font-medium text-gray-300 sm:mb-2.5 sm:text-base md:mb-3 md:text-lg"
                  >
                    Reason for Deletion{" "}
                    <span className="text-xs text-gray-500 sm:text-sm md:text-base">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    rows={4}
                    className="font-roboto sm:rows={5} md:rows={6} w-full resize-none rounded-lg border border-gray-600 bg-gray-700 text-sm text-white placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-red-500 sm:px-5 sm:py-3.5 sm:text-base md:text-lg"
                    placeholder="Please let us know why you're deleting your account (optional)"
                  />
                </div>

                <div className="rounded-lg border border-blue-500/20 bg-blue-500/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400 sm:h-6 sm:w-6 md:h-6 md:w-6"
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
                    <div>
                      <h4 className="font-roboto mb-1 text-sm font-medium text-blue-400 sm:mb-1.5 sm:text-base md:mb-2 md:text-lg">
                        Privacy Protected
                      </h4>
                      <p className="font-roboto text-xs leading-relaxed text-gray-300 sm:text-sm md:text-base">
                        Your deletion request is encrypted and handled securely.
                        Your data will be permanently removed according to our{" "}
                        <Link
                          href="/privacy"
                          className="text-blue-400 underline transition-colors hover:text-blue-300"
                        >
                          privacy policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-roboto w-full transform rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-base font-semibold text-white shadow-xl transition-all duration-200 hover:scale-[1.02] hover:from-red-700 hover:to-red-800 hover:shadow-red-500/20 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:py-4 sm:text-lg md:text-xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="mr-3 -ml-1 h-5 w-5 animate-spin text-white sm:h-6 sm:w-6 md:h-6 md:w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2 sm:gap-3">
                      <svg
                        className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete Account
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
