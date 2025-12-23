'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TermsOfService() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <main className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        scale: [1, 0.8, 1],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <div className="relative w-full container mx-auto px-4 py-12 md:py-20 z-20">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 60 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        className="inline-block px-6 py-2 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6 font-roboto"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        LEGAL TERMS
                    </motion.div>

                    <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 font-bebas tracking-wider">
                        TERMS OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">SERVICE</span>
                    </h1>

                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8 rounded-full"
                        initial={{ width: 0 }}
                        animate={isLoaded ? { width: 128 } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />

                    <p className="text-lg text-gray-300 max-w-3xl mx-auto font-roboto font-light leading-relaxed">
                        Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 shadow-2xl">
                        <div className="prose prose-invert prose-purple max-w-none">
                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-purple-400 mb-4 tracking-wider">1. ACCEPTANCE OF TERMS</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                        By accessing and using FortivoVPN services, you agree to be bound by these Terms of Service.
                                        If you do not agree to these terms, please do not use our service.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-purple-400 mb-4 tracking-wider">2. SERVICE DESCRIPTION</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                        FortivoVPN provides Virtual Private Network (VPN) services that encrypt your internet connection
                                        and route it through our secure servers. Our service is designed to protect your privacy and
                                        enhance your online security.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-purple-400 mb-4 tracking-wider">3. ACCEPTABLE USE</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bebas text-white mb-2">Permitted Uses</h3>
                                            <p className="text-gray-300 font-roboto leading-relaxed">
                                                • Protecting your privacy and personal data<br />
                                                • Securing your connection on public Wi-Fi<br />
                                                • Accessing geo-restricted content legally<br />
                                                • Enhancing your online security and anonymity
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bebas text-white mb-2">Prohibited Activities</h3>
                                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                                                <ul className="text-gray-300 font-roboto space-y-2">
                                                    <li>• Illegal activities or violating laws in any jurisdiction</li>
                                                    <li>• Distributing malware, viruses, or harmful code</li>
                                                    <li>• Spamming, phishing, or fraudulent activities</li>
                                                    <li>• Hacking, network intrusion, or unauthorized access</li>
                                                    <li>• Copyright infringement or intellectual property violations</li>
                                                    <li>• Activities that could harm our infrastructure or other users</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-purple-400 mb-4 tracking-wider">4. ACCOUNT RESPONSIBILITY</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                        You are responsible for maintaining the confidentiality of your account credentials and for all
                                        activities that occur under your account. You must notify us immediately of any unauthorized use
                                        of your account.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-purple-400 mb-4 tracking-wider">5. PAYMENT & REFUNDS</h2>
                                    <div className="space-y-4">
                                        <p className="text-gray-300 font-roboto leading-relaxed">
                                            All payments are processed securely through our payment partners. We offer a 30-day money-back
                                            guarantee for new subscribers. Refund requests must be submitted within 30 days of initial purchase.
                                        </p>
                                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                                            <p className="text-green-400 font-roboto text-sm">
                                                💡 <strong>Money-Back Guarantee:</strong> Try FortivoVPN risk-free with our 30-day refund policy.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-purple-400 mb-4 tracking-wider">6. SERVICE AVAILABILITY</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                        While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. We may perform
                                        maintenance that could temporarily affect service availability. We will provide advance notice
                                        when possible.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-purple-400 mb-4 tracking-wider">7. LIMITATION OF LIABILITY</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                        FortivoVPN provides services &quot;as is&quot; without warranties. We are not liable for any indirect,
                                        incidental, or consequential damages arising from the use of our service. Our total liability
                                        is limited to the amount paid for the service.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-purple-400 mb-4 tracking-wider">8. TERMINATION</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                        We reserve the right to terminate accounts that violate these terms. You may cancel your
                                        subscription at any time through your account settings or by contacting support.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-purple-400 mb-4 tracking-wider">9. CHANGES TO TERMS</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                        We may update these terms periodically. Significant changes will be communicated via email
                                        or through our service. Continued use after changes constitutes acceptance of new terms.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-purple-400 mb-4 tracking-wider">10. CONTACT INFORMATION</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                        For questions about these Terms of Service, contact us at:
                                        <a href="mailto:innovate@thehedgecollective.com" className="text-purple-400 hover:text-purple-300 ml-2">innovate@thehedgecollective.com</a>
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg transition-all duration-300 font-roboto group"
                    >
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to FortivoVPN
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}