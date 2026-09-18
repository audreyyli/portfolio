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

import Footer from "@/app/components/footer/footer.js";

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
// INSTAGRAM CASE STUDY
// ============================================================

export default function Instagram() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ======================================================
          HERO
      ====================================================== */}

      <Hero
        image="/images/Instagram/InstagramMock.png"
        company="Instagram"
        backgroundColor="#FFDEE7"
      />

      {/* ======================================================
          CASE STUDY
      ====================================================== */}

      <CaseStudyLayout>
        {/* ====================================================
            PROJECT INFORMATION
        ==================================================== */}

        <ProjectInfo
          company="Instagram · Ivey Product Society"
          title="Improving personalization for Instagram's Explore page"
          role={
            <>
              Product Designer
              <br />+ Analyst
            </>
          }
          timeline={
            <>
              Oct 2024
              <br />– Dec 2024
            </>
          }
          team={
            <>
              Fellowship
              <br />
              Project
            </>
          }
          skills={
            <>
              Product Strategy
              <br />
              User Research
              <br />
              Prototyping
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
          title="Making content discovery feel more personal."
        >
          <Typography>
            I joined Ivey Product Society&apos;s fellowship program to explore a
            product challenge through both a design and product strategy lens.
          </Typography>

          <Typography>
            I focused on Instagram&apos;s Explore experience and explored how
            greater customization could help users discover content that better
            reflects their interests.
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
          title="Finding content for specific interests can feel unpredictable."
        >
          <Typography>
            Instagram connects users with creators, communities, and trends, but
            the volume and variety of content can make discovering something
            specific difficult.
          </Typography>

          <Typography>
            I wanted to understand where users experienced the most friction and
            how the Explore experience could give them greater control over what
            they discover.
          </Typography>

          <ProblemStatement>
            How might Instagram improve content discovery to create a more
            personalized Explore experience?
          </ProblemStatement>
        </CaseStudySection>

        {/* ====================================================
            JOBS TO BE DONE
        ==================================================== */}

        <CaseStudyImage
          src="/images/Instagram/jobToBeDone.png"
          alt="Instagram content discovery jobs to be done"
        />

        <SectionDivider />

        {/* ====================================================
            JOURNEY
        ==================================================== */}

        <CaseStudySection
          id="journey"
          eyebrow="Exploring the Problem"
          title="Finding where personalization could make the biggest difference."
        >
          <Typography>
            I broke content discovery into four main steps and considered the
            value and constraints associated with each part of the journey.
          </Typography>

          <Typography>
            Mapping the experience helped me identify scrolling and browsing as
            an opportunity to improve how users discover relevant content.
          </Typography>
        </CaseStudySection>

        <CaseStudyImage
          src="/images/Instagram/userJourney.png"
          alt="Instagram user journey"
        />

        <SectionSpacer />

        {/* ====================================================
            RESEARCH
        ==================================================== */}

        <CaseStudySection
          id="research"
          eyebrow="User Research"
          title="Users wanted content that felt more relevant to their individual interests."
        >
          <Typography>
            I focused on younger, casual Instagram users who primarily use the
            platform for entertainment, trends, and content discovery.
          </Typography>

          <Typography>
            Research suggested that some users felt disconnected from the
            recommendations they received and had difficulty discovering more
            niche content.
          </Typography>
        </CaseStudySection>

        <CaseStudyImage
          src="/images/Instagram/userTestimonies.png"
          alt="Instagram user research testimonies"
        />

        {/* ====================================================
            PAIN POINTS
        ==================================================== */}

        <Box
          sx={{
            py: {
              xs: "72px",
              md: "100px",
            },
          }}
        >
          <Eyebrow>Key Pain Points</Eyebrow>

          <PainPointGrid />
        </Box>

        <SectionDivider />

        {/* ====================================================
            SOLUTION
        ==================================================== */}

        <CaseStudySection
          id="solution"
          eyebrow="The Solution"
          title="Give users more control over what appears in Explore."
        >
          <Typography>
            I designed customizable Explore pages that allow users to browse
            general recommendations, trending content, content their friends
            engage with, and feeds built around specific interests.
          </Typography>

          <Typography>
            The concept gives users more direct control over discovery while
            preserving the familiar Explore experience.
          </Typography>
        </CaseStudySection>

        {/* ====================================================
            VALUE PROPOSITION
        ==================================================== */}

        <CaseStudyImage
          src="/images/Instagram/valueProp.png"
          alt="Instagram customizable Explore page value proposition"
        />

        <SectionDivider />

        {/* ====================================================
            FINAL DESIGN
        ==================================================== */}

        <Box
          component="section"
          id="design"
          sx={{
            scrollMarginTop: "80px",

            py: {
              xs: "80px",
              md: "120px",
            },
          }}
        >
          <Eyebrow>Final Design</Eyebrow>

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

              lineHeight: 1.05,

              color: "#464F5B",

              mb: {
                xs: "48px",
                md: "72px",
              },
            }}
          >
            A more customizable way to explore Instagram.
          </Typography>

          <DesignFeature
            number="01"
            title="Explore by intent"
            gif="/images/Instagram/igRecord1.gif"
          >
            The Explore page introduces separate tabs so users can choose how
            they want to discover content instead of relying on one general
            feed.
          </DesignFeature>

          <DesignFeature
            number="02"
            title="Choose how you discover"
            gif="/images/Instagram/igRecord2.gif"
            reverse
          >
            For You preserves the familiar Explore experience, while Trending
            surfaces popular categories and Friends shows content recently
            interacted with by people the user follows.
          </DesignFeature>

          <DesignFeature
            number="03"
            title="Create a custom Explore page"
            gif="/images/Instagram/igRecord3.gif"
          >
            Users can create an Explore page around selected interests and
            update those interests whenever their preferences change.
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

          <Typography
            component="h2"
            variant="h2"
            sx={{
              maxWidth: "700px",

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
            Presenting the concept on Product Review Day.
          </Typography>

          <Typography
            component="p"
            variant="body1"
            sx={{
              maxWidth: "650px",

              fontSize: {
                xs: "15px",
                sm: "16px",
                md: "17px",
              },

              lineHeight: 1.65,

              color: "#808080",

              mb: "30px",
            }}
          >
            I presented the concept and product rationale to product leaders as
            part of the Ivey Product Society fellowship.
          </Typography>

          <Button
            variant="text"
            endIcon={<ArrowOutward />}
            href="https://docs.google.com/presentation/d/10iLK3qNu8e8z0LB4sYKqAfZLcNT324Suimsl7A4ktA4/edit?usp=drive_link"
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
            View my presentation
          </Button>
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

      <Footer />
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
// SPACER
// ============================================================

function SectionSpacer() {
  return (
    <Box
      sx={{
        height: {
          xs: "24px",
          md: "40px",
        },
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
      value: "Content discovery",
    },

    {
      label: "Audience",
      value: "Instagram users",
    },

    {
      label: "Focus",
      value: "Personalization",
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

        bgcolor: "#FFDEE7",

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

          color: "#FF5093",

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

          color: "#D93C78",
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
      title: "Content misalignment",

      description:
        "Users felt that their Explore pages were not always tailored closely enough to their specific interests.",
    },

    {
      title: "Lack of niche content",

      description:
        "Users with more specific interests could struggle to discover relevant posts, creators, and topics.",
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
          xs: "40px",
          md: "72px",
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
      {/* GIF */}

      <Box
        sx={{
          order: {
            xs: 1,
            md: reverse ? 2 : 1,
          },

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          bgcolor: "#FFF2F6",

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

      {/* COPY */}

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
      title: "Personalization can also mean giving users control.",

      description:
        "This project changed how I thought about recommendation systems. Personalization does not have to happen entirely behind the scenes; users can also actively shape what they want to discover.",
    },

    {
      title:
        "The best feature may be a simpler version of what already exists.",

      description:
        "Rather than redesigning Instagram from the ground up, I focused on extending a familiar interaction model and addressing a specific gap within the existing Explore experience.",
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
