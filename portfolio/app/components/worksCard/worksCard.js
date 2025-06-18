import React, { useState } from "react";
import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import WorksCarousel from "../carousel/worksCarousel";
import GraphicsCarousel from "../carousel/graphicCarousel";
import BentoBox from "../bentoBox/bentoBox";

const graphicItems = [
  {
    image: "/images/Graphics/itc_meetTeam.png",
    title: "Meet the 25-26 Team",
    company: "Ivey Tech Club",
    year: "2025",
    icon1: "tabler:code",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#034638",
    colour2: "#318B7880",
  },
  {
    image: "/images/Graphics/itc_clubsWeek.png",
    title: "Clubs Week Announcement",
    company: "Ivey Tech Club",
    year: "2025",
    icon1: "tabler:code",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#034638",
    colour2: "#318B7880",
  },
  {
    image: "/images/Graphics/icgg_meetTeam.png",
    title: "Meet the 25-26 Team",
    company: "Ivey Consumer Goods Group",
    year: "2025",
    icon1: "mingcute:shopping-bag-2-line",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#233414",
    colour2: "#60704C80",
  },
  {
    image: "/images/Graphics/ergo.png",
    title: "ERGO Automotive Season Opener",
    company: "ERGO Automotive",
    year: "2025",
    icon1: "material-symbols:motorcycle-outline-rounded",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#001674",
    colour2: "#6677BF80",
  },
  {
    image: "/images/Graphics/bubbli_giveaway.png",
    title: "bubbli 10K Giveaway",
    company: "bubbli",
    year: "2025",
    icon1: "material-symbols:bubble-chart-outline",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#79C2EF",
    colour2: "#BEE7FD80",
  },
  {
    image: "/images/Graphics/wuksa_gameboard.png",
    title: "Korea Day Gameboard",
    company: "Korean Student Association",
    year: "2025",
    icon1: "tabler:alphabet-korean",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#7851A9",
    colour2: "#B898E180",
  },
  {
    image: "/images/Graphics/wuksa_karaoke.png",
    title: "Karaoke Night",
    company: "Korean Student Association",
    year: "2024",
    icon1: "tabler:alphabet-korean",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#7851A9",
    colour2: "#B898E180",
  },
  {
    image: "/images/Graphics/wuksa_kday.png",
    title: "Korea Day 2024",
    company: "Korean Student Association",
    year: "2024",
    icon1: "tabler:alphabet-korean",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#7851A9",
    colour2: "#B898E180",
  },
  {
    image: "/images/Graphics/wuksa_masked.png",
    title: "Masked Singers",
    company: "Korean Student Association",
    year: "2024",
    icon1: "tabler:alphabet-korean",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#7851A9",
    colour2: "#B898E180",
  },
  {
    image: "/images/Graphics/wuksa_3v3.png",
    title: "3V3 Basketball Tournament",
    company: "Korean Student Association",
    year: "2024",
    icon1: "tabler:alphabet-korean",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#7851A9",
    colour2: "#B898E180",
  },
  {
    image: "/images/Graphics/bubbli_vendor.png",
    title: "I'm a Vendor",
    company: "bubbli",
    year: "2024",
    icon1: "material-symbols:bubble-chart-outline",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#79C2EF",
    colour2: "#BEE7FD80",
  },
  {
    image: "/images/Graphics/bubbli_blackFriday.png",
    title: "Black Friday Sale",
    company: "bubbli",
    year: "2024",
    icon1: "material-symbols:bubble-chart-outline",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#79C2EF",
    colour2: "#BEE7FD80",
  },
  {
    image: "/images/Graphics/wuksa_fallRecruit.png",
    title: "Fall Recruitment",
    company: "Korean Student Association",
    year: "2023",
    icon1: "tabler:alphabet-korean",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#7851A9",
    colour2: "#B898E180",
  },
  {
    image: "/images/Graphics/wuksa_frosh.png",
    title: "Frosh Tour",
    company: "Korean Student Association",
    year: "2023",
    icon1: "tabler:alphabet-korean",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#7851A9",
    colour2: "#B898E180",
  },
  {
    image: "/images/Graphics/wuksa_springRecruit.png",
    title: "Spring Recruitment",
    company: "Korean Student Association",
    year: "2023",
    icon1: "tabler:alphabet-korean",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#7851A9",
    colour2: "#B898E180",
  },
  {
    image: "/images/Graphics/wai_application.png",
    title: "Flagship Senior Director & Director Application",
    company: "Western AI",
    year: "2023",
    icon1: "mingcute:ai-line",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#02214F",
    colour2: "#0C44A280",
  },
  {
    image: "/images/Graphics/wai_partners.png",
    title: "DataQuest Sponsor Partners",
    company: "Western AI",
    year: "2023",
    icon1: "mingcute:ai-line",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#02214F",
    colour2: "#0C44A280",
  },
  {
    image: "/images/Graphics/wai_faq.png",
    title: "DataQuest FAQ",
    company: "Western AI",
    year: "2023",
    icon1: "mingcute:ai-line",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#02214F",
    colour2: "#0C44A280",
  },
  {
    image: "/images/Graphics/wai_headshots.png",
    title: "AI Headshots",
    company: "Western AI",
    year: "2023",
    icon1: "mingcute:ai-line",
    icon2: "material-symbols:note-stack-add-outline-rounded",
    colour1: "#02214F",
    colour2: "#0C44A280",
  },
];

const items = [
  {
    images: ["/images/ig1.png", "/images/ig2.png", "/images/ig3.png"],
    layout: "ig",
    company: "Instagram",
    title: "Personalized explore pages on Instagram",
    category: "Product Strategy",
    year: "Pitched 2024",
    colour1: "#FF9FC6",
    colour2: "#FFCDE180",
    icon1: "majesticons:lightbulb-shine-line",
    icon2: "majesticons:presentation-chart-line",
    link: "/projects/instagram",
  },
  {
    images: ["/images/td1.png", "/images/td2.png"],
    layout: "td",
    company: "TD",
    title: "Improving GenZ's financial well-bring with TD MySpend",
    category: "Product Management",
    year: "Pitched 2025",
    colour1: "#89D78D",
    colour2: "#AFF6B280",
    icon1: "material-symbols:bookmark-manager-outline-rounded",
    icon2: "majesticons:presentation-chart-line",
    link: "/projects/mySpend",
  },
  {
    images: ["/images/epi1.png", "/images/epi2.png", "/images/epi3.png"],
    layout: "epi",
    company: "EpiPlan",
    title: "A companion for dietary needs",
    category: "Product Design",
    year: "Pitched 2023",
    colour1: "#FFB568",
    colour2: "#FFE3C580",
    icon1: "mingcute:pen-line",
    icon2: "majesticons:presentation-chart-line",
    link: "/projects/epiPlan",
  },
  {
    images: ["/images/tsm1.png", "/images/tsm2.png"],
    layout: "tsm",
    company: "Two Small Men with Big Hearts",
    title: "Instant quotes & direct bookings for moving services",
    category: "Product Management",
    year: "Shipped 2025",
    colour1: "#ABC7FF",
    colour2: "#E3EDFF80",
    icon1: "material-symbols:bookmark-manager-outline-rounded",
    icon2: "mingcute:rocket-line",
    link: "/projects/twoSmallMen",
  },
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
        borderTopRightRadius: { xs: 24, md: 0 },
        borderBottomRightRadius: { xs: 24, md: 0 },
        borderTopLeftRadius: { xs: 24, md: 48 },
        borderBottomLeftRadius: { xs: 24, md: 48 },
        textAlign: "left",
        background: "#F1F1F1",
        ml: 0,
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4, pt: 2 }}>
        <ToggleButtonGroup
          value={selected}
          exclusive
          onChange={handleChange}
          sx={{
            borderRadius: "999px",
            backgroundColor: "#D9D9D9",
            padding: "4px",
          }}
        >
          {["works", "graphics", "about"].map((tab) => (
            <ToggleButton
              key={tab}
              disableRipple
              value={tab}
              sx={{
                borderRadius: "999px",
                textTransform: "none",
                borderColor: "transparent",
                color: "#00000066",
                px: 4,
                transition: "all 0.5s ease",
                fontFamily: "Urbanist, sans-serif",
                fontWeight: "400",
                "&.Mui-selected": {
                  borderRadius: "999px",
                  backgroundColor: "#fff",
                  borderColor: "transparent",
                  fontWeight: "700",
                  color: "#171717",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                  fontWeight: "700",
                  color: "#171717",
                },
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      <Box sx={{ height: "100%", width: "100%", pt: { xs: 1, md: 2 } }}>
        {selected === "works" && <WorksCarousel items={items} />}
        {selected === "graphics" && (
          <GraphicsCarousel graphicItems={graphicItems} />
        )}
        {selected === "about" && (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              overflowY: { xs: "auto", md: "hidden" },
              maxHeight: { xs: "80vh", md: "none" },
            }}
          >
            <BentoBox />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default WorksCard;
