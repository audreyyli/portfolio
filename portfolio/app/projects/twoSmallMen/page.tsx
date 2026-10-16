"use client";

import React from "react";

import { Box, Typography, ThemeProvider, CssBaseline } from "@mui/material";

import { createTheme } from "@mui/material/styles";

import Hero from "../../components/hero/hero.js";
import CaseStudyLayout from "../../components/caseStudy/caseStudyLayout.js";
import CaseStudySection from "../../components/caseStudy/caseStudySection.js";
import ProjectInfo from "../../components/hero/projectHero.js";

// ============================================================
// COLORS
// ============================================================

const COLORS = {
  primary: "#29323D",
  body: "#737C87",
  muted: "#969DA6",

  accent: "#1B56A0",
  accentSoft: "#E8F1FD",

  border: "#E4E6E8",

  background: "#FFFFFF",
  softBackground: "#F5F6F7",
};

// ============================================================
// SIDEBAR
// ============================================================

const NAV_ITEMS = [
  {
    label: "Overview",
    id: "overview",
  },

  {
    label: "Problem",
    id: "problem",
  },

  {
    label: "Contribution",
    id: "contribution",
  },

  {
    label: "Outcomes",
    id: "outcomes",
  },

  {
    label: "Reflection",
    id: "reflection",
  },
];

// ============================================================
// THEME
// ============================================================

const theme = createTheme({
  typography: {
    fontFamily: '"Google Sans Flex", Arial, sans-serif',

    h1: {
      fontFamily: '"Google Sans Flex", Arial, sans-serif',

      fontWeight: 500,

      letterSpacing: "-1.5px",

      lineHeight: 1.05,
    },

    h2: {
      fontFamily: '"Google Sans Flex", Arial, sans-serif',

      fontWeight: 500,

      letterSpacing: "-1.3px",

      lineHeight: 1.08,
    },

    h3: {
      fontFamily: '"Google Sans Flex", Arial, sans-serif',

      fontWeight: 500,

      letterSpacing: "-0.7px",

      lineHeight: 1.15,
    },

    h4: {
      fontFamily: '"Google Sans Flex", Arial, sans-serif',

      fontWeight: 500,
    },

    h5: {
      fontFamily: '"Google Sans Flex", Arial, sans-serif',

      fontWeight: 500,
    },

    h6: {
      fontFamily: '"Google Sans Flex", Arial, sans-serif',

      fontWeight: 500,
    },

    body1: {
      fontFamily: '"Google Sans Flex", Arial, sans-serif',

      fontWeight: 400,

      letterSpacing: "-0.2px",
    },

    body2: {
      fontFamily: '"Google Sans Flex", Arial, sans-serif',

      fontWeight: 400,

      letterSpacing: "-0.1px",
    },
  },

  palette: {
    background: {
      default: COLORS.background,
    },

    text: {
      primary: COLORS.primary,

      secondary: COLORS.body,
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
          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          color: COLORS.primary,

          backgroundColor: COLORS.background,
        },

        "h1, h2, h3, h4, h5, h6, p": {
          fontFamily: '"Google Sans Flex", Arial, sans-serif',
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
          HERO
      ====================================================== */}

      <Hero
        image="/images/TSM/TSMMock.png"
        company="Two Small Men with Big Hearts"
        backgroundColor="#D9E6FF"
      />

      <CaseStudyLayout navItems={NAV_ITEMS}>
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
            KEY OUTCOMES
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

        <CaseSection
          id="contribution"
          eyebrow="My Contribution"
          title="Designing the experience and helping bring it into production."
        >
          <ContributionGrid />
        </CaseSection>

        <SectionDivider />

        {/* ====================================================
            OUTCOMES
        ==================================================== */}

        <CaseSection
          id="outcomes"
          eyebrow="Outcomes"
          title="Improvements across the experience led to measurable customer and business impact."
        >
          <OutcomeGrid />
        </CaseSection>

        <SectionDivider />

        {/* ====================================================
            REFLECTION
        ==================================================== */}

        <CaseSection
          id="reflection"
          eyebrow="Reflection"
          title="What I learned along the way."
        >
          <ReflectionGrid />
        </CaseSection>

        {/* ====================================================
            END
        ==================================================== */}

        <EndCard />
      </CaseStudyLayout>
    </ThemeProvider>
  );
}

// ============================================================
// CASE SECTION
// ============================================================

type CaseSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

function CaseSection({ id, eyebrow, title, children }: CaseSectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        scrollMarginTop: "80px",

        py: {
          xs: "80px",
          md: "120px",
        },
      }}
    >
      <Eyebrow>{eyebrow}</Eyebrow>

      <Typography
        component="h2"
        sx={{
          maxWidth: "780px",

          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          fontSize: {
            xs: "34px",
            sm: "40px",
            md: "46px",
          },

          fontWeight: 500,

          letterSpacing: {
            xs: "-0.9px",
            sm: "-1.1px",
            md: "-1.4px",
          },

          lineHeight: {
            xs: 1.12,
            md: 1.08,
          },

          color: COLORS.primary,

          mb: {
            xs: "52px",
            md: "68px",
          },
        }}
      >
        {title}
      </Typography>

      {children}
    </Box>
  );
}

// ============================================================
// EYEBROW
// ============================================================

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component="p"
      sx={{
        fontFamily: '"Google Sans Flex", Arial, sans-serif',

        fontSize: {
          xs: "11px",
          md: "12px",
        },

        fontWeight: 600,

        textTransform: "uppercase",

        letterSpacing: "0.09em",

        lineHeight: 1.4,

        color: COLORS.accent,

        mb: "18px",
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

        bgcolor: COLORS.border,
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
          xs: "40px",
          md: "52px",
        },

        py: "4px",

        pl: {
          xs: "18px",
          md: "22px",
        },

        borderLeft: `3px solid ${COLORS.accent}`,
      }}
    >
      <Typography
        component="p"
        sx={{
          maxWidth: "650px",

          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          fontSize: {
            xs: "15px",
            md: "16px",
          },

          lineHeight: 1.7,

          color: COLORS.body,
        }}
      >
        <Box
          component="span"
          sx={{
            fontWeight: 600,

            color: COLORS.primary,
          }}
        >
          Note:{" "}
        </Box>

        {children}
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
      component="section"
      sx={{
        pt: {
          xs: "12px",
          md: "20px",
        },

        pb: {
          xs: "80px",
          md: "110px",
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
            xs: "16px",
            sm: "16px",
            md: "20px",
          },
        }}
      >
        {outcomes.map((outcome) => (
          <Box
            key={outcome.label}
            sx={{
              minHeight: {
                sm: "170px",
              },

              p: {
                xs: "24px",
                md: "28px",
              },

              bgcolor: COLORS.accentSoft,

              border: "1px solid #D5E4F7",

              borderRadius: "12px",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontFamily: '"Google Sans Flex", Arial, sans-serif',

                fontSize: {
                  xs: "38px",
                  md: "44px",
                },

                lineHeight: 1,

                letterSpacing: "-1.7px",

                fontWeight: 600,

                color: COLORS.accent,

                mb: "16px",
              }}
            >
              {outcome.value}
            </Typography>

            <Typography
              component="p"
              sx={{
                maxWidth: "180px",

                fontFamily: '"Google Sans Flex", Arial, sans-serif',

                fontSize: {
                  xs: "15px",
                  md: "16px",
                },

                fontWeight: 400,

                lineHeight: 1.45,

                color: COLORS.body,
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
          xs: "52px",
          md: "64px",
        },

        py: {
          xs: "36px",
          md: "46px",
        },

        px: {
          xs: "28px",
          md: "42px",
        },

        bgcolor: COLORS.accentSoft,

        borderRadius: "12px",

        border: "1px solid #D5E4F7",
      }}
    >
      <Typography
        component="p"
        sx={{
          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          fontSize: {
            xs: "11px",
            md: "12px",
          },

          fontWeight: 600,

          letterSpacing: "0.09em",

          textTransform: "uppercase",

          color: COLORS.accent,

          mb: "18px",
        }}
      >
        How might we
      </Typography>

      <Typography
        component="p"
        sx={{
          maxWidth: "760px",

          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          fontSize: {
            xs: "23px",
            sm: "26px",
            md: "30px",
          },

          fontWeight: 500,

          letterSpacing: {
            xs: "-0.6px",
            md: "-0.9px",
          },

          lineHeight: 1.3,

          color: COLORS.accent,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

// ============================================================
// CONTRIBUTIONS
// ============================================================

function ContributionGrid() {
  const contributions = [
    {
      number: "01",

      title: "Product design",

      description:
        "Led Figma wireframes and UI design for the quote estimator.",
    },

    {
      number: "02",

      title: "Development",

      description:
        "Built production experiences in React and worked through engineering handoff.",
    },

    {
      number: "03",

      title: "Experimentation",

      description:
        "Ran PostHog A/B tests to evaluate changes using real customer behaviour.",
    },

    {
      number: "04",

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
          xs: "48px",
          md: "56px 80px",
        },
      }}
    >
      {contributions.map((item) => (
        <Box
          key={item.title}
          sx={{
            pt: "20px",

            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          <Typography
            component="p"
            sx={{
              fontFamily: '"Google Sans Flex", Arial, sans-serif',

              fontSize: "11px",

              fontWeight: 600,

              letterSpacing: "0.04em",

              color: COLORS.accent,

              mb: "22px",
            }}
          >
            {item.number}
          </Typography>

          <Typography
            component="h3"
            sx={{
              fontFamily: '"Google Sans Flex", Arial, sans-serif',

              fontSize: {
                xs: "21px",
                md: "23px",
              },

              fontWeight: 600,

              letterSpacing: "-0.4px",

              lineHeight: 1.25,

              color: COLORS.primary,

              mb: "12px",
            }}
          >
            {item.title}
          </Typography>

          <Typography
            component="p"
            sx={{
              maxWidth: "430px",

              fontSize: {
                xs: "15px",
                md: "16px",
              },

              lineHeight: 1.65,

              color: COLORS.body,
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

      title: "Faster quote generation",

      description:
        "Redesigned and built the quote estimator alongside sales and engineering.",
    },

    {
      value: "+20%",

      title: "Lead-to-sale conversion",

      description:
        "Improved the path from quote submission to qualified sales lead.",
    },

    {
      value: "+12%",

      title: "Completion rate",

      description:
        "A/B testing showed that a simplified estimator layout improved completion.",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "repeat(3, 1fr)",
        },

        columnGap: {
          sm: "48px",
          md: "56px",
        },

        rowGap: {
          xs: "52px",
          md: "68px",
        },
      }}
    >
      {outcomes.map((outcome) => (
        <Box
          key={`${outcome.value}-${outcome.title}`}
          sx={{
            pt: "20px",

            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          <Typography
            component="p"
            sx={{
              fontFamily: '"Google Sans Flex", Arial, sans-serif',

              fontSize: {
                xs: "36px",
                md: "40px",
              },

              lineHeight: 1,

              letterSpacing: "-1.5px",

              fontWeight: 600,

              color: COLORS.accent,

              mb: "20px",
            }}
          >
            {outcome.value}
          </Typography>

          <Typography
            component="h3"
            sx={{
              fontFamily: '"Google Sans Flex", Arial, sans-serif',

              fontSize: {
                xs: "19px",
                md: "21px",
              },

              fontWeight: 600,

              letterSpacing: "-0.4px",

              lineHeight: 1.3,

              color: COLORS.primary,

              mb: "10px",
            }}
          >
            {outcome.title}
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: {
                xs: "15px",
                md: "16px",
              },

              lineHeight: 1.65,

              color: COLORS.body,
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
      number: "01",

      title: "Test behaviour, not assumptions.",

      description:
        "A/B testing reinforced the value of validating design decisions against how customers actually use the product.",
    },

    {
      number: "02",

      title: "Design and business outcomes are connected.",

      description:
        "Working with sales helped me understand how customer-facing decisions affect internal workflows and conversion.",
    },

    {
      number: "03",

      title: "Building made me a better designer.",

      description:
        "Working in React made me more intentional about reusable patterns, responsive behaviour, and implementation constraints.",
    },

    {
      number: "04",

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
          xs: "48px",
          md: "64px 80px",
        },
      }}
    >
      {reflections.map((reflection) => (
        <Box
          key={reflection.title}
          sx={{
            pt: "20px",

            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          <Typography
            component="p"
            sx={{
              fontFamily: '"Google Sans Flex", Arial, sans-serif',

              fontSize: "11px",

              fontWeight: 600,

              letterSpacing: "0.04em",

              color: COLORS.accent,

              mb: "22px",
            }}
          >
            {reflection.number}
          </Typography>

          <Typography
            component="h3"
            sx={{
              maxWidth: "470px",

              fontFamily: '"Google Sans Flex", Arial, sans-serif',

              fontSize: {
                xs: "21px",
                sm: "22px",
                md: "24px",
              },

              fontWeight: 600,

              letterSpacing: "-0.5px",

              lineHeight: 1.3,

              color: COLORS.primary,

              mb: "14px",
            }}
          >
            {reflection.title}
          </Typography>

          <Typography
            component="p"
            sx={{
              maxWidth: "500px",

              fontSize: {
                xs: "15px",
                md: "16px",
              },

              lineHeight: 1.7,

              color: COLORS.body,
            }}
          >
            {reflection.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

// ============================================================
// END CARD
// ============================================================

function EndCard() {
  return (
    <Box
      sx={{
        mt: {
          xs: "24px",
          md: "48px",
        },

        mb: {
          xs: "64px",
          md: "100px",
        },

        py: {
          xs: "52px",
          md: "68px",
        },

        px: {
          xs: "28px",
          md: "44px",
        },

        bgcolor: COLORS.accentSoft,

        border: "1px solid #D5E4F7",

        borderRadius: {
          xs: "12px",
          md: "16px",
        },
      }}
    >
      <Typography
        component="p"
        sx={{
          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          fontSize: {
            xs: "11px",
            md: "12px",
          },

          fontWeight: 600,

          letterSpacing: "0.09em",

          textTransform: "uppercase",

          color: COLORS.accent,

          mb: "16px",
        }}
      >
        End of case study
      </Typography>

      <Typography
        component="h2"
        sx={{
          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          fontSize: {
            xs: "38px",
            sm: "44px",
            md: "50px",
          },

          fontWeight: 500,

          letterSpacing: {
            xs: "-1.1px",
            md: "-1.6px",
          },

          lineHeight: 1.05,

          color: COLORS.primary,
        }}
      >
        Thanks for reading.
      </Typography>
    </Box>
  );
}
