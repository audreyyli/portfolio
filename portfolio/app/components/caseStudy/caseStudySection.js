import React from "react";

import { Box, Typography } from "@mui/material";

const CaseStudySection = ({
  id,
  eyebrow,
  title,
  children,
  backgroundColor = "transparent",
}) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        scrollMarginTop: "60px",

        py: {
          xs: "72px",
          md: "110px",
        },

        backgroundColor,
      }}
    >
      {/* ======================================================
          SECTION LABEL
          Utility typography similar to CareerTimeline year
      ====================================================== */}

      <Typography
        component="p"
        sx={{
          fontFamily: "monospace",

          fontSize: {
            xs: "9px",
            sm: "10px",
          },

          lineHeight: 1.4,

          letterSpacing: "0.4px",

          textTransform: "uppercase",

          color: "#999999",

          mb: "18px",
        }}
      >
        {eyebrow}
      </Typography>

      {/* ======================================================
          TITLE
          Same Bootzy treatment as CareerTimeline company names
      ====================================================== */}

      <Typography
        component="h2"
        variant="h2"
        sx={{
          maxWidth: "760px",

          fontFamily: "Bootzy, sans-serif",

          fontSize: {
            xs: "34px",
            sm: "40px",
            md: "46px",
          },

          lineHeight: 0.9,

          letterSpacing: "1px",

          fontWeight: 400,

          color: "#464F5B",

          mb: {
            xs: "30px",
            md: "36px",
          },
        }}
      >
        {title}
      </Typography>

      {/* ======================================================
          BODY
          Same Arial treatment as CareerTimeline descriptions
      ====================================================== */}

      <Box
        sx={{
          maxWidth: "720px",

          "& p": {
            fontFamily: "Arial, sans-serif",

            fontSize: {
              xs: "15px",
              sm: "16px",
              md: "17px",
            },

            lineHeight: 1.65,

            letterSpacing: "-0.35px",

            fontWeight: 400,

            color: "#808080",

            mt: 0,

            mb: "22px",
          },

          "& p:last-child": {
            mb: 0,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CaseStudySection;
