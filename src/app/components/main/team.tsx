import Image from "next/image";
import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      id: "security-engineer",
      title: "SECURITY ENGINEER",
      image: "/images/developer.jpg",
      description:
        "Advanced AES-256 encryption ensures your data remains fully secure and protected from cyber threats, interception, and unauthorized access. Our Security Engineers design and implement cutting-edge cryptographic protocols, conduct rigorous threat analyses, and continuously monitor our systems to safeguard user privacy and data integrity against evolving cyber threats.",
      skills: [
        "Cryptography",
        "Zero-Knowledge Systems",
        "Network Security",
        "Threat Analysis",
      ],
      gradient: "from-blue-400 to-cyan-500",
      icon: (
        <svg
          className="h-6 w-6 text-white"
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
      ),
    },
    {
      id: "infrastructure-architect",
      title: "INFRASTRUCTURE ARCHITECT",
      image: "/images/web.jpg",
      description:
        "Our Infrastructure Architects design and maintain the global backbone that powers FortivoVPN. Managing 5000+ servers across 60+ countries, they optimize performance, ensure 99.9% uptime, and scale our network to handle millions of secure connections while maintaining lightning-fast speeds worldwide.",
      skills: [
        "Global Infrastructure",
        "Load Balancing",
        "Performance Optimization",
        "Network Architecture",
      ],
      gradient: "from-green-400 to-emerald-500",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "privacy-advocate",
      title: "PRIVACY ADVOCATE",
      image: "/images/person.png",
      description:
        "Our Privacy Advocates are the voice of digital rights and user protection. They ensure our zero-log policy remains absolute, lead transparency initiatives, and work with legal experts to maintain our commitment to user privacy. They bridge the gap between technology and human rights in the digital age.",
      skills: [
        "Privacy Law",
        "Digital Rights",
        "Transparency Reports",
        "Policy Development",
      ],
      gradient: "from-purple-400 to-violet-500",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      id="team"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-purple-500/8 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-500/5 blur-3xl"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.div
            className="font-roboto mb-6 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-400 md:px-6 md:text-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            style={{ willChange: "transform, opacity" }}
          >
            MEET THE EXPERTS
          </motion.div>

          <motion.h1
            className="font-bebas mb-4 text-3xl font-extrabold tracking-wider text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            style={{ willChange: "transform" }}
          >
            PRIVACY{" "}
            <span className="relative bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              GUARDIANS
              <motion.div
                className="absolute inset-0 bg-blue-400/20 blur-sm"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          <motion.div
            className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-500"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            style={{ willChange: "width" }}
          ></motion.div>

          <p className="font-roboto mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-300 italic md:text-xl">
            &quot;We don&apos;t just protect data, we defend digital freedom for
            millions worldwide.&quot;
          </p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          style={{ willChange: "contents" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={`group relative rounded-2xl border border-gray-700 bg-gray-800/80 p-6 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-blue-500/10 md:rounded-3xl md:p-8 lg:p-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              style={{ willChange: "transform" }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-5 md:rounded-3xl`}
              ></div>

              <div
                className={`relative z-10 flex flex-col items-center gap-6 md:gap-8 lg:flex-row lg:gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`h-40 w-40 overflow-hidden rounded-full border-4 border-transparent bg-gradient-to-br md:h-56 md:w-56 ${member.gradient} p-1 shadow-2xl`}
                    >
                      <div className="h-full w-full overflow-hidden rounded-full bg-gray-900">
                        <Image
                          src={member.image}
                          alt={member.title}
                          width={224}
                          height={224}
                          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <motion.div
                      className={`absolute -right-2 -bottom-2 h-16 w-16 bg-gradient-to-br ${member.gradient} flex items-center justify-center rounded-full border-4 border-gray-800 shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {member.icon}
                    </motion.div>

                    <motion.div
                      className="absolute -top-2 -left-2 h-6 w-6 rounded-full border-2 border-gray-800 bg-green-500 shadow-lg"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                <div
                  className={`flex-1 ${index % 2 === 1 ? "md:text-right" : "md:text-left"} text-center`}
                >
                  <motion.h3
                    className={`font-bebas mb-4 bg-gradient-to-r text-3xl md:text-5xl ${member.gradient} relative bg-clip-text tracking-wider text-transparent`}
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.title}
                    <motion.div
                      className={`absolute -bottom-1 ${index % 2 === 1 ? "right-0" : "left-0"} h-1 w-0 bg-gradient-to-r ${member.gradient} transition-all duration-500 group-hover:w-full`}
                    />
                  </motion.h3>

                  <motion.p
                    className="font-roboto mb-6 text-sm leading-relaxed font-light text-gray-300 md:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {member.description}
                  </motion.p>

                  <motion.div
                    className={`flex flex-wrap gap-3 ${index % 2 === 1 ? "md:justify-end" : "md:justify-start"} justify-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {member.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className={`rounded-full bg-gradient-to-r px-4 py-2 text-sm font-medium ${member.gradient} border border-white/20 text-white shadow-lg transition-all duration-300 hover:shadow-xl`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.8 + skillIndex * 0.1,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="mt-6 flex items-center justify-center gap-4 md:justify-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <div className="font-roboto flex items-center gap-2 text-sm text-green-400">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Security Cleared
                    </div>
                    <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                    <div className="font-roboto text-sm text-blue-400">
                      24/7 Protection
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { number: "100%", label: "Users Protected", icon: "👥" },
              { number: "99.9%", label: "Security Uptime", icon: "🔒" },
              { number: "24/7", label: "Expert Monitoring", icon: "👁️" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-2 text-3xl">{stat.icon}</div>
                <div className="font-bebas mb-1 text-2xl text-blue-400 md:text-3xl">
                  {stat.number}
                </div>
                <div className="font-roboto text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
