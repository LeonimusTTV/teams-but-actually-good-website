import { useState, useEffect } from "react";

const CHARSET = "!<>-_\\/[]{}=+*^?#@0123456789ABCDEF";

export function useTextScramble(
  text: string,
  startDelay = 0,
  duration = 1100
) {
  const [displayed, setDisplayed] = useState<string[]>(() =>
    text.split("").map((c) =>
      c === " " || c === "\n"
        ? c
        : CHARSET[Math.floor(Math.random() * CHARSET.length)]
    )
  );
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(false);
    let tid: ReturnType<typeof setTimeout>;
    let rafId: number;

    const run = () => {
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const chars = text.split("").map((char, i) => {
          if (char === " " || char === "\n" || char === "." || char === "!") {
            return char;
          }
          const charReveal = i / text.length;
          // Once character's turn has passed, lock it
          if (progress >= charReveal + 0.12) return char;
          // Randomly show real char as it approaches reveal time
          if (progress >= charReveal && Math.random() > 0.4) return char;
          return CHARSET[Math.floor(Math.random() * CHARSET.length)];
        });

        setDisplayed(chars);

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setDisplayed(text.split(""));
          setDone(true);
        }
      };

      rafId = requestAnimationFrame(step);
    };

    tid = setTimeout(run, startDelay);

    return () => {
      clearTimeout(tid);
      cancelAnimationFrame(rafId);
    };
  }, [text, startDelay, duration]);

  return { chars: displayed, text: displayed.join(""), done };
}
