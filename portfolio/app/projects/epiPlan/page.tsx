"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/footer/footer.js";
import Hero from "../../components/hero/hero.js";
import ProjectOverview from "../../components/overview/overview.js"
import Problem from "../../components/problem/problem.js"
import { Box, Button, Typography, Divider } from "@mui/material";
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

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: "1300px",
          margin: "0 auto",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />} 
          onClick={handleGoBack}
          disableRipple
          sx={{
            textTransform: "none",
            fontWeight: 400,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            color: "#888",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            padding: "5px 10px",
            transition: "color 0.3s ease, transform 0.3s ease",
            "&:hover": {
              color: "#111",
              background: "none",
              "&::after": {
                width: "100%",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "8px",
              left: "0",
              height: "2px",
              backgroundColor: "#111",
              width: "0%",
              transition: "width 0.4s ease",
            },
          }}
        >
          BACK
        </Button>

        <Box
          sx={{
            marginTop: "20px",
            position: 'relative',
            width: '100vw',
            height: '45vh',
            overflow: 'hidden',
            backgroundColor: '#FFEED9',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {/* Main Image */}
          <Box
            component="img"
            src="/images/epiPlanMock.png"
            alt="EpiPlan Mock"
            sx={{
              maxWidth: "1300px",
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              margin: "0 auto",
            }}
          />
        </Box>

        <Box
          sx={{
            marginTop: "-80px",
            height: "85vh",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
        <Hero
          title="EPIPLAN"
          timeline="March 2024"
          role="Product Designer"
          toolsSkills="Figma, Visual Design, User Research"
          company="Product Design"
          header="A Companion for Dietary Restrictions"
          projectType="Mobile App"
          description="Empowering individuals with dietary restrictions to easily navigate food choices."
          mainColour="#FFEED9"
          subColour="#FF8506"
        />

        <Divider sx={{ width: "100%", maxWidth: "1300px", marginTop: "70px", }} />
        </Box>
        <Box sx={{margin: "auto", marginTop: { xs: "350px", sm: "0", lg: "-220px" } }}>
          <ProjectOverview paragraphs={paragraphs} />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#FFEED9",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          marginTop: "25px",
        }}
      >
        <Box
          sx={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: { xs: "10px", sm: "20px" },
          }}
          >
            <Problem
              intro="AND SO, I ASKED:"
              introColour="#FF8506"
              problemStatement="How might we help individuals with dietary restrictions confidently navigate shopping, dining, and social experiences?"
            />
          </Box>
      </Box>

      <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "42px",
            textTransform: "uppercase",
            fontWeight: 100,
            color: "#888",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          More coming soon...
        </Typography>

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