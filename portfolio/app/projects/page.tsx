"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import Carousel from "../components/carousel/carousel.js";
import { Typography, Box } from "@mui/material";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    image: "/images/instagram.png",
    company: "Instagram",
    title: "Improving personalization for Instagram's explore page",
    type: "Product Strategy",
    category: "Fellowship Project",
    year: "2024",
    link: "/projects/instagram",
    color: "#FFC7DE",
  },
  {
    image: "/images/twoSmallMen.png",
    company: "Two Small Men with Big Hearts",
    title: "Simplifying your moving quote journey",
    type: "Design & Front-End",
    category: "Internship",
    year: "2024",
    link: "/projects/twoSmallMen",
    color: "#D9E6FF",
  },
  {
    image: "/images/epiPlan.png",
    company: "EpiPlan",
    title: "Designing a companion for dietary needs",
    type: "Product Design",
    category: "Mobile App",
    year: "2023",
    link: "/projects/epiPlan",
    color: "#FFEED9",
  },
  {
    image: "/images/wuksa.png",
    company: "Western university korean student association",
    title: "Re-envisioning WUKSA's brand identity",
    type: "Brand Design",
    category: "Design Strategy",
    year: "2023",
    link: "/projects/wuksa",
    color: "#ECD9FF",
  },
];

const theme = createTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const triggerScroll = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: "fixed", top: 0, zIndex: 10, width: "100%" }}>
        <Header />
      </Box>
      <Box
        ref={containerRef}
        sx={{
          minHeight: "100vh",
          padding: "20px",
          margin: "0 auto",
          maxWidth: "1200px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "30px", md: "50px" },
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Project Library
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            color: "#666",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Projects where I&apos;ve helped move the needle, designing impactful
          products that customers love.
        </Typography>
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            overflow: "hidden", // Ensures the carousel doesn't spill outside the container
          }}
        >
          <Carousel triggerScroll={triggerScroll} items={items} />
        </Box>
      </Box>
      <Box sx={{ position: "fixed", bottom: 0, zIndex: 10, width: "100%" }}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Projects;