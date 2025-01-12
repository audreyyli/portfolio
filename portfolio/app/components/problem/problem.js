"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

const Problem = ({ intro, introColour, problemStatement }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1300px",
        margin: "0 auto",
        paddingY: "50px",
      }}
    >
      {/* Intro Sentence */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 100, fontFamily: "Lato", fontSize: "18px", color: introColour }}
      >
        {intro}
      </Typography>

      {/* Problem Statement */}
      <Typography variant="body1" sx={{ fontSize: "24px" }}>
        {problemStatement}
      </Typography>
    </Box>
  );
};

export default Problem;