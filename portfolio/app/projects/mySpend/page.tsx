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
import CaseStudySection from "../../components/caseStudy/caseStudySection.js";
import ProjectInfo from "../../components/hero/projectHero.js";

// ============================================================
// THEME
// Matches CareerTimeline typography
// ============================================================

const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",

    h1: {
      fontFamily: "Bootzy, sans-serif",
      fontWeight: 400,
      letterSpacing: "1px",
    },

    h2: {
      fontFamily: "Bootzy, sans-serif",
      fontWeight: 400,
      letterSpacing: "1px",
    },

    h3: {
      fontFamily: "Bootzy, sans-serif",
      fontWeight: 400,
      letterSpacing: "1px",
    },

    h4: {
      fontFamily: "Bootzy, sans-serif",
      fontWeight: 400,
      letterSpacing: "1px",
    },

    h5: {
      fontFamily: "Bootzy, sans-serif",
      fontWeight: 400,
      letterSpacing: "1px",
    },

    h6: {
      fontFamily: "Bootzy, sans-serif",
      fontWeight: 400,
      letterSpacing: "1px",
    },

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
// MYSPEND CASE STUDY
// ============================================================

export default function MySpend() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ======================================================
          HERO
      ====================================================== */}

      <Hero
        image="/images/MySpend/mySpendMock.png"
        company="TD"
        backgroundColor="#D3E9D4"
      />

      {/* ======================================================
          CASE STUDY
      ====================================================== */}

      <CaseStudyLayout>
        {/* ====================================================
            PROJECT INFORMATION
        ==================================================== */}

        <ProjectInfo
          company="TD · ProdX Case Competition"
          title="Improving Gen Z's financial well-being with TD MySpend"
          role={
            <>
              Product Manager
              <br />+ Designer
            </>
          }
          timeline="March 2025"
          team={
            <>
              Product Strategy
              <br />
              Product Design
            </>
          }
          skills={
            <>
              User Research
              <br />
              Prototyping
              <br />
              Product Strategy
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
          title="Helping Gen Z turn everyday spending into better financial habits."
        >
          <Typography>
            ProdX is Ivey Product Society&apos;s product case competition. My
            team was challenged to rethink TD&apos;s mobile banking experience
            for Gen Z users.
          </Typography>

          <Typography>
            We re-envisioned TD MySpend around short-term financial planning,
            giving users clearer ways to understand spending, manage budgets,
            and stay engaged with their financial well-being.
          </Typography>
        </CaseStudySection>

        {/* ====================================================
            PROJECT SNAPSHOT
        ==================================================== */}

        <ProjectSnapshot />

        <SectionDivider />

        {/* ====================================================
            PROBLEM
        ==================================================== */}

        <CaseStudySection
          id="problem"
          eyebrow="The Problem"
          title="Gen Z wants to manage their money, but existing tools can make the process feel overwhelming."
        >
          <Typography>
            Gen Z users are transitioning from spontaneous spending toward more
            intentional financial management. They need tools that are clear,
            accessible, and easy to use regularly.
          </Typography>

          <Typography>
            TD MySpend already helps users understand spending and saving
            habits, but we saw an opportunity to provide clearer guidance for
            what users should do next.
          </Typography>

          <ProblemStatement>
            How might we enable Gen Z users to keep up with their financial
            well-being on a regular basis?
          </ProblemStatement>
        </CaseStudySection>

        {/* ====================================================
            JOBS TO BE DONE
        ==================================================== */}

        <CaseStudyImage
          src="/images/MySpend/jobsToBeDone.png"
          alt="Jobs to be Done"
        />

        <SectionDivider />

        {/* ====================================================
            RESEARCH
        ==================================================== */}

        <CaseStudySection
          id="research"
          eyebrow="Research"
          title="Understanding how Gen Z approaches everyday financial management."
        >
          <Typography>
            We focused our research on young users transitioning toward more
            responsible financial management and looked at the barriers
            preventing them from staying engaged.
          </Typography>

          <Typography>
            The research pointed toward a need for simple, personalized tools
            that make financial information easier to understand and act on.
          </Typography>
        </CaseStudySection>

        <CaseStudyImage
          src="/images/MySpend/userResearch.png"
          alt="MySpend user research"
        />

        {/* ====================================================
            RESEARCH QUOTE
        ==================================================== */}

        <Box
          sx={{
            py: {
              xs: "56px",
              md: "80px",
            },
          }}
        >
          <CaseStudyImage
            src="/images/MySpend/quote.png"
            alt="Research quote"
          />
        </Box>

        {/* ====================================================
            PAIN POINTS
        ==================================================== */}

        <Box
          sx={{
            pb: {
              xs: "72px",
              md: "110px",
            },
          }}
        >
          <Eyebrow>Key Pain Points</Eyebrow>

          <PainPointGrid />
        </Box>

        <SectionDivider />

        {/* ====================================================
            OPPORTUNITY
        ==================================================== */}

        <CaseStudySection
          id="opportunity"
          eyebrow="The Opportunity"
          title="Move beyond tracking money and help users decide what to do next."
        >
          <Typography>
            Our opportunity was to make MySpend feel more actionable. Instead of
            only showing financial information, the experience could help users
            plan their spending and understand their progress throughout the
            month.
          </Typography>
        </CaseStudySection>

        {/* ====================================================
            VALUE PROPOSITION
        ==================================================== */}

        <CaseStudyImage
          src="/images/MySpend/valueProp.png"
          alt="TD MySpend value proposition"
        />

        <SectionDivider />

        {/* ====================================================
            SOLUTION
        ==================================================== */}

        <CaseStudySection
          id="solution"
          eyebrow="The Solution"
          title="A MySpend dashboard built around budgeting, planning, and reflection."
        >
          <Typography>
            We designed a dashboard that brings together three views: a budget,
            a financial calendar, and a personalized MySpend recap.
          </Typography>

          <Typography>
            Together, these tools give users a more complete view of their
            short-term financial well-being while keeping the experience
            approachable and actionable.
          </Typography>
        </CaseStudySection>

        {/* ====================================================
            FINAL DESIGNS
        ==================================================== */}

        <Box
          sx={{
            pb: {
              xs: "80px",
              md: "120px",
            },
          }}
        >
          <Eyebrow>Final Design</Eyebrow>

          <DesignFeature
            number="01"
            title="Build a budget"
            gif="/images/MySpend/mySpend1.gif"
          >
            Users can switch into a budget view and allocate spending across the
            categories already available in MySpend. Bills and recurring
            payments can also be incorporated to create a clearer picture of
            monthly spending.
          </DesignFeature>

          <DesignFeature
            number="02"
            title="Plan the month"
            gif="/images/MySpend/mySpend2.gif"
            reverse
          >
            The calendar gives users a high-level view of cash inflows,
            outflows, and upcoming bills, helping them understand how their
            spending fits into the rest of the month.
          </DesignFeature>

          <DesignFeature
            number="03"
            title="Reflect on progress"
            gif="/images/MySpend/mySpend3.gif"
          >
            MySpend Recap turns financial progress into an engaging summary of
            savings and completed goals that users can review and share.
          </DesignFeature>
        </Box>

        <SectionDivider />

        {/* ====================================================
            OUTCOME
        ==================================================== */}

        <Box
          component="section"
          id="outcomes"
          sx={{
            scrollMarginTop: "80px",

            py: {
              xs: "80px",
              md: "120px",
            },
          }}
        >
          <Eyebrow>Outcome</Eyebrow>

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "0.85fr 1.15fr",
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
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "38px",
                    sm: "44px",
                    md: "52px",
                  },

                  lineHeight: 1.05,

                  color: "#464F5B",

                  mb: "24px",
                }}
              >
                Placing 2nd overall at ProdX.
              </Typography>

              <Typography
                component="p"
                variant="body1"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "16px",
                    md: "17px",
                  },

                  lineHeight: 1.65,

                  color: "#808080",

                  mb: "28px",
                }}
              >
                Our team presented the MySpend concept to product leaders and
                placed second overall in the competition.
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

                  fontFamily: "Arial, sans-serif",

                  fontSize: {
                    xs: "14px",
                    md: "15px",
                  },

                  fontWeight: 500,

                  letterSpacing: "-0.3px",

                  textTransform: "none",

                  color: "#464F5B",

                  "& .MuiButton-endIcon": {
                    transition: "transform 0.25s ease",
                  },

                  "&:hover": {
                    backgroundColor: "transparent",

                    color: "#2323FF",

                    "& .MuiButton-endIcon": {
                      transform: "rotate(45deg)",
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
              alt="ProdX competition presentation"
              sx={{
                display: "block",

                width: "100%",

                height: "auto",

                borderRadius: {
                  xs: "14px",
                  md: "18px",
                },
              }}
            />
          </Box>
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
                xs: "40px",
                sm: "46px",
                md: "54px",
              },

              lineHeight: 1.05,

              color: "#464F5B",

              mb: {
                xs: "48px",
                md: "64px",
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
              xs: "20px",
              md: "40px",
            },

            pb: {
              xs: "80px",
              md: "120px",
            },
          }}
        >
          <Typography
            component="h2"
            variant="h2"
            sx={{
              fontSize: {
                xs: "36px",
                sm: "42px",
                md: "48px",
              },

              lineHeight: 1.05,

              color: "#464F5B",
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
// Matches CareerTimeline utility text
// ============================================================

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component="p"
      sx={{
        fontFamily: "monospace",

        fontSize: {
          xs: "9px",
          sm: "10px",
        },

        fontWeight: 400,

        letterSpacing: "0.4px",

        textTransform: "uppercase",

        color: "#999999",

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
        bgcolor: "#E8E8EC",
      }}
    />
  );
}

// ============================================================
// PROJECT SNAPSHOT
// ============================================================

function ProjectSnapshot() {
  const items = [
    {
      label: "Challenge",
      value: "Financial well-being",
    },

    {
      label: "Audience",
      value: "Gen Z",
    },

    {
      label: "Result",
      value: "2nd Place",
    },
  ];

  return (
    <Box
      sx={{
        pt: {
          xs: "12px",
          md: "20px",
        },

        pb: {
          xs: "72px",
          md: "100px",
        },

        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(3, 1fr)",
        },

        gap: {
          xs: "32px",
          sm: "40px",
        },
      }}
    >
      {items.map((item) => (
        <Box key={item.label}>
          <Typography
            sx={{
              fontFamily: "monospace",

              fontSize: {
                xs: "9px",
                sm: "10px",
              },

              letterSpacing: "0.4px",

              textTransform: "uppercase",

              color: "#999999",

              mb: "8px",
            }}
          >
            {item.label}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",

              fontSize: {
                xs: "17px",
                md: "18px",
              },

              fontWeight: 500,

              letterSpacing: "-0.3px",

              color: "#464F5B",
            }}
          >
            {item.value}
          </Typography>
        </Box>
      ))}
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
          xs: "28px",
          md: "42px",
        },

        bgcolor: "#D3E9D4",

        borderRadius: {
          xs: "14px",
          md: "18px",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "monospace",

          fontSize: {
            xs: "9px",
            sm: "10px",
          },

          letterSpacing: "0.4px",

          textTransform: "uppercase",

          color: "#1A5336",

          mb: "20px",
        }}
      >
        How might we
      </Typography>

      <Typography
        component="h3"
        variant="h3"
        sx={{
          fontSize: {
            xs: "28px",
            sm: "32px",
            md: "36px",
          },

          lineHeight: 1.15,

          color: "#1A5336",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

// ============================================================
// CASE STUDY IMAGE
// ============================================================

type CaseStudyImageProps = {
  src: string;
  alt: string;
};

function CaseStudyImage({ src, alt }: CaseStudyImageProps) {
  return (
    <Box
      sx={{
        width: "100%",

        overflow: "hidden",

        borderRadius: {
          xs: "14px",
          md: "18px",
        },

        border: "1px solid rgba(0,0,0,0.06)",

        bgcolor: "#F7F7F7",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          display: "block",

          width: "100%",

          height: "auto",
        }}
      />
    </Box>
  );
}

// ============================================================
// PAIN POINTS
// ============================================================

function PainPointGrid() {
  const items = [
    {
      title: "Budget fatigue",

      description:
        "Manually entering and maintaining budget information can make financial planning feel like another task to manage.",
    },

    {
      title: "Financial misdirection",

      description:
        "Users can see financial information but may still be unsure what action they should take next.",
    },

    {
      title: "Dull financial tools",

      description:
        "Static money-management experiences can make it harder for users to stay engaged with their finances.",
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

        gap: {
          xs: "40px",
          md: "48px",
        },
      }}
    >
      {items.map((item) => (
        <Box key={item.title}>
          <Typography
            component="h3"
            variant="h3"
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "28px",
              },

              lineHeight: 1.05,

              color: "#464F5B",

              mb: "14px",
            }}
          >
            {item.title}
          </Typography>

          <Typography
            component="p"
            variant="body1"
            sx={{
              fontSize: {
                xs: "15px",
                md: "16px",
              },

              lineHeight: 1.65,

              color: "#808080",
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
// DESIGN FEATURE
// ============================================================

type DesignFeatureProps = {
  number: string;
  title: string;
  gif: string;
  reverse?: boolean;
  children: React.ReactNode;
};

function DesignFeature({
  number,
  title,
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
          md: "1fr 1fr",
        },

        gap: {
          xs: "36px",
          md: "72px",
        },

        alignItems: "center",

        py: {
          xs: "48px",
          md: "72px",
        },
      }}
    >
      {/* ======================================================
          GIF
      ====================================================== */}

      <Box
        sx={{
          order: {
            xs: 1,
            md: reverse ? 2 : 1,
          },

          display: "flex",

          justifyContent: "center",

          bgcolor: "#F4F7F4",

          borderRadius: {
            xs: "16px",
            md: "20px",
          },

          p: {
            xs: "24px",
            md: "36px",
          },
        }}
      >
        <Box
          component="img"
          src={gif}
          alt={title}
          sx={{
            display: "block",

            width: {
              xs: "70%",
              md: "78%",
            },

            maxWidth: "300px",

            height: "auto",
          }}
        />
      </Box>

      {/* ======================================================
          COPY
      ====================================================== */}

      <Box
        sx={{
          order: {
            xs: 2,
            md: reverse ? 1 : 2,
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "monospace",

            fontSize: {
              xs: "9px",
              sm: "10px",
            },

            letterSpacing: "0.4px",

            color: "#999999",

            mb: "12px",
          }}
        >
          {number}
        </Typography>

        <Typography
          component="h3"
          variant="h3"
          sx={{
            fontSize: {
              xs: "30px",
              sm: "34px",
              md: "38px",
            },

            lineHeight: 1.05,

            color: "#464F5B",

            mb: "18px",
          }}
        >
          {title}
        </Typography>

        <Typography
          component="p"
          variant="body1"
          sx={{
            fontSize: {
              xs: "15px",
              md: "16px",
            },

            lineHeight: 1.65,

            color: "#808080",
          }}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  );
}

// ============================================================
// REFLECTION
// ============================================================

function ReflectionGrid() {
  const reflections = [
    {
      title: "Design around action, not just information.",

      description:
        "Financial data becomes more useful when users understand what they can do with it. The project pushed me to think beyond displaying information and toward designing actionable next steps.",
    },

    {
      title: "Product decisions need a clear purpose.",

      description:
        "Working under a competition deadline reinforced the importance of connecting every feature back to a specific user need and a clear product value proposition.",
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
          md: "72px",
        },
      }}
    >
      {reflections.map((item) => (
        <Box key={item.title}>
          <Typography
            component="h3"
            variant="h3"
            sx={{
              fontSize: {
                xs: "26px",
                sm: "28px",
                md: "30px",
              },

              lineHeight: 1.15,

              color: "#464F5B",

              mb: "18px",
            }}
          >
            {item.title}
          </Typography>

          <Typography
            component="p"
            variant="body1"
            sx={{
              fontSize: {
                xs: "15px",
                md: "16px",
              },

              lineHeight: 1.7,

              color: "#808080",
            }}
          >
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
