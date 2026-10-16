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
        scrollMarginTop: "80px",

        py: {
          xs: "72px",
          md: "110px",
        },

        backgroundColor,
      }}
    >
      {/* ======================================================
          SECTION LABEL
      ====================================================== */}

      {eyebrow && (
        <Typography
          component="p"
          sx={{
            fontFamily: '"Google Sans Flex", Arial, sans-serif',

            fontSize: {
              xs: "11px",
              md: "12px",
            },

            fontWeight: 600,

            lineHeight: 1.4,

            letterSpacing: "0.09em",

            textTransform: "uppercase",

            color: "#1B56A0",

            mb: {
              xs: "18px",
              md: "20px",
            },
          }}
        >
          {eyebrow}
        </Typography>
      )}

      {/* ======================================================
          SECTION TITLE
      ====================================================== */}

      {title && (
        <Typography
          component="h2"
          sx={{
            maxWidth: "780px",

            fontFamily: '"Google Sans Flex", Arial, sans-serif',

            fontSize: {
              xs: "34px",
              sm: "40px",
              md: "46px",
            },

            fontWeight: 500,

            lineHeight: {
              xs: 1.12,
              md: 1.08,
            },

            letterSpacing: {
              xs: "-0.9px",
              sm: "-1.1px",
              md: "-1.4px",
            },

            color: "#29323D",

            m: 0,

            mb: {
              xs: "30px",
              md: "36px",
            },
          }}
        >
          {title}
        </Typography>
      )}

      {/* ======================================================
          BODY CONTENT
      ====================================================== */}

      <Box
        sx={{
          maxWidth: "720px",

          /*
           * Only style paragraphs that are DIRECT children.
           *
           * This means components nested inside this Box,
           * such as ProblemStatement, can control their own
           * typography without these styles overriding them.
           */
          "& > p": {
            fontFamily: '"Google Sans Flex", Arial, sans-serif',

            fontSize: {
              xs: "16px",
              sm: "17px",
              md: "18px",
            },

            fontWeight: 400,

            lineHeight: {
              xs: 1.65,
              md: 1.7,
            },

            letterSpacing: "-0.2px",

            color: "#737C87",

            mt: 0,

            mb: {
              xs: "20px",
              md: "24px",
            },
          },

          "& > p:last-of-type": {
            mb: 0,
          },

          // ==================================================
          // LINKS
          // ==================================================

          "& a": {
            color: "#1B56A0",

            fontWeight: 500,

            textDecorationColor: "#AFC8E8",

            textUnderlineOffset: "3px",
          },

          "& a:hover": {
            textDecorationColor: "#1B56A0",
          },

          // ==================================================
          // LISTS
          // ==================================================

          "& ul, & ol": {
            fontFamily: '"Google Sans Flex", Arial, sans-serif',

            color: "#737C87",

            lineHeight: 1.7,

            pl: "22px",
          },

          "& li": {
            mb: "8px",
          },

          "& li:last-child": {
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
