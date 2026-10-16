"use client";

import React from "react";

import { Box, Typography, ThemeProvider, CssBaseline } from "@mui/material";

import { createTheme } from "@mui/material/styles";

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

  blue: "#0C549F",
  blueMuted: "#55789D",
  blueBackground: "#D6E3F3",
  blueSoft: "#F3F7FB",
  blueBorder: "#D5E1EF",
};

// ============================================================
// SIDEBAR NAVIGATION
// ============================================================

const NAV_ITEMS = [
  { label: "Overview", id: "overview" },
  { label: "Opportunity", id: "opportunity" },
  { label: "Research", id: "research" },
  { label: "Direction", id: "direction" },
  { label: "Exploration & Iteration", id: "exploration" },
  { label: "Final Design", id: "final-design" },
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
// HONEYDEW LABS CASE STUDY
// ============================================================

export default function HoneydewLabs() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ====================================================
          HERO
      ==================================================== */}

      <Hero
        image="/images/Honeydew/hero.png"
        company="Honeydew Labs"
        backgroundColor={COLORS.blueBackground}
      />

      <CaseStudyLayout navItems={NAV_ITEMS}>
        {/* ====================================================
            PROJECT INFORMATION
        ==================================================== */}

        <ProjectInfo
          company="Honeydew Labs"
          title="Designing a premium skincare product from the ground up"
          role="Product Design Intern"
          timeline="2026"
          team="Designer (Me!)"
          skills={
            <>
              Packaging Design
              <br />
              Competitive Research
              <br />
              Visual Identity
            </>
          }
        />

        <SectionDivider />

        {/* ====================================================
            01 — OVERVIEW
        ==================================================== */}

        <EditorialSection id="overview">
          <Eyebrow>Overview</Eyebrow>

          <SectionHeading>
            Bringing a new Copper Peptide + PDRN eye patch product to life.
          </SectionHeading>

          <BodyCopy>
            At Honeydew Labs, I had the opportunity to help shape a new skincare
            product from its early stages: Copper Peptide + PDRN Eye Patches.
          </BodyCopy>

          <BodyCopy>
            As eye patches gained momentum across the beauty industry, Honeydew
            saw an opportunity to enter the category while exploring an emerging
            skincare ingredient: copper peptides.
          </BodyCopy>

          <BodyCopy>
            I was responsible for designing the product&apos;s packaging and
            helping translate its positioning into a visual identity that felt
            elevated, credible, and distinctive within a crowded skincare
            market.
          </BodyCopy>
        </EditorialSection>

        {/* FINAL PRODUCT TEASER */}

        <Box
          component="img"
          src="/images/Honeydew/familyPic.PNG"
          alt="Honeydew Labs Copper Peptide + PDRN Eye Patches"
          sx={{
            display: "block",
            width: "100%",
            height: "auto",

            borderRadius: {
              xs: "12px",
              md: "16px",
            },

            objectFit: "cover",
          }}
        />

        <Caption>
          Honeydew Labs Copper Peptide + PDRN Eye Patches — final packaging
          direction.
        </Caption>

        <Box
          sx={{
            height: {
              xs: "80px",
              md: "120px",
            },
          }}
        />

        <SectionDivider />

        {/* ====================================================
            02 — OPPORTUNITY
        ==================================================== */}

        <EditorialSection id="opportunity">
          <Eyebrow>The Opportunity</Eyebrow>

          <SectionHeading>
            Eye patches were having a moment. We saw an opportunity to get ahead
            of what could come next.
          </SectionHeading>

          <BodyCopy>
            Major beauty brands were bringing renewed attention to the eye patch
            category. Products from brands such as Summer Fridays, Topicals, and
            Rhode helped make under-eye treatments increasingly visible within
            the broader skincare conversation.
          </BodyCopy>

          <BodyCopy>
            At the same time, ingredient-led skincare continued to influence how
            consumers discovered and evaluated products. Honeydew wanted to
            explore how an eye patch built around Copper Peptide + PDRN could
            enter this growing category with its own point of view.
          </BodyCopy>

          <BodyCopy>
            The opportunity was not simply to launch another eye patch. We
            needed to create a product that could feel compelling beside
            established beauty brands while also competing against the large
            number of alternatives customers encounter on Amazon.
          </BodyCopy>
        </EditorialSection>

        {/* TREND / MARKET VISUALS */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: {
              xs: "24px",
              md: "28px",
            },
          }}
        >
          {[
            {
              src: "/images/Honeydew/categoryReference.png",
              alt: "Eye patch category references",
              caption:
                "Exploring how established beauty brands use visual identity, product photography, and packaging to position eye patches within the skincare market.",
            },
            {
              src: "/images/Honeydew/amzLandscape.png",
              alt: "Amazon eye patch marketplace landscape",
              caption:
                "Examining the crowded Amazon marketplace, where similar products compete for attention through colour, packaging, and ingredient-focused messaging.",
            },
          ].map((image) => (
            <Box key={image.src}>
              {/* IMAGE */}
              <Box
                component="img"
                src={image.src}
                alt={image.alt}
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: "16px",
                }}
              />

              {/* CAPTION */}
              <Typography
                component="p"
                sx={{
                  mt: "14px",
                  fontSize: {
                    xs: "12px",
                    md: "13px",
                  },
                  lineHeight: 1.6,
                  color: COLORS.muted,
                }}
              >
                {image.caption}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            height: {
              xs: "72px",
              md: "96px",
            },
          }}
        />

        <ProblemStatement>
          How might we design packaging that feels premium and credible while
          remaining distinctive enough to stand out against established beauty
          brands and a crowded Amazon marketplace?
        </ProblemStatement>

        <SectionDivider />

        {/* ====================================================
            03 — COMPETITIVE RESEARCH
        ==================================================== */}

        <EditorialSection id="research">
          <Eyebrow>Competitive Research</Eyebrow>

          <SectionHeading>
            Before designing anything, I wanted to understand the category.
          </SectionHeading>

          <BodyCopy>
            I began by looking heavily into competitors. I studied established
            beauty brands, emerging skincare companies, and high-performing
            products across marketplaces to understand how eye patches were
            being positioned and presented.
          </BodyCopy>

          <BodyCopy>
            I wasn&apos;t only collecting packaging that looked good. I wanted
            to understand why certain products stood out, what made them feel
            premium, how they communicated ingredients, and where their
            packaging became difficult to distinguish from the rest of the
            category.
          </BodyCopy>
        </EditorialSection>

        {/* LARGE COMPETITIVE RESEARCH BOARD */}

        <Box
          component="img"
          src="/images/Honeydew/compResearch.png"
          alt="Honeydew Labs competitive research board"
          sx={{
            display: "block",
            width: "100%",
            height: "auto",
            objectFit: "contain",
            border: `1px solid ${COLORS.border}`,
            borderRadius: "16px",
          }}
        />

        <Caption>
          I compared both established beauty brands and marketplace competitors
          to understand the visual language of the category.
        </Caption>

        {/* RESEARCH QUESTIONS */}

        <ResearchQuestions />

        <Box
          sx={{
            height: {
              xs: "80px",
              md: "120px",
            },
          }}
        />

        <ResearchInsights />

        <SectionDivider />

        {/* ====================================================
            04 — DESIGN DIRECTION
        ==================================================== */}

        <EditorialSection id="direction">
          <Eyebrow>Design Direction</Eyebrow>

          <SectionHeading>
            Honeydew is playful. This product needed a different kind of
            confidence.
          </SectionHeading>

          <BodyCopy>
            Honeydew&apos;s existing hypochlorous acid spray has a fun, lively,
            and approachable personality. That identity works well for the
            product, but the eye patches were intended to occupy a slightly more
            elevated space.
          </BodyCopy>

          <BodyCopy>
            I wanted the new packaging to feel premium and intentional without
            becoming cold or disconnected from Honeydew. The challenge was
            finding the right amount of evolution: different enough to signal a
            new product experience, but familiar enough to still belong to the
            same brand.
          </BodyCopy>
        </EditorialSection>

        {/* EXISTING BRAND VS NEW DIRECTION */}

        <ExistingBranding />

        {/* MOODBOARD */}

        <Box
          sx={{
            mt: {
              xs: "72px",
              md: "100px",
            },
          }}
        >
          <Eyebrow>Visual Direction</Eyebrow>

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
                xs: "40px",
                md: "52px",
              },
            }}
          >
            Translating the strategy into a visual language.
          </Typography>

          <Box
            component="img"
            src="/images/Honeydew/moodboard.png"
            alt="Honeydew Labs Copper Peptide + PDRN eye patch visual direction moodboard"
            sx={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "contain",
              border: `1px solid ${COLORS.border}`,
              borderRadius: "16px",
            }}
          />

          <Caption>
            Exploring premium skincare aesthetics through typography, colour,
            materials, and ingredient-inspired imagery to establish a more
            elevated visual direction for Honeydew.
          </Caption>
        </Box>

        <DesignPrinciples />

        <SectionDivider />

        {/* ====================================================
    05 — EXPLORATION & ITERATION
==================================================== */}

        <Box
          component="section"
          id="exploration"
          sx={{
            scrollMarginTop: "80px",

            py: {
              xs: "96px",
              md: "130px",
            },
          }}
        >
          <Eyebrow>Exploration & Iteration</Eyebrow>

          <SectionHeading>
            Exploring different directions, then refining the strongest one.
          </SectionHeading>

          <BodyCopy>
            With a clearer visual direction in mind, I began exploring how the
            eye patches could come to life through packaging. I developed four
            initial concepts, each taking a different approach to typography,
            colour, composition, and information hierarchy.
          </BodyCopy>

          <BodyCopy>
            These explorations helped me understand how different design
            decisions influenced the overall personality of the product. Some
            directions felt more clinical and ingredient-focused, while others
            leaned toward a more expressive, beauty-led aesthetic.
          </BodyCopy>

          {/* ====================================================
      INITIAL DESIGN EXPLORATIONS
  ==================================================== */}

          <Box
            sx={{
              mt: {
                xs: "64px",
                md: "88px",
              },
            }}
          >
            <Eyebrow>Initial Concepts</Eyebrow>

            <Typography
              component="h2"
              sx={{
                maxWidth: "700px",

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
                  xs: "24px",
                  md: "32px",
                },
              }}
            >
              Four concepts, each exploring a different visual personality.
            </Typography>

            <BodyCopy>
              I explored multiple directions rather than committing to a single
              concept early on. This allowed me to compare how typography,
              colour, and layout could communicate different levels of premium
              positioning and scientific credibility.
            </BodyCopy>

            {/* TWO EARLY DESIGN SCREENSHOTS */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                gap: {
                  xs: "24px",
                  md: "32px",
                },

                mt: {
                  xs: "40px",
                  md: "52px",
                },
              }}
            >
              {[
                {
                  src: "/images/Honeydew/earlyDesign1.png",
                  alt: "Honeydew Labs initial packaging design explorations",
                },
                {
                  src: "/images/Honeydew/earlyDesign2.png",
                  alt: "Additional Honeydew Labs packaging design concepts",
                },
              ].map((image) => (
                <Box
                  key={image.src}
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",

                    border: `1px solid ${COLORS.border}`,
                    borderRadius: "16px",
                  }}
                />
              ))}
            </Box>

            <Caption>
              Initial packaging explorations presenting four different visual
              directions for the Copper Peptide + PDRN Eye Patches.
            </Caption>
          </Box>

          {/* ====================================================
      COLLABORATIVE REFINEMENT
  ==================================================== */}

          <Box
            sx={{
              mt: {
                xs: "96px",
                md: "130px",
              },
            }}
          >
            <Eyebrow>Feedback & Refinement</Eyebrow>

            <Typography
              component="h2"
              sx={{
                maxWidth: "700px",

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
                  xs: "24px",
                  md: "32px",
                },
              }}
            >
              Working with the co-founders to narrow the direction.
            </Typography>

            <BodyCopy>
              After developing the initial concepts, I presented the directions
              to Honeydew&apos;s co-founders. Together, we discussed which
              elements best reflected the product&apos;s positioning and how the
              packaging could feel more elevated while remaining recognizable as
              part of Honeydew.
            </BodyCopy>

            <BodyCopy>
              Based on their feedback, I narrowed the concepts down and
              continued refining the selected direction. I focused on
              strengthening the visual hierarchy, simplifying the composition,
              and making the key product information easier to understand at a
              glance.
            </BodyCopy>

            {/* REFINEMENT DECISIONS */}

            <Box
              sx={{
                mt: {
                  xs: "52px",
                  md: "68px",
                },
              }}
            >
              <RefinementDecisions />
            </Box>
          </Box>

          {/* ====================================================
    FINAL VISUAL IDENTITY
==================================================== */}

          <Box
            sx={{
              mt: {
                xs: "96px",
                md: "130px",
              },
            }}
          >
            <Eyebrow>Final Visual Identity</Eyebrow>

            <Typography
              component="h2"
              sx={{
                maxWidth: "700px",

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
                  xs: "24px",
                  md: "32px",
                },
              }}
            >
              Establishing a cohesive visual language through typography and
              colour.
            </Typography>

            <BodyCopy>
              After reviewing the initial concepts with Honeydew&apos;s
              co-founders, I refined the selected direction into a more cohesive
              visual identity. Typography and colour became two of the most
              important elements in balancing a premium skincare aesthetic with
              clear, ingredient-led communication.
            </BodyCopy>

            {/* TYPOGRAPHY AND COLOUR BOARDS */}

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, 1fr)",
                },

                gap: {
                  xs: "24px",
                  md: "28px",
                },

                mt: {
                  xs: "40px",
                  md: "52px",
                },
              }}
            >
              {[
                {
                  src: "/images/Honeydew/typography.png",
                  alt: "Honeydew Labs final typography system",
                  title: "01 — Typography",
                  caption:
                    "Playfair Display introduces an elevated editorial quality, while Avenir provides clarity and readability for product information.",
                },
                {
                  src: "/images/Honeydew/colours.png",
                  alt: "Honeydew Labs final colour palette",
                  title: "02 — Colour Palette",
                  caption:
                    "Copper blue (#0C549F) establishes ingredient recognition and visual distinction, supported by black and white for contrast, simplicity, and clarity.",
                },
              ].map((image) => (
                <Box key={image.src}>
                  {/* IMAGE */}

                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",

                      border: `1px solid ${COLORS.border}`,
                      borderRadius: "16px",
                    }}
                  />

                  {/* TITLE */}

                  <Typography
                    component="h3"
                    sx={{
                      mt: "20px",
                      mb: "8px",

                      fontSize: {
                        xs: "18px",
                        md: "20px",
                      },

                      fontWeight: 600,
                      letterSpacing: "-0.4px",
                      color: COLORS.primary,
                    }}
                  >
                    {image.title}
                  </Typography>

                  {/* CAPTION */}

                  <Typography
                    component="p"
                    sx={{
                      fontSize: {
                        xs: "13px",
                        md: "14px",
                      },

                      lineHeight: 1.65,
                      color: COLORS.body,
                    }}
                  >
                    {image.caption}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ====================================================
      REFINED PACKAGING DESIGNS
  ==================================================== */}

          <Box
            sx={{
              mt: {
                xs: "96px",
                md: "130px",
              },
            }}
          >
            <Eyebrow>Selected Direction</Eyebrow>

            <Typography
              component="h2"
              sx={{
                maxWidth: "700px",

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
                  xs: "24px",
                  md: "32px",
                },
              }}
            >
              Bringing the refined direction across the box and pouch.
            </Typography>

            <BodyCopy>
              The selected direction brought together a more refined visual
              language with clearer ingredient-led messaging. I applied the same
              design system across both the outer box and individual pouch to
              create a cohesive product experience.
            </BodyCopy>

            {/* FINAL BOX AND POUCH DESIGNS */}

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, 1fr)",
                },

                gap: {
                  xs: "24px",
                  md: "28px",
                },

                mt: {
                  xs: "40px",
                  md: "52px",
                },
              }}
            >
              {[
                {
                  src: "/images/Honeydew/boxDesign.png",
                  alt: "Final Honeydew Labs Copper Peptide + PDRN eye patch box design",
                  title: "Outer Box",
                  caption:
                    "The refined outer packaging establishes the product&apos;s visual identity through typography, colour, and ingredient-focused hierarchy.",
                },
                {
                  src: "/images/Honeydew/pouchDesign.png",
                  alt: "Final Honeydew Labs Copper Peptide + PDRN eye patch pouch design",
                  title: "Individual Pouch",
                  caption:
                    "The individual pouch carries the same visual language into a smaller format, maintaining consistency across the product experience.",
                },
              ].map((image) => (
                <Box key={image.src}>
                  {/* IMAGE */}

                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",

                      border: `1px solid ${COLORS.border}`,
                      borderRadius: "16px",
                    }}
                  />

                  {/* TITLE */}

                  <Typography
                    component="h3"
                    sx={{
                      mt: "20px",
                      mb: "8px",

                      fontSize: {
                        xs: "18px",
                        md: "20px",
                      },

                      fontWeight: 600,
                      letterSpacing: "-0.4px",
                      color: COLORS.primary,
                    }}
                  >
                    {image.title}
                  </Typography>

                  {/* CAPTION */}

                  <Typography
                    component="p"
                    sx={{
                      fontSize: {
                        xs: "13px",
                        md: "14px",
                      },

                      lineHeight: 1.65,
                      color: COLORS.body,
                    }}
                  >
                    {image.caption}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <SectionDivider />

        {/* ====================================================
            07 — FINAL DESIGN
        ==================================================== */}

        <Box
          component="section"
          id="final-design"
          sx={{
            scrollMarginTop: "80px",

            py: {
              xs: "96px",
              md: "130px",
            },
          }}
        >
          <Eyebrow>Final Design</Eyebrow>

          <SectionHeading>
            Introducing Honeydew&apos;s Copper Peptide + PDRN Eye Patches.
          </SectionHeading>

          <BodyCopy>
            The final direction brings together the product&apos;s
            ingredient-led positioning with a more elevated visual identity for
            Honeydew.
          </BodyCopy>

          <BodyCopy>
            The packaging was designed to feel distinct from the brand&apos;s
            more playful products while remaining approachable and recognizable
            as part of Honeydew&apos;s growing product portfolio.
          </BodyCopy>

          {/* BIG FINAL HERO */}

          <Box
            sx={{
              mt: {
                xs: "52px",
                md: "72px",
              },
            }}
          >
            <Box
              component="img"
              src="/images/Honeydew/familyPic.PNG"
              alt="Honeydew Labs Copper Peptide + PDRN Eye Patches"
              sx={{
                display: "block",
                width: "100%",
                height: "auto",

                borderRadius: {
                  xs: "12px",
                  md: "16px",
                },

                objectFit: "cover",
              }}
            />
          </Box>

          {/* FINAL DETAILS */}

          {/* FINAL PRODUCT PHOTO GALLERY */}

          <Box
            sx={{
              mt: {
                xs: "24px",
                md: "32px",
              },
            }}
          >
            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                },

                gap: {
                  xs: "16px",
                  md: "24px",
                },
              }}
            >
              {[
                {
                  src: "/images/Honeydew/honeydew1.png",
                  alt: "Honeydew Labs Copper Peptide + PDRN product photography",
                },
                {
                  src: "/images/Honeydew/pouchPic.PNG",
                  alt: "Honeydew Labs individual eye patch pouch",
                },
                {
                  src: "/images/Honeydew/epLifestyle.png",
                  alt: "Honeydew Labs eye patch lifestyle photography",
                },
                {
                  src: "/images/Honeydew/boxPouches.png",
                  alt: "Honeydew Labs eye patch box and individual pouches",
                },
              ].map((image) => (
                <Box
                  key={image.src}
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",

                    border: `1px solid ${COLORS.border}`,
                    borderRadius: "16px",
                  }}
                />
              ))}
            </Box>

            <Caption>
              A closer look at the final Copper Peptide + PDRN Eye Patches, from
              the outer packaging and individual pouches to the complete product
              experience.
            </Caption>
          </Box>

          {/* AMAZON CONTEXT */}

          <Box
            sx={{
              mt: {
                xs: "96px",
                md: "130px",
              },
            }}
          >
            <Eyebrow>Marketplace Context</Eyebrow>

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

                mb: "24px",
              }}
            >
              Designed to hold its own in a crowded marketplace.
            </Typography>

            <BodyCopy>
              Throughout the process, I kept returning to the environment where
              many customers would actually discover the product. The packaging
              needed to communicate clearly not only in a polished product
              shoot, but also when surrounded by competing skincare products.
            </BodyCopy>

            <Box
              sx={{
                mt: {
                  xs: "40px",
                  md: "52px",
                },
              }}
            >
              <Box
                component="img"
                src="/images/Honeydew/inMarketplace.png"
                alt="Honeydew Labs Copper Peptide + PDRN eye patch within the Amazon Marketplace"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: "16px",
                }}
              />
            </Box>
          </Box>
        </Box>

        <SectionDivider />

        {/* ====================================================
            08 — OUTCOME
        ==================================================== */}

        <Outcome />

        <SectionDivider />

        {/* ====================================================
            09 — REFLECTION
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

        color: COLORS.blue,

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
// CAPTION
// ============================================================

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component="p"
      sx={{
        mt: "14px",

        fontSize: {
          xs: "12px",
          md: "13px",
        },

        lineHeight: 1.5,
        color: COLORS.muted,
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
// HOW MIGHT WE
// ============================================================

function ProblemStatement({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="section"
      sx={{
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

        bgcolor: COLORS.blueBackground,
        border: `1px solid ${COLORS.blueBorder}`,

        borderRadius: {
          xs: "12px",
          md: "16px",
        },

        mb: {
          xs: "96px",
          md: "130px",
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

          color: COLORS.blue,

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

          color: COLORS.blue,

          m: 0,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

// ============================================================
// RESEARCH QUESTIONS
// ============================================================

function ResearchQuestions() {
  const questions = [
    {
      number: "01",
      title: "What feels premium?",
      description:
        "Which visual decisions make skincare packaging feel considered and elevated rather than generic?",
    },
    {
      number: "02",
      title: "What communicates quickly?",
      description:
        "How are brands balancing ingredient messaging, product benefits, and brand recognition?",
    },
    {
      number: "03",
      title: "What stands out?",
      description:
        "Which products remain distinctive when viewed beside dozens of competitors online?",
    },
    {
      number: "04",
      title: "What feels overdone?",
      description:
        "Which category conventions were becoming repetitive, and where could Honeydew take a different approach?",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: {
          xs: "80px",
          md: "110px",
        },
      }}
    >
      <Eyebrow>What I Looked For</Eyebrow>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
          },

          gap: {
            xs: "44px",
            md: "48px 56px",
          },

          mt: {
            xs: "36px",
            md: "48px",
          },
        }}
      >
        {questions.map((item) => (
          <InsightCard key={item.number} {...item} />
        ))}
      </Box>
    </Box>
  );
}

// ============================================================
// RESEARCH INSIGHTS
// ============================================================

function ResearchInsights() {
  const insights = [
    {
      number: "01",
      title: "Premium often meant restraint.",
      description:
        "The strongest references used hierarchy, spacing, and deliberate typography rather than relying on excessive visual elements.",
    },
    {
      number: "02",
      title: "Ingredients needed to be easy to find.",
      description:
        "Ingredient-led products benefited from making the product&apos;s key differentiators immediately understandable.",
    },
    {
      number: "03",
      title: "Digital shelf presence mattered.",
      description:
        "Packaging needed enough visual distinction to remain recognizable when reduced to a small marketplace thumbnail.",
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
      <Eyebrow>What I Learned</Eyebrow>

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
        Research gave me a clearer picture of where Honeydew could fit — and
        where it could be different.
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
        {insights.map((item) => (
          <InsightCard key={item.number} {...item} />
        ))}
      </Box>
    </Box>
  );
}

// ============================================================
// EXISTING HONEYDEW BRANDING
// ============================================================

function ExistingBranding() {
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
      {/* TWO EXISTING PRODUCT IMAGES */}

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
          },

          gap: {
            xs: "16px",
            md: "24px",
          },
        }}
      >
        {[
          {
            src: "/images/Honeydew/hocl1.jpg",
            alt: "Honeydew Labs existing hypochlorous acid spray packaging",
          },
          {
            src: "/images/Honeydew/hocl2.jpg",
            alt: "Honeydew Labs existing product branding",
          },
        ].map((image) => (
          <Box
            key={image.src}
            component="img"
            src={image.src}
            alt={image.alt}
            sx={{
              display: "block",
              width: "100%",
              height: "auto",

              objectFit: "contain",

              border: `1px solid ${COLORS.border}`,
              borderRadius: "16px",
            }}
          />
        ))}
      </Box>

      {/* EXISTING BRAND DESCRIPTION */}

      <Box
        sx={{
          mt: {
            xs: "24px",
            md: "32px",
          },
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
            letterSpacing: "-0.4px",

            color: COLORS.primary,

            mb: "8px",
          }}
        >
          Existing Honeydew Branding
        </Typography>

        <Typography
          component="p"
          sx={{
            maxWidth: "700px",

            fontSize: {
              xs: "14px",
              md: "15px",
            },

            lineHeight: 1.65,
            color: COLORS.body,
          }}
        >
          Fun, lively, approachable, and expressive.
        </Typography>
      </Box>
    </Box>
  );
}

// ============================================================
// DESIGN PRINCIPLES
// ============================================================

function DesignPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Elevated, not inaccessible",
      description:
        "Create a more premium expression without making the product feel cold or overly clinical.",
    },
    {
      number: "02",
      title: "Clear at a glance",
      description:
        "Make the product type and key ingredients understandable without requiring customers to search for them.",
    },
    {
      number: "03",
      title: "Distinctive in context",
      description:
        "Design for the real competitive environment, including crowded marketplace search results.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        pt: {
          xs: "72px",
          md: "100px",
        },

        pb: {
          xs: "96px",
          md: "130px",
        },
      }}
    >
      <Eyebrow>Design Principles</Eyebrow>

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
        {principles.map((item) => (
          <InsightCard key={item.number} {...item} />
        ))}
      </Box>
    </Box>
  );
}

// ============================================================
// REFINEMENT DECISIONS
// ============================================================

function RefinementDecisions() {
  const decisions = [
    {
      number: "01",
      title: "Strengthen hierarchy",
      description:
        "Make the product name, key ingredients, and supporting information easier to scan and understand.",
    },
    {
      number: "02",
      title: "Reduce visual noise",
      description:
        "Remove elements that competed for attention so the packaging could feel more deliberate and premium.",
    },
    {
      number: "03",
      title: "Design for small sizes",
      description:
        "Consider how the packaging reads when reduced to the scale customers may encounter on an online marketplace.",
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
          xs: "44px",
          md: "48px",
        },

        mt: {
          xs: "72px",
          md: "96px",
        },
      }}
    >
      {decisions.map((item) => (
        <InsightCard key={item.number} {...item} />
      ))}
    </Box>
  );
}

// ============================================================
// INSIGHT CARD
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
        component="p"
        sx={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.04em",

          color: COLORS.blue,

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
  const outcomes = [
    {
      number: "01",
      title: "A new product identity",
      description:
        "The eye patches introduced a more elevated visual expression while remaining part of Honeydew&apos;s broader brand.",
    },
    {
      number: "02",
      title: "Designed for competition",
      description:
        "The packaging was considered in the context of both established beauty brands and crowded online marketplaces.",
    },
    {
      number: "03",
      title: "Research into execution",
      description:
        "Competitive analysis directly informed the visual direction, exploration, hierarchy, and refinement of the packaging.",
    },
  ];

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

      <SectionHeading>
        Helping Honeydew enter a new skincare category with a new visual
        expression.
      </SectionHeading>

      <BodyCopy>
        This project gave me the opportunity to contribute to a new physical
        product from early competitive research through packaging exploration
        and refinement.
      </BodyCopy>

      <BodyCopy>
        The final direction represents a more elevated side of Honeydew while
        responding to the realities of the category it is entering: strong
        established brands, ingredient-conscious customers, and a highly
        competitive digital shelf.
      </BodyCopy>

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
        {outcomes.map((item) => (
          <InsightCard key={item.number} {...item} />
        ))}
      </Box>

      <Box
        sx={{
          mt: {
            xs: "72px",
            md: "96px",
          },
        }}
      >
        <Box
          component="img"
          src="/images/Honeydew/coldPlunge.png"
          alt="Honeydew Labs Copper Peptide + PDRN eye patch"
          sx={{
            display: "block",
            width: "100%",
            height: "auto",
            objectFit: "contain",
            border: `1px solid ${COLORS.border}`,
            borderRadius: "16px",
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
      title: "Research gave the design context.",
      description:
        "Studying competitors helped me understand not only what looked good, but why certain products felt premium, recognizable, or easy to understand.",
    },
    {
      number: "02",
      title: "Packaging is a product experience.",
      description:
        "The package shapes how customers understand the product, its positioning, and the value they expect before they ever use it.",
    },
    {
      number: "03",
      title: "Brand systems need room to evolve.",
      description:
        "Creating a more elevated product did not mean abandoning Honeydew&apos;s identity. It meant finding a new expression that still felt connected to the brand.",
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
          maxWidth: "720px",

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
        Designing packaging taught me to think beyond how something looks.
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
