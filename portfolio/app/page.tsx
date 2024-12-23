"use client";
import { createTheme, ThemeProvider, keyframes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/header.js";
import Aside from "./components/projects/aside.js";
import { motion } from "framer-motion";
import { Typography, Box, Button } from "@mui/material";
import React from "react";
import Footer from "./components/footer/footer.js";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import "./globals.css"

// Define floating orb animation
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const floatAnimation1 = keyframes`
  0% {
    transform: translateX(-40%) translateY(20%) scale(1);
  }
  50% {
    transform: translateX(-60%) translateY(10%) scale(1.05);
  }
  100% {
    transform: translateX(-40%) translateY(20%) scale(1);
  }
`;

const floatAnimation2 = keyframes`
  0% {
    transform: translateX(-30%) translateY(-10%) scale(1);
  }
  50% {
    transform: translateX(-50%) translateY(5%) scale(1.05);
  }
  100% {
    transform: translateX(-30%) translateY(-10%) scale(1);
  }
`;

const floatAnimation3 = keyframes`
  0% {
    transform: translateX(-40%) translateY(20%) scale(1);
  }
  50% {
    transform: translateX(-20%) translateY(35%) scale(1.05);
  }
  100% {
    transform: translateX(-40%) translateY(20%) scale(1);
  }
`;

// Create the theme
const theme = createTheme({
  typography: {
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Lato, sans-serif',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box
        sx={{
          width: "100vw",
          maxHeight: "100vh",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          marginTop: "-90px",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: { xs: "15px", sm: "20px" },
          }}
        >
          {/* Gradient 1 (Foreground Orb) */}
          <Box
            sx={{
              position: "absolute",
              transform: "translateX(50%) translateY(60%)",
              left: 0,
              zIndex: -1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: `${floatAnimation1} 10s ease-in-out infinite`,
            }}
          >
            <Box
              sx={{
                "--size": "650px",
                "--speed": "50s",
                "--easing": "cubic-bezier(0.8, 0.2, 0.2, 0.8)",
                width: "var(--size)",
                height: "var(--size)",
                filter: "blur(calc(var(--size) / 5))",
                backgroundImage:
                  "linear-gradient(hsl(222, 84%, 80%), hsl(164, 79%, 85%))",
                animation: `${rotateAnimation} var(--speed) var(--easing) alternate infinite`,
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
            />
          </Box>

          {/* Gradient 2 (Background Orb) */}
          <Box
            sx={{
              position: "absolute",
              transform: "translateX(-100%) translateY(-90%)",
              left: "100%",
              zIndex: -2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: `${floatAnimation2} 15s ease-in-out infinite`,
            }}
          >
            <Box
              sx={{
                "--size": "680px",
                "--speed": "60s",
                "--easing": "cubic-bezier(0.8, 0.2, 0.2, 0.8)",
                width: "var(--size)",
                height: "var(--size)",
                filter: "blur(calc(var(--size) / 6))",
                backgroundImage:
                  "linear-gradient(rgb(245, 239, 255), rgb(205, 193, 255))",
                animation: `${rotateAnimation} var(--speed) var(--easing) alternate infinite`,
                borderRadius: "50% 50% 70% 70% / 40% 40% 60% 60%",
              }}
            />
          </Box>

          {/* Gradient 3 (Background Orb) */}
          <Box
            sx={{
              position: "absolute",
              transform: "translateX(-100%) translateY(-10%)",
              left: "20%",
              zIndex: -2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: `${floatAnimation3} 15s ease-in-out infinite`,
            }}
          >
            <Box
              sx={{
                "--size": "400px",
                "--speed": "60s",
                "--easing": "cubic-bezier(0.8, 0.2, 0.2, 0.8)",
                width: "var(--size)",
                height: "var(--size)",
                filter: "blur(calc(var(--size) / 6))",
                backgroundImage:
                  "linear-gradient(hsl(280, 84%, 85%), hsl(340, 79%, 90%))",
                animation: `${rotateAnimation} var(--speed) var(--easing) alternate infinite`,
                borderRadius: "50% 50% 70% 70% / 40% 40% 60% 60%",
              }}
            />
          </Box>

          {/* Main Section */}
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: "25px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                textTransform: "none",
                color: "#666",
                marginTop: "35px",
                fontFamily: "Lato",
                margin: "0 auto",
                marginBottom: "60px",
              }}
            >
              Hi! I&apos;m Audrey!
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "110px",
                margin: "0 auto",
                position: "relative",
              }}
            >
              {/* Ampersand */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  position: "absolute",
                  color: "#EEE",
                  fontSize: { xs: "200px", md: "300px" },
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  zIndex: 0,
                  transform: "translate(-50%, -50%)",
                  top: "25%",
                  left: "53%",
                }}
              >
                &
              </Typography>

              {/* Simple */}
              <Box sx={{ display: "flex", alignItems: "baseline", zIndex: 1 }}>
                <Typography
                  variant="h4"
                  sx={{
                    textTransform: "none",
                    color: "#222",
                    fontSize: { xs: "60px", md: "150px" },
                    fontFamily: "Amoresa",
                    fontStyle: "normal",
                    transform: "rotate(5deg)",
                    paddingRight: "30px",
                    display: "inline-block",
                    position: "relative",
                    top: "-20px",
                  }}
                >
                  S
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    textTransform: "none",
                    color: "#222",
                    fontSize: { xs: "60px", md: "150px" },
                    fontFamily: "Lato",
                    fontStyle: "italic",
                  }}
                >
                  imple
                </Typography>
              </Box>

              {/* Bubbly */}
              <Box sx={{ display: "flex", alignItems: "baseline", zIndex: 1 }}>
                <Typography
                  variant="h4"
                  sx={{
                    textTransform: "none",
                    color: "#222",
                    fontSize: { xs: "60px", md: "220px" },
                    fontFamily: "Amoresa",
                    fontStyle: "normal",
                    paddingRight: "10px",
                    display: "inline-block",
                    transform: "rotate(-5deg)",
                    position: "relative",
                    top: "20px",
                  }}
                >
                  b
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    textTransform: "none",
                    color: "#222",
                    fontSize: { xs: "60px", md: "150px" },
                    fontFamily: "Lato",
                    fontStyle: "italic",
                  }}
                >
                  ubbly
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                textTransform: "none",
                color: "#666",
                marginTop: "35px",
                fontFamily: "Lato",
                margin: "0 auto",
              }}
            >
              That&apos;s my approach to design. I&apos;m a product designer & developer
              with a deep passion for creating user-centered solutions that bridge
              aesthetics and functionality.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: "-125px" }}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;