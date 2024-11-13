"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/header/header.js";
import Footer from "@/app/components/footer/footer.js";
import Hero from "../../components/hero/hero.js";
import ProjectOverview from "../../components/overview/overview.js"
import Problem from "../../components/problem/problem.js"
import { Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Create a custom theme with Apple system fonts
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

export default function twosmallmen() {
  const router = useRouter();

  const handleGoBack = () => {
      router.back();
  };

  const paragraphs = [
    <>
      Two Small Men with Big Hearts Moving Co. has always treated clients like family, ensuring their moves are filled with care and trust.
    </>,
    <>
      Obtaining a moving quote is a critical step within this journey. However, the process can be <b>long, cumbersome, and tedious</b>, pushing people towards faster competitors.
    </>,
    <>
      Understanding that a move is about supporting clients through life's transitions, Two Small Men aimed to transform the quoting experience. The mission was clear: <b>simplify the quoting process</b> and create a moving experience that starts with trust and ends with satisfaction.
    </>
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={handleGoBack}
          sx={{
            marginTop: "20px",
            color: "#77A5FF",
            backgroundColor: 'transparent',
            fontSize: "18px",
            boxShadow: 'none', 
            textTransform: 'none',
            transition: 'color 0.3s ease', 
            '&:hover': {
              backgroundColor: 'transparent',
              color: "#D9E6FF",
            },
            '&:active': {
              boxShadow: 'none', 
              backgroundColor: "transparent",
            },
          }}
        >
          Back
        </Button>
        {/* Hero section */}
        <Box
          sx={{
            marginTop: "-30px",
            height: "85vh",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Hero
            headerImage="/images/TSM.png"
            blurImage="/images/TSMBlur.png"
            title="QUOTE ESTIMATOR"
            timeline="Aug 2024 - Present"
            role="Product Designer & Developer"
            toolsSkills="Figma, React, Next.js, Wireframing, Front-End, Visual Design, User Research"
            company="Two Small Men"
            header="Simplifying Your Moving Quote Journey"
            projectType="Work Project"
            description="A system to enhance the estimation accuracy and user experience of obtaining a moving quote."
            mainColour="#77A5FF"
            hoverColour="#D9E6FF"
          />
        </Box>

        {/* Project Overview */}
        <Box sx={{margin: "auto", }}>
          <ProjectOverview paragraphs={paragraphs} />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "rgba(217, 230, 255, 0.5)",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          marginTop: "25px",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
          >
            <Problem
              intro="AND SO, I ASKED:"
              introColour="#77A5FF"
              problemStatement="How might we help customers feel supported during their quoting experience?"
            />
          </Box>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          width: "100%",
        }}
      >
        <Box sx={{ marginTop: "120px" }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}