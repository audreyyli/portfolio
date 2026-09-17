"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

import ImageLayout from "../imageLayout/imageLayout";

const WorkItem = ({
  images,
  layout,
  company,
  title,
  status,
  year,
  colour1,
  isHovered,
  cardHeight,
  gif,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
      }}
    >
      {/* IMAGE / GIF */}
      <Box
        sx={{
          width: "100%",
          height: cardHeight,
          position: "relative",
          overflow: "hidden",
          backgroundColor: colour1,

          borderRadius: {
            xs: "12px",
            md: "15px",
          },

          // No movement or shadow
          transform: "none",
          boxShadow: "none",
        }}
      >
        {/* GIF OR NORMAL IMAGE */}
        {gif ? (
          <Box
            component="img"
            src={gif}
            alt={title}
            sx={{
              position: "absolute",
              inset: 0,

              width: "100%",
              height: "100%",

              display: "block",

              objectFit: "cover",
              objectPosition: "center",

              transform: "none !important",
              rotate: "0deg",

              borderRadius: "inherit",
            }}
          />
        ) : (
          <ImageLayout images={images} layout={layout} hovered={isHovered} />
        )}

        {/* WHITE FADE OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,

            backgroundColor: "#FFFFFF",

            opacity: isHovered ? 0.5 : 0,

            transition: "opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1)",

            pointerEvents: "none",

            zIndex: 10,
          }}
        />
      </Box>

      {/* INFO */}
      <Box
        sx={{
          pt: {
            xs: 1.2,
            md: 1.5,
          },

          px: {
            xs: 0.2,
            md: 0.2,
          },

          pb: {
            xs: 2.5,
            md: 3,
          },

          display: "flex",

          flexDirection: {
            xs: "column",
            sm: "row",
          },

          justifyContent: "space-between",

          alignItems: {
            xs: "flex-start",
            sm: "baseline",
          },

          gap: {
            xs: 0.5,
            sm: 2,
          },
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",

            fontSize: {
              xs: "14px",
              sm: "16px",
              md: "18px",
              lg: "20px",
            },

            lineHeight: 1,

            letterSpacing: "-0.6px",

            color: "#464F5B",

            flexShrink: 0,
          }}
        >
          {title}
        </Typography>

        {/* COMPANY / STATUS / YEAR */}
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",

            fontSize: {
              xs: "9px",
              sm: "10px",
              md: "10px",
            },

            lineHeight: 1.2,

            textTransform: "uppercase",

            color: "#8E9298",

            textAlign: {
              xs: "left",
              sm: "right",
            },

            whiteSpace: {
              xs: "normal",
              sm: "nowrap",
            },
          }}
        >
          {company}
          {status && <> · {status}</>}
          {year && <> · {year}</>}
        </Typography>
      </Box>
    </Box>
  );
};

export default WorkItem;
