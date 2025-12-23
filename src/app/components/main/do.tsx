import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const GradientArrow = dynamic(() => import('../xarrows'), { ssr: false });

const Do = () => {
    return (
        <section id="security" className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-10">
            <div className="absolute inset-0 w-full h-full opacity-20">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-blue-400/20"></div>
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

            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <div className="hidden lg:block absolute inset-0 pointer-events-none z-10 w-full">
                <GradientArrow fromId="how" toId="encryption" strokeWidth={2} curvature={0.2} />
                <GradientArrow fromId="how" toId="servers" strokeWidth={2} curvature={0.2} />
                <GradientArrow fromId="encryption" toId="no-logs" strokeWidth={2} curvature={0.3} />
                <GradientArrow fromId="servers" toId="kill-switch" strokeWidth={2} curvature={0.3} />
                <GradientArrow fromId="no-logs" toId="kill-switch" strokeWidth={2} curvature={0.2} />
                <GradientArrow fromId="no-logs" toId="dns-protection" strokeWidth={2} curvature={0.3} />
                <GradientArrow fromId="kill-switch" toId="support" strokeWidth={2} curvature={0.3} />
                <GradientArrow fromId="dns-protection" toId="support" strokeWidth={2} curvature={0.2} />
            </div>

            <div className="relative z-20 w-full px-4 py-16 lg:py-14">
                <motion.div
                    className="text-center mb-20 max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <motion.div
                        className="inline-block px-6 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 font-roboto"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        HOW WE PROTECT YOU
                    </motion.div>

                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8 font-bebas tracking-wider">
                        Advanced VPN <span className="text-blue-400">Protection</span>
                    </h2>
                    <p id="how" className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto font-roboto">
                        At FortivoVPN, we combine advanced encryption, global server infrastructure, and
                        cutting-edge privacy protocols to provide unbreakable online protection. Our advanced
                        security features ensure your digital freedom 24/7.
                    </p>
                </motion.div>

                <div className="hidden lg:block relative w-full">
                    <div className="relative w-full h-[900px] max-w-7xl mx-auto">
                        <motion.div
                            id="encryption"
                            className="absolute top-0 left-0 w-72 bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/50 z-30"
                            initial={{ opacity: 0, x: -30, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 font-bebas tracking-wider">Advanced Encryption</h3>
                                    <p className="text-blue-400 text-sm font-medium mb-3 font-roboto">AES-256 Protection</p>
                                    <p className="text-gray-300 text-xs leading-relaxed font-roboto">
                                        Unbreakable AES-256 encryption with perfect forward secrecy to secure all your data.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            id="servers"
                            className="absolute top-0 right-0 w-72 bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/50 z-30"
                            initial={{ opacity: 0, x: 30, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 font-bebas tracking-wider">Global Server Network</h3>
                                    <p className="text-green-400 text-sm font-medium mb-3 font-roboto">5000+ Servers</p>
                                    <p className="text-gray-300 text-xs leading-relaxed font-roboto">
                                        Lightning-fast servers across 60+ countries for unrestricted global access.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            id="no-logs"
                            className="absolute top-80 left-16 w-72 bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/50 z-30"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 font-bebas tracking-wider">Zero-Log Policy</h3>
                                    <p className="text-purple-400 text-sm font-medium mb-3 font-roboto">Complete Anonymity</p>
                                    <p className="text-gray-300 text-xs leading-relaxed font-roboto">
                                        Independently audited no-logs policy ensures your activities remain private.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            id="kill-switch"
                            className="absolute top-80 right-16 w-72 bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-red-500/20 hover:border-red-500/50 z-30"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L12 21l-6.364-6.364M12 21l6.364-6.364M12 21V9m0 12V9m0 0L5.636 5.636M12 9l6.364-6.364" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 font-bebas tracking-wider">Kill Switch Protection</h3>
                                    <p className="text-red-400 text-sm font-medium mb-3 font-roboto">Instant Security</p>
                                    <p className="text-gray-300 text-xs leading-relaxed font-roboto">
                                        Automatic kill switch blocks internet if VPN connection drops unexpectedly.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            id="dns-protection"
                            className="absolute bottom-0 left-32 w-72 bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500/50 z-30"
                            initial={{ opacity: 0, x: -30, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 font-bebas tracking-wider">DNS Leak Protection</h3>
                                    <p className="text-cyan-400 text-sm font-medium mb-3 font-roboto">Secure DNS</p>
                                    <p className="text-gray-300 text-xs leading-relaxed font-roboto">
                                        Private DNS servers prevent ISP tracking and DNS leak vulnerabilities.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            id="support"
                            className="absolute bottom-0 right-32 w-72 bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500/50 z-30"
                            initial={{ opacity: 0, x: 30, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 font-bebas tracking-wider">24/7 Expert Support</h3>
                                    <p className="text-yellow-400 text-sm font-medium mb-3 font-roboto">Always Available</p>
                                    <p className="text-gray-300 text-xs leading-relaxed font-roboto">
                                        Round-the-clock technical support from VPN security experts.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="lg:hidden space-y-8 max-w-md mx-auto">
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0 } }
                        }}
                        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                    >
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                ),
                                title: "Advanced Encryption",
                                subtitle: "AES-256 Protection",
                                description: "Unbreakable encryption with perfect forward secrecy.",
                                color: "from-blue-500 to-blue-600",
                                textColor: "text-blue-400"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "Global Server Network",
                                subtitle: "5000+ Servers",
                                description: "Lightning-fast servers across 60+ countries.",
                                color: "from-green-500 to-green-600",
                                textColor: "text-green-400"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                    </svg>
                                ),
                                title: "Zero-Log Policy",
                                subtitle: "Complete Anonymity",
                                description: "Independently audited no-logs policy.",
                                color: "from-purple-500 to-purple-600",
                                textColor: "text-purple-400"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L12 21l-6.364-6.364M12 21l6.364-6.364M12 21V9m0 12V9m0 0L5.636 5.636M12 9l6.364-6.364" />
                                    </svg>
                                ),
                                title: "Kill Switch Protection",
                                subtitle: "Instant Security",
                                description: "Automatic protection if VPN connection drops.",
                                color: "from-red-500 to-red-600",
                                textColor: "text-red-400"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                title: "DNS Leak Protection",
                                subtitle: "Secure DNS",
                                description: "Private DNS servers prevent ISP tracking.",
                                color: "from-cyan-500 to-cyan-600",
                                textColor: "text-cyan-400"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ),
                                title: "24/7 Expert Support",
                                subtitle: "Always Available",
                                description: "Round-the-clock technical support.",
                                color: "from-yellow-500 to-yellow-600",
                                textColor: "text-yellow-400"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                                }}
                                whileHover={{ scale: 1.02 }}
                                style={{ willChange: 'transform' }}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg mb-1 font-bebas tracking-wider">{item.title}</h3>
                                        <p className={`${item.textColor} text-sm font-medium mb-2 font-roboto`}>{item.subtitle}</p>
                                        <p className="text-gray-300 text-sm font-roboto leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Do;