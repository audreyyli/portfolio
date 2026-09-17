"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";

const BinocularGirl = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );

  const [look, setLook] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;

      const centerY = rect.top + rect.height / 2;

      const distanceX = event.clientX - centerX;

      const distanceY = event.clientY - centerY;

      /*
        Normalize mouse position from -1 to 1.

        -1 = far left / top
         0 = center
         1 = far right / bottom
      */

      const normalizedX = Math.max(
        -1,
        Math.min(1, distanceX / (window.innerWidth * 0.4))
      );

      const normalizedY = Math.max(
        -1,
        Math.min(1, distanceY / (window.innerHeight * 0.4))
      );

      setLook({
        x: normalizedX,
        y: normalizedY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [prefersReducedMotion]);

  const moveX = Math.max(10, look.x < 0 ? look.x * 18 : look.x * 12);
  const moveY = look.y > 0 ? look.y * 12 : look.y * 7;
  const horizontalTilt = look.x * 3;
  const verticalTilt = look.y > 0 ? look.y * 12 : look.y * 2;
  const rotate = horizontalTilt + verticalTilt;

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",

        width: "100%",

        maxWidth: {
          xs: "360px",
          md: "500px",
        },

        /*
          Change this if your exported files
          use a different canvas size.
        */
        aspectRatio: "1718 / 768",

        mx: "auto",

        userSelect: "none",
        pointerEvents: "none",
      }}
    >
      {/* =====================================
          STATIC BODY + COUCH + CAT
          ===================================== */}

      <Box
        component="img"
        src="/images/audrey-animation/girlbody.png"
        alt="Audrey relaxing on a couch"
        sx={{
          position: "absolute",

          inset: 0,

          width: "100%",
          height: "100%",

          objectFit: "contain",

          zIndex: 1,
        }}
      />

      {/* =====================================
          MOVING HEAD + HANDS + BINOCULARS
          ===================================== */}

      <Box
        component="img"
        src="/images/audrey-animation/girlhead.png"
        alt=""
        aria-hidden="true"
        sx={{
          position: "absolute",

          inset: 0,

          width: "100%",
          height: "100%",

          objectFit: "contain",

          transform: `
          translate(
            calc(10px + ${moveX}px),
            calc(2px + ${moveY}px)
          )
          rotate(${rotate}deg)
          scale(0.92)
        `,

          transformOrigin: "70% 40%",

          transition: "transform 150ms cubic-bezier(0.22, 1, 0.36, 1)",

          zIndex: 2,
        }}
      />
    </Box>
  );
};

export default BinocularGirl;
