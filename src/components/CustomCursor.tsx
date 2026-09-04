import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(pointer: fine)").matches;
    }
    return false;
  });

  useEffect(() => {
    // Only enable custom cursor for precise pointer devices (non-touch desktop)
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Track hover on interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, [role='button'], input, textarea, .interactive-hover");
      setIsHovered(!!interactive);
    };

    window.addEventListener("mouseover", handleElementHover);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handleElementHover);
    };
  }, [isVisible]);

  if (!isPointerFine || !isVisible) return null;

  return (
    <>
      {/* Outer subtle follower ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-sky-400/40 mix-blend-screen"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 12),
          y: mousePosition.y - (isHovered ? 24 : 12),
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          scale: isClicking ? 0.85 : 1,
          backgroundColor: isHovered ? "rgba(56, 189, 248, 0.08)" : "transparent",
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      />
      {/* Center pinpoint dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-white"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          width: 4,
          height: 4,
          opacity: isHovered ? 0.4 : 0.9,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 800,
          mass: 0.1,
        }}
      />
    </>
  );
};
