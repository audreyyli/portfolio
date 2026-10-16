"use client";

import React from "react";

import {
  Box,
  Button,
  Typography,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";
import ArrowOutward from "@mui/icons-material/ArrowOutward";

import Hero from "../../components/hero/hero.js";
import CaseStudyLayout from "../../components/caseStudy/caseStudyLayout.js";
import ProjectInfo from "../../components/hero/projectHero.js";

// ============================================================
// COLOURS
// ============================================================

const COLORS = {
  primary: "#29323D",
  body: "#737C87",
  muted: "#969DA6",

  border: "#E4E6E8",
  softBackground: "#F5F6F7",

  green: "#1A5336",
  greenMuted: "#52705E",
  greenBackground: "#D3E9D4",
  greenSoft: "#F3F6F3",
  greenBorder: "#DCE7DE",
};

// ============================================================
// SIDEBAR NAVIGATION
// ============================================================

const NAV_ITEMS = [
  { label: "Overview", id: "overview" },
  { label: "Problem", id: "problem" },
  { label: "Research", id: "research" },
  { label: "Opportunity", id: "opportunity" },
  { label: "Solution", id: "solution" },
  { label: "Strategy", id: "strategy" },
  { label: "Outcome", id: "outcomes" },
  { label: "Reflection", id: "reflection" },
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
      letterSpacing: "-1.2px",
      lineHeight: 1.08,
    },

    h3: {
      fontFamily: '"Google Sans Flex", Arial, sans-serif',
      fontWeight: 500,
      letterSpacing: "-0.6px",
      lineHeight: 1.15,
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
      default: "#FFFFFF",
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
          backgroundColor: "#FFFFFF",
        },

        "h1, h2, h3, h4, h5, h6, p": {
          fontFamily: '"Google Sans Flex", Arial, sans-serif',
        },
      },
    },
  },
});

// ============================================================
// MYSPEND CASE STUDY
// ============================================================

export default function MySpend() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Hero
        image="/images/MySpend/mySpendMock.png"
        company="TD"
        backgroundColor={COLORS.greenBackground}
      />

      <CaseStudyLayout navItems={NAV_ITEMS}>
        {/* ====================================================
            PROJECT INFORMATION
        ==================================================== */}

        <ProjectInfo
          company="TD · ProdX Case Competition"
          title="Designing short-term financial management tools for TD MySpend"
          role={
            <>
              Product Manager
              <br />+ Designer
            </>
          }
          timeline="March 2025"
          team={
            <>
              4-person
              <br />
              product team
            </>
          }
          skills={
            <>
              User Research
              <br />
              Product Strategy
              <br />
              Prototyping
            </>
          }
        />

        <SectionDivider />

        {/* ====================================================
            OVERVIEW
        ==================================================== */}

        <EditorialSection id="overview">
          <Eyebrow>Overview</Eyebrow>

          <SectionHeading>
            Helping Gen Z make everyday financial management simpler and more
            actionable.
          </SectionHeading>

          <BodyCopy>
            For Ivey Product Society&apos;s ProdX case competition, our team
            explored how TD MySpend could better support Gen Z users as they
            transition toward more responsible financial management.
          </BodyCopy>

          <BodyCopy>
            We proposed a MySpend Dashboard built around short-term financial
            management tools: budgeting, planning upcoming spending, and
            reflecting on financial progress.
          </BodyCopy>
        </EditorialSection>

        {/* ====================================================
            CONTEXT
        ==================================================== */}

        <ContextCallout />

        <SectionDivider />

        {/* ====================================================
            PROBLEM
        ==================================================== */}

        <EditorialSection id="problem">
          <Eyebrow>The Problem</Eyebrow>

          <SectionHeading>
            Young users want to manage their money better, but the process can
            feel manual, unclear, and difficult to maintain.
          </SectionHeading>

          <BodyCopy>
            Our target user was a university-aged Gen Z customer transitioning
            from spontaneous spending toward more responsible financial
            management.
          </BodyCopy>

          <BodyCopy>
            We identified three central pain points: manual budget input,
            limited direction about what to do next, and static financial tools
            that make it difficult to build an ongoing habit.
          </BodyCopy>
        </EditorialSection>

        <UserNeeds />

        <SectionDivider />

        {/* ====================================================
            RESEARCH
        ==================================================== */}

        <EditorialSection id="research">
          <Eyebrow>Research</Eyebrow>

          <SectionHeading>
            Financial stress is high, while trusted and actionable guidance can
            be difficult to find.
          </SectionHeading>

          <BodyCopy>
            Our research suggested that young consumers are actively looking for
            accessible financial tools and resources while facing growing
            anxiety around the cost of living.
          </BodyCopy>

          <BodyCopy>
            At the same time, many young users rely on online financial advice.
            That creates an opportunity for a trusted financial institution to
            provide guidance that is more personalized and connected to a
            user&apos;s actual financial behaviour.
          </BodyCopy>
        </EditorialSection>

        <ResearchStats />

        <ResearchTakeaways />

        <CurrentAlternatives />

        <SectionDivider />

        {/* ====================================================
            OPPORTUNITY
        ==================================================== */}

        <EditorialSection id="opportunity">
          <Eyebrow>The Opportunity</Eyebrow>

          <SectionHeading>
            Move MySpend beyond tracking transactions and toward effortless
            financial management.
          </SectionHeading>

          <BodyCopy>
            Existing budgeting alternatives introduced their own friction.
            Spreadsheet-based budgeting requires manual input and significant
            setup, while competing banking tools can be limited by customization
            and platform constraints.
          </BodyCopy>

          <BodyCopy>
            We saw an opportunity for TD to build on MySpend&apos;s existing
            financial data and reduce the amount of work required for users to
            understand and manage their money.
          </BodyCopy>
        </EditorialSection>

        <ProblemStatement>
          How might we enable Gen Z users to seamlessly keep up with their
          financial well-being on a regular basis?
        </ProblemStatement>

        <ValueProposition />

        <SectionDivider />

        {/* ====================================================
            SOLUTION
        ==================================================== */}

        <EditorialSection id="solution">
          <Eyebrow>The Solution</Eyebrow>

          <SectionHeading>
            A MySpend Dashboard for short-term financial management.
          </SectionHeading>

          <BodyCopy>
            We proposed expanding MySpend with tactical tools that help users
            create, manage, and engage with their short-term financial goals.
          </BodyCopy>

          <BodyCopy>
            The concept addresses two gaps we identified in the existing
            experience: a lack of actionable insights and an unintuitive,
            incomplete money-management process.
          </BodyCopy>
        </EditorialSection>

        <SolutionValue />

        {/* ====================================================
            FINAL DESIGN
        ==================================================== */}

        <Box
          component="section"
          sx={{
            pt: {
              xs: "80px",
              md: "120px",
            },

            pb: {
              xs: "96px",
              md: "140px",
            },
          }}
        >
          <Eyebrow>Final Design</Eyebrow>

          <Typography
            component="h2"
            sx={{
              maxWidth: "680px",

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
                xs: "48px",
                md: "64px",
              },
            }}
          >
            Three features designed around how users manage money throughout the
            month.
          </Typography>

          <DesignFeature
            number="01"
            title="Budgeting dashboard"
            subtitle="Make budgeting easier to set up and maintain."
            gif="/images/MySpend/mySpend1.gif"
          >
            The budgeting dashboard gives users a clearer view of their income,
            bills, and spending categories in one place. Personalization helps
            users understand their spending without relying on a manually
            maintained spreadsheet.
          </DesignFeature>

          <DesignFeature
            number="02"
            title="Spending calendar"
            subtitle="Understand what's coming before you spend."
            gif="/images/MySpend/mySpend2.gif"
            reverse
          >
            The spending calendar organizes upcoming financial activity into a
            more understandable view, helping users anticipate expenses and see
            how upcoming payments fit into their short-term financial picture.
          </DesignFeature>

          <DesignFeature
            number="03"
            title="MySpend recap"
            subtitle="Turn spending behaviour into useful insight."
            gif="/images/MySpend/mySpend3.gif"
          >
            The MySpend recap gives users a personalized summary of their
            financial activity, helping them reflect on spending patterns and
            better understand their overall financial well-being.
          </DesignFeature>
        </Box>

        <SectionDivider />

        {/* ====================================================
            PRODUCT STRATEGY
        ==================================================== */}

        <ProductStrategy />

        <SectionDivider />

        {/* ====================================================
            SUCCESS METRICS
        ==================================================== */}

        <SuccessMetrics />

        {/* ====================================================
            IMPLEMENTATION
        ==================================================== */}

        <Implementation />

        {/* ====================================================
            RISKS
        ==================================================== */}

        <Risks />

        <SectionDivider />

        {/* ====================================================
            OUTCOME
        ==================================================== */}

        <Outcome />

        <SectionDivider />

        {/* ====================================================
            REFLECTION
        ==================================================== */}

        <Reflection />

        {/* ====================================================
            END
        ==================================================== */}

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

            bgcolor: COLORS.softBackground,

            border: `1px solid ${COLORS.border}`,

            borderRadius: {
              xs: "12px",
              md: "16px",
            },
          }}
        >
          <Eyebrow>End of case study</Eyebrow>

          <Typography
            component="h2"
            sx={{
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
      </CaseStudyLayout>
    </ThemeProvider>
  );
}

// ============================================================
// EDITORIAL SECTION
// ============================================================

type EditorialSectionProps = {
  id?: string;
  children: React.ReactNode;
};

function EditorialSection({ id, children }: EditorialSectionProps) {
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

        maxWidth: "780px",
      }}
    >
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
        fontSize: {
          xs: "11px",
          md: "12px",
        },

        fontWeight: 600,
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        lineHeight: 1.4,
        color: COLORS.green,
        mb: "18px",
      }}
    >
      {children}
    </Typography>
  );
}

// ============================================================
// SECTION HEADING
// ============================================================

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component="h2"
      sx={{
        maxWidth: "780px",

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
          xs: "30px",
          md: "36px",
        },
      }}
    >
      {children}
    </Typography>
  );
}

// ============================================================
// BODY COPY
// ============================================================

function BodyCopy({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component="p"
      sx={{
        maxWidth: "700px",

        fontSize: {
          xs: "16px",
          sm: "17px",
          md: "18px",
        },

        fontWeight: 400,
        letterSpacing: "-0.2px",

        lineHeight: {
          xs: 1.65,
          md: 1.7,
        },

        color: COLORS.body,

        mb: {
          xs: "20px",
          md: "24px",
        },

        "&:last-child": {
          mb: 0,
        },
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
// CONTEXT CALLOUT
// ============================================================

function ContextCallout() {
  return (
    <Box
      component="section"
      sx={{
        mb: {
          xs: "80px",
          md: "110px",
        },

        py: {
          xs: "48px",
          md: "64px",
        },

        px: {
          xs: "28px",
          sm: "40px",
          md: "48px",
        },

        bgcolor: COLORS.greenSoft,
        border: `1px solid ${COLORS.greenBorder}`,

        borderRadius: {
          xs: "12px",
          md: "16px",
        },
      }}
    >
      <Eyebrow>The Context</Eyebrow>

      <Typography
        component="p"
        sx={{
          maxWidth: "700px",

          fontSize: {
            xs: "27px",
            sm: "31px",
            md: "36px",
          },

          fontWeight: 500,

          letterSpacing: {
            xs: "-0.7px",
            md: "-1px",
          },

          lineHeight: 1.22,

          color: COLORS.green,

          m: 0,
        }}
      >
        Canadians spend an average of 15 hours per week worrying about money.
      </Typography>
    </Box>
  );
}

// ============================================================
// USER NEEDS
// ============================================================

function UserNeeds() {
  const items = [
    {
      number: "01",
      title: "Less manual work",
      description:
        "Users need a streamlined money-management experience that reduces the effort required to maintain a budget.",
    },
    {
      number: "02",
      title: "Clearer direction",
      description:
        "Users need to understand their financial standing and what actions they can take next.",
    },
    {
      number: "03",
      title: "Habit-forming tools",
      description:
        "Financial management needs to feel engaging enough for users to return to it consistently.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        pb: {
          xs: "96px",
          md: "120px",
        },
      }}
    >
      <Eyebrow>User Needs</Eyebrow>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },

          gap: {
            xs: "44px",
            md: "48px",
          },

          mt: {
            xs: "36px",
            md: "48px",
          },
        }}
      >
        {items.map((item) => (
          <InsightCard key={item.number} {...item} />
        ))}
      </Box>
    </Box>
  );
}

// ============================================================
// RESEARCH STATS
// ============================================================

function ResearchStats() {
  const stats = [
    {
      stat: "32%",
      description:
        "of surveyed 18–35 year olds lack a clear strategy for managing money setbacks.",
    },
    {
      stat: "61%",
      description: "of 18–35 year olds are stressed about their finances.",
    },
    {
      stat: "57%",
      description:
        "of individuals aged 18–29 rely on online “finfluencers” for financial advice.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        pb: {
          xs: "96px",
          md: "120px",
        },

        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(3, 1fr)",
        },

        gap: {
          xs: "48px",
          sm: "28px",
          md: "48px",
        },
      }}
    >
      {stats.map((item) => (
        <Box
          key={item.stat}
          sx={{
            pt: "22px",
            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: {
                xs: "42px",
                md: "52px",
              },

              fontWeight: 600,
              letterSpacing: "-1.5px",
              lineHeight: 1,
              color: COLORS.green,
              mb: "18px",
            }}
          >
            {item.stat}
          </Typography>

          <Typography
            component="p"
            sx={{
              maxWidth: "330px",

              fontSize: {
                xs: "15px",
                md: "16px",
              },

              lineHeight: 1.65,
              color: COLORS.primary,
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
// RESEARCH TAKEAWAYS
// ============================================================

function ResearchTakeaways() {
  const items = [
    {
      number: "01",
      title: "Accessible tools matter.",
      description:
        "Young consumers are looking for financial tools and resources that are easier to access and understand.",
    },
    {
      number: "02",
      title: "Financial anxiety is growing.",
      description:
        "Rising costs of living are increasing the pressure young users feel when managing everyday finances.",
    },
    {
      number: "03",
      title: "Trust creates an opportunity.",
      description:
        "Online advice can be misleading, creating a need for more personalized and trusted financial guidance.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        pb: {
          xs: "96px",
          md: "120px",
        },
      }}
    >
      <Eyebrow>What We Learned</Eyebrow>

      <Typography
        component="h2"
        sx={{
          maxWidth: "680px",

          fontSize: {
            xs: "30px",
            sm: "36px",
            md: "42px",
          },

          fontWeight: 500,
          letterSpacing: "-1px",
          lineHeight: 1.12,
          color: COLORS.primary,

          mb: {
            xs: "48px",
            md: "64px",
          },
        }}
      >
        Three themes shaped the direction of our solution.
      </Typography>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },

          gap: {
            xs: "44px",
            md: "48px",
          },
        }}
      >
        {items.map((item) => (
          <InsightCard key={item.number} {...item} />
        ))}
      </Box>
    </Box>
  );
}

// ============================================================
// CURRENT ALTERNATIVES
// ============================================================

function CurrentAlternatives() {
  return (
    <Box
      component="section"
      sx={{
        pb: {
          xs: "96px",
          md: "130px",
        },
      }}
    >
      <Eyebrow>Current Alternatives</Eyebrow>

      <Typography
        component="h2"
        sx={{
          maxWidth: "650px",

          fontSize: {
            xs: "30px",
            sm: "36px",
            md: "42px",
          },

          fontWeight: 500,
          letterSpacing: "-1px",
          lineHeight: 1.12,
          color: COLORS.primary,

          mb: {
            xs: "44px",
            md: "56px",
          },
        }}
      >
        Existing budgeting tools still leave users doing too much work.
      </Typography>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },

          gap: {
            xs: "24px",
            md: "28px",
          },
        }}
      >
        <AlternativeCard title="Excel">
          <AlternativeItem>Requires manual input</AlternativeItem>
          <AlternativeItem>High setup effort</AlternativeItem>
          <AlternativeItem>No automatic insights</AlternativeItem>
        </AlternativeCard>

        <AlternativeCard title="RBC NOMI Budgets">
          <AlternativeItem>Limited to RBC customers</AlternativeItem>
          <AlternativeItem>Overspend alerts can be inaccurate</AlternativeItem>
          <AlternativeItem>
            Limited manual category customization
          </AlternativeItem>
        </AlternativeCard>
      </Box>
    </Box>
  );
}

function AlternativeCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        p: {
          xs: "28px",
          md: "32px",
        },

        bgcolor: COLORS.softBackground,
        border: `1px solid ${COLORS.border}`,
        borderRadius: "12px",
      }}
    >
      <Typography
        component="h3"
        sx={{
          fontSize: {
            xs: "20px",
            md: "22px",
          },

          fontWeight: 600,
          color: COLORS.primary,
          mb: "22px",
        }}
      >
        {title}
      </Typography>

      <Box>{children}</Box>
    </Box>
  );
}

function AlternativeItem({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component="p"
      sx={{
        position: "relative",
        pl: "18px",

        fontSize: {
          xs: "15px",
          md: "16px",
        },

        lineHeight: 1.6,
        color: COLORS.body,
        mb: "10px",

        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: "0.65em",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          bgcolor: COLORS.green,
        },

        "&:last-child": {
          mb: 0,
        },
      }}
    >
      {children}
    </Typography>
  );
}

// ============================================================
// HOW MIGHT WE
// ============================================================

function ProblemStatement({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="section"
      sx={{
        my: {
          xs: "24px",
          md: "40px",
        },

        py: {
          xs: "48px",
          sm: "56px",
          md: "68px",
        },

        px: {
          xs: "28px",
          sm: "40px",
          md: "52px",
        },

        bgcolor: COLORS.greenBackground,
        border: `1px solid ${COLORS.greenBorder}`,

        borderRadius: {
          xs: "12px",
          md: "16px",
        },
      }}
    >
      <Typography
        component="p"
        sx={{
          fontSize: {
            xs: "11px",
            md: "12px",
          },

          fontWeight: 600,
          letterSpacing: "0.09em",
          textTransform: "uppercase",
          color: COLORS.green,
          m: 0,

          mb: {
            xs: "20px",
            md: "24px",
          },
        }}
      >
        How might we
      </Typography>

      <Typography
        component="p"
        sx={{
          maxWidth: "760px",

          fontSize: {
            xs: "28px",
            sm: "33px",
            md: "38px",
          },

          fontWeight: 500,

          letterSpacing: {
            xs: "-0.7px",
            md: "-1.2px",
          },

          lineHeight: {
            xs: 1.22,
            md: 1.18,
          },

          color: COLORS.green,
          m: 0,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

// ============================================================
// VALUE PROPOSITION
// ============================================================

function ValueProposition() {
  return (
    <Box
      component="section"
      sx={{
        py: {
          xs: "96px",
          md: "130px",
        },

        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          md: "0.55fr 1.45fr",
        },

        gap: {
          xs: "28px",
          md: "72px",
        },

        alignItems: "start",
      }}
    >
      <Eyebrow>Product Direction</Eyebrow>

      <Box>
        <Typography
          component="h2"
          sx={{
            fontSize: {
              xs: "30px",
              sm: "36px",
              md: "42px",
            },

            fontWeight: 500,
            letterSpacing: "-1.1px",
            lineHeight: 1.12,
            color: COLORS.primary,
            mb: "24px",
          }}
        >
          Give users short-term tactical tools that make financial management
          easier to act on.
        </Typography>

        <Typography
          component="p"
          sx={{
            maxWidth: "650px",

            fontSize: {
              xs: "16px",
              md: "17px",
            },

            lineHeight: 1.7,
            color: COLORS.body,
          }}
        >
          Rather than creating a separate financial experience, the concept
          builds on MySpend by connecting users&apos; existing financial data
          with budgeting, planning, and personalized insights.
        </Typography>
      </Box>
    </Box>
  );
}

// ============================================================
// SOLUTION VALUE
// ============================================================

function SolutionValue() {
  return (
    <Box
      sx={{
        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },

        gap: {
          xs: "24px",
          md: "28px",
        },

        pb: {
          xs: "40px",
          md: "56px",
        },
      }}
    >
      <Box
        sx={{
          p: {
            xs: "28px",
            md: "36px",
          },

          border: `1px solid ${COLORS.border}`,
          borderRadius: "12px",
        }}
      >
        <Eyebrow>Pain Points Resolved</Eyebrow>

        <Typography
          component="p"
          sx={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: COLORS.primary,
          }}
        >
          Lack of actionable insights
          <br />
          Unintuitive and incomplete money management
        </Typography>
      </Box>

      <Box
        sx={{
          p: {
            xs: "28px",
            md: "36px",
          },

          bgcolor: COLORS.greenSoft,
          border: `1px solid ${COLORS.greenBorder}`,
          borderRadius: "12px",
        }}
      >
        <Eyebrow>Value Provided</Eyebrow>

        <Typography
          component="p"
          sx={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: COLORS.green,
          }}
        >
          Digital financial tools
          <br />
          Short-term insights for a more holistic understanding of financial
          well-being
        </Typography>
      </Box>
    </Box>
  );
}

// ============================================================
// DESIGN FEATURE
// ============================================================

type DesignFeatureProps = {
  number: string;
  title: string;
  subtitle: string;
  gif: string;
  reverse?: boolean;
  children: React.ReactNode;
};

function DesignFeature({
  number,
  title,
  subtitle,
  gif,
  reverse = false,
  children,
}: DesignFeatureProps) {
  return (
    <Box
      sx={{
        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          md: "1.15fr 0.85fr",
        },

        gap: {
          xs: "40px",
          md: "72px",
        },

        alignItems: "center",

        py: {
          xs: "64px",
          md: "96px",
        },

        borderTop: `1px solid ${COLORS.border}`,
      }}
    >
      <Box
        sx={{
          order: {
            xs: 1,
            md: reverse ? 2 : 1,
          },

          minHeight: {
            xs: "420px",
            sm: "520px",
            md: "600px",
          },

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          bgcolor: COLORS.greenSoft,

          borderRadius: {
            xs: "12px",
            md: "16px",
          },

          p: {
            xs: "32px",
            sm: "48px",
            md: "56px",
          },
        }}
      >
        <Box
          component="img"
          src={gif}
          alt={`${title} interaction`}
          sx={{
            display: "block",

            width: {
              xs: "72%",
              sm: "62%",
              md: "72%",
            },

            maxWidth: "330px",
            height: "auto",
          }}
        />
      </Box>

      <Box
        sx={{
          order: {
            xs: 2,
            md: reverse ? 1 : 2,
          },

          maxWidth: "440px",
        }}
      >
        <Typography
          sx={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: COLORS.green,
            mb: "20px",
          }}
        >
          {number}
        </Typography>

        <Typography
          component="h3"
          sx={{
            fontSize: {
              xs: "30px",
              sm: "34px",
              md: "38px",
            },

            fontWeight: 500,

            letterSpacing: {
              xs: "-0.7px",
              md: "-1px",
            },

            lineHeight: 1.08,
            color: COLORS.primary,
            mb: "10px",
          }}
        >
          {title}
        </Typography>

        <Typography
          component="p"
          sx={{
            fontSize: {
              xs: "16px",
              md: "17px",
            },

            fontWeight: 600,
            lineHeight: 1.5,
            color: COLORS.green,
            mb: "22px",
          }}
        >
          {subtitle}
        </Typography>

        <Typography
          component="p"
          sx={{
            fontSize: {
              xs: "15px",
              md: "16px",
            },

            lineHeight: 1.7,
            color: COLORS.body,
          }}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  );
}

// ============================================================
// PRODUCT STRATEGY
// ============================================================

function ProductStrategy() {
  const items = [
    {
      number: "01",
      title: "Improve retention and MAUs",
      description:
        "Personalized budget and summary features can give users more reasons to return to MySpend regularly.",
    },
    {
      number: "02",
      title: "Enable product conversion",
      description:
        "Relevant TD product recommendations can connect financial behaviour and goals with other products in the TD ecosystem.",
    },
    {
      number: "03",
      title: "Streamline banking",
      description:
        "Spending visualizations and simpler budget setup can make financial information easier to understand and manage.",
    },
  ];

  return (
    <Box
      component="section"
      id="strategy"
      sx={{
        scrollMarginTop: "80px",

        py: {
          xs: "96px",
          md: "130px",
        },
      }}
    >
      <Eyebrow>Product Strategy</Eyebrow>

      <SectionHeading>
        Connecting user value to measurable business goals.
      </SectionHeading>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },

          gap: {
            xs: "44px",
            md: "48px",
          },

          mt: {
            xs: "52px",
            md: "68px",
          },
        }}
      >
        {items.map((item) => (
          <InsightCard key={item.number} {...item} />
        ))}
      </Box>
    </Box>
  );
}

// ============================================================
// SUCCESS METRICS
// ============================================================

function SuccessMetrics() {
  const items = [
    {
      title: "Increase user retention",
      metrics: [
        "% of users using the new feature",
        "Feature click-through rate",
        "Increase in monthly active users",
      ],
    },
    {
      title: "Increase adoption of TD products",
      metrics: [
        "Click-through rate on product promotions",
        "% of users adopting new products",
      ],
    },
    {
      title: "Improve Gen Z financial health",
      metrics: [
        "% of users spending less than typical",
        "Qualitative user feedback",
      ],
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: {
          xs: "96px",
          md: "130px",
        },
      }}
    >
      <Eyebrow>Success Metrics</Eyebrow>

      <SectionHeading>
        Measuring whether the product creates value for users and TD.
      </SectionHeading>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },

          gap: {
            xs: "24px",
            md: "28px",
          },

          mt: {
            xs: "48px",
            md: "64px",
          },
        }}
      >
        {items.map((item) => (
          <Box
            key={item.title}
            sx={{
              p: {
                xs: "28px",
                md: "32px",
              },

              bgcolor: COLORS.softBackground,
              border: `1px solid ${COLORS.border}`,
              borderRadius: "12px",
            }}
          >
            <Typography
              component="h3"
              sx={{
                fontSize: {
                  xs: "19px",
                  md: "21px",
                },

                fontWeight: 600,
                lineHeight: 1.3,
                color: COLORS.primary,
                mb: "24px",
              }}
            >
              {item.title}
            </Typography>

            {item.metrics.map((metric) => (
              <Typography
                key={metric}
                component="p"
                sx={{
                  position: "relative",
                  pl: "17px",

                  fontSize: {
                    xs: "14px",
                    md: "15px",
                  },

                  lineHeight: 1.6,
                  color: COLORS.body,
                  mb: "10px",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: "0.65em",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    bgcolor: COLORS.green,
                  },

                  "&:last-child": {
                    mb: 0,
                  },
                }}
              >
                {metric}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ============================================================
// IMPLEMENTATION
// ============================================================

function Implementation() {
  const stages = [
    {
      date: "Jul 2025",
      title: "Pilot",
      description: "Internal testing with the team.",
      criteria:
        "Resolve usage bugs, validate feature discoverability, and ensure the UI is intuitive.",
    },
    {
      date: "Oct 2025",
      title: "Beta 1",
      description:
        "Early testing with the top 5% of MySpend monthly active users.",
      criteria: "25% product CTR and 10% product MAUs.",
    },
    {
      date: "Dec 2025",
      title: "Beta 2",
      description:
        "Expand testing to the top 20% of MySpend monthly active users.",
      criteria: "40% product CTR and 30% product MAUs.",
    },
    {
      date: "Mar 2026",
      title: "Launch",
      description: "National rollout to Canadian users.",
      criteria:
        "Continuously monitor success metrics and average time between visits.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        pb: {
          xs: "96px",
          md: "130px",
        },
      }}
    >
      <Eyebrow>Implementation</Eyebrow>

      <Typography
        component="h2"
        sx={{
          maxWidth: "680px",

          fontSize: {
            xs: "30px",
            sm: "36px",
            md: "42px",
          },

          fontWeight: 500,
          letterSpacing: "-1.1px",
          lineHeight: 1.12,
          color: COLORS.primary,

          mb: {
            xs: "48px",
            md: "64px",
          },
        }}
      >
        Roll out gradually, learn from behaviour, then scale.
      </Typography>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },

          gap: {
            xs: "40px",
            md: "28px",
          },
        }}
      >
        {stages.map((stage) => (
          <Box
            key={stage.title}
            sx={{
              pt: "20px",
              borderTop: `2px solid ${COLORS.green}`,
            }}
          >
            <Typography
              component="p"
              sx={{
                fontSize: "11px",
                fontWeight: 600,
                color: COLORS.green,
                mb: "18px",
              }}
            >
              {stage.date}
            </Typography>

            <Typography
              component="h3"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: COLORS.primary,
                mb: "12px",
              }}
            >
              {stage.title}
            </Typography>

            <Typography
              component="p"
              sx={{
                fontSize: "14px",
                lineHeight: 1.6,
                color: COLORS.body,
                mb: "18px",
              }}
            >
              {stage.description}
            </Typography>

            <Typography
              component="p"
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: 1.6,
                color: COLORS.primary,
              }}
            >
              Exit criteria: {stage.criteria}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ============================================================
// RISKS
// ============================================================

function Risks() {
  const items = [
    {
      number: "01",
      title: "Lack of product awareness",
      description:
        "Cross-promote the updated MySpend experience across the TD ecosystem and other products and services.",
    },
    {
      number: "02",
      title: "Preference for external tools",
      description:
        "Use product promotion and referral incentives to encourage Gen Z customers to try the new MySpend features.",
    },
    {
      number: "03",
      title: "Glitches and integration issues",
      description:
        "Use beta testing to identify bugs while supporting users through FAQs, live chat, and contact support.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        pb: {
          xs: "96px",
          md: "130px",
        },
      }}
    >
      <Eyebrow>Risks & Mitigations</Eyebrow>

      <Typography
        component="h2"
        sx={{
          maxWidth: "650px",

          fontSize: {
            xs: "30px",
            sm: "36px",
            md: "42px",
          },

          fontWeight: 500,
          letterSpacing: "-1px",
          lineHeight: 1.12,
          color: COLORS.primary,

          mb: {
            xs: "48px",
            md: "64px",
          },
        }}
      >
        Anticipating what could prevent adoption.
      </Typography>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },

          gap: {
            xs: "44px",
            md: "48px",
          },
        }}
      >
        {items.map((item) => (
          <InsightCard key={item.number} {...item} />
        ))}
      </Box>
    </Box>
  );
}

// ============================================================
// REUSABLE INSIGHT CARD
// ============================================================

function InsightCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <Box
      sx={{
        pt: "20px",
        borderTop: `1px solid ${COLORS.border}`,
      }}
    >
      <Typography
        sx={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.04em",
          color: COLORS.green,
          mb: "22px",
        }}
      >
        {number}
      </Typography>

      <Typography
        component="h3"
        sx={{
          fontSize: {
            xs: "20px",
            md: "22px",
          },

          fontWeight: 600,
          letterSpacing: "-0.4px",
          lineHeight: 1.3,
          color: COLORS.primary,
          mb: "12px",
        }}
      >
        {title}
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
        {description}
      </Typography>
    </Box>
  );
}

// ============================================================
// OUTCOME
// ============================================================

function Outcome() {
  return (
    <Box
      component="section"
      id="outcomes"
      sx={{
        scrollMarginTop: "80px",

        py: {
          xs: "96px",
          md: "130px",
        },
      }}
    >
      <Eyebrow>Outcome</Eyebrow>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "0.8fr 1.2fr",
          },

          gap: {
            xs: "48px",
            md: "72px",
          },

          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "36px",
                sm: "42px",
                md: "48px",
              },

              fontWeight: 500,

              letterSpacing: {
                xs: "-1px",
                md: "-1.5px",
              },

              lineHeight: 1.08,
              color: COLORS.primary,
              mb: "24px",
            }}
          >
            Placing 2nd overall at ProdX.
          </Typography>

          <Typography
            component="p"
            sx={{
              maxWidth: "500px",

              fontSize: {
                xs: "16px",
                md: "17px",
              },

              lineHeight: 1.7,
              color: COLORS.body,
              mb: "30px",
            }}
          >
            Our team presented the MySpend Dashboard concept as a product
            strategy for helping Gen Z users manage their short-term financial
            well-being.
          </Typography>

          <Button
            variant="text"
            endIcon={<ArrowOutward />}
            href="https://drive.google.com/file/d/1CyC69mQ5sxbagyYlnLnlSXeNmLEGpnZT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            disableRipple
            sx={{
              p: 0,
              minWidth: 0,

              fontSize: {
                xs: "14px",
                md: "15px",
              },

              fontWeight: 600,
              letterSpacing: "-0.2px",
              textTransform: "none",
              color: COLORS.green,

              "& .MuiButton-endIcon": {
                transition: "transform 0.25s ease",
              },

              "&:hover": {
                backgroundColor: "transparent",
                color: COLORS.green,

                "& .MuiButton-endIcon": {
                  transform: "translate(2px, -2px)",
                },
              },
            }}
          >
            View our presentation
          </Button>
        </Box>

        <Box
          component="img"
          src="/images/MySpend/winningPic.png"
          alt="Team presenting the TD MySpend concept at ProdX"
          sx={{
            display: "block",
            width: "100%",
            height: "auto",

            borderRadius: {
              xs: "10px",
              md: "14px",
            },
          }}
        />
      </Box>
    </Box>
  );
}

// ============================================================
// REFLECTION
// ============================================================

function Reflection() {
  const reflections = [
    {
      number: "01",
      title: "Start with the underlying job.",
      description:
        "Mapping the jobs users were trying to accomplish helped us move beyond individual features and think about the broader financial-management experience.",
    },

    {
      number: "02",
      title: "Connect user value to product value.",
      description:
        "The strongest product direction was not only useful to users; it also connected to retention, engagement, product adoption, and TD&apos;s broader ecosystem.",
    },

    {
      number: "03",
      title: "A concept needs a path to market.",
      description:
        "Thinking through success metrics, rollout stages, exit criteria, and risks made the proposal feel like a product strategy rather than only a design concept.",
    },
  ];

  return (
    <Box
      component="section"
      id="reflection"
      sx={{
        scrollMarginTop: "80px",

        py: {
          xs: "96px",
          md: "130px",
        },
      }}
    >
      <Eyebrow>Reflection</Eyebrow>

      <Typography
        component="h2"
        sx={{
          fontSize: {
            xs: "34px",
            sm: "40px",
            md: "46px",
          },

          fontWeight: 500,

          letterSpacing: {
            xs: "-0.9px",
            md: "-1.4px",
          },

          lineHeight: 1.08,
          color: COLORS.primary,

          mb: {
            xs: "52px",
            md: "68px",
          },
        }}
      >
        What I learned
      </Typography>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },

          gap: {
            xs: "48px",
            md: "48px",
          },
        }}
      >
        {reflections.map((item) => (
          <InsightCard key={item.number} {...item} />
        ))}
      </Box>
    </Box>
  );
}
