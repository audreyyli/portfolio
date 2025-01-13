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
      sm: 380,
      md: 1180,
      lg: 1280,
      xl: 1350,
    },
  },
});

export default function Wuksa() {
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
      WUKSA wanted to move beyond being seen as just the &#34;Korean club&#34; and aspired to be a community where all cultures felt welcomed. The goal was clear: <b>design a modern brand identity</b> that resonated with students from all backgrounds.
    </>
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: "1300px", // Max width for content area
          margin: "0 auto",
          padding: { xs: "10px", sm: "20px" }, // Smaller padding for mobile
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
            backgroundColor: '#ECD9FF',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {/* Main Image */}
          <Box
            component="img"
            src="/images/wuksaMock.png"
            alt="WUKSA Mock"
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
            marginTop: "-60px",
            height: "85vh",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Hero
            title="WUKSA"
            timeline="August 2023"
            role="Lead Designer"
            toolsSkills="Figma, Visual Design, Adobe Creative Suite"
            company="Brand Design"
            header="Crafting a Bold New Identity"
            projectType="Design Strategy"
            description="Re-envisioning WUKSA's brand to bring a fresh, modern identity across all platforms."
            mainColour="#ECD9FF"
            subColour="#7852A9"
          />

          <Divider sx={{ width: "100%", maxWidth: "1300px", marginTop: "70px", marginBottom: "50px", }} />
        </Box>
          {/* Project Overview */}
        <Box sx={{margin: "auto", marginTop: { xs: "360px", sm: "0", lg: "-250px" } }}>
          <ProjectOverview paragraphs={paragraphs} />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#ECD9FF",
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
              introColour="#7852A9"
              problemStatement="How might we revitalize our brand identity?"
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