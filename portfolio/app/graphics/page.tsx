"use client";
import Header from "../components/header/header.js";
import PictureGrid from "../components/pictures/pictureGrid.js";
import { Typography, Box, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "../components/footer/footer.js";
import { motion } from "framer-motion"; // Import Framer Motion for animations

// Create a custom theme with Apple system fonts
const theme = createTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 1180,
      lg: 1280,
      xl: 1350,
    },
  },
});

// Animation variants for fading in and rising up
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function graphics() {
  const wuksaPictures = [
    {
      image: "/images/WUKSA/marketing1.png",
      alt: "Marketing Team Announcement",
      title: "Marketing Team 1",
      type: "2025 / INSTAGRAM POST",
    },
    {
      image: "/images/WUKSA/marketing2.png",
      alt: "Marketing Team Announcement",
      title: "Marketing Team 2",
      type: "2025 / INSTAGRAM POST",
    },
    {
      image: "/images/WUKSA/basketballTournament.png",
      alt: "2025 3v3 Basketball Tournament Announcement",
      title: "3v3 Basketball Tournament",
      type: "2025 / INSTAGRAM POST",
    },
    {
      image: "/images/WUKSA/karaokeNight.png",
      alt: "Karaoke Night Announcement",
      title: "Karaoke Night Announcement",
      type: "2025 / INSTAGRAM POST",
    },
    {
      image: "/images/WUKSA/clubsWeek.png",
      alt: "24-25 Clubs Week Announcement",
      title: "Clubs Week Announcement",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/WUKSA/KDayTicket.png",
      alt: "Korea Day Ticket Prices",
      title: "Korea Day Tickets",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/WUKSA/KDay.png",
      alt: "Korea Day Announcement",
      title: "Korea Day Announcement",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/WUKSA/maskedSinger.png",
      alt: "Masked Singers Announcement",
      title: "Masked Singers Announcement",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/WUKSA/3v3Basketball.png",
      alt: "3V3 Basketball Tournament",
      title: "3V3 Basketball Tournament",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/WUKSA/lostLove.png",
      alt: "Lost Love Bar Night",
      title: "Lost Love Bar Night",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/WUKSA/fallRecruit.png",
      alt: "Fall Executive Recruitment",
      title: "Fall Executive Recruitment",
      type: "2023 / INSTAGRAM POST",
    },
    {
      image: "/images/WUKSA/froshTour.png",
      alt: "Frosh Tour",
      title: "Frosh Tour",
      type: "2023 / INSTAGRAM POST",
    },
    {
      image: "/images/WUKSA/springRecruit.png",
      alt: "Spring Executive Recruitment",
      title: "Spring Executive Recruitment",
      type: "2023 / INSTAGRAM POST",
    },
  ];

  const bubbliPictures = [
    {
      image: "/images/bubbli/2year.png",
      alt: "2 Year Anniversary",
      title: "2 Year Anniversary Giveaway",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/bubbli/spring.png",
      alt: "Spring Collection",
      title: "Spring Collection Announcement",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/bubbli/clearance.png",
      alt: "Clearance Sale",
      title: "Clearance Sale Announcement",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/bubbli/vendor.png",
      alt: "Vendor Announcement",
      title: "I'm a Vendor!",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/bubbli/blackFriday.png",
      alt: "Black Friday Sale",
      title: "Black Friday Sale Announcement",
      type: "2024 / INSTAGRAM POST",
    },
  ];

  const waiPictures = [
    {
      image: "/images/WAI/dataQuestFAQ.png",
      alt: "DataQuest FAQ",
      title: "DataQuest FAQ",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/WAI/dataQuestPartners.png",
      alt: "DataQuest Sponsors",
      title: "DataQuest Sponsors",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/WAI/ceepsWristbands.png",
      alt: "Ceeps Bar Night Wirstband",
      title: "Ceeps Bar Night Wirstbands",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/WAI/ceepsBarNight.png",
      alt: "Ceeps Bar Night",
      title: "Ceeps Bar Night",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/WAI/flagshipApplications.png",
      alt: "Flagship Director Applications",
      title: "Flagship Director Applications",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/WAI/headshots.png",
      alt: "AI Headshots",
      title: "AI Headshots",
      type: "2023 / INSTAGRAM POST",
    },
    {
      image: "/images/WAI/pabloInterview.png",
      alt: "Pablo Arredondo Interview",
      title: "Pablo Arredondo Interview",
      type: "2023 / INSTAGRAM POST",
    },
  ];

  const grcPictures = [
    {
      image: "/images/GRC/PLAnalystRecruit.png",
      alt: "PL & Analyst Recruitment",
      title: "PL & Analyst Recruitment",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/GRC/GRCAGM.png",
      alt: "GRC Annual General Meeting",
      title: "GRC Annual General Meeting",
      type: "2023 / INSTAGRAM POST",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", md: "row" },
          position: "relative",
        }}
      >
        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: "1300px",
            margin: "0 auto",
            padding: { xs: "10px", sm: "20px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: { xs: "30px", sm: "50px" },
            }}
          >
            {/* Title and Links in one row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              {/* Title */}
              <Box sx={{ display: "flex", alignItems: "baseline" }}>
                {/* "G" in Amoresa */}
                <Typography
                  variant="h2"
                  sx={{
                    textTransform: "none",
                    color: "#444",
                    fontSize: { sm: "35px", md: "60px" },
                    fontFamily: "Amoresa",
                    fontStyle: "normal",
                    display: "inline-block",
                    position: "relative",
                  }}
                >
                  G
                </Typography>

                {/* "raphic" in Lato */}
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    textTransform: "none",
                    color: "#444",
                    fontSize: { sm: "30px", md: "60px" },
                    fontFamily: "Lato",
                    fontStyle: "italic",
                    position: "relative",
                  }}
                >
                  raphic
                </Typography>

                {/* "D" in Amoresa */}
                <Typography
                  variant="h2"
                  sx={{
                    textTransform: "none",
                    color: "#444",
                    fontSize: { sm: "35px", md: "60px" },
                    fontFamily: "Amoresa",
                    fontStyle: "normal",
                    display: "inline-block",
                    position: "relative",
                    marginLeft: { sm: "10px", md: "20px" },
                  }}
                >
                  D
                </Typography>

                {/* "esign Library" in Lato */}
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    textTransform: "none",
                    color: "#444",
                    fontSize: { sm: "30px", md: "60px" },
                    fontFamily: "Lato",
                    fontStyle: "italic",
                    position: "relative",
                  }}
                >
                  esign Library
                </Typography>
              </Box>

              {/* Links aligned to the right */}
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link href="#wuksa" sx={linkStyles}>
                  wuksa
                </Link>
                <Link href="#bubbli" sx={linkStyles}>
                  bubbli
                </Link>
                <Link href="#wai" sx={linkStyles}>
                  wai
                </Link>
                <Link href="#grc" sx={linkStyles}>
                  grc
                </Link>
              </Box>
            </Box>

            {/* Subtitle Below Title and Links */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Lato",
                fontWeight: 100,
                textTransform: "none",
                alignItems: "flex-start",
                textAlign: "left",
                color: "#888",
                fontSize: { sm: "18px", md: "20px" },
                marginTop: "10px",
              }}
            >
              Designs made by Audrey throughout the years.
            </Typography>
          </Box>

          {/* WUKSA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <Box id="wuksa">
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Lato",
                  color: "#444",
                  marginTop: { sm: "40px", md: "60px" },
                  marginBottom: "30px",
                  fontWeight: 400,
                  fontSize: { sm: "18px", md: "26px" },
                }}
              >
                Western University Korean Student Association
              </Typography>
              <PictureGrid pictures={wuksaPictures} />
            </Box>
          </motion.div>

          {/* WUKSA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <Box id="bubbli">
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Lato",
                  color: "#444",
                  marginTop: { sm: "40px", md: "60px" },
                  marginBottom: "30px",
                  fontWeight: 400,
                  fontSize: { sm: "18px", md: "26px" },
                }}
              >
                bubbli
              </Typography>
              <PictureGrid pictures={bubbliPictures} />
            </Box>
          </motion.div>

          {/* WAI Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <Box id="wai">
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Lato",
                  color: "#444",
                  marginTop: { sm: "40px", md: "60px" },
                  marginBottom: "30px",
                  fontWeight: 400,
                  fontSize: { sm: "18px", md: "26px" },
                }}
              >
                Western Artificial Intelligence
              </Typography>
              <PictureGrid pictures={waiPictures} />
            </Box>
          </motion.div>

          {/* GRC Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <Box id="grc">
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Lato",
                  color: "#444",
                  marginTop: { sm: "40px", md: "60px" },
                  marginBottom: "30px",
                  fontWeight: 400,
                  fontSize: { sm: "18px", md: "26px" },
                }}
              >
                Global Research & Consulting
              </Typography>
              <PictureGrid pictures={grcPictures} />
            </Box>
          </motion.div>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1300px",
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

// Styles for links in the sidebar
const linkStyles = {
  color: "#888",
  fontWeight: "bold",
  textDecoration: "none",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#000",
    textDecoration: "underline",
  },
};