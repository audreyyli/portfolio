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

export default function TwoSmallMen() {
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
      Understanding that a move is about supporting clients through life&apos;s transitions, Two Small Men aimed to transform the quoting experience. The mission was clear: <b>simplify the quoting process</b> and create a moving experience that starts with trust and ends with satisfaction.
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
            backgroundColor: '#D9E6FF',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {/* Main Image */}
          <Box
            component="img"
            src="/images/TSMMock.png"
            alt="Two Small Men Mock"
            sx={{
              maxWidth: "1300px",
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              margin: "0 auto",
            }}
          />
        </Box>

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
            title="QUOTE ESTIMATOR"
            timeline="Aug 2024 - Present"
            role="Product Designer & Developer"
            toolsSkills="Figma, React, Next.js, Wireframing, Front-End, Visual Design, User Research"
            company="Two Small Men"
            header="Simplifying Your Moving Quote Journey"
            projectType="Work Project"
            description="A system to enhance the estimation accuracy and user experience of obtaining a moving quote."
            mainColour="#D9E6FF"
            subColour="#0171EE"
          />

          <Divider sx={{ width: "100%", maxWidth: "1300px", marginTop: "70px", marginBottom: "50px", }} />
        </Box>

        {/* Project Overview */}
        <Box sx={{margin: "auto", marginTop: { xs: "400px", sm: "0", lg: "-230px" } }}>
          <ProjectOverview paragraphs={paragraphs} />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#D9E6FF",
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
              introColour="#0171EE"
              problemStatement="How might we help customers feel supported during their quoting experience?"
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