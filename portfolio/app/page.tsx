"use client";
import { createTheme, ThemeProvider, keyframes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/header.js";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typography, Box } from "@mui/material";
import React, { useRef } from "react";
import Footer from "./components/footer/footer.js";
import Carousel from "./components/carousel/carousel.js"
import "./globals.css";

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
    transform: translateX(-40%) translateY(30%) scale(1);
  }
  50% {
    transform: translateX(-60%) translateY(5%) scale(1.05);
  }
  100% {
    transform: translateX(-40%) translateY(30%) scale(1);
  }
`;

const floatAnimation2 = keyframes`
  0% {
    transform: translateX(-30%) translateY(-10%) scale(1);
  }
  50% {
    transform: translateX(-60%) translateY(10%) scale(1.05);
  }
  100% {
    transform: translateX(-30%) translateY(-10%) scale(1);
  }
`;

const floatAnimation3 = keyframes`
  0% {
    transform: translateX(-40%) translateY(-20%) scale(1);
  }
  50% {
    transform: translateX(-20%) translateY(0%) scale(1.05);
  }
  100% {
    transform: translateX(-40%) translateY(-20%) scale(1);
  }
`;

const theme = createTheme({
  typography: {
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
});

function MyApp() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const section1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const section2Opacity = useTransform(scrollYProgress, [0.5, 0.6, 1], [0, 1, 1]);
  const section3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);

  const triggerScroll = useTransform(scrollYProgress, [0.8, 1], [false, true]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: "fixed", top: 0, zIndex: 10, width: "100%" }}>
        <Header />
      </Box>

      <Box
        ref={containerRef}
        sx={{
          height: "300vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: { xs: "15px", sm: "20px" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Gradient 1 (Foreground Orb) */}
          <Box
            sx={{
              position: "fixed",
              top: "20%",
              left: 0,
              zIndex: -5,
              animation: `${floatAnimation1} 10s ease-in-out infinite`,
            }}
          >
            <Box
              sx={{
                "--size": "700px",
                "--speed": "10s",
                "--easing": "cubic-bezier(0.8, 0.2, 0.2, 0.8)",
                width: "var(--size)",
                height: "var(--size)",
                filter: "blur(calc(var(--size) / 5))",
                backgroundImage:
                  "linear-gradient(hsl(222, 84%, 80%, 0.7), hsl(164, 79%, 85%, 0.7))",
                animation: `${rotateAnimation} var(--speed) var(--easing) alternate infinite`,
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
            />
          </Box>

          {/* Gradient 2 (Background Orb) */}
          <Box
            sx={{
              position: "fixed",
              top: "10%",
              left: "100%",
              zIndex: -6,
              animation: `${floatAnimation2} 15s ease-in-out infinite`,
            }}
          >
            <Box
              sx={{
                "--size": "680px",
                "--speed": "20s",
                "--easing": "cubic-bezier(0.8, 0.2, 0.2, 0.8)",
                width: "var(--size)",
                height: "var(--size)",
                filter: "blur(calc(var(--size) / 6))",
                backgroundImage:
                  "linear-gradient(rgb(245, 239, 255, 0.7), rgb(205, 193, 255, 0.7))",
                animation: `${rotateAnimation} var(--speed) var(--easing) alternate infinite`,
                borderRadius: "50% 50% 70% 70% / 40% 40% 60% 60%",
              }}
            />
          </Box>

          {/* Gradient 3 (Background Orb) */}
          <Box
            sx={{
              position: "fixed",
              top: "15%",
              left: "20%",
              zIndex: -7,
              animation: `${floatAnimation3} 15s ease-in-out infinite`,
            }}
          >
            <Box
              sx={{
                "--size": "500px",
                "--speed": "15s",
                "--easing": "cubic-bezier(0.8, 0.2, 0.2, 0.8)",
                width: "var(--size)",
                height: "var(--size)",
                filter: "blur(calc(var(--size) / 6))",
                backgroundImage:
                  "linear-gradient(hsl(280, 84%, 85%, 0.7), hsl(340, 79%, 90%, 0.7))",
                animation: `${rotateAnimation} var(--speed) var(--easing) alternate infinite`,
                borderRadius: "50% 50% 70% 70% / 40% 40% 60% 60%",
              }}
            />
          </Box>

          {/* Section 1 */}
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              opacity: section1Opacity,
            }}
          >
            <Box
              sx={{
                maxWidth: "1200px",
                margin: "0 auto",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                marginTop: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "24px" },
                  fontWeight: 100,
                  textTransform: "none",
                  color: "#666",
                  fontFamily: "Lato",
                  margin: "0 auto",
                  marginBottom: "60px",
                  textAlign: "center",
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
                    color: "#DDD",
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
                      color: "#666",
                      fontSize: { xs: "60px", md: "180px" },
                      fontFamily: "Amoresa",
                      fontStyle: "normal",
                      transform: "rotate(5deg)",
                      paddingRight: "15px",
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
                      color: "#666",
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
                      color: "#666",
                      fontSize: { xs: "60px", md: "270px" },
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
                      color: "#666",
                      fontSize: { xs: "60px", md: "150px" },
                      fontFamily: "Lato",
                      fontStyle: "italic",
                      position: "relative",
                      top: "-18px",
                    }}
                  >
                    ubbly
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "24px" },
                  fontWeight: 100,
                  textTransform: "none",
                  color: "#666",
                  marginTop: "35px",
                  fontFamily: "Lato",
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                That&apos;s my approach to design. I&apos;m a product designer & developer
                with a deep passion for creating user-centered solutions that bridge
                aesthetics and functionality.
              </Typography>
            </Box>
          </motion.div>
        </Box>

        {/* Section 2 */}
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            opacity: section2Opacity,
          }}
        >
          <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          minHeight: "30vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "180px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Selected */}
          <Box sx={{ display: "flex", alignItems: "baseline", zIndex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                textTransform: "none",
                color: "#666",
                fontSize: { xs: "60px", md: "90px" },
                fontFamily: "Amoresa",
                fontStyle: "normal",
                transform: "rotate(5deg)",
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
                color: "#666",
                fontSize: { xs: "60px", md: "50px" },
                fontFamily: "Lato",
                fontStyle: "italic",
              }}
            >
              elected
            </Typography>
          </Box>

          {/* Bubbly */}
          <Box sx={{ display: "flex", alignItems: "baseline", zIndex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                textTransform: "none",
                color: "#666",
                fontSize: { xs: "60px", md: "85px" },
                fontFamily: "Amoresa",
                fontStyle: "normal",
                display: "inline-block",
                transform: "rotate(-5deg)",
                position: "relative",
                top: "-5%",
              }}
            >
              W
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                textTransform: "none",
                color: "#666",
                fontSize: { xs: "60px", md: "50px" },
                fontFamily: "Lato",
                fontStyle: "italic",
                position: "relative",
              }}
            >
              orks
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            maxWidth: "1200px",
            fontWeight: 100,
            textTransform: "none",
            color: "#666",
            marginTop: "35px",
            fontFamily: "Lato",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          Projects where I&apos;ve helped move the needle, designing impactful products that customers love.
        </Typography>
      </Box>
        </motion.div>
              {/* Section 3 (Carousel) */}
              <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            opacity: section3Opacity,
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Carousel triggerScroll={triggerScroll} />
          </Box>
        </motion.div>
      </Box>

      <Box sx={{ position: "fixed", bottom: 0, zIndex: 10, width: "100%" }}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;