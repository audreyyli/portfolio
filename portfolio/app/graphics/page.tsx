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
      image: "/images/clubsWeek.png",
      alt: "24-25 Clubs Week Announcement",
      title: "Clubs Week Announcement",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/KDayTicket.png",
      alt: "Korea Day Ticket Prices",
      title: "Korea Day Tickets",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/KDay.png",
      alt: "Korea Day Announcement",
      title: "Korea Day Announcement",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/maskedSinger.png",
      alt: "Masked Singers Announcement",
      title: "Masked Singers Announcement",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/3v3Basketball.png",
      alt: "3V3 Basketball Tournament",
      title: "3V3 Basketball Tournament",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/lostLove.png",
      alt: "Lost Love Bar Night",
      title: "Lost Love Bar Night",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/fallRecruit.png",
      alt: "Fall Executive Recruitment",
      title: "Fall Executive Recruitment",
      type: "2023 / INSTAGRAM POST",
    },
    {
      image: "/images/froshTour.png",
      alt: "Frosh Tour",
      title: "Frosh Tour",
      type: "2023 / INSTAGRAM POST",
    },
    {
      image: "/images/springRecruit.png",
      alt: "Spring Executive Recruitment",
      title: "Spring Executive Recruitment",
      type: "2023 / INSTAGRAM POST",
    },
  ];

  const waiPictures = [
    {
      image: "/images/dataQuestFAQ.png",
      alt: "DataQuest FAQ",
      title: "DataQuest FAQ",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/dataQuestPartners.png",
      alt: "DataQuest Sponsors",
      title: "DataQuest Sponsors",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/ceepsWristbands.png",
      alt: "Ceeps Bar Night Wirstband",
      title: "Ceeps Bar Night Wirstbands",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/ceepsBarNight.png",
      alt: "Ceeps Bar Night",
      title: "Ceeps Bar Night",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/flagshipApplications.png",
      alt: "Flagship Director Applications",
      title: "Flagship Director Applications",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/headshots.png",
      alt: "AI Headshots",
      title: "AI Headshots",
      type: "2023 / INSTAGRAM POST",
    },
    {
      image: "/images/pabloInterview.png",
      alt: "Pablo Arredondo Interview",
      title: "Pablo Arredondo Interview",
      type: "2023 / INSTAGRAM POST",
    },
  ];

  const grcPictures = [
    {
      image: "/images/PLAnalystRecruit.png",
      alt: "PL & Analyst Recruitment",
      title: "PL & Analyst Recruitment",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/GRCAGM.png",
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
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile, side-by-side on larger screens
          position: "relative", 
        }}
      >
        {/* Sidebar for Desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "block" }, // Hide on mobile
            position: "fixed", 
            top: "50%", 
            transform: "translateY(-50%)",
            left: "20px", 
            padding: "20px",
            width: "200px",
            height: "fit-content",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link href="#wuksa" sx={linkStyles}>
              WUKSA
            </Link>
            <Link href="#wai" sx={linkStyles}>
              WAI
            </Link>
            <Link href="#grc" sx={linkStyles}>
              GRC
            </Link>
          </Box>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: "1200px", // Max width for content area
            margin: "0 auto",
            padding: { xs: "10px", sm: "20px" }, // Smaller padding for mobile
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Lato",
              marginTop: { xs: "30px", sm: "50px" },
              fontWeight: 900,
              fontSize: { xs: "50px", sm: "60px" }, // Adjust font size for mobile
              textTransform: "none",
              color: "#444",
            }}
          >
            Graphic Design Library
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Lato",
              fontWeight: 400,
              textTransform: "none",
              color: "#888",
              fontSize: { xs: "18px", sm: "20px" }, // Adjust font size for mobile
            }}
          >
            Designs made by Audrey throughout the years.
          </Typography>

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
                  color: "#444",
                  marginTop: { xs: "40px", sm: "60px" },
                  marginBottom: "30px",
                  fontWeight: "bold",
                  fontSize: { xs: "22px", sm: "26px" }, // Adjust font size for mobile
                }}
              >
                Western University Korean Student Association
              </Typography>
              <PictureGrid pictures={wuksaPictures} />
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
                  color: "#444",
                  marginTop: { xs: "40px", sm: "100px" },
                  marginBottom: "30px",
                  fontWeight: "bold",
                  fontSize: { xs: "22px", sm: "26px" }, // Adjust font size for mobile
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
                  color: "#444",
                  marginTop: { xs: "40px", sm: "100px" },
                  marginBottom: "30px",
                  fontWeight: "bold",
                  fontSize: { xs: "22px", sm: "26px" }, // Adjust font size for mobile
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
          maxWidth: "1200px",
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
  color: "#002366",
  fontWeight: "bold",
  textDecoration: "none",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#888",
    textDecoration: "underline",
  },
};