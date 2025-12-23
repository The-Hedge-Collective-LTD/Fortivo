import { motion } from "framer-motion";

const mottoData = [
    {
        img: "/images/shield-lock.svg",
        title: "Unbreakable Security",
        desc: "We are a cybersecurity company specialized in VPN technology and digital privacy protection. We combine advanced encryption with cutting-edge protocols like WireGuard, OpenVPN, and IKEv2 to create an impenetrable shield around your digital life, ensuring your data remains completely secure and private.",
    },
    {
        img: "/images/global-network.svg",
        title: "Global Freedom",
        desc: "Our global infrastructure spans 60+ countries with 5000+ high-speed servers, providing unlimited access to the open internet. With our zero-log policy and jurisdiction in privacy-friendly countries, we ensure your online activities remain completely anonymous while delivering lightning-fast speeds for streaming, gaming, and browsing.",
    },
    {
        img: "/images/user-privacy.svg",
        title: "Your Privacy First",
        desc: "We believe privacy is a fundamental human right, not a privilege. Our independently audited no-logs policy, kill switch protection, and DNS leak prevention ensure your digital footprint remains invisible. We empower users to reclaim their online freedom and browse the internet without fear of surveillance or censorship.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0,
            delayChildren: 0,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.25 }
    },
};

export default function Privacy() {
    return (
        <section
            id="privacy"
            className="relative w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden"
        >
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

            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
                <motion.header
                    className="text-center mb-12 md:mb-16"
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
                        OUR CORE VALUES
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-extrabold font-bebas text-white tracking-wider relative">
                        PRIVACY BY <span className="text-blue-400 relative">
                            DESIGN
                            <motion.div
                                className="absolute inset-0 bg-blue-400/20 blur-sm"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </span>
                    </h1>

                    <motion.p
                        className="text-gray-300 text-base md:text-lg font-roboto font-light mt-4 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        Built on the foundation of digital rights, privacy protection, and user empowerment
                    </motion.p>
                </motion.header>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                    style={{ willChange: 'contents' }}
                >
                    {mottoData.map((item, index) => (
                        <motion.article
                            key={item.title}
                            className="flex flex-col items-center md:items-start text-center md:text-left group relative"
                            variants={itemVariants}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
                            style={{ willChange: 'transform' }}
                        >
                            <div className="absolute inset-0 bg-gray-800/50 border border-gray-700 rounded-2xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                            <div className="relative z-10 p-6 md:p-8 w-full">
                                <div className="mb-6 md:mb-8 transition-transform duration-200 group-hover:scale-105 relative mx-auto md:mx-0 w-fit">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
                                        <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700 shadow-xl">
                                            {index === 0 && (
                                                <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            )}
                                            {index === 1 && (
                                                <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            )}
                                            {index === 2 && (
                                                <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-xl md:text-2xl font-extrabold font-bebas text-white mb-3 md:mb-4 leading-tight tracking-wider group-hover:text-blue-400 transition-colors duration-200">
                                        {item.title}
                                    </h2>

                                    <div className="w-16 h-1 bg-blue-400 rounded-full mb-4 mx-auto md:mx-0 group-hover:w-20 transition-all duration-200" />

                                    <p className="text-sm md:text-base font-light font-roboto text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                                    {index === 0 && (
                                        <>
                                            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-medium">AES-256</span>
                                            <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400 font-medium">Advanced Encryption</span>
                                        </>
                                    )}
                                    {index === 1 && (
                                        <>
                                            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-medium">60+ Countries</span>
                                            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400 font-medium">5000+ Servers</span>
                                        </>
                                    )}
                                    {index === 2 && (
                                        <>
                                            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-medium">Zero Logs</span>
                                            <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400 font-medium">Audited</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-16 md:mt-20"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <div className="inline-flex items-center gap-2 text-sm text-gray-400 font-roboto">
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Trusted by 50+ million users worldwide
                        <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
                        Independently security audited
                    </div>
                </motion.div>
            </div>
        </section>
    );
}