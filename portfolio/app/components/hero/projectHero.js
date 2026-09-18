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
      sx={{
        pt: {
          xs: "40px",
          md: "48px",
        },

        pb: {
          xs: "56px",
          md: "72px",
        },
      }}
    >
      {/* ======================================================
          COMPANY
          Small utility typography, matching CareerTimeline
      ====================================================== */}

      <Typography
        sx={{
          fontFamily: "monospace",

          fontSize: {
            xs: "9px",
            sm: "10px",
          },

          fontWeight: 400,

          letterSpacing: "0.4px",

          textTransform: "uppercase",

          color: "#999999",

          mb: "18px",
        }}
      >
        {company}
      </Typography>

      {/* ======================================================
          PROJECT TITLE
          Bootzy, matching CareerTimeline company headings
      ====================================================== */}

      <Typography
        component="h1"
        variant="h1"
        sx={{
          fontFamily: "Bootzy, sans-serif",

          fontSize: {
            xs: "40px",
            sm: "48px",
            md: "56px",
          },

          lineHeight: 0.9,

          letterSpacing: "1px",

          fontWeight: 400,

          color: "#464F5B",

          maxWidth: "850px",

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
            xs: "42px",
            md: "48px",
          },

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: team ? "repeat(4, 1fr)" : "repeat(3, 1fr)",
          },

          columnGap: {
            xs: "24px",
            sm: "32px",
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
      {/* ======================================================
          META LABEL
          Same utility style as CareerTimeline year
      ====================================================== */}

      <Typography
        sx={{
          fontFamily: "monospace",

          fontSize: {
            xs: "9px",
            sm: "10px",
          },

          fontWeight: 400,

          letterSpacing: "0.4px",

          textTransform: "uppercase",

          color: "#999999",

          lineHeight: 1.4,

          mb: "7px",
        }}
      >
        {label}
      </Typography>

      {/* ======================================================
          META VALUE
          Same Arial treatment as CareerTimeline roles
      ====================================================== */}

      <Typography
        component="div"
        sx={{
          fontFamily: "Arial, sans-serif",

          fontSize: {
            xs: "14px",
            sm: "15px",
            md: "16px",
          },

          fontWeight: 500,

          letterSpacing: "-0.3px",

          lineHeight: 1.5,

          color: "#464F5B",

          whiteSpace: "pre-line",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
