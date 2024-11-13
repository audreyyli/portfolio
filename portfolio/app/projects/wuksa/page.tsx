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

export default function wuksa() {
  const router = useRouter();

  const handleGoBack = () => {
      router.back();
  };

  const paragraphs = [
    <>
      Western University Korean Student Association (WUKSA) is one of the largest campus organizations, dedicated to celebrating multiculturism and sharing Korean culture.
    </>,
    <>
      In a campus filled with numerous clubs, <b>standing out and capturing attention</b> is a challenge. This meant that creating an <b>eye-catching</b> brand identity was crucial.
    </>,
    <>
      WUKSA wanted to move beyond being seen as just the "Korean club" and aspired to be a community where all cultures felt welcomed. The goal was clear: <b>design a modern brand identity</b> that resonated with students from all backgrounds.
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
          maxWidth: "1200px", // Max width for content area
          margin: "0 auto",
          padding: { xs: "10px", sm: "20px" }, // Smaller padding for mobile
        }}
      >
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={handleGoBack}
          sx={{
            marginTop: "20px",
            color: "#D2A7FD",
            backgroundColor: 'transparent',
            fontSize: "18px",
            boxShadow: 'none', 
            textTransform: 'none',
            transition: 'color 0.3s ease', 
            '&:hover': {
              backgroundColor: 'transparent',
              color: "#ECD9FF",
            },
            '&:active': {
              boxShadow: 'none', 
              backgroundColor: "transparent",
            },
          }}
        >
          Back
        </Button>
        <Box
          sx={{
            marginTop: "-30px",
            height: "85vh",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Hero
            headerImage="/images/WUKSA.png"
            blurImage="/images/wuksaBlur.png"
            title="REBRANDING"
            timeline="August 2023"
            role="Lead Designer"
            toolsSkills="Figma, Visual Design, Adobe Creative Suite"
            company="WUKSA"
            header="Crafting a Bold New Identity"
            projectType="Rebrand"
            description="Re-envisioning WUKSA's brand to bring a fresh, modern identity across all platforms."
            mainColour="#D2A7FD"
            hoverColour="#ECD9FF"
          />
        </Box>
          {/* Project Overview */}
        <Box sx={{margin: "auto", }}>
          <ProjectOverview paragraphs={paragraphs} />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "rgba(236, 217, 255, 0.5)",
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
              introColour="#D2A7FD"
              problemStatement="How might we revitalize our brand identity?"
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