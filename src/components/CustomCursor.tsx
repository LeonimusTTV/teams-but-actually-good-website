import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100,
      mouseY = -100;
    let ringX = -100,
      ringY = -100;
    let rafId: number;
    let isHovering = false;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const setPos = (el: HTMLDivElement | null, x: number, y: number) => {
      if (!el) return;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.1);
      ringY = lerp(ringY, mouseY, 0.1);
      setPos(ringRef.current, ringX, ringY);
      rafId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPos(dotRef.current, mouseX, mouseY);
      if (!visible) setVisible(true);
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    const onHoverIn = () => {
      isHovering = true;
      ringRef.current?.classList.add("cursor-ring--hover");
      dotRef.current?.classList.add("cursor-dot--hover");
    };

    const onHoverOut = () => {
      isHovering = false;
      ringRef.current?.classList.remove("cursor-ring--hover");
      dotRef.current?.classList.remove("cursor-dot--hover");
    };

    const onClickIn = () => {
      ringRef.current?.classList.add("cursor-ring--click");
      dotRef.current?.classList.add("cursor-dot--click");
    };

    const onClickOut = () => {
      ringRef.current?.classList.remove("cursor-ring--click");
      dotRef.current?.classList.remove("cursor-dot--click");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onClickIn);
    document.addEventListener("mouseup", onClickOut);

    rafId = requestAnimationFrame(animate);

    // Delegated event listeners for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a, button, [role='button'], input, textarea, select, [data-magnetic]")) {
        onHoverIn();
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a, button, [role='button'], input, textarea, select, [data-magnetic]")) {
        if (!isHovering) return;
        const related = e.relatedTarget as Element | null;
        if (!related?.closest("a, button, [role='button'], input, textarea, select, [data-magnetic]")) {
          onHoverOut();
        }
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onClickIn);
      document.removeEventListener("mouseup", onClickOut);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${visible ? "cursor-dot--visible" : ""}`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${visible ? "cursor-ring--visible" : ""}`}
      />
    </>
  );
}
