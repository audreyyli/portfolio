"use client";

import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const AudreyProfileCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",

        display: "flex",
        flexDirection: "column",

        borderTopRightRadius: { xs: 24, md: 48 },
        borderBottomRightRadius: { xs: 24, md: 48 },
        borderTopLeftRadius: { xs: 24, md: 0 },
        borderBottomLeftRadius: { xs: 24, md: 0 },

        textAlign: "left",

        px: 3,
        py: 3,
        border: "1px solid #F0F0F0",
        ml: 0,
      }}
    >
      {/* ============================================
          INTRO
          ============================================ */}

      <Box sx={{ mb: 2 }}>
        <Typography
          sx={{
            fontFamily: "Bootzy, sans-serif",
            fontSize: isMobile ? "28px" : "40px",
            lineHeight: 1.1,
            letterSpacing: "0.8px",
            color: "#464F5B",
          }}
        >
          Hi! I&apos;m Audrey
        </Typography>

        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: 1.4,
            letterSpacing: "-0.6px",
            color: "#808080",
          }}
        >
          A{" "}
          <Box component="span" sx={{ color: "#2323FF" }}>
            product designer & developer
          </Box>{" "}
          who loves pushing pixels, thinking like an engineer, and obsessing
          over the details and the{" "}
          <Box
            component="span"
            sx={{
              color: "#2323FF",
              fontStyle: "italic",
            }}
          >
            why
          </Box>{" "}
          behind great products.
        </Typography>
      </Box>

      {/* ============================================
    BOTTOM SECTION
    ============================================ */}

      <Box
        sx={{
          mt: "auto",
          width: "100%",
          pt: 2,
        }}
      >
        {/* APPLE-GLASS STYLE LINKS */}

        <Box
          sx={{
            width: "100%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            px: 1.5,
            py: 1.2,

            borderRadius: "999px",

            background:
              "linear-gradient(135deg, rgba(255,255,255,0.52), rgba(255,255,255,0.2))",

            border: "1px solid rgba(255,255,255,0.8)",

            boxShadow: `
        inset 0 1px 0 rgba(255,255,255,0.85),
        inset 0 -1px 0 rgba(255,255,255,0.25),
        0 0 8px rgba(35, 35, 255, 0.15)
      `,

            backdropFilter: "blur(18px) saturate(160%)",
            WebkitBackdropFilter: "blur(18px) saturate(160%)",

            position: "relative",
            overflow: "hidden",

            "&::before": {
              content: '""',

              position: "absolute",

              top: 0,
              left: "8%",
              right: "8%",

              height: "1px",

              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)",

              pointerEvents: "none",
            },
          }}
        >
          {/* LINKEDIN */}

          <Box
            component="a"
            href="https://www.linkedin.com/in/audreylii/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              flex: 1,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              py: 1,

              position: "relative",

              fontFamily: "Arial, sans-serif",

              fontSize: {
                xs: "11px",
                sm: "12px",
              },

              fontWeight: 500,

              letterSpacing: "0.8px",

              color: "#5E6671",

              textDecoration: "none",

              transition: "all 0.25s ease",

              "&:hover": {
                color: "#2323FF",
                transform: "translateY(-1px)",
              },

              "&::after": {
                content: '""',

                position: "absolute",

                left: "20%",
                right: "20%",
                bottom: "3px",
                top: "25px",
                width: "60%",

                height: "1px",

                backgroundColor: "#2323FF",

                transform: "scaleX(0)",
                transformOrigin: "left",

                transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
              },
            }}
          >
            LINKEDIN
          </Box>

          {/* DIVIDER */}

          <Box
            sx={{
              width: "1px",
              height: "18px",

              background:
                "linear-gradient(to bottom, transparent, rgba(70,79,91,0.22), transparent)",
            }}
          />

          {/* EMAIL */}

          <Box
            component="a"
            href="mailto:li.audrey04@gmail.com"
            sx={{
              flex: 1,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              py: 1,

              position: "relative",

              fontFamily: "Arial, sans-serif",

              fontSize: {
                xs: "11px",
                sm: "12px",
              },

              fontWeight: 500,

              letterSpacing: "0.8px",

              color: "#5E6671",

              textDecoration: "none",

              transition: "all 0.25s ease",

              "&:hover": {
                color: "#2323FF",
                transform: "translateY(-1px)",
              },

              "&::after": {
                content: '""',

                position: "absolute",

                left: "20%",
                right: "20%",
                bottom: "3px",
                top: "25px",
                width: "60%",

                height: "1px",

                backgroundColor: "#2323FF",

                transform: "scaleX(0)",
                transformOrigin: "left",

                transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
              },
            }}
          >
            EMAIL
          </Box>

          {/* DIVIDER */}

          <Box
            sx={{
              width: "1px",
              height: "18px",

              background:
                "linear-gradient(to bottom, transparent, rgba(70,79,91,0.22), transparent)",
            }}
          />

          {/* RESUME */}

          <Box
            component="a"
            href="YOUR_RESUME_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              flex: 1,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              py: 1,

              position: "relative",

              fontFamily: "Arial, sans-serif",

              fontSize: {
                xs: "11px",
                sm: "12px",
              },

              fontWeight: 500,

              letterSpacing: "0.8px",

              color: "#5E6671",

              textDecoration: "none",

              transition: "all 0.25s ease",

              "&:hover": {
                color: "#2323FF",
                transform: "translateY(-1px)",
              },

              "&::after": {
                content: '""',

                position: "absolute",

                left: "20%",
                right: "20%",
                bottom: "3px",
                top: "25px",
                width: "60%",

                height: "1px",

                backgroundColor: "#2323FF",

                transform: "scaleX(0)",
                transformOrigin: "left",

                transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
              },
            }}
          >
            RESUME
          </Box>
        </Box>

        {/* COPYRIGHT */}

        <Typography
          sx={{
            fontSize: {
              xs: "13px",
              sm: "14px",
            },

            mt: 1,

            fontFamily: "Arial, sans-serif",

            letterSpacing: "-0.6px",

            color: "#808080",

            textAlign: "center",
          }}
        >
          © 2026 | Designed & coded with love & lots of iterations by Audrey Li
        </Typography>
      </Box>
    </Box>
  );
};

export default AudreyProfileCard;
