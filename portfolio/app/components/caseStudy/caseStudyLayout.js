"use client";

import React from "react";

import { Box } from "@mui/material";

import CaseStudySidebar from "./caseStudySidebar";

export default function CaseStudyLayout({ children, navItems }) {
  return (
    <Box
      component="main"
      sx={{
        position: "relative",

        width: "100%",

        bgcolor: "#FFFFFF",

        borderRadius: {
          xs: "20px 20px 0 0",
          sm: "24px 24px 0 0",
          md: "32px 32px 0 0",
        },

        mt: {
          xs: "-20px",
          sm: "-24px",
          md: "-32px",
        },

        zIndex: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",

          maxWidth: "1280px",

          mx: "auto",

          px: {
            xs: "20px",
            sm: "32px",
            md: "48px",
            lg: "56px",
          },

          display: "grid",

          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            md: "120px minmax(0, 820px)",
          },

          columnGap: {
            md: "64px",
            lg: "88px",
          },

          alignItems: "start",

          pb: {
            xs: "72px",
            md: "110px",
          },
        }}
      >
        {/* SIDEBAR */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },

            pt: {
              md: "64px",
            },

            alignSelf: "stretch",
          }}
        >
          <CaseStudySidebar items={navItems} />
        </Box>

        {/* CONTENT */}

        <Box
          sx={{
            minWidth: 0,

            width: "100%",

            maxWidth: "820px",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
