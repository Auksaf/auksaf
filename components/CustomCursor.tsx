"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 500,
    damping: 40,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 500,
    damping: 40,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    const handleMouseOver = (e: Event) => {

      const target = e.target as HTMLElement;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };

  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        scale: hovering ? 2.2 : 1,
        opacity: hovering ? 0.6 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-6 h-6 rounded-full border border-[#c6a972] bg-[#c6a972]/20 backdrop-blur-sm"
    />
  );
}