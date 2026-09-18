"use client";

import React from "react";
import { Box } from "@mui/material";

const Hero = ({ image, company, backgroundColor = "#D9E6FF" }) => {
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        bgcolor: backgroundColor,
      }}
    >
      <Box
        sx={{
          width: "100%",

          height: {
            xs: "70vh",
            md: "78vh",
          },

          minHeight: {
            xs: "480px",
            md: "600px",
          },

          overflow: "hidden",

          bgcolor: backgroundColor,
        }}
      >
        <Box
          component="img"
          src={image}
          alt={`${company} project`}
          sx={{
            width: "100%",
            height: "100%",

            objectFit: "cover",
            objectPosition: "center",

            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
