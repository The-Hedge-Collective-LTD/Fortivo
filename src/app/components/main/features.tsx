import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface VPNFeature {
    image: string;
    title: string;
    description: string;
    details?: string;
    specifications?: string[];
    benefits?: string[];
}

export default function Features({ setIsContactPopupOpen: _setIsContactPopupOpen }: { setIsContactPopupOpen: (open: boolean) => void }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState<VPNFeature | null>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const vpnFeatures: VPNFeature[] = [
        {
            image: "/images/secure.svg",
            title: "ADVANCED ENCRYPTION",
            description: "Advanced AES-256 encryption ensures your data remains fully secure and protected from cyber threats, interception, and unauthorized access.",
            details: "Our advanced encryption technology delivers robust protection for your digital communications, built on internationally recognized and highly trusted security standards.",
            specifications: ["AES-256-CBC Encryption", "RSA-4096 Handshake", "Perfect Forward Secrecy", "SHA-384 Authentication"],
            benefits: ["Zero Data Breaches", "Government-Level Security", "Quantum-Resistant Protection", "Real-time Threat Detection"]
        },
        {
            image: "/images/world.svg",
            title: "GLOBAL SERVER NETWORK",
            description: "Access 5000+ high-speed servers across 60+ countries for lightning-fast connections and unlimited geographical freedom.",
            details: "Our extensive global network ensures you always have the fastest, most reliable connection no matter where you are in the world.",
            specifications: ["5000+ Servers", "60+ Countries", "Tier-1 Data Centers", "10Gbps Bandwidth"],
            benefits: ["Ultra-Fast Speeds", "No Geo-Restrictions", "99.9% Uptime", "Load Balancing"]
        },
        {
            image: "/images/eye.svg",
            title: "ZERO-LOG POLICY",
            description: "Independently audited no-logs policy ensures complete privacy - we never track, store, or share your online activities.",
            details: "Our strict zero-logs policy has been independently verified by third-party security auditors, guaranteeing your privacy is never compromised.",
            specifications: ["No Activity Logs", "No Connection Logs", "No IP Address Storage", "No Bandwidth Monitoring"],
            benefits: ["Complete Anonymity", "Legal Protection", "Privacy Compliance", "Data Sovereignty"]
        },
        {
            image: "/images/lock2.svg",
            title: "KILL SWITCH PROTECTION",
            description: "Automatic kill switch instantly cuts your internet connection if VPN drops, preventing any data leaks or exposure.",
            details: "Advanced kill switch technology monitors your VPN connection in real-time and immediately blocks all internet traffic if protection is compromised.",
            specifications: ["Automatic Activation", "Network-Level Protection", "DNS Leak Prevention", "IPv6 Leak Protection"],
            benefits: ["Zero Data Exposure", "Automatic Protection", "Peace of Mind", "Fail-Safe Security"]
        },
        {
            image: "/images/plugins.png",
            title: "MULTI-DEVICE SUPPORT",
            description: "Protect up to 10 devices simultaneously across all platforms - Windows, Mac, iOS, Android, and Linux.",
            details: "Comprehensive device protection with native apps for all major platforms, ensuring seamless security across your entire digital ecosystem.",
            specifications: ["10 Simultaneous Connections", "All Major Platforms", "Router Configuration", "Smart TV Support"],
            benefits: ["Family Protection", "Business Solutions", "Seamless Switching", "Unified Security"]
        },
        {
            image: "/images/api.webp",
            title: "STREAMING OPTIMIZED",
            description: "Dedicated streaming servers unlock global content libraries with buffer-free 4K streaming on all major platforms.",
            details: "Specially optimized servers for Netflix, Hulu, BBC iPlayer, and more, delivering crystal-clear streaming without buffering or quality loss.",
            specifications: ["Dedicated Streaming Servers", "4K/8K Support", "Smart Location Selection", "Bandwidth Optimization"],
            benefits: ["Global Content Access", "Buffer-Free Streaming", "HD/4K Quality", "Platform Compatibility"]
        },
        {
            image: "/images/person.png",
            title: "24/7 EXPERT SUPPORT",
            description: "Round-the-clock technical support from VPN experts via live chat, email, and phone for instant assistance.",
            details: "Our dedicated support team of VPN specialists is available 24/7 to help with setup, troubleshooting, and optimization.",
            specifications: ["24/7 Live Chat", "Expert Technical Team", "Multi-language Support", "Priority Response"],
            benefits: ["Instant Problem Resolution", "Setup Assistance", "Optimization Tips", "Peace of Mind"]
        },
    ];

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % vpnFeatures.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + vpnFeatures.length) % vpnFeatures.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const openModal = (feature: VPNFeature) => {
        setSelectedFeature(feature);
    };

    const closeModal = () => {
        setSelectedFeature(null);
    };

    const FeatureCard = ({ feature, index }: { feature: VPNFeature; index: number }) => (
        <motion.div
            key={`feature-${feature.title}-${index}`}
            className="group bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:border-blue-500/50 w-full h-full flex flex-col min-h-[400px]"
            initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -8 }}
            onAnimationComplete={() => {
                if (!hasAnimated) setHasAnimated(true);
            }}
            style={{ willChange: 'transform' }}
        >
            <div className="relative h-48 md:h-56 overflow-hidden bg-gray-700">
                <Image
                    width={400}
                    height={300}
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-4 md:p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold font-bebas text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow mb-4">
                    {feature.description}
                </p>

                <div className="mt-auto">
                    <button
                        onClick={() => openModal(feature)}
                        className="inline-flex items-center text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors duration-200 cursor-pointer"
                    >
                        Learn More
                        <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="relative overflow-x-hidden w-full">
            <div id="features" className="w-full bg-gradient-to-b from-gray-900 to-black py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-9xl">
                    <div className="text-center mb-12 md:mb-16">
                        <motion.div
                            className="inline-block px-6 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 font-roboto"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            PREMIUM VPN FEATURES
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-bebas text-white mb-4"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            UNBREAKABLE <span className="text-blue-400">SECURITY</span>
                        </motion.h1>
                        <motion.p
                            className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Experience the most advanced VPN technology with advanced encryption, global server network, and zero-log privacy protection.
                        </motion.p>
                    </div>

                    {isMobile ? (
                        <div className="relative px-2">
                            <div className="overflow-hidden rounded-xl">
                                <div
                                    className="flex transition-transform duration-300 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {vpnFeatures.map((feature, idx) => (
                                        <div key={`mobile-${feature.title}`} className="w-full flex-shrink-0 px-2 mb-4">
                                            <FeatureCard feature={feature} index={idx} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/90 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 z-10 active:scale-95 border border-gray-600"
                                aria-label="Previous feature"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/90 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 z-10 active:scale-95 border border-gray-600"
                                aria-label="Next feature"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <div className="flex justify-center mt-6 space-x-2">
                                {vpnFeatures.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => goToSlide(idx)}
                                        className={`h-2 rounded-full transition-all duration-200 ${idx === currentSlide ? 'bg-blue-400 w-8' : 'bg-gray-600 w-2'
                                            }`}
                                        aria-label={`Go to feature ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            <motion.div
                                className="text-center mt-12 px-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-base text-gray-300 mb-6">
                                    Ready to secure your digital life?
                                </p>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.thehedgecollective.fortivoVPN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                >
                                    DOWNLOAD NOW
                                </a>
                            </motion.div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {vpnFeatures.map((feature, idx) => (
                                <FeatureCard key={`desktop-${feature.title}`} feature={feature} index={idx} />
                            ))}
                            <motion.div
                                className="bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/30 rounded-xl p-6 lg:p-8 flex flex-col justify-center items-center text-center hover:shadow-xl transition-all duration-300 min-h-[400px] hover:border-blue-400/50"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold font-bebas text-white mb-4">
                                    Get Protected Now
                                </h3>
                                <p className="text-base text-gray-300 mb-8 leading-relaxed">
                                    Join millions of users who trust FortivoVPN for ultimate online privacy and security.
                                </p>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.thehedgecollective.fortivoVPN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    DOWNLOAD NOW
                                </a>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {selectedFeature && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="bg-gray-800 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center rounded-t-2xl z-10">
                                <h2 className="text-2xl font-bold font-bebas text-white pr-4">
                                    {selectedFeature.title}
                                </h2>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-white transition-colors duration-200 p-1 hover:bg-gray-700 rounded-full flex-shrink-0"
                                    aria-label="Close modal"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="relative h-64 lg:h-80 mb-6 rounded-xl overflow-hidden bg-gray-700">
                                    <Image
                                        width={800}
                                        height={400}
                                        src={selectedFeature.image}
                                        alt={selectedFeature.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Feature Overview</h3>
                                    <p className="text-base text-gray-300 leading-relaxed mb-4">
                                        {selectedFeature.description}
                                    </p>
                                    {selectedFeature.details && (
                                        <p className="text-base text-gray-300 leading-relaxed">
                                            {selectedFeature.details}
                                        </p>
                                    )}
                                </div>

                                {selectedFeature.specifications && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Technical Specifications</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedFeature.specifications.map((spec, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-sm font-medium"
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedFeature.benefits && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Key Benefits</h3>
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                            {selectedFeature.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start text-base text-gray-300">
                                                    <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="leading-relaxed">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="pt-6 border-t border-gray-700 text-center">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.thehedgecollective.fortivoVPN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                    >
                                        DOWNLOAD NOW
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}