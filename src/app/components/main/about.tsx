import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-start flex-col pt-8 sm:pt-12 md:pt-20 font-extrabold tracking-wider z-10 overflow-hidden bg-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            id="about"
            style={{ willChange: 'transform, opacity' }}
        >
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        scale: [1, 0.8, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center w-full font-bebas text-white mb-6 md:mb-8 relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                style={{ willChange: 'transform, opacity' }}
            >
                <span className="relative inline-block">
                    ABOUT
                </span>
                {" "}
                <span className="text-blue-400 relative">
                    FORTIVO
                    <motion.div
                        className="absolute inset-0 bg-blue-400/20 blur-sm"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </span>
            </motion.h1>

            <motion.div
                className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 w-full"
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="flex-1 text-center lg:text-left mb-6 relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <motion.h2
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bebas text-blue-400 mb-4 md:mb-6 tracking-wider relative"
                        whileHover={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span className="relative z-10">SECURING DIGITAL FREEDOM</span>
                    </motion.h2>

                    <motion.div
                        className="backdrop-blur-sm bg-gray-800/80 border border-gray-700 rounded-xl p-6 mb-6"
                        whileHover={{ scale: 1, backgroundColor: "rgba(31, 41, 55, 0.9)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-sm md:text-base text-gray-300 font-roboto font-light leading-relaxed mb-4">
                            At <span className="text-blue-400 font-medium">FortivoVPN</span>, we are passionate about protecting your digital privacy and freedom through cutting-edge VPN technology.
                            Founded on the principles of security, anonymity, and user empowerment, we have been at the forefront of
                            online privacy protection for years.
                        </p>
                        <p className="text-sm md:text-base text-gray-300 font-roboto font-light leading-relaxed">
                            Our team of cybersecurity experts and network engineers combines deep technical expertise with creative problem-solving to deliver
                            VPN solutions that not only protect today&apos;s threats but anticipate tomorrow&apos;s challenges.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.div
                            className="flex items-center gap-4 bg-gray-800 border border-gray-700 rounded-2xl p-4 backdrop-blur-sm"
                            whileHover={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    animate={{
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                                <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </motion.div>
                            <div>
                                <h4 className="font-bebas text-xl text-white tracking-wider">PRIVACY FIRST</h4>
                                <p className="text-gray-400 text-sm">Security in every connection</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex-1 grid grid-cols-1 gap-8 relative"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="flex justify-center items-center w-full h-96 relative group"
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                            className="absolute top-20 right-10 w-1 h-1 bg-green-400 rounded-full"
                            animate={{
                                y: [0, -15, 0],
                                opacity: [1, 0.3, 1],
                            }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                        />
                        <motion.div
                            className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full"
                            animate={{
                                y: [0, -10, 0],
                                opacity: [1, 0.4, 1],
                            }}
                            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                        />

                        <div className="w-full h-full flex items-center justify-center">
                            <motion.div
                                className="relative w-80 h-80"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full"></div>
                                <div className="absolute inset-4 border border-blue-400/20 rounded-full"></div>
                                <div className="absolute inset-8 border border-blue-400/10 rounded-full"></div>

                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>

                                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                                    <motion.div
                                        key={index}
                                        className="absolute w-4 h-4 bg-green-400 rounded-full"
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px)`
                                        }}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.25
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-2 gap-12 w-full mt-16"
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="text-center md:text-left relative group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="relative backdrop-blur-sm bg-gray-800/80 border border-gray-700 rounded-2xl p-8">
                        <motion.h3
                            className="text-2xl md:text-3xl font-bebas text-white mb-6 tracking-wider relative"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="relative">
                                OUR MISSION
                                <motion.div
                                    className="absolute -right-8 top-0 w-6 h-6 border-2 border-blue-400 rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                />
                            </span>
                        </motion.h3>
                        <p className="text-sm md:text-base text-gray-300 font-roboto font-light leading-relaxed">
                            To democratize online privacy and freedom by providing the most secure, fast, and reliable VPN service
                            that empowers users to browse the internet without fear of surveillance, censorship, or cyber threats.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="text-center md:text-left relative group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="relative backdrop-blur-sm bg-gray-800/80 border border-gray-700 rounded-2xl p-8">
                        <motion.h3
                            className="text-2xl md:text-3xl font-bebas text-white mb-6 tracking-wider relative"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="relative">
                                OUR PRINCIPLES
                                <motion.div
                                    className="absolute -right-8 top-0 w-6 h-6 bg-blue-400 rounded-full"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [1, 0.7, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </span>
                        </motion.h3>
                        <ul className="text-sm md:text-base text-gray-300 font-roboto font-light leading-relaxed space-y-4">
                            {[
                                "Zero-log policy: Your privacy is absolute",
                                "Advanced encryption: Unbreakable security",
                                "Global accessibility: Freedom without borders",
                                "Transparency: Open-source and audited protocols"
                            ].map((principle, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center gap-3 group/item"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <motion.span
                                        className="w-3 h-3 bg-blue-400 rounded-full relative"
                                        whileHover={{ scale: 1.5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-blue-400 rounded-full"
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [1, 0, 1]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                        />
                                    </motion.span>
                                    <span className="group-hover/item:text-blue-400 transition-colors duration-300">
                                        {principle}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="w-full my-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                }}
                viewport={{ once: true }}
            >
                {[
                    { number: "100%", label: "Protected Users", icon: "👥" },
                    { number: "99.9%", label: "Uptime", icon: "🚀" },
                    { number: "10+", label: "Countries", icon: "🌍" },
                    { number: "15+", label: "Servers", icon: "🔒" }
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        className="text-center bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className="text-2xl md:text-3xl font-bebas text-blue-400 mb-1">{stat.number}</div>
                        <div className="text-sm text-gray-400 font-roboto">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}