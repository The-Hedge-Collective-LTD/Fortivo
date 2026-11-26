'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, lazy, Suspense } from "react";
import Hero from "./components/main/hero";
import Topbar from "./components/topbar";

// Lazy load heavy components
const Features = lazy(() => import("./components/main/features"));
const Privacy = lazy(() => import("./components/main/privacy"));
const Do = lazy(() => import("./components/main/do"));
const About = lazy(() => import("./components/main/about"));
const Team = lazy(() => import("./components/main/team"));

// Loading fallback
const SectionLoader = () => (
  <div className="w-full min-h-[400px] flex items-center justify-center bg-gray-900">
    <div className="animate-pulse text-blue-400">Loading...</div>
  </div>
);

export default function Home() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const [contactStatus, setContactStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.querySelector<HTMLInputElement>('#name')!.value;
    const email = form.querySelector<HTMLInputElement>('#email')!.value;
    const company = form.querySelector<HTMLInputElement>('#company')!.value;
    const message = form.querySelector<HTMLTextAreaElement>('#message')!.value;
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
          subject: 'Contact Form',
          inquiryType: 'General Inquiry',
        }),
      });
      const data = await res.json() as { success?: boolean; message?: string };
      if (data.success) {
        setContactStatus('success');
        setContactMessage('Your message has been sent successfully!');
        form.reset();
      } else {
        setContactStatus('error');
        setContactMessage(`Failed to send message: ${data.message ?? 'Unknown error'}`);
      }
    } catch {
      setContactStatus('error');
      setContactMessage('An error occurred while sending your message.');
    }
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-x-hidden">
      <Topbar />

      {isContactPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl p-4">
          <motion.div
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 max-w-sm sm:max-w-md md:max-w-lg w-full relative shadow-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setIsContactPopupOpen(false)}
              className="absolute top-3 md:top-4 right-3 md:right-4 text-gray-400 hover:text-white text-xl md:text-2xl cursor-pointer transition-colors"
            >
              ×
            </button>

            <h2 className="text-xl md:text-2xl font-bebas text-white mb-4 md:mb-6 tracking-wider">
              GET <span className="text-blue-400">SECURE</span>
            </h2>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-roboto text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-3 md:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm md:text-base"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-roboto text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-3 md:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm md:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs md:text-sm font-roboto text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 md:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm md:text-base"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-roboto text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-white placeholder-gray-400 text-sm md:text-base"
                  placeholder="Tell us about your security needs..."
                />
              </div>

              <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsContactPopupOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors font-roboto text-sm md:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-roboto font-medium text-sm md:text-base"
                >
                  Send Message
                </button>
              </div>
              {contactStatus === 'success' && (
                <div className="mt-4 p-3 rounded-lg bg-green-700 text-white text-center text-sm font-roboto">
                  {contactMessage}
                </div>
              )}
              {contactStatus === 'error' && (
                <div className="mt-4 p-3 rounded-lg bg-red-700 text-white text-center text-sm font-roboto">
                  {contactMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      )}

      <div className="relative w-full z-10">
        <div className='absolute top-5 left-5 md:top-10 md:left-10 opacity-20'>
          <svg width="80" height="84" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className='absolute top-20 right-5 md:top-32 md:right-10 opacity-15'>
          <svg width="60" height="63" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className='absolute top-[600px] left-10 md:top-[1000px] md:left-20 opacity-15'>
          <svg width="50" height="52" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-400">
            <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 3V7H9V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <Hero setIsContactPopupOpen={setIsContactPopupOpen} />
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Features setIsContactPopupOpen={setIsContactPopupOpen} />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Do />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Privacy />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Team />
      </Suspense>

      <footer className="w-full bg-black border-t border-gray-800">
        <div className="w-full container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-8 md:pb-12">
            <div className="flex flex-col space-y-6">
              <Link href={'/'} className="flex flex-row justify-start items-center gap-2 font-abeezee text-sm md:text-2xl font-extrabold text-white mb-2 md:mb-0">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white font-bold text-lg md:text-2xl px-2 md:px-3 md:py-1 rounded-sm">
                    FORTIVO
                  </div>
                  <span className="ml-2 text-gray-300">VPN</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm font-roboto leading-relaxed mt-2">
                Secure your digital freedom with advanced encryption and blazing-fast speeds across 50+ global locations.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-white text-xl font-bebas mb-3 tracking-wider">FEATURES</h3>
              <Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">Advanced Encryption</Link>
              <Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">Global Server Network</Link>
              <Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">Zero-Log Policy</Link>
              <Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">Kill Switch</Link>
              <Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">DNS Leak Protection</Link>
              <Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">Multi-Device Support</Link>
              <Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">24/7 Support</Link>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-white text-xl font-bebas mb-3 tracking-wider">COMPANY</h3>
              <Link href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">About Us</Link>
              <Link href="#team" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">Our Team</Link>
              <Link href="#security" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">Security</Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">Contact Us</Link>
              <Link href="#help" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">Help Center</Link>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-white text-xl font-bebas mb-3 tracking-wider">LEGAL & SUPPORT</h3>
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-roboto">Terms of Service</Link>

              <div className="pt-2">
                <div className="flex items-start space-x-3 mb-4">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <a href="mailto:innovate@thehedgecollective.com" className="text-gray-400 text-sm font-roboto hover:text-blue-400">innovate@thehedgecollective.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 mb-4">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-400 text-sm font-roboto leading-relaxed">
                    24/7 Customer Support<br />
                    Live Chat Available
                  </p>
                </div>

                <div className="pt-2">
                  <h4 className="text-white text-sm font-bebas mb-3">DOWNLOAD APP</h4>
                  <div className="flex flex-col space-y-2">
                    <Link href="https://play.google.com/" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.708 13.8679 8.3414 12 8.3414s-3.5902.3666-5.1971.6540L4.7806 5.4922a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3414 13.8977.3414 17.0758h23.3172c0-3.178-2.3475-5.8889-5.7947-7.7344" />
                      </svg>
                      <span>Android App</span>
                    </Link>
                    {/* <Link href="https://apps.apple.com/" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <span>iOS App</span>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 my-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex justify-center items-center text-xs text-gray-500 gap-2 font-roboto w-full md:w-auto">
              © {new Date().getFullYear()} FortivoVPN. All rights reserved. | Protecting privacy worldwide.
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
