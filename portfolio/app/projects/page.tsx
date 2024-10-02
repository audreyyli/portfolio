"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import Projects from "../components/projects/project.js";
import { Typography, Box, Grid } from "@mui/material";
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

function projects({}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header />
        {/* Page Wrapper with max-width 1000px and centered content */}
        <Box
          sx={{
            maxWidth: "1200px", // Restrict the page to 1200px width
            margin: "0 auto", // Center the content horizontally
            padding: "20px", // Optional padding
          }}
        >
          {/* Page Title */}
          <Typography
            variant="h2"
            sx={{ marginTop: "50px", fontWeight: "bold", textTransform: "none", color: "#444" }}
          >
            Project Library
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textTransform: "none",
              color: "#888",
            }}
          >
            All projects made by Audrey throughout the years.
          </Typography>

        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariant}
        >
          {/* Grid Layout for Projects */}
          <Grid container spacing={3} sx={{ marginTop: "30px" }}>
            {/* Project 1 */}
            <Grid item xs={12} sm={6} md={6}>
              <Projects
                image="/images/TSMHeader.png"
                title="Junior Developer"
                company="Two Small Men with Big Hearts"
                link="/construction"
                time="June 2023 - Present"
                skills={["Web development", "SEO", "Figma", "React", "Next.js"]}
              />
            </Grid>

            {/* Project 2 */}
            <Grid item xs={12} sm={6} md={6}>
              <Projects
                image="/images/EpiPlanHeader.png"
                title="Owner/Founder"
                company="bubbli"
                link="/construction"
                time="May 2022 - Present"
                skills={["Figma", "UI/UX", "Product Design"]}
              />
            </Grid>

            {/* Project 3 */}
            <Grid item xs={12} sm={6} md={6}>
              <Projects
                image="/images/WUKSAHeader.png"
                title="VP Of Graphics"
                company="WesternU KSA"
                link="/construction"
                time="March 2023 - April 2024"
                skills={["Figma", "Graphic Design", "Social Media Management", "Content Creation"]}
              />
            </Grid>
          </Grid>
          </motion.div>

          {/* Footer */}
          <Box sx={{ marginTop: "120px" }}>
            <Footer />
          </Box>
        </Box>
    </ThemeProvider>
  );
}

export default projects;