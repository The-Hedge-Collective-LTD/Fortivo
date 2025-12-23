/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { motion } from "framer-motion";
import { FlipWords } from "../flip-words";
import { useEffect, useState } from "react";

export default function Hero({ setIsContactPopupOpen: _setIsContactPopupOpen }: { setIsContactPopupOpen: (open: boolean) => void }) {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        if (!isVideoOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsVideoOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isVideoOpen]);

    return (
        <>
        <motion.div
            className="min-h-[70vh] w-full mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            style={{ willChange: 'opacity' }}
        >
            <div className="absolute top-20 left-4 sm:left-10 w-4 sm:w-6 h-4 sm:h-6 rotate-45">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-sm opacity-30"></div>
            </div>
            <div className="absolute top-40 right-10 sm:right-20 w-3 sm:w-4 h-3 sm:h-4 rotate-12">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-500 rounded-sm opacity-40"></div>
            </div>
            <div className="absolute bottom-32 left-10 sm:left-20 w-6 sm:w-8 h-6 sm:h-8 rotate-45">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-purple-600 rounded-sm opacity-25"></div>
            </div>

            <div className="absolute top-10 right-5 sm:right-10 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tr from-blue-400/15 to-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[70vh] max-w-7xl mx-auto pt-16 sm:pt-20 pb-16 sm:pb-20">
                <motion.div
                    className="flex flex-col gap-6 sm:gap-8 w-full lg:w-1/2 z-10 text-center lg:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <div className="space-y-4 sm:space-y-6">
                        <div className="font-bebas font-bold tracking-wider text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
                            <div className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-2 sm:mb-4">
                                Secure your
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4">
                                <FlipWords
                                    className="!text-blue-400 !font-bebas !font-bold"
                                    words={["Privacy", "Freedom", "Identity"]}
                                    duration={8}
                                />
                            </div>
                        </div>

                        <motion.div
                            className="font-roboto text-sm xs:text-base md:text-lg tracking-wide font-light text-gray-300 max-w-lg leading-relaxed mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            Experience ultimate online protection with advanced encryption, global server network, and zero-log privacy policy.
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex flex-col xs:flex-row gap-3 xs:gap-4 items-center justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <a
                            href="https://play.google.com/store/apps/details?id=com.thehedgecollective.fortivoVPN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-3 xs:py-4 px-6 xs:px-8 text-white text-sm xs:text-base sm:text-lg font-roboto font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 w-full xs:w-auto justify-center cursor-pointer"
                        >
                            DOWNLOAD NOW
                            <svg className="w-4 xs:w-5 h-4 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        <button
                            type="button"
                            onClick={() => setIsVideoOpen(true)}
                            aria-haspopup="dialog"
                            aria-expanded={isVideoOpen}
                            aria-controls="how-it-works-video"
                            className="flex items-center gap-3 py-3 xs:py-4 px-4 xs:px-6 text-gray-300 font-roboto font-medium hover:text-blue-400 transition-colors duration-300 w-full xs:w-auto justify-center border border-gray-600 hover:border-blue-500 rounded-lg"
                        >
                            <div className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                                <svg className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <span className="text-xs xs:text-sm sm:text-base">See How It Works</span>
                        </button>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-3 xs:gap-4 justify-center lg:justify-start text-xs xs:text-sm text-gray-400 font-roboto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-1 xs:gap-2">
                            <svg className="w-3 xs:w-4 h-3 xs:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="whitespace-nowrap">Free</span>
                        </div>
                        <div className="flex items-center gap-1 xs:gap-2">
                            <svg className="w-3 xs:w-4 h-3 xs:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="whitespace-nowrap">No-log policy</span>
                        </div>
                        <div className="flex items-center gap-1 xs:gap-2">
                            <svg className="w-3 xs:w-4 h-3 xs:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="whitespace-nowrap">100% users protected</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2 flex justify-center items-center mt-12 sm:mt-16 lg:mt-0 relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <motion.div
                        className="absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-full blur-2xl"
                        animate={{
                            y: [0, -20, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"
                        animate={{
                            y: [0, 20, 0],
                            scale: [1, 0.9, 1]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    />

                    <div className="relative w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px]">
                        <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[270px] sm:w-[360px] lg:w-[450px] h-[270px] sm:h-[360px] lg:h-[450px] z-5"
                            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                            animate={{
                                rotate: 360,
                                transition: {
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear"
                                }
                            }}
                            style={{ willChange: 'transform' }}
                        >
                            <div className="w-full h-full border-2 border-blue-400/20 rounded-full relative">
                                <div className="absolute inset-4 border border-blue-400/10 rounded-full"></div>
                                <div className="absolute inset-8 border border-blue-400/5 rounded-full"></div>
                                {[0, 90, 180, 270].map((angle, index) => (
                                    <motion.div
                                        key={index}
                                        className="absolute w-3 h-3 bg-blue-400 rounded-full"
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${120}px)`,
                                            willChange: 'transform'
                                        }}
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            opacity: [0.6, 1, 0.6]
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            delay: index * 0.3
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 rounded-3xl flex items-center justify-center z-10"
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-3xl blur-2xl"></div>
                                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700 shadow-2xl">
                                    <svg className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        <div className="relative w-full h-full">
                            <motion.div
                                className="absolute top-4 sm:top-8 -left-6 sm:-left-12 w-48 sm:w-60 lg:w-72 h-32 sm:h-36 lg:h-44 bg-gray-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-3 sm:p-4 lg:p-6 border border-gray-700 z-20"
                                initial={{ opacity: 0, y: 30, rotate: -10 }}
                                whileInView={{ opacity: 1, y: 0, rotate: -8 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                    rotate: -5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                                        <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-white text-xs sm:text-sm font-bebas tracking-wider">YOUR DEVICE</div>
                                        <div className="text-gray-400 text-xs">Protected</div>
                                    </div>
                                </div>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="w-full h-1.5 sm:h-2 bg-green-400 rounded-full"></div>
                                    <div className="w-4/5 h-1.5 sm:h-2 bg-gray-600 rounded-full"></div>
                                    <div className="w-3/5 h-1.5 sm:h-2 bg-gray-600 rounded-full"></div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-8 sm:bottom-16 -right-8 sm:-right-16 w-44 sm:w-56 lg:w-64 h-28 sm:h-32 lg:h-36 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl p-3 sm:p-4 lg:p-5 border border-gray-700 z-20"
                                initial={{ opacity: 0, y: 30, rotate: 10 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 8 }}
                                transition={{ duration: 1, delay: 1.4 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="flex justify-between items-center mb-3 sm:mb-4">
                                    <div className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                                        <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white text-xs sm:text-sm font-bebas tracking-wider">VPN SERVER</div>
                                        <div className="text-green-400 text-xs">🇺🇸 New York</div>
                                    </div>
                                </div>
                                <div className="space-y-1.5 sm:space-y-2">
                                    <div className="w-full h-1.5 sm:h-2 bg-blue-400 rounded-full"></div>
                                    <div className="w-3/4 h-1.5 sm:h-2 bg-gray-600 rounded-full"></div>
                                </div>
                            </motion.div>
                        </div>

                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={`absolute w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full opacity-60`}
                                style={{
                                    background: i % 2 === 0 ? 'linear-gradient(45deg, #3B82F6, #1D4ED8)' :
                                            'linear-gradient(45deg, #10B981, #059669)',
                                    top: `${20 + (i * 25)}%`,
                                    left: `${10 + (i * 20)}%`,
                                    willChange: 'transform'
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 0.6, scale: 1 }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                animate={{
                                    y: [0, -15, 0],
                                    opacity: [0.6, 0.3, 0.6],
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5 + i * 0.3
                                }}
                            />
                        ))}

                        <motion.div
                            className="absolute -bottom-8 lg:-bottom-8 -left-12 sm:-left-16 lg:-left-24 hidden md:block z-20"
                            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                            transition={{ duration: 1, delay: 2.2 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 0,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="relative w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-full blur-xl opacity-50"></div>
                                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full flex items-center justify-center shadow-2xl border border-gray-700">
                                    <div className="text-center text-white p-4 sm:p-6 lg:p-8">
                                        <div className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-blue-600 rounded-lg mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                                            <svg className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <p className="text-xs sm:text-sm font-light italic mb-2 sm:mb-3 leading-relaxed text-gray-300">
                                            &quot;Privacy is not something that I&apos;m merely entitled to, it&apos;s an absolute prerequisite.&quot;
                                        </p>
                                        <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-2 sm:mb-3"></div>
                                        <p className="text-xs sm:text-sm font-semibold text-blue-400 tracking-wider">
                                            FORTIVO
                                        </p>
                                        <p className="text-xs text-gray-400 font-light">
                                            VPN PROTECTION
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
        {isVideoOpen && (
            <motion.div
                className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsVideoOpen(false)}
            >
                <div
                    id="how-it-works-video"
                    role="dialog"
                    aria-modal="true"
                    aria-label="How it works video"
                    className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden border border-gray-700 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        type="button"
                        aria-label="Close video"
                        onClick={() => setIsVideoOpen(false)}
                        className="absolute top-2 right-2 z-20 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <video
                        className="w-full h-full"
                        src="/Video.mov"
                        controls
                        autoPlay
                        muted
                        playsInline
                        preload="metadata"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </motion.div>
        )}
        </>
    )
}