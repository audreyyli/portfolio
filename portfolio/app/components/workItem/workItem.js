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
          // More space between image and title
          pt: {
            xs: "16px",
            md: "20px",
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
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",

            fontSize: {
              xs: "20px",
              sm: "20px",
              md: "22px",
              lg: "26px",
            },

            lineHeight: 1,
            letterSpacing: "-0.6px",
            color: "#464F5B",
          }}
        >
          {title}
        </Typography>

        {/* COMPANY / STATUS / YEAR */}
        <Typography
          sx={{
            // More space between title and metadata
            mt: {
              xs: "9px",
              md: "10px",
            },

            fontFamily: "Arial, sans-serif",

            fontSize: {
              xs: "10px",
              sm: "12px",
              md: "12px",
            },
            lineHeight: 1.2,
            textTransform: "uppercase",
            color: "#8E9298",
            textAlign: "left",
            whiteSpace: "normal",
          }}
        >
          {company}

          {status && (
            <>
              <Box component="span" sx={{ mx: "8px" }}>
                ·
              </Box>

              {status}
            </>
          )}

          {year && (
            <>
              <Box component="span" sx={{ mx: "8px" }}>
                ·
              </Box>

              {year}
            </>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default WorkItem;
