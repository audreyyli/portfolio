"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

const Problem = ({ intro, introColour, problemStatement }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        paddingY: "60px",
      }}
    >
      {/* Intro Sentence */}
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", fontSize: "16px", color: introColour, marginBottom: "16px" }}
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