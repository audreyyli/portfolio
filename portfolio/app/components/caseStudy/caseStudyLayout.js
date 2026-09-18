"use client";

import React from "react";

import { Box } from "@mui/material";

import CaseStudySidebar from "./caseStudySidebar";

export default function CaseStudyLayout({ children }) {
  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",

        bgcolor: "#FFFFFF",

        // creates the rounded overlap with Hero
        borderRadius: {
          xs: "24px 24px 0 0",
          md: "36px 36px 0 0",
        },

        mt: {
          xs: "-24px",
          md: "-36px",
        },

        zIndex: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1240px",

          mx: "auto",

          px: {
            xs: "24px",
            sm: "40px",
            md: "48px",
          },

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "140px minmax(0, 800px)",
          },

          columnGap: {
            md: "72px",
            lg: "100px",
          },

          alignItems: "start",

          pb: {
            xs: "80px",
            md: "140px",
          },
        }}
      >
        {/* =====================================
            ONLY SIDEBAR ON THE PAGE

            Because CaseStudyLayout contains the
            entire case study, this can remain
            sticky throughout all sections.
        ===================================== */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },

            pt: "48px",

            alignSelf: "stretch",
          }}
        >
          <CaseStudySidebar />
        </Box>

        {/* =====================================
            EVERYTHING ON THE RIGHT
        ===================================== */}

        <Box
          sx={{
            minWidth: 0,
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
