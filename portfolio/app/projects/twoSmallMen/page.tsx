"use client";

import React from "react";

import { Box, Typography, ThemeProvider, CssBaseline } from "@mui/material";

import { createTheme } from "@mui/material/styles";

import Hero from "../../components/hero/hero.js";

import CaseStudyLayout from "../../components/caseStudy/caseStudyLayout.js";

import CaseStudySection from "../../components/caseStudy/caseStudySection.js";

import ProjectInfo from "../../components/hero/projectHero.js";

// ============================================================
// THEME
// ============================================================

const theme = createTheme({
  typography: {
    // Default
    fontFamily: "Arial, sans-serif",

    // ========================================================
    // BOOTZY — DISPLAY / TITLES
    // Matches CareerTimeline company typography
    // ========================================================

    h1: {
      fontFamily: "Bootzy, sans-serif",
      fontWeight: 400,
      letterSpacing: "1px",
      lineHeight: 0.9,
    },

    h2: {
      fontFamily: "Bootzy, sans-serif",
      fontWeight: 400,
      letterSpacing: "1px",
      lineHeight: 0.9,
    },

    h3: {
      fontFamily: "Bootzy, sans-serif",
      fontWeight: 400,
      letterSpacing: "1px",
      lineHeight: 0.9,
    },

    h4: {
      fontFamily: "Bootzy, sans-serif",
      fontWeight: 400,
      letterSpacing: "1px",
      lineHeight: 0.9,
    },

    h5: {
      fontFamily: "Bootzy, sans-serif",
      fontWeight: 400,
      letterSpacing: "1px",
      lineHeight: 0.9,
    },

    h6: {
      fontFamily: "Bootzy, sans-serif",
      fontWeight: 400,
      letterSpacing: "1px",
      lineHeight: 0.9,
    },

    // ========================================================
    // ARIAL — BODY
    // ========================================================

    body1: {
      fontFamily: "Arial, sans-serif",
      fontWeight: 400,
      letterSpacing: "-0.35px",
    },

    body2: {
      fontFamily: "Arial, sans-serif",
      fontWeight: 400,
      letterSpacing: "-0.3px",
    },
  },

  palette: {
    background: {
      default: "#FFFFFF",
    },

    text: {
      primary: "#464F5B",
      secondary: "#808080",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1280,
      xl: 1536,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Arial, sans-serif",
          color: "#464F5B",
        },

        p: {
          fontFamily: "Arial, sans-serif",
          letterSpacing: "-0.35px",
        },

        "h1, h2, h3, h4, h5, h6": {
          fontFamily: "Bootzy, sans-serif",
          fontWeight: 400,
          letterSpacing: "1px",
        },
      },
    },
  },
});

// ============================================================
// TWO SMALL MEN CASE STUDY
// ============================================================

export default function TwoSmallMen() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ======================================================
          HERO IMAGE
      ====================================================== */}

      <Hero
        image="/images/TSMMock.png"
        company="Two Small Men with Big Hearts"
        backgroundColor="#D9E6FF"
      />

      {/* ======================================================
          CASE STUDY
      ====================================================== */}

      <CaseStudyLayout>
        {/* ====================================================
            PROJECT INFORMATION
        ==================================================== */}

        <ProjectInfo
          company="Two Small Men with Big Hearts Moving Co."
          title="Simplifying the moving quote journey"
          role={<>Product Designer + Developer</>}
          timeline={<>Sep 2024 – Aug 2025</>}
          team={
            <>
              1 Product Manager
              <br />2 Developers
            </>
          }
          skills={
            <>
              Product Strategy
              <br />
              Full Stack Engineering
              <br />
              Experimentation
            </>
          }
        />

        <SectionDivider />

        {/* ====================================================
            OVERVIEW
        ==================================================== */}

        <CaseStudySection
          id="overview"
          eyebrow="Overview"
          title="Making it easier to go from planning a move to getting a quote."
        >
          <Typography>
            I worked across product design and front-end development to improve
            key digital experiences for Two Small Men with Big Hearts.
          </Typography>

          <Typography>
            My primary focus was the quote estimator, a key conversion point
            between customers planning their move and the sales team helping
            them book it.
          </Typography>

          <ConfidentialityNote>
            Some product and design details are confidential, so this case study
            focuses on the problem, my contribution, and measurable outcomes.
          </ConfidentialityNote>
        </CaseStudySection>

        {/* ====================================================
            TOP OUTCOMES
        ==================================================== */}

        <TopOutcomes />

        <SectionDivider />

        {/* ====================================================
            PROBLEM
        ==================================================== */}

        <CaseStudySection
          id="problem"
          eyebrow="The Problem"
          title="Moving quotes need a lot of information, but asking for too much creates friction."
        >
          <Typography>
            Customers need a quick and understandable way to describe their
            move, while the sales team needs enough information to provide an
            accurate estimate.
          </Typography>

          <Typography>
            The challenge was balancing those needs without making the quote
            experience unnecessarily difficult to complete.
          </Typography>

          <ProblemStatement>
            How might we reduce friction in the quote experience while still
            collecting the information needed to generate qualified leads?
          </ProblemStatement>
        </CaseStudySection>

        <SectionDivider />

        {/* ====================================================
            CONTRIBUTION
        ==================================================== */}

        <Box
          component="section"
          sx={{
            py: {
              xs: "72px",
              md: "110px",
            },
          }}
        >
          <Eyebrow>My Contribution</Eyebrow>

          <Typography
            component="h2"
            variant="h2"
            sx={{
              maxWidth: "720px",

              fontSize: {
                xs: "38px",
                sm: "44px",
                md: "52px",
              },

              lineHeight: 1.08,

              color: "#202A36",

              mb: {
                xs: "48px",
                md: "64px",
              },
            }}
          >
            Designing the experience and helping bring it into production.
          </Typography>

          <ContributionGrid />
        </Box>

        <SectionDivider />

        {/* ====================================================
            OUTCOMES
        ==================================================== */}

        <Box
          component="section"
          id="outcomes"
          sx={{
            scrollMarginTop: "80px",

            py: {
              xs: "72px",
              md: "120px",
            },
          }}
        >
          <Eyebrow>Outcomes</Eyebrow>

          <Typography
            component="h2"
            variant="h2"
            sx={{
              maxWidth: "720px",

              fontSize: {
                xs: "38px",
                sm: "44px",
                md: "52px",
              },

              lineHeight: 1.08,

              color: "#202A36",

              mb: {
                xs: "56px",
                md: "72px",
              },
            }}
          >
            Improvements across the experience led to measurable customer and
            business impact.
          </Typography>

          <OutcomeGrid />
        </Box>

        <SectionDivider />

        {/* ====================================================
            REFLECTION
        ==================================================== */}

        <Box
          component="section"
          id="reflection"
          sx={{
            scrollMarginTop: "80px",

            py: {
              xs: "80px",
              md: "130px",
            },
          }}
        >
          <Eyebrow>Reflection</Eyebrow>

          <Typography
            component="h2"
            variant="h2"
            sx={{
              fontSize: {
                xs: "42px",
                sm: "50px",
                md: "60px",
              },

              lineHeight: 1.05,

              color: "#202A36",

              mb: {
                xs: "56px",
                md: "72px",
              },
            }}
          >
            What I learned
          </Typography>

          <ReflectionGrid />
        </Box>

        {/* ====================================================
            END
        ==================================================== */}

        <Box
          sx={{
            pt: {
              xs: "40px",
              md: "80px",
            },

            pb: {
              xs: "60px",
              md: "100px",
            },
          }}
        >
          <Typography
            component="h2"
            variant="h2"
            sx={{
              fontSize: {
                xs: "40px",
                md: "54px",
              },

              lineHeight: 1.05,

              color: "#202A36",
            }}
          >
            Thanks for reading.
          </Typography>
        </Box>
      </CaseStudyLayout>
    </ThemeProvider>
  );
}

// ============================================================
// EYEBROW
// ============================================================

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component="p"
      variant="body2"
      sx={{
        fontSize: "13px",

        textTransform: "uppercase",

        // Intentional positive spacing for small uppercase labels
        letterSpacing: "0.08em",

        color: "#969DA6",

        mb: "22px",
      }}
    >
      {children}
    </Typography>
  );
}

// ============================================================
// DIVIDER
// ============================================================

function SectionDivider() {
  return (
    <Box
      sx={{
        width: "100%",

        height: "1px",

        bgcolor: "#E8EAED",
      }}
    />
  );
}

// ============================================================
// CONFIDENTIALITY NOTE
// ============================================================

function ConfidentialityNote({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        mt: {
          xs: "44px",
          md: "56px",
        },

        pl: {
          xs: "20px",
          md: "24px",
        },

        borderLeft: "2px solid #AEB5BD",
      }}
    >
      <Typography
        component="p"
        variant="body1"
        sx={{
          fontSize: {
            xs: "17px",
            md: "19px",
          },

          lineHeight: 1.65,

          fontStyle: "italic",

          color: "#69727C",
        }}
      >
        Note: {children}
      </Typography>
    </Box>
  );
}

// ============================================================
// TOP OUTCOMES
// ============================================================

function TopOutcomes() {
  const outcomes = [
    {
      value: "65%+",
      label: "faster quote generation",
    },

    {
      value: "+20%",
      label: "lead-to-sale conversion",
    },

    {
      value: "+12%",
      label: "quote completion rate",
    },
  ];

  return (
    <Box
      sx={{
        pt: {
          xs: "16px",
          md: "24px",
        },

        pb: {
          xs: "72px",
          md: "100px",
        },
      }}
    >
      <Eyebrow>Key Outcomes</Eyebrow>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, 1fr)",
          },

          gap: {
            xs: "36px",
            sm: "32px",
          },
        }}
      >
        {outcomes.map((outcome) => (
          <Box key={outcome.label}>
            {/* Metric stays Arial */}

            <Typography
              sx={{
                fontFamily: "Arial, Helvetica, sans-serif",

                fontSize: {
                  xs: "34px",
                  md: "40px",
                },

                lineHeight: 1,

                letterSpacing: "-0.6px",

                fontWeight: 400,

                color: "#202A36",

                mb: "12px",
              }}
            >
              {outcome.value}
            </Typography>

            <Typography
              component="p"
              variant="body1"
              sx={{
                fontSize: {
                  xs: "15px",
                  md: "16px",
                },

                lineHeight: 1.5,

                color: "#89919A",
              }}
            >
              {outcome.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ============================================================
// PROBLEM STATEMENT
// ============================================================

function ProblemStatement({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        mt: {
          xs: "48px",
          md: "60px",
        },

        p: {
          xs: "24px",
          md: "36px",
        },

        bgcolor: "#F8FAFC",

        border: "1px solid #E4E8EC",
      }}
    >
      <Typography
        component="p"
        variant="body1"
        sx={{
          fontSize: "15px",

          fontStyle: "italic",

          color: "#48515B",

          mb: "24px",
        }}
      >
        The problem statement
      </Typography>

      <Box
        sx={{
          p: {
            xs: "28px 22px",
            md: "36px 42px",
          },

          bgcolor: "#E7F0FC",

          textAlign: "center",
        }}
      >
        {/* This is a statement/title, so Bootzy */}

        <Typography
          component="h3"
          variant="h3"
          sx={{
            fontSize: {
              xs: "26px",
              md: "32px",
            },

            lineHeight: 1.25,

            color: "#1769C2",
          }}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  );
}

// ============================================================
// CONTRIBUTIONS
// ============================================================

function ContributionGrid() {
  const contributions = [
    {
      title: "Product design",

      description:
        "Led Figma wireframes and UI design for the quote estimator.",
    },

    {
      title: "Development",

      description:
        "Built production experiences in React and worked through engineering handoff.",
    },

    {
      title: "Experimentation",

      description:
        "Ran PostHog A/B tests to evaluate changes using real customer behaviour.",
    },

    {
      title: "Growth UX",

      description:
        "Improved search, mobile navigation, and experiences across 40+ city pages.",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
        },

        gap: {
          xs: "44px",
          md: "56px 72px",
        },
      }}
    >
      {contributions.map((item) => (
        <Box key={item.title}>
          {/* Title = Bootzy */}

          <Typography
            component="h3"
            variant="h3"
            sx={{
              fontSize: {
                xs: "27px",
                md: "31px",
              },

              lineHeight: 1.2,

              color: "#202A36",

              mb: "12px",
            }}
          >
            {item.title}
          </Typography>

          {/* Description = Arial */}

          <Typography
            component="p"
            variant="body1"
            sx={{
              fontSize: {
                xs: "16px",
                md: "17px",
              },

              lineHeight: 1.65,

              color: "#858D96",
            }}
          >
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

// ============================================================
// OUTCOMES
// ============================================================

function OutcomeGrid() {
  const outcomes = [
    {
      value: "65%+",

      title: "faster quote generation",

      description:
        "Redesigned and built the quote estimator alongside sales and engineering.",
    },

    {
      value: "+20%",

      title: "lead-to-sale conversion",

      description:
        "Improved the path from quote submission to qualified sales lead.",
    },

    {
      value: "+12%",

      title: "completion rate",

      description:
        "A/B testing showed that a simplified estimator layout improved completion.",
    },

    {
      value: "+40%",

      title: "organic traffic flow",

      description:
        "Built search and filtering to improve content discovery for high-intent visitors.",
    },

    {
      value: "-60%",

      title: "content retrieval time",

      description: "Made relevant moving content faster and easier to find.",
    },

    {
      value: "+50%",

      title: "organic traffic",

      description:
        "Improved mobile UX and aligned patterns across 40+ city pages.",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(3, 1fr)",
        },

        columnGap: {
          md: "48px",
        },

        rowGap: {
          xs: "52px",
          md: "72px",
        },
      }}
    >
      {outcomes.map((outcome) => (
        <Box key={`${outcome.value}-${outcome.title}`}>
          {/* Metric = Arial */}

          <Typography
            sx={{
              fontFamily: "Arial, Helvetica, sans-serif",

              fontSize: {
                xs: "34px",
                md: "38px",
              },

              lineHeight: 1,

              letterSpacing: "-0.6px",

              fontWeight: 400,

              color: "#202A36",

              mb: "12px",
            }}
          >
            {outcome.value}
          </Typography>

          {/* Outcome title = Bootzy */}

          <Typography
            component="h3"
            variant="h3"
            sx={{
              fontSize: {
                xs: "24px",
                md: "27px",
              },

              lineHeight: 1.2,

              color: "#303A46",

              mb: "14px",
            }}
          >
            {outcome.title}
          </Typography>

          {/* Description = Arial */}

          <Typography
            component="p"
            variant="body1"
            sx={{
              fontSize: {
                xs: "15px",
                md: "16px",
              },

              lineHeight: 1.65,

              color: "#89919A",
            }}
          >
            {outcome.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

// ============================================================
// REFLECTIONS
// ============================================================

function ReflectionGrid() {
  const reflections = [
    {
      title: "Test behaviour, not assumptions.",

      description:
        "A/B testing reinforced the value of validating design decisions against how customers actually use the product.",
    },

    {
      title: "Design and business outcomes are connected.",

      description:
        "Working with sales helped me understand how customer-facing decisions affect internal workflows and conversion.",
    },

    {
      title: "Building made me a better designer.",

      description:
        "Working in React made me more intentional about reusable patterns, responsive behaviour, and implementation constraints.",
    },

    {
      title: "Small improvements compound.",

      description:
        "Changes across quoting, search, navigation, and content discovery collectively improved the customer journey.",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },

        gap: {
          xs: "52px",
          md: "72px 64px",
        },
      }}
    >
      {reflections.map((reflection) => (
        <Box key={reflection.title}>
          {/* Reflection title = Bootzy */}

          <Typography
            component="h3"
            variant="h3"
            sx={{
              fontSize: {
                xs: "28px",
                md: "34px",
              },

              lineHeight: 1.2,

              color: "#202A36",

              mb: "18px",
            }}
          >
            {reflection.title}
          </Typography>

          {/* Reflection paragraph = Arial */}

          <Typography
            component="p"
            variant="body1"
            sx={{
              fontSize: {
                xs: "16px",
                md: "17px",
              },

              lineHeight: 1.7,

              color: "#89919A",
            }}
          >
            {reflection.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
