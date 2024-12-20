"use client";
import { createTheme, ThemeProvider, keyframes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/header.js";
import Aside from "./components/projects/aside.js";
import { motion } from "framer-motion";
import { Typography, Box, Button } from "@mui/material";
import React from "react";
import Footer from "./components/footer/footer.js";
import { Typewriter } from "react-simple-typewriter";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import Link from "next/link";

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
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            overflow: "hidden",
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
              marginTop: "-55px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textTransform: "none",
                color: "#222",
                fontSize: { xs: "60px", md: "110px" },
              }}
            >
              <Typewriter
                words={[
                  "I'm Audrey",
                  "I'm a product designer",
                  "I'm a developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                textTransform: "none",
                color: "#666",
                marginTop: "24px",
              }}
            >
              Simple & bubbly. That&apos;s my approach to design. I&apos;m a product designer & developer
              with a deep passion for creating user-centered solutions that bridge
              aesthetics and functionality.
            </Typography>

            {/* Learn More Button */}
            <Link href="/about" passHref>
              <Button
                variant="contained"
                endIcon={<ArrowOutward />}
                sx={{
                  marginTop: "20px",
                  fontSize: "24px",
                  textTransform: "none",
                  backgroundColor: "transparent",
                  color: "#666",
                  border: "2px solid #666",
                  borderRadius: "50px",
                  paddingX: "20px",
                  paddingBottom: "10px",
                  boxShadow: "none",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  "& .MuiButton-endIcon": {
                    transition: "transform 0.3s ease-in-out",
                  },
                  "&:hover": {
                    color: "#111",
                    boxShadow: "none",
                    borderColor: "#111",
                    "& .MuiButton-endIcon": {
                      transform: "rotate(45deg)",
                    },
                    "&::after": {
                      width: "100%",
                    },
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "15px",
                    left: "0",
                    height: "2px",
                    backgroundColor: "#111",
                    width: "0%",
                    transition: "width 0.4s ease",
                    marginX: "20px",
                    maxWidth: "65%",
                  },
                }}
              >
                Learn More
              </Button>
            </Link>
          </Box>

          {/* Other content */}
          <Typography
            variant="h4"
            sx={{
              textTransform: "none",
              color: "#444",
              fontWeight: "bold",
              marginTop: { xs: "50px", sm: "70px", md: "100px" },
              textAlign: "center",
              fontSize: { xs: "30px", sm: "40px", md: "50px" },
            }}
          >
            My Recent Works
          </Typography>

          {/* Use motion divs for your projects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <Aside
              image="/images/TSM.png"
              blurImage="/images/TSMBlur.png"
              title="Simplifying Your Moving Quote Journey"
              company="Two Small Men with Big Hearts"
              description="A streamlined quoting system enhancing estimation accuracy and user experience for scalable efficiency."
              link="/projects/twoSmallMen"
              flip={false}
              width={{ xs: "100%", sm: "600px", md: "700px" }}
              height={{ xs: "100%", sm: "600px", md: "700px" }}
              marginTop={{ xs: "50px", sm: "80px" }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <Aside
              image="/images/EpiPlan.png"
              blurImage="/images/epiPlanBlur.png"
              title="A Companion for Dietary Restrictions"
              company="EpiPlan"
              description="A mobile app empowering individuals with dietary restrictions to easily navigate food choices and find suitable options through intuitive, research-driven solutions."
              link="/projects/epiPlan"
              flip={true}
              width="700px"
              height="700px"
              marginTop="100px"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <Aside
              image="/images/WUKSA.png"
              blurImage="/images/wuksaBlur.png"
              title="Crafting a Bold New Identity"
              company="WesternU Korean Student Association"
              description="Re-envisioning WUKSA's brand to bring a fresh, modern identity across all platforms."
              link="/projects/wuksa"
              flip={false}
              width="550px"
              height="550px"
              marginTop="100px"
            />
          </motion.div>
          <Box sx={{ marginTop: { xs: "80px", sm: "120px" } }}>
            <Footer />
          </Box>
        </Box>
        </Box>
    </ThemeProvider>
  );
}

export default MyApp;