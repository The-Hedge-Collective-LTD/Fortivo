/** Framer-style motion timings for the Fortivo landing page */

export const EASE = {
  fade: [0.44, 0, 0, 0.97] as const,
  word: [0.25, 0, 0.25, 1] as const,
  compact: [0.22, 1, 0.36, 1] as const,
  nav: [0.44, 0, 0.56, 1] as const,
  page: [0.27, 0, 0.51, 1] as const,
};

/** Shared scroll trigger — fires when section enters view, not on page load */
export const scrollViewport = {
  once: true,
  amount: 0.35,
  margin: "0px 0px -12% 0px",
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: scrollViewport,
  transition: { duration: 1.2, delay: 0.15, ease: EASE.fade },
};

export const fadeInMount = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: scrollViewport,
  transition: { duration: 1.2, delay: 0.15, ease: EASE.fade },
};

export const riseIn = {
  initial: { opacity: 0, y: 64 },
  whileInView: { opacity: 1, y: 0 },
  viewport: scrollViewport,
  transition: {
    type: "spring" as const,
    stiffness: 40,
    damping: 30,
    mass: 1,
    delay: 0.1,
  },
};

export const compactRise = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: scrollViewport,
  transition: { duration: 0.55, delay: 0, ease: EASE.compact },
};

export const headerSlide = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 0, ease: EASE.word },
};

export const floatLoop = {
  animate: { y: [0, 12, 0] },
  transition: {
    duration: 4,
    ease: "linear" as const,
    repeat: Infinity,
    repeatType: "loop" as const,
  },
};

export const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.thehedgecollective.fortivoVPN";
