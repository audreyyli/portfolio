"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const ImageItem = React.memo(function ImageItem({
  image,
  title,
  company,
  year,
  priority = false,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,

        display: "flex",
        flexDirection: "column",

        // Helps browser skip rendering far-off content
        contentVisibility: "auto",
        containIntrinsicSize: "600px 800px",

        textDecoration: "none",

        "&:hover .graphic-image-wrapper": {
          transform: "translateY(-3px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        },

        "&:hover .graphic-image": {
          transform: "scale(1.012)",
        },

        "&:hover .graphic-title": {
          color: "#2323FF",
        },
      }}
    >
      {/* IMAGE */}
      <Box
        className="graphic-image-wrapper"
        sx={{
          width: "100%",
          position: "relative",

          overflow: "hidden",

          borderRadius: {
            xs: "12px",
            md: "15px",
          },

          backgroundColor: "#F1F1F1",

          transform: "translateY(0)",

          transition: `
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease
          `,

          // Prevent animation repaint from affecting nearby cards
          willChange: "transform",
        }}
      >
        <Image
          className="graphic-image"
          src={image}
          alt={title}
          width={900}
          height={1125}
          sizes="
            (max-width: 900px) calc(100vw - 32px),
            (max-width: 1400px) 34vw,
            32vw
          "
          quality={75}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          style={{
            width: "100%",
            height: "auto",
            display: "block",

            transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",

            transform: "scale(1)",

            willChange: "transform",
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

          px: 0.2,

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
        <Typography
          className="graphic-title"
          sx={{
            fontFamily: "Arial, sans-serif",

            fontSize: {
              xs: "14px",
              sm: "15px",
              md: "16px",
              lg: "18px",
            },

            lineHeight: 1,

            letterSpacing: "-0.6px",

            color: "#464F5B",

            transition: "color 0.25s ease",

            minWidth: 0,
          }}
        >
          {title}
        </Typography>

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

            flexShrink: 0,
          }}
        >
          {company}
          {year && <> · {year}</>}
        </Typography>
      </Box>
    </Box>
  );
});

export default ImageItem;
