"use client";
import { createTheme, ThemeProvider, keyframes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/header.js";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typography, Box } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import Footer from "./components/footer/footer.js";
import Carousel from "./components/carousel/carousel.js"
import "./globals.css";

const items = [
  {
    image: "/images/instagram.png",
    company: "Instagram",
    title: "Improving personalization for Instagram's explore page",
    type: "Product Strategy",
    category: "Fellowship Project",
    year: "2024",
    link: "/projects/instagram",
    color: "#FFC7DE"
  },
  {
    image: "/images/twoSmallMen.png",
    company: "Two Small Men with Big Hearts",
    title: "Simplifying your moving quote journey",
    type: "Design & Front-End",
    category: "Internship",
    year: "2024",
    link: "/projects/twoSmallMen",
    color: "#D9E6FF"
  },
  {
    image: "/images/epiPlan.png",
    company: "EpiPlan",
    title: "Designing a companion for dietary needs",
    type: "Product Design",
    category: "Mobile App",
    year: "2023",
    link: "/projects/epiPlan",
    color: "#FFEED9"
  },
  {
    image: "/images/wuksa.png",
    company: "Western university korean student association",
    title: "Re-envisioning WUKSA's brand identity",
    type: "Brand Design",
    category: "Design Strategy",
    year: "2023",
    link: "/projects/wuksa",
    color: "#ECD9FF"
  },
];

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
  const section3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 1], [0, 1, 1]);

  const triggerScroll = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  const [isSection3Active, setIsSection3Active] = useState(false);

  useEffect(() => {
    const unsubscribe = section3Opacity.onChange((value) => {
      setIsSection3Active(value === 1);
    });
    return () => unsubscribe();
  }, [section3Opacity]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: "fixed", top: 0, zIndex: 10, width: "100%" }}>
        <Header />
      </Box>

      <Box
        ref={containerRef}
        sx={{
          height: "400vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: { xs: "15px", md: "18px", lg: "20px" },
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
              top: { xs: "45%", lg: "20%" },
              left: 0,
              zIndex: -5,
              animation: `${floatAnimation1} 10s ease-in-out infinite`,
            }}
          >
            <Box
              sx={{
                "--size": {
                  xs: "500px",
                  md: "700px",
                  lg: "700px",
                },
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
                "--size": {
                  xs: "480px",
                  md: "680px",
                  lg: "680px",
                },
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
                "--size": {
                  xs: "300px",
                  md: "500px",
                  lg: "500px",
                },
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
                marginTop: { xs: "-30px", lg: "10px" } ,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "22px", lg: "24px" },
                  fontWeight: 100,
                  textTransform: "none",
                  color: "#666",
                  fontFamily: "Lato",
                  margin: "0 auto",
                  marginBottom: { xs: "30px", md: "60px" },
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
                    fontWeight: 900,
                    position: "absolute",
                    color: "#BBB",
                    fontSize: { xs: "180px", md: "300px" },
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    zIndex: 0,
                    transform: "translate(-50%, -50%)",
                    top: { xs: "70%", md: "25%" },
                    left: { xs: "55%", md: "53%" },
                  }}
                >
                  &
                </Typography>

                {/* Simple */}
                <Box sx={{ display: "flex", alignItems: "baseline", zIndex: 1, }}>
                  <Typography
                    variant="h4"
                    sx={{
                      textTransform: "none",
                      color: "#666",
                      fontSize: { xs: "110px", md: "180px" },
                      fontFamily: "Amoresa",
                      fontStyle: "normal",
                      transform: "rotate(5deg)",
                      paddingRight: { xs: "0px", md: "15px" },
                      display: "inline-block",
                      position: { xs: "relative", md: undefined },
                      top: "-20px",
                      left: { xs: "20%", md: "0" }
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
                      fontSize: { xs: "80px", md: "150px" },
                      fontFamily: "Lato",
                      fontStyle: "italic",
                      position: { xs: "relative", md: undefined },
                      left: { xs: "20%", md: "0" }
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
                      fontSize: { xs: "150px", md: "270px" },
                      fontFamily: "Amoresa",
                      fontStyle: "normal",
                      paddingRight: "10px",
                      display: "inline-block",
                      transform: "rotate(-5deg)",
                      position: "relative",
                      top: { xs: "130px", md: "20px" },
                      left: { xs: "-80%", md: "0" }
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
                      fontSize: { xs: "80px", md: "150px" },
                      fontFamily: "Lato",
                      fontStyle: "italic",
                      position: "relative",
                      top: { xs: "105px", md: "-18px" },
                      left: { xs: "-80%", md: "0" }
                    }}
                  >
                    ubbly
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "22px", lg: "24px" },
                  fontWeight: 100,
                  textTransform: "none",
                  color: "#666",
                  marginTop: { xs: "90px", md: "5px" },
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
        <Box is="section2" sx={{ position: "relative"}}>
        <motion.div
          style={{
            position: "fixed",
            top: "-8%",
            left: 0,
            width: "100%",
            height: "50vh",
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
          marginTop: { xs: "210px", md: "180px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "30px", md: "50px" },
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
                fontSize: { xs: "60px", md: "70px" },
                fontFamily: "Amoresa",
                fontStyle: "normal",
                transform: "rotate(5deg)",
                display: "inline-block",
                position: "relative",
                top: "-10px",
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
                fontSize: { xs: "40px", md: "40px" },
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
                fontSize: { xs: "55px", md: "65px" },
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
                fontSize: { xs: "40px", md: "40px" },
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
            fontSize: { xs: "20px", md: "22px", lg: "24px" },
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
            top: "65px",
            left: 0,
            width: "100%",
            height: "50vh",
            opacity: section3Opacity,
            zIndex: isSection3Active ? 2 : -1,
            pointerEvents: isSection3Active ? "auto" : "none",
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
              paddingLeft: { xs: "10px", lg: "0"},
              marginTop: { xs: "30px", md: "0"},
            }}
          >
            <Carousel triggerScroll={triggerScroll} items={items} />
          </Box>
        </motion.div>
      </Box>
      </Box>

      <Box sx={{ position: "fixed", bottom: 0, zIndex: 10, width: "100%" }}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;