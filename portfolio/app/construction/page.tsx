"use client";
import { Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/navigation"; // Import the router from Next.js

// Create a custom theme with Apple system fonts
const theme = createTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

export default function UnderConstruction() {
  const router = useRouter(); // Initialize useRouter for navigation

  const handleGoBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh', // Full height of the viewport
          textAlign: 'center', // Center the text
          padding: '20px', // Padding for responsiveness
          backgroundColor: '#f9f9f9', // Light background color
        }}
      >
        {/* Title */}
        <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
          Page Under Construction!
        </Typography>

        {/* Short Paragraph */}
        <Typography variant="body1" sx={{ color: '#666', maxWidth: '600px', lineHeight: '1.6' }}>
          I&apos;m currently working hard to bring you an awesome experience. Stay tuned, and check back soon for exciting updates!
        </Typography>

        <Button 
          variant="contained"
          onClick={handleGoBack}
          sx={{ 
            marginTop: "20px",
            fontSize: "16px", 
            textTransform: 'none', 
            backgroundColor: "#002366", 
            borderRadius: "22px", 
            paddingX: "30px", 
            position: "relative",
            boxShadow: "none",
            transition: 'padding 0.3s ease', // Smooth padding transition
            '&:hover': {
              backgroundColor: 'rgba(0, 35, 102, 0.7)', // Light grey background
              color: '#fff',
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
              paddingLeft: '50px', // Increase padding to make space for arrow
              '& .arrow': { 
                opacity: 1, // Make arrow visible
                transform: 'translateX(1px)', // Move the arrow to the right
                transition: 'transform 0.3s ease-in-out', // Smooth transition for movement
              },
            },
          }}
        >
          <Box
            component="span"
            className="arrow"
            sx={{
              opacity: 0, // Initially hidden
              position: "absolute",
              left: 20, // Position on the left side inside the button
              display: "inline-block",
              paddingRight: "15px",
              transition: 'opacity 0.3s ease, transform 0.3s ease', // Smooth transition for appearance and movement
            }}
          >
            «
          </Box>
          Go Back
        </Button>
      </Box>
    </ThemeProvider>
  );
}