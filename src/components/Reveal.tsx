import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  scale = 1,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: 0 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        scale,
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      });
    }
  }, [inView, controls, delay, scale]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
