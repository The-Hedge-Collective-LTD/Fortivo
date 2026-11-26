'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <main className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
            {/* Dark themed background effects */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        scale: [1, 0.8, 1],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <div className="relative w-full container mx-auto px-4 py-12 md:py-20 z-20">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 60 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        className="inline-block px-6 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 font-roboto"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        LEGAL INFORMATION
                    </motion.div>

                    <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 font-bebas tracking-wider">
                        PRIVACY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">POLICY</span>
                    </h1>

                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-8 rounded-full"
                        initial={{ width: 0 }}
                        animate={isLoaded ? { width: 128 } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />

                    <p className="text-lg text-gray-300 max-w-3xl mx-auto font-roboto font-light leading-relaxed">
                        Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </motion.div>

                {/* Content */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 shadow-2xl">
                        <div className="prose prose-invert prose-blue max-w-none">
                            <div className="space-y-8">
                                {/* Introduction */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-blue-400 mb-4 tracking-wider">INTRODUCTION</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                        This Privacy Policy is a legal contract between you and theHedgeCollective Inc. (&quot;theHedgeCollective&quot;).
                                        By downloading, installing, and using FortivoVPN, you acknowledge that you have read, understood,
                                        and accepted this agreement in its entirety, and agree to be bound by its terms.
                                    </p>
                                    <p className="text-gray-300 font-roboto leading-relaxed mt-4">
                                        theHedgeCollective Inc. reserves the right, at our discretion, to change, modify, add, or remove
                                        portions of this Privacy Policy at any time. Please check this Policy periodically for changes.
                                        Your continued use of the Service constitutes your acceptance of the Policy as modified. For any
                                        material changes to this Policy, such amended terms will automatically be effective thirty days
                                        after they are initially posted on the Service.
                                    </p>
                                </section>

                                {/* Zero-Log Commitment */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-blue-400 mb-4 tracking-wider">ZERO-LOG COMMITMENT</h2>
                                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                                        <p className="text-gray-300 font-roboto leading-relaxed">
                                            <strong className="text-green-400">FortivoVPN adheres to a strict no-log policy.</strong> We do not collect, store,
                                            or share any user data with anyone. Your privacy is our utmost priority, and we ensure that
                                            no user data is being shared or can be shared under any circumstances. We do not collect, store,
                                            or monitor any of your online activities, browsing history, traffic data, DNS queries, or connection logs.
                                        </p>
                                    </div>
                                </section>

                                {/* License & Service Terms */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-blue-400 mb-4 tracking-wider">LICENSE & SERVICE TERMS</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                        Subject to the terms and conditions set forth in this agreement, FortivoVPN grants you a limited,
                                        non-exclusive, personal, non-transferable right to use our service solely for internal and personal purposes.
                                        All rights not expressly granted to you are reserved by FortivoVPN.
                                    </p>
                                    <p className="text-gray-300 font-roboto leading-relaxed mt-4">
                                        The visual interfaces, graphics, design, information, computer code (including source code and object code),
                                        products, software, services, and all other elements of the Service are proprietary to theHedgeCollective
                                        or its subsidiaries, affiliated companies, or third-party licensors.
                                    </p>
                                </section>

                                {/* Information We Collect */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-blue-400 mb-4 tracking-wider">INFORMATION WE COLLECT</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bebas text-white mb-2">Minimal Account Information</h3>
                                            <p className="text-gray-300 font-roboto leading-relaxed">
                                                • Email address (for account creation and support only)<br />
                                                • Payment information (processed securely by third-party providers)<br />
                                                • Account preferences and settings
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bebas text-white mb-2">Anonymous Technical Information</h3>
                                            <p className="text-gray-300 font-roboto leading-relaxed">
                                                • Device type and operating system (for app compatibility only)<br />
                                                • App version information (for support purposes only)<br />
                                                • Anonymous usage statistics (bandwidth used, connection frequency - no personal data)
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* What We Don't Collect */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-blue-400 mb-4 tracking-wider">WHAT WE NEVER COLLECT</h2>
                                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                                        <ul className="text-gray-300 font-roboto space-y-2">
                                            <li>• Your real IP address while connected to FortivoVPN</li>
                                            <li>• Websites you visit or content you access</li>
                                            <li>• Your browsing history or online activities</li>
                                            <li>• DNS queries or traffic metadata</li>
                                            <li>• Connection timestamps or session durations</li>
                                            <li>• Any data that could identify your online behavior</li>
                                            <li>• Personal communications or file transfers</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Acceptable Use */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-blue-400 mb-4 tracking-wider">ACCEPTABLE USE POLICY</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed mb-4">
                                        You may use FortivoVPN only for personal purposes and shall not:
                                    </p>
                                    <ul className="text-gray-300 font-roboto space-y-2 ml-4">
                                        <li>• Use the service for anything other than lawful purposes</li>
                                        <li>• Send spam or otherwise duplicate or unsolicited messages in violation of applicable laws</li>
                                        <li>• Send infringing, obscene, threatening, libelous, or otherwise unlawful or tortious material</li>
                                        <li>• Send or store material containing harmful computer code, files, scripts, agents, or programs</li>
                                        <li>• Interfere with or disrupt the integrity or performance of the Service</li>
                                        <li>• Attempt to gain unauthorized access to the Service or its related systems</li>
                                        <li>• Distribute copyright-protected material through our servers</li>
                                        <li>• Use the Service for commercial gain without authorization</li>
                                    </ul>
                                </section>

                                {/* Data Protection */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-blue-400 mb-4 tracking-wider">DATA PROTECTION & SECURITY</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                       All data is protected using advanced AES-256 encryption. We implement multiple
  security layers including perfect forward secrecy, secure key exchange
  protocols, and regular security audits conducted by independent third parties.
  FortivoVPN provides the service on an &quot;as is&quot; basis while maintaining the
  highest security standards possible.
                                    </p>
                                </section>

                                {/* Third-Party Services */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-blue-400 mb-4 tracking-wider">THIRD-PARTY SERVICES</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                        We use trusted third-party payment processors and may integrate with app stores. These services have their own
                                        privacy policies. We ensure all partners meet our strict privacy standards and data protection requirements.
                                        A computer or other equipment enabled to access the Internet is required to use the service. You are solely
                                        responsible for ensuring that your device is sufficient and compatible for use with FortivoVPN.
                                    </p>
                                </section>

                                {/* Jurisdiction & Legal */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-blue-400 mb-4 tracking-wider">JURISDICTION & LEGAL REQUESTS</h2>
                                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                                        <p className="text-gray-300 font-roboto leading-relaxed">
                                            <strong className="text-blue-400">FortivoVPN operates under privacy-friendly jurisdiction.</strong> Even if compelled
                                            by legal authorities, we cannot provide user activity data because we simply don&apos;t collect it. Our zero-log
                                            policy ensures we have nothing to hand over. FortivoVPN may impose usage limits, suspend service, or block
                                            certain kinds of usage solely at our discretion to maintain service integrity.
                                        </p>
                                    </div>
                                </section>

                                {/* Disclaimers */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-blue-400 mb-4 tracking-wider">DISCLAIMERS & LIMITATIONS</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bebas text-white mb-2">Disclaimer of Warranties</h3>
                                            <p className="text-gray-300 font-roboto leading-relaxed">
                                                FortivoVPN makes no representation, warranty, or guarantee as to the reliability, timeliness,
                                                quality, suitability, availability, accuracy, or completeness of the Services.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bebas text-white mb-2">Limitation of Liability</h3>
                                            <p className="text-gray-300 font-roboto leading-relaxed">
                                                Under no circumstances shall theHedgeCollective or its affiliates, contractors, employees,
                                                agents, or third-party partners be liable for any lost profits or special, indirect, incidental,
                                                punitive, or consequential damages of any kind whatsoever.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Contact Information */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-bebas text-blue-400 mb-4 tracking-wider">CONTACT US</h2>
                                    <p className="text-gray-300 font-roboto leading-relaxed">
                                        For privacy-related questions or concerns, contact our Privacy Officer at:
                                        <a href="mailto:privacy@thehedgecollective.comm" className="text-blue-400 hover:text-blue-300 ml-2">privacy@thehedgecollective.com</a>
                                    </p>
                                    <p className="text-gray-300 font-roboto leading-relaxed mt-4">
                                        For general inquiries, contact:
                                        <a href="mailto:innovate@thehedgecollective.com" className="text-blue-400 hover:text-blue-300 ml-2">innovate@thehedgecollective.com</a>
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Back to Home */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300 font-roboto group"
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