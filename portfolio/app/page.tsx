"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";

import ProfileCard from "./components/profileCard/profileCard";
import WorksCard from "./components/worksCard/worksCard";
import CustomCursor from "./components/customercursor/customcursor";

const theme = createTheme({
  typography: {
    fontFamily:
      "Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },

  // Prevent the document itself from scrolling
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          overflow: "hidden",
        },

        body: {
          height: "100%",
          margin: 0,
          overflow: "hidden",
        },

        "#root": {
          height: "100%",
        },
      },
    },
  },
});

function MyApp() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomCursor />

      <Box
        sx={{
          width: "100vw",
          height: "100dvh",

          overflow: "hidden",

          backgroundColor: "#fff",

          display: "flex",
          flexDirection: isMobile ? "column" : "row",

          alignItems: "center",

          p: isMobile ? "10px" : 0,

          boxSizing: "border-box",
        }}
      >
        {/* PROFILE */}
        <Box
          sx={{
            width: isMobile ? "100%" : "29vw",
            height: isMobile ? "auto" : "95dvh",

            flexShrink: 0,

            mb: isMobile ? "20px" : 0,

            overflow: "hidden",
          }}
        >
          <ProfileCard />
        </Box>

        {/* WORK — ONLY SCROLLABLE SECTION */}
        <Box
          sx={{
            width: isMobile ? "100%" : "70vw",

            height: isMobile ? "auto" : "95dvh",

            ml: isMobile ? 0 : "1vw",

            // Very important inside a flex layout
            minHeight: 0,

            overflow: "hidden",
          }}
        >
          <WorksCard />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
