"use client";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import { Box, Typography, Card, CardMedia, Link } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function about() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Add the header component */}
      <Header />
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, side by side on larger
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: { xs: '20px', md: '40px' }, // Smaller padding on mobile
          minHeight: '80vh',
        }}
      >
        {/* Left: Image Section */}
        <Card
          sx={{
            width: { xs: '100%', md: '2800px' }, // Full width on mobile, fixed width on larger screens
            height: 'auto',
            boxShadow: 'none',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: { xs: '20px', md: '0' }, // Space below the image on mobile
            marginRight: { md: '40px' }, // Space between image and text on larger screens
          }}
        >
          <CardMedia
            component="img"
            image="/images/Headshot.png" // Path to your headshot
            alt="Audrey's Headshot"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </Card>

        {/* Right: Text Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}> {/* Always left-aligned */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#444', marginBottom: '16px' }}>
            A Little Bit About Me...
          </Typography>

          <Typography variant="body1" sx={{ fontSize: "18px", marginTop: "20px", color: '#666', lineHeight: '1.6' }}>
            By day, I study Computer Science & Business Administration at the University of Western & Ivey School of Business. By night, I immerse myself in the world of design and technology, crafting thoughtful, user-centered solutions. 
            I&apos;m currently on the lookout for a Summer 2025 internship where I can collaborate with a passionate team and explore new ways to connect people through design.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "18px", color: '#666', lineHeight: '1.6', marginTop: "20px" }}>
            What I love about UX is its versatility — it&apos;s the story behind every great product and the reason things just make sense to users. From ideation to development, I love being part of the entire process.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "18px", color: '#666', lineHeight: '1.6', marginTop: "20px" }}>
            I believe great design happens at the intersection of empathy, creativity, and strategy. For me, it&apos;s about more than just pixels on a screen; it&apos;s about solving real problems and building products that make a difference.
            I&apos;m constantly learning and inspired by how design can shape the way we interact with the world, and I&apos;m eager to continue pushing the boundaries of what&apos;s possible.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile, row on larger screens
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
          maxWidth: "1160px",
          margin: "0 auto",
          borderLeft: { md: "4px solid #D9E6FF" }, // Border only on larger screens
          backgroundColor: "rgba(217, 230, 255, 0.2)",
          paddingY: "20px",
          paddingX: { xs: "20px", md: "0" }, // Add padding on mobile
        }}
      >
        {/* Left: Currently Text Section */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { md: "20px" }, // Padding left only on larger screens
            textAlign: 'left', // Always left-aligned
            marginBottom: { xs: '20px', md: '0' }, // Add margin bottom on mobile
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "30px", md: "45px" }, // Adjust font size for mobile
              color: "#444",
            }}
          >
            Currently...
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "22px", md: "28px" }, // Adjust font size for mobile
              marginTop: "30px",
              color: "#888",
            }}
          >
            👩‍💻 developing a website at{' '}
            <Link href="https://www.twosmallmen.com" target="_blank" sx={{ color: "#002366", textDecoration: "underline", "&:hover": { textDecoration: "underline", color: 'rgba(0, 35, 102, 0.7)' } }}>
              Two Small Men
            </Link>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "22px", md: "28px" }, // Adjust font size for mobile
              color: "#888",
            }}
          >
            💃 making silly reels at{' '}
            <Link href="https://www.instagram.com/western_ksa/" target="_blank" sx={{ color: "#002366", textDecoration: "underline", "&:hover": { textDecoration: "underline", color: 'rgba(0, 35, 102, 0.7)' } }}>
              WesternU KSA
            </Link>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "22px", md: "28px" }, // Adjust font size for mobile
              color: "#888",
            }}
          >
            🍔 munching on good food and partying with friends
          </Typography>
        </Box>

        {/* Right: Me Image Section */}
        <Card
          sx={{
            width: { xs: '100%', md: '470px' }, // Full width on mobile, fixed width on larger screens
            height: 'auto',
            overflow: 'hidden',
            backgroundColor: "transparent",
            boxShadow: "none",
            paddingRight: { md: "10px" }, // Padding only on larger screens
          }}
        >
          <CardMedia
            component="img"
            image="/images/Me.png"
            alt="Audrey"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </Card>
      </Box>

      {/* Add the footer component */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          width: "100%",
          marginTop: "120px",
        }}
      >
        <Footer />
      </Box>
    </ThemeProvider>
  );
}