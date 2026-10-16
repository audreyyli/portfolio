"use client";

import React from "react";

import { Box, Typography } from "@mui/material";

export default function ProjectInfo({
  company,
  title,
  role,
  timeline,
  team,
  skills,
}) {
  return (
    <Box
      component="header"
      sx={{
        pt: {
          xs: "48px",
          md: "64px",
        },

        pb: {
          xs: "64px",
          md: "88px",
        },
      }}
    >
      {/* ======================================================
          COMPANY
      ====================================================== */}

      <Typography
        component="p"
        sx={{
          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          fontSize: {
            xs: "11px",
            sm: "12px",
          },

          fontWeight: 600,

          letterSpacing: "0.08em",

          textTransform: "uppercase",

          color: "#8B929A",

          lineHeight: 1.4,

          mb: {
            xs: "18px",
            md: "22px",
          },
        }}
      >
        {company}
      </Typography>

      {/* ======================================================
          PROJECT TITLE
      ====================================================== */}

      <Typography
        component="h1"
        sx={{
          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          fontSize: {
            xs: "42px",
            sm: "52px",
            md: "64px",
          },

          fontWeight: 500,

          letterSpacing: {
            xs: "-1.4px",
            sm: "-1.8px",
            md: "-2.2px",
          },

          lineHeight: {
            xs: 1.05,
            md: 1.02,
          },

          color: "#464F5B",

          maxWidth: "900px",

          m: 0,
        }}
      >
        {title}
      </Typography>

      {/* ======================================================
          PROJECT META
      ====================================================== */}

      <Box
        sx={{
          mt: {
            xs: "48px",
            md: "64px",
          },

          pt: {
            xs: "24px",
            md: "28px",
          },

          borderTop: "1px solid #E4E6E8",

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: team ? "repeat(4, 1fr)" : "repeat(3, 1fr)",
          },

          columnGap: {
            xs: "24px",
            sm: "32px",
            md: "48px",
          },

          rowGap: {
            xs: "32px",
            sm: "36px",
          },

          alignItems: "start",
        }}
      >
        <MetaItem label="Role">{role}</MetaItem>

        <MetaItem label="Timeline">{timeline}</MetaItem>

        {team && <MetaItem label="Team">{team}</MetaItem>}

        <MetaItem label="Skills">{skills}</MetaItem>
      </Box>
    </Box>
  );
}

// ============================================================
// META ITEM
// ============================================================

function MetaItem({ label, children }) {
  return (
    <Box>
      {/* META LABEL */}

      <Typography
        component="p"
        sx={{
          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          fontSize: {
            xs: "10px",
            sm: "11px",
          },

          fontWeight: 600,

          letterSpacing: "0.08em",

          textTransform: "uppercase",

          color: "#969DA6",

          lineHeight: 1.4,

          mb: "8px",
        }}
      >
        {label}
      </Typography>

      {/* META VALUE */}

      <Typography
        component="div"
        sx={{
          fontFamily: '"Google Sans Flex", Arial, sans-serif',

          fontSize: {
            xs: "14px",
            sm: "15px",
            md: "16px",
          },

          fontWeight: 450,

          letterSpacing: "-0.2px",

          lineHeight: 1.55,

          color: "#464F5B",

          whiteSpace: "pre-line",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
