"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [hovered, setHovered] = useState<{
    rect: DOMRect;
    borderRadius: string;
  } | null>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Optimized spring for buttery movement
  const springConfig = { damping: 30, stiffness: 280, mass: 0.5 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  const cursorColor = "#fbbf24";

  const onOver = useCallback((e: PointerEvent) => {
    const target = e.target as HTMLElement;
    const el = target.closest(
      'a, button, input, select, textarea, [role="button"], .magnetic, .card, .btn, [data-hover], img, .group'
    );

    if (el) {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      setHovered({
        rect,
        borderRadius: style.borderRadius || "8px",
      });
    } else {
      setHovered(null);
    }
  }, []);

  const onOut = useCallback(() => setHovered(null), []);

  useEffect(() => {
    // Inject global cursor hide
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const onMove = (e: PointerEvent) => {
      // Use requestAnimationFrame for the smoothest possible coordinate updates
      window.requestAnimationFrame(() => {
        if (hovered) {
          mouseX.set(hovered.rect.left + hovered.rect.width / 2);
          mouseY.set(hovered.rect.top + hovered.rect.height / 2);
        } else {
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
        }
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { capture: true, passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver, true);
      window.removeEventListener("pointerout", onOut);
      document.head.removeChild(style);
    };
  }, [hovered, mouseX, mouseY, onOver, onOut]);

  const isHovering = !!hovered;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* 1. Sharp Central Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: cursorColor,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15, ease: "circOut" }}
      />

      {/* 2. Minimal Yellow Ring / Frame */}
      <motion.div
        className="absolute border will-change-[width,height,transform,border-radius]"
        style={{
          x: xSpring,
          y: ySpring,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: cursorColor,
        }}
        animate={{
          width: isHovering ? hovered.rect.width + 12 : 32,
          height: isHovering ? hovered.rect.height + 12 : 32,
          borderRadius: isHovering ? hovered.borderRadius : "50%",
          backgroundColor: isHovering ? "rgba(251, 191, 36, 0.08)" : "rgba(251, 191, 36, 0)",
          borderWidth: isHovering ? "2px" : "1.5px",
        }}
        transition={{
          type: "spring",
          ...springConfig
        }}
      />
    </div>
  );
};

export default CustomCursor;