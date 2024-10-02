"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import Work from "../components/work/work.js";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import React from "react";

// Create a custom theme with Apple system fonts
const theme = createTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

// Animation variants for fading in and rising up
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function work({}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* Page Wrapper with max-width 1000px and centered content */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto", // Center the content horizontally
          padding: "20px", // Optional padding
        }}
      >
        <Typography
          variant="h2"
          sx={{ marginTop: "50px", fontWeight: "bold", textTransform: "none", color: "#444" }}
        >
          Work Experience
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textTransform: "none",
            color: "#888",
          }}
        >
          Work experience made by Audrey throughout the years.
        </Typography>

        {/* First Work Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant} // Use the animation variant
          viewport={{ once: true }} // Only animate once when in view
        >
          <Work
            image="/images/TSM.png"
            blurImage="/images/TSMBlur.png"
            title="Junior Developer"
            company="Two Small Men with Big Hearts"
            link="/construction"
            time="June 2023 - Present"
            skills={["Web development", "SEO", "Figma", "React", "Next.js"]}
            flip={false}
            width="550px"
            height="550px"
            marginTop="80px"
          />
        </motion.div>

        {/* Second Work Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
        >
          <Work
            image="/images/bubbliFeature.png"
            blurImage="/images/bubbliBlur.png"
            title="Owner/Founder"
            company="bubbli"
            link="/construction"
            time="May 2022 - Present"
            skills={["Web development", "SEO", "Figma", "React", "Next.js", "Social Media Management"]}
            flip={true}
            width="550px"
            height="550px"
            marginTop="120px"
          />
        </motion.div>

        <Box sx={{ marginTop: "120px",}}>
            <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default work;