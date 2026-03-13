import { motion, type Variants } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const E = [0.22, 1, 0.36, 1] as const;
const EOut = [0.4, 0, 1, 1] as const;

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 18,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: E,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.22,
      ease: EOut,
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
