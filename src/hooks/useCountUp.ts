import { useState, useEffect, useRef } from "react";

export function useCountUp(end: number, duration = 1400, startDelay = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let tid: ReturnType<typeof setTimeout>;
    let rafId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        tid = setTimeout(() => {
          const startTime = performance.now();

          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(end * eased));

            if (progress < 1) {
              rafId = requestAnimationFrame(update);
            } else {
              setValue(end);
            }
          };

          rafId = requestAnimationFrame(update);
        }, startDelay);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(tid);
      cancelAnimationFrame(rafId);
    };
  }, [end, duration, startDelay]);

  return { value, ref };
}
