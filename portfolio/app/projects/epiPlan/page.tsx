"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/footer/footer.js";
import Hero from "../../components/hero/hero.js";
import Summary from "../../components/summary/summary.js";
import Section from "../../components/section/section.js";
import Problem from "../../components/problem/problem.js";
import { Box, Button, Typography, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowOutward from "@mui/icons-material/ArrowOutward";

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

export default function EpiPlan() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

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
            position: "relative",
            width: "100vw",
            height: "45vh",
            overflow: "hidden",
            backgroundColor: "#FFEED9",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Main Image */}
          <Box
            component="img"
            src="/images/epiPlanMock.png"
            alt="EpiPlan Mock"
            sx={{
              maxWidth: "1500px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              margin: "0 auto",
            }}
          />
        </Box>
        {/* Hero section */}
        <Box
          sx={{
            position: "relative",
            marginTop: "170px",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Hero
            title="EpiPlan"
            timeline="March 2024"
            role="Product Designer & Researcher"
            toolsSkills="Figma, Prototyping, Visual Design, User Research, Product Design"
            company="Product Design"
            header="Helping individuals with dietary restrictions navigate food choices confidently"
            projectType="Mobile App Design"
            description="Empowering people with dietary restrictions by simplifying food discovery, meal planning, and social navigation."
            mainColour="#FFEED9"
            subColour="#FF8506"
          />
        </Box>

        <Divider
          sx={{
            width: "100%",
            maxWidth: "1300px",
            marginTop: "70px",
            marginBottom: "50px",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Summary
          context={{
            description: (
              <>
                Globally, over <b>220 million people</b> live with food
                allergies or intolerances, and <b>32 million Americans</b>{" "}
                report serious allergies. Beyond allergies, rising dietary
                preferences (vegetarian, vegan, gluten-free, low-FODMAP) have
                made eating out more complicated than ever.
              </>
            ),
            customTitle: "Redesigning food confidence for restricted diets",
          }}
          problem={{
            description: (
              <>
                People with dietary restrictions face daily uncertainty: hidden
                allergens, unclear menus, and social friction when dining out.
              </>
            ),
            customTitle: "Daily Anxiety Around Every Meal",
          }}
          solution={{
            images: ["/images/EpiPlan/epiPlanSolution.png"],
            customTitle: "EpiPlan: Your Dietary Companion App",
          }}
          outcomes={{
            images: ["/images/EpiPlan/epiPlanOutcomes.png"],
            customTitle: "Building confidence, one meal at a time",
          }}
        />

        <Divider
          sx={{
            width: "100%",
            maxWidth: "1300px",
            marginTop: "70px",
            marginBottom: "50px",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Section
          header="HOW IT STARTED"
          description={[
            <>
              <b>Dietary restrictions</b> have become a defining part of
              everyday life for millions of people. Not only do individuals have
              allergies or intolerances, many lifestyle choices have evolved to
              include gluten-free or plat-based diets. Yet, most food systems
              are still build wth the assumption that everyone can eat the same
              way.
            </>,
            <>
              For many, simple activities like grabbing lunch with friends or
              shopping for groceries turn into{" "}
              <b>stressful and time-consuming tasks</b>.
            </>,
          ]}
        />
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

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "40px",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Section
          header="EXPLORING THE PROBLEM"
          description={[
            <>
              Canadians spend an average of <b>15 hours</b> per week worrying
              about money. There are multiple steps in how people manage their
              finances. We broke the process into 3 main steps.
            </>,
          ]}
        />
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
