import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const reticleRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -200,
      mouseY = -200;
    let reticleX = -200,
      reticleY = -200;
    let rafId: number;
    let isHovering = false;
    let isVisible = false;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const setPos = (el: HTMLDivElement | null, x: number, y: number) => {
      if (!el) return;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const animate = () => {
      reticleX = lerp(reticleX, mouseX, 0.09);
      reticleY = lerp(reticleY, mouseY, 0.09);
      setPos(reticleRef.current, reticleX, reticleY);
      rafId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPos(dotRef.current, mouseX, mouseY);

      if (coordsRef.current) {
        const cx = String(e.clientX).padStart(4, "0");
        const cy = String(e.clientY).padStart(4, "0");
        coordsRef.current.style.transform = `translate(${mouseX + 12}px, ${mouseY + 8}px)`;
        coordsRef.current.textContent = `${cx}·${cy}`;
      }

      if (!isVisible) {
        isVisible = true;
        setVisible(true);
      }
    };

    const onMouseEnter = () => {
      isVisible = true;
      setVisible(true);
    };
    const onMouseLeave = () => {
      isVisible = false;
      setVisible(false);
    };

    const getSpinner = () =>
      reticleRef.current?.querySelector<HTMLDivElement>(".cursor-reticle-spin") ?? null;

    const onHoverIn = () => {
      isHovering = true;
      getSpinner()?.classList.add("cursor-reticle--hover");
      dotRef.current?.classList.add("cursor-dot--hover");
    };

    const onHoverOut = () => {
      isHovering = false;
      getSpinner()?.classList.remove("cursor-reticle--hover");
      dotRef.current?.classList.remove("cursor-dot--hover");
    };

    const onClickIn = () => {
      getSpinner()?.classList.add("cursor-reticle--click");
      dotRef.current?.classList.add("cursor-dot--click");
    };

    const onClickOut = () => {
      getSpinner()?.classList.remove("cursor-reticle--click");
      dotRef.current?.classList.remove("cursor-dot--click");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onClickIn);
    document.addEventListener("mouseup", onClickOut);

    rafId = requestAnimationFrame(animate);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.closest(
          "a, button, [role='button'], input, textarea, select, [data-magnetic]"
        )
      ) {
        onHoverIn();
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.closest(
          "a, button, [role='button'], input, textarea, select, [data-magnetic]"
        )
      ) {
        if (!isHovering) return;
        const related = e.relatedTarget as Element | null;
        if (
          !related?.closest(
            "a, button, [role='button'], input, textarea, select, [data-magnetic]"
          )
        ) {
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
      {/* Precise cursor point */}
      <div
        ref={dotRef}
        className={`cursor-dot ${visible ? "cursor-dot--visible" : ""}`}
      />

      {/* Lagging corner-bracket reticle — outer div for JS positioning, inner for CSS spin */}
      <div
        ref={reticleRef}
        className={`cursor-reticle-pos ${visible ? "cursor-reticle--visible" : ""}`}
      >
        <div className="cursor-reticle-spin">
          <div className="cursor-corner cursor-corner--tl" />
          <div className="cursor-corner cursor-corner--tr" />
          <div className="cursor-corner cursor-corner--bl" />
          <div className="cursor-corner cursor-corner--br" />
        </div>
      </div>

      {/* Live coordinate readout */}
      <div
        ref={coordsRef}
        className={`cursor-coords ${visible ? "cursor-coords--visible" : ""}`}
      >
        0000·0000
      </div>
    </>
  );
}
