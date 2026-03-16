"use client";

import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!circleRef.current) return;
      circleRef.current.style.transform = `translate(${e.clientX - 30}px, ${e.clientY - 30}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={circleRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center"
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "rgba(167, 139, 250, 0.5)", // light purple outer circle
        transition: "transform 0.08s ease-out",
        willChange: "transform",
      }}
    >
      {/* Inner dark dot */}
      <div
        style={{
          width: "9px",
          height: "9px",
          borderRadius: "50%",
          backgroundColor: "#6D28D9", // dark purple dot
        }}
      />
    </div>
  );
};

export default CursorGlow;