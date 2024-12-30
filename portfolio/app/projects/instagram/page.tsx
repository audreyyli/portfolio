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

export default function Instagram() {
  const router = useRouter();

  const handleGoBack = () => {
      router.back();
  };

  const paragraphs = [
    <>
      Instagram is a platform that connects over a billion users worldwide. But at its core, Instagram is more than just a social app—it&apos;s a space for people to <b>explore their passions</b>, <b>build communities</b>, and <b>find content that truly resonates with them</b>.
    </>,
    <>
      One of Instagram&apos;s primary goals has always been to help users explore what they love. But while Instagram excels in many ways, there&apos;s a growing gap in its ability to <b>personalize content discovery</b> for its users. 
    </>,
    <>
      The mission was clear: empower user to <b>tailor their Explore Page</b>, creating a more personalized and engaging content discovery expereince.
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
            color: "#FFC7DE",
            backgroundColor: 'transparent',
            fontSize: "18px",
            boxShadow: 'none', 
            textTransform: 'none',
            transition: 'color 0.3s ease', 
            '&:hover': {
              backgroundColor: 'transparent',
              color: "#FFE7F1",
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
            headerImage="/images/TSMMock.png"
            blurImage="/images/TSMBlur.png"
            title="PRODUCT STRATEGY"
            timeline="Oct 2024 - Dec 2024"
            role="Product Designer & Analyst"
            toolsSkills="Figma, Prototyping, Visual Design, User Research, Product Design"
            company="Instagram"
            header="Improving personalization for Instagram's explore page"
            projectType="Fellowship Project"
            description="A feature to enhance content discovery and provide personalized recommendations through a customizable Instagram Explore page."
            mainColour="#FFC7DE"
          />
        </Box>

        {/* Project Overview */}
        <Box sx={{margin: "auto", }}>
          <ProjectOverview paragraphs={paragraphs} />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "rgba(255, 231, 241, 0.5)",
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
            padding: { xs: "10px", sm: "20px" },
          }}
          >
            <Problem
              intro="AND SO, I ASKED:"
              introColour="#FFC7DE"
              problemStatement="How can Instagram improve its content discovery to create a personalized feed expereince for users?"
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