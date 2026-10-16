"use client";

import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const CustomCursor = () => {
  const isTouchDevice = useMediaQuery("(pointer: coarse)");

  const [cursor, setCursor] = React.useState({
    x: 0,
    y: 0,
    visible: false,
    hovering: false,
    comingSoon: false,
  });

  React.useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursor((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
        visible: true,
      }));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Detect Kiyoko / coming soon cards
      const comingSoon = target.closest("[data-coming-soon]");

      // Detect regular interactive elements
      const interactive = target.closest("a, button, [data-cursor-hover]");

      setCursor((prev) => ({
        ...prev,
        comingSoon: !!comingSoon,
        hovering: !!interactive && !comingSoon,
      }));
    };

    const handleMouseLeave = () => {
      setCursor((prev) => ({
        ...prev,
        visible: false,
        hovering: false,
        comingSoon: false,
      }));
    };

    const handleMouseEnter = () => {
      setCursor((prev) => ({
        ...prev,
        visible: true,
      }));
    };

    // Hide native cursor on desktop
    const style = document.createElement("style");

    style.innerHTML = `
      *,
      *::before,
      *::after {
        cursor: none !important;
      }
    `;

    document.head.appendChild(style);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      document.head.removeChild(style);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  // ============================================================
  // CURSOR STATES
  // ============================================================

  const isComingSoon = cursor.comingSoon;
  const isHovering = cursor.hovering;

  const cursorWidth = isComingSoon ? "136px" : isHovering ? "28px" : "14px";

  const cursorHeight = isComingSoon ? "38px" : isHovering ? "28px" : "14px";

  return (
    <Box
      sx={{
        position: "fixed",

        top: cursor.y,
        left: cursor.x,

        // ====================================================
        // CIRCLE → PILL
        // ====================================================

        width: cursorWidth,
        height: cursorHeight,

        borderRadius: "999px",

        /*
         * Normal cursor is centered on mouse.
         *
         * Coming soon pill anchors its LEFT edge
         * at the mouse position, so it expands RIGHT.
         */
        transform: isComingSoon
          ? "translate(0, -50%)"
          : "translate(-50%, -50%)",

        transformOrigin: "left center",

        pointerEvents: "none",
        zIndex: 999999,

        opacity: cursor.visible ? 1 : 0,

        // ====================================================
        // BACKGROUND
        // ====================================================

        background: isComingSoon
          ? "linear-gradient(135deg, rgba(255,255,255,0.82), rgba(255,255,255,0.42))"
          : isHovering
            ? "rgba(255,255,255,0.16)"
            : "#2323FF",

        // ====================================================
        // GLASS BORDER
        // ====================================================

        border:
          isComingSoon || isHovering
            ? "1px solid rgba(255,255,255,0.75)"
            : "1px solid transparent",

        // ====================================================
        // GLASS SHADOW
        // ====================================================

        boxShadow: isComingSoon
          ? `
              inset 0 1px 0 rgba(255,255,255,0.95),
              inset 0 -1px 0 rgba(255,255,255,0.25),
              0 4px 18px rgba(35,35,255,0.12),
              0 8px 28px rgba(0,0,0,0.06)
            `
          : isHovering
            ? `
              inset 0 1px 1px rgba(255,255,255,0.85),
              inset 0 -1px 1px rgba(255,255,255,0.20),
              0 3px 10px rgba(35,35,255,0.12)
            `
            : "0 0 0 3px rgba(35,35,255,0.10)",

        // ====================================================
        // BACKDROP BLUR
        // ====================================================

        backdropFilter:
          isComingSoon || isHovering ? "blur(18px) saturate(180%)" : "none",

        WebkitBackdropFilter:
          isComingSoon || isHovering ? "blur(18px) saturate(180%)" : "none",

        // ====================================================
        // CONTENT ALIGNMENT
        // ====================================================

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        overflow: "hidden",

        // ====================================================
        // ANIMATION
        // ====================================================

        transition: `
          width 0.38s cubic-bezier(0.22, 1, 0.36, 1),
          height 0.38s cubic-bezier(0.22, 1, 0.36, 1),
          transform 0.38s cubic-bezier(0.22, 1, 0.36, 1),
          background 0.25s ease,
          border 0.25s ease,
          box-shadow 0.25s ease,
          backdrop-filter 0.25s ease,
          opacity 0.15s ease
        `,
      }}
    >
      {/* ====================================================
          COMING SOON TEXT
      ==================================================== */}

      <Typography
        component="span"
        sx={{
          fontFamily: "Arial, sans-serif",

          fontSize: "10px",
          fontWeight: 600,

          letterSpacing: "0.9px",

          color: "#2323FF",

          whiteSpace: "nowrap",

          opacity: isComingSoon ? 1 : 0,

          transform: isComingSoon ? "translateX(0)" : "translateX(-8px)",

          transition: `
            opacity 0.2s ease ${isComingSoon ? "0.14s" : "0s"},
            transform 0.3s ease
          `,
        }}
      >
        COMING SOON
      </Typography>
    </Box>
  );
};

export default CustomCursor;
