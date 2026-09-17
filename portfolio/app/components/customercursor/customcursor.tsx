"use client";

import React from "react";
import { Box, useMediaQuery } from "@mui/material";

const CustomCursor = () => {
  const isTouchDevice = useMediaQuery("(pointer: coarse)");

  const [cursor, setCursor] = React.useState({
    x: 0,
    y: 0,
    visible: false,
    hovering: false,
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

      const interactive = target.closest("a, button, [data-cursor-hover]");

      setCursor((prev) => ({
        ...prev,
        hovering: !!interactive,
      }));
    };

    const handleMouseLeave = () => {
      setCursor((prev) => ({
        ...prev,
        visible: false,
      }));
    };

    const handleMouseEnter = () => {
      setCursor((prev) => ({
        ...prev,
        visible: true,
      }));
    };

    /*
     * Completely remove the native cursor
     * everywhere on desktop.
     */
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

  return (
    <Box
      sx={{
        position: "fixed",

        top: cursor.y,
        left: cursor.x,

        /*
         * NORMAL:
         * small blue circle
         *
         * HOVER:
         * larger glass circle
         */
        width: cursor.hovering ? "28px" : "14px",
        height: cursor.hovering ? "28px" : "14px",

        borderRadius: "50%",

        /*
         * Very important:
         * cursor can't block clicks.
         */
        pointerEvents: "none",

        zIndex: 999999,

        transform: "translate(-50%, -50%)",

        opacity: cursor.visible ? 1 : 0,

        /*
         * NORMAL BLUE CURSOR
         */
        backgroundColor: cursor.hovering
          ? "rgba(255, 255, 255, 0.16)"
          : "#2323FF",

        /*
         * GLASS BORDER
         */
        border: cursor.hovering ? "1px solid rgba(255,255,255,0.70)" : "none",

        /*
         * SHADOW
         */
        boxShadow: cursor.hovering
          ? `
              inset 0 1px 1px rgba(255,255,255,0.85),
              inset 0 -1px 1px rgba(255,255,255,0.20),
              0 3px 10px rgba(35,35,255,0.12)
            `
          : "0 0 0 3px rgba(35,35,255,0.10)",

        /*
         * GLASS EFFECT
         */
        backdropFilter: cursor.hovering ? "blur(6px) saturate(180%)" : "none",

        WebkitBackdropFilter: cursor.hovering
          ? "blur(6px) saturate(180%)"
          : "none",

        transition: `
          width 0.25s cubic-bezier(0.22, 1, 0.36, 1),
          height 0.25s cubic-bezier(0.22, 1, 0.36, 1),
          background-color 0.2s ease,
          border 0.2s ease,
          box-shadow 0.2s ease,
          opacity 0.15s ease
        `,
      }}
    />
  );
};

export default CustomCursor;
