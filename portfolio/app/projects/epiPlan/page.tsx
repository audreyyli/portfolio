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

export default function EpiPlan() {
  const router = useRouter();

  const handleGoBack = () => {
      router.back();
  };

  const paragraphs = [
    <>
      Navigating daily life with dietary restrictions can be daunting. From grocery shopping to dining out, the uncertainty around food ingredients often leads to <b>axiety and limits freedom of choice</b>.
    </>,
    <>
      The lack of clear ingredient information and the potential for cross-contamination make these situations not only stressful but potentially dangerous.
    </>,
    <>
      A solution was needed to provide a sense of security by allowing individuals to track their dietary needs, find allergen-free products, and confidently identify potentially unsafe items. The vision was simple: enable people with dietary restrictions to <b>enjoy their meals with peace of mind</b>.
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
            color: "#FFB35A",
            backgroundColor: 'transparent',
            fontSize: "18px",
            boxShadow: 'none', 
            textTransform: 'none',
            transition: 'color 0.3s ease', 
            '&:hover': {
              backgroundColor: 'transparent',
              color: "#FFEED9",
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
          headerImage="/images/EpiPlanMock.png"
          blurImage="/images/epiPlanBlur.png"
          title="MOBILE APP"
          timeline="March 2024"
          role="Product Designer"
          toolsSkills="Figma, Visual Design, User Research"
          company="EpiPlan"
          header="A Companion for Dietary Restrictions"
          projectType="Design Sprint"
          description="Empowering individuals with dietary restrictions to easily navigate food choices."
          mainColour="#FFB35A"
        />
        </Box>
        <Box sx={{margin: "auto", }}>
          <ProjectOverview paragraphs={paragraphs} />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "rgba(255, 238, 217, 0.5)",
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
              introColour="#FFB35A"
              problemStatement="How might we help individuals with dietary restrictions confidently navigate shopping, dining, and social experiences?"
            />
          </Box>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
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