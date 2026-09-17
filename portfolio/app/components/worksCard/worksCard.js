import React, { useState } from "react";
import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import WorksCarousel from "../carousel/worksCarousel";
import CareerTimeline from "../carousel/careerTimeline";
import BentoBox from "../bentoBox/bentoBox";

const careerItems = [
  {
    year: "2026",
    role: "Product Manager Intern",
    company: "Kiyoko Beauty",
    url: "https://kiyoko.ca/en-ca",
    logo: "/images/Career/Logos/KiyokoLogo.png",
    current: true,

    description:
      "Curated Asian beauty marketplace making global beauty more accessible. Shaping the mobile customer experience and an emerging beauty intelligence platform, defining product requirements and translating customer and business needs into product decisions alongside design and engineering.",

    images: ["/images/Career/Kiyoko1.png"],
  },

  {
    year: "2025–26",
    role: "Product Design Intern",
    company: "Honeydew Labs",
    url: "https://www.honeydewlabs.com/",
    logo: "/images/Career/Logos/HDLLogo.png",
    current: true,

    description:
      "Consumer product studio building and scaling brands across digital and physical touchpoints. Shaping new product launches across packaging, e-commerce, and logistics, creating Shopify and Amazon experiences, paid ads, graphics, and UGC content while A/B testing creative to drive stronger performance.",

    images: ["/images/Career/HDL1.png", "/images/Career/HDL2.png"],
    videos: ["/videos/Career/HDL3.mp4", "/videos/Career/HDL4.mp4"],
  },

  {
    year: "2026",
    role: "Business System Analyst Intern",
    company: "Toronto Dominion Bank",
    url: "https://www.td.com",
    logo: "/images/Career/Logos/TDLogo.jpeg",
    current: false,

    description:
      "Enterprise banking platform creating a single, unified view of the customer across TD. Supporting the Customer Master (C360) product across data quality, product documentation, and roadmap development, translating complex technical requirements alongside engineering and business stakeholders.",

    images: ["/images/Career/TD1.jpg"],
  },

  {
    year: "2024–25",
    role: "Technical Product Manager Intern",
    company: "Two Small Men With Big Hearts",
    url: "https://www.twosmallmen.com",
    logo: "/images/Career/Logos/TSMLogo.png",
    current: false,

    description:
      "Canadian moving company modernizing the digital moving experience. Led product improvements across quoting, booking, and mobile experiences, simplifying complex customer journeys and making it easier for customers to discover services, estimate their move, and take the next step toward booking.",

    images: ["/images/Career/TSM1.png", "/images/Career/TSM2.png"],
  },
];

const items = [
  {
    gif: "/images/TSM/TSM.gif",
    layout: "tsm",
    company: "Two Small Men",
    title: "Instant quotes & direct bookings for moving services",
    category: "Product Management",
    year: "Shipped 2025",
    colour1: "#ABC7FF",
    colour2: "#E3EDFF80",
    icon1: "material-symbols:bookmark-manager-outline-rounded",
    icon2: "mingcute:rocket-line",
    link: "/projects/twoSmallMen",
  },
  // {
  //   images: ["/images/ig1.png", "/images/ig2.png", "/images/ig3.png"],
  //   layout: "ig",
  //   company: "Instagram",
  //   title: "Personalized explore pages on Instagram",
  //   category: "Product Strategy",
  //   year: "Concept 2024",
  //   colour1: "#FF9FC6",
  //   colour2: "#FFCDE180",
  //   icon1: "majesticons:lightbulb-shine-line",
  //   icon2: "majesticons:presentation-chart-line",
  //   link: "/projects/instagram",
  // },
  {
    gif: "/images/TD/MySpend.gif",
    layout: "td",
    company: "TD",
    title: "Improving GenZ's financial well-bring with TD MySpend",
    category: "Product Management",
    year: "Concept 2025",
    colour1: "#89D78D",
    colour2: "#AFF6B280",
    icon1: "material-symbols:bookmark-manager-outline-rounded",
    icon2: "majesticons:presentation-chart-line",
    link: "/projects/mySpend",
  },
  // {
  //   images: ["/images/epi1.png", "/images/epi2.png", "/images/epi3.png"],
  //   layout: "epi",
  //   company: "EpiPlan",
  //   title: "A companion for dietary needs",
  //   category: "Product Design",
  //   year: "Concept 2023",
  //   colour1: "#FFB568",
  //   colour2: "#FFE3C580",
  //   icon1: "mingcute:pen-line",
  //   icon2: "majesticons:presentation-chart-line",
  //   link: "/projects/epiPlan",
  // },
];

const WorksCard = () => {
  const [selected, setSelected] = useState("works");

  const handleChange = (event, newSelection) => {
    if (newSelection !== null) {
      setSelected(newSelection);
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        borderTopRightRadius: { xs: 24, md: 0 },
        borderBottomRightRadius: { xs: 24, md: 0 },
        borderTopLeftRadius: { xs: 24, md: 48 },
        borderBottomLeftRadius: { xs: 24, md: 48 },
        textAlign: "left",
        border: "1px solid #F0F0F0",
        ml: 0,
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          flexShrink: 0,

          position: "absolute",

          top: {
            xs: 12,
            md: 16,
          },

          left: 0,
          right: 0,

          zIndex: 20,

          display: "flex",
          justifyContent: "center",

          pointerEvents: "none",
        }}
      >
        <ToggleButtonGroup
          value={selected}
          exclusive
          onChange={handleChange}
          sx={{
            pointerEvents: "auto",

            px: 1.5,
            py: 1.2,

            borderRadius: "999px",

            background:
              "linear-gradient(135deg, rgba(255,255,255,0.52), rgba(255,255,255,0.2))",

            border: "1px solid rgba(255,255,255,0.8)",

            boxShadow: `
        inset 0 1px 0 rgba(255,255,255,0.85),
        inset 0 -1px 0 rgba(255,255,255,0.25),
        0 0 8px rgba(35, 35, 255, 0.15)
      `,

            backdropFilter: "blur(18px) saturate(160%)",
            WebkitBackdropFilter: "blur(18px) saturate(160%)",

            position: "relative",

            overflow: "hidden",

            "&::before": {
              content: '""',

              position: "absolute",

              top: 0,
              left: "8%",
              right: "8%",

              height: "1px",

              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)",

              pointerEvents: "none",
            },

            // remove MUI default grouped borders
            "& .MuiToggleButtonGroup-grouped": {
              border: "none",

              "&:not(:first-of-type)": {
                borderRadius: 0,
              },

              "&:first-of-type": {
                borderRadius: 0,
              },
            },
          }}
        >
          {["works", "career", "about"].map((tab, index) => (
            <React.Fragment key={tab}>
              <ToggleButton
                disableRipple
                value={tab}
                sx={{
                  minWidth: {
                    xs: "78px",
                    sm: "92px",
                    md: "105px",
                  },

                  py: 1,

                  px: {
                    xs: 1.5,
                    sm: 2,
                    md: 2.5,
                  },

                  border: "none !important",

                  position: "relative",

                  fontFamily: "Arial, sans-serif",

                  fontSize: {
                    xs: "11px",
                    sm: "12px",
                  },

                  fontWeight: 500,

                  letterSpacing: "0.8px",

                  textTransform: "uppercase",

                  color: "#5E6671",

                  backgroundColor: "transparent",

                  transition: "all 0.25s ease",

                  "&:hover": {
                    color: "#2323FF",

                    backgroundColor: "transparent",

                    transform: "translateY(-1px)",
                  },

                  "&.Mui-selected": {
                    color: "#2323FF",

                    backgroundColor: "transparent",

                    fontWeight: 600,
                  },

                  "&.Mui-selected:hover": {
                    backgroundColor: "transparent",
                  },

                  // underline
                  "&::after": {
                    content: '""',

                    position: "absolute",

                    left: "20%",
                    right: "20%",
                    bottom: "3px",
                    top: "25px",
                    width: "60%",

                    height: "1px",

                    backgroundColor: "#2323FF",

                    transform: selected === tab ? "scaleX(1)" : "scaleX(0)",

                    transformOrigin: "left",

                    transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                  },

                  "&:hover::after": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                {tab}
              </ToggleButton>

              {/* DIVIDER */}
              {index < 2 && (
                <Box
                  sx={{
                    width: "1px",
                    height: "18px",

                    alignSelf: "center",

                    background:
                      "linear-gradient(to bottom, transparent, rgba(70,79,91,0.22), transparent)",

                    flexShrink: 0,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
      </Box>

      <Box
        sx={{
          flex: 1,
          minHeight: 0,

          width: "100%",

          overflowY: "auto",
          overflowX: "hidden",

          // Space for the floating toggle
          pt: {
            xs: "82px",
            md: "90px",
          },

          boxSizing: "border-box",

          scrollbarWidth: "thin",

          "&::-webkit-scrollbar": {
            width: "6px",
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#c5c5c5",
            borderRadius: "20px",
          },

          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        }}
      >
        {selected === "works" && (
          <>
            <WorksCarousel items={items} />

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",

                pt: {
                  xs: 1,
                  md: 6,
                },

                pb: {
                  xs: 4,
                  md: 5,
                },
              }}
            >
              <Box
                sx={{
                  fontFamily: "Arial, sans-serif",

                  fontSize: {
                    xs: "10px",
                    sm: "11px",
                  },

                  textTransform: "uppercase",
                  letterSpacing: "0.8px",

                  color: "#8E9298",

                  textAlign: "center",
                }}
              >
                More work coming soon — still building.
              </Box>
            </Box>
          </>
        )}

        {selected === "career" && <CareerTimeline items={careerItems} />}

        {selected === "about" && <BentoBox />}
      </Box>
    </Box>
  );
};

export default WorksCard;
