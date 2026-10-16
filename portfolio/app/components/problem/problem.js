"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

const Problem = ({ intro, introColour = "#464F5B", problemStatement }) => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",

        py: {
          xs: "72px",
          md: "110px",
        },
      }}
    >
      {/* ====================================================
          INTRO / LABEL
      ==================================================== */}

      <Typography
        component="p"
        sx={{
          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          fontSize: {
            xs: "11px",
            md: "12px",
          },

          fontWeight: 600,

          letterSpacing: "0.09em",

          textTransform: "uppercase",

          color: introColour,

          lineHeight: 1.4,

          mb: {
            xs: "20px",
            md: "24px",
          },
        }}
      >
        {intro}
      </Typography>

      {/* ====================================================
          PROBLEM STATEMENT
      ==================================================== */}

      <Typography
        component="h2"
        sx={{
          maxWidth: "850px",

          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          fontSize: {
            xs: "30px",
            sm: "36px",
            md: "42px",
          },

          fontWeight: 500,

          letterSpacing: {
            xs: "-0.8px",
            sm: "-1px",
            md: "-1.3px",
          },

          lineHeight: {
            xs: 1.2,
            md: 1.15,
          },

          color: "#464F5B",

          m: 0,
        }}
      >
        {problemStatement}
      </Typography>
    </Box>
  );
};

export default Problem;
