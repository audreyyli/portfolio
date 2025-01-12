"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

const ProjectOverview = ({ paragraphs }) => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Left Side: Title */}
        <Box
          sx={{
            flexBasis: { xs: "100%", md: "30%" },
            marginBottom: { xs: "20px", md: "0" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h3" sx={{ fontSize: "50px", fontWeight: "bold" }}>
            PROJECT OVERVIEW
          </Typography>
        </Box>

        {/* Right Side: Paragraphs */}
        <Box sx={{ flexBasis: { xs: "100%", md: "65%" } }}>
          {paragraphs.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{ marginBottom: "35px", fontSize: "18px" }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>

    </Box>
  );
};

export default ProjectOverview;