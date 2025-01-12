import React from "react";
import { Box, Typography } from "@mui/material";

const Section = ({ header, description }) => {
  return (
    <Box sx={{ marginBottom: "40px" }}>
      {/* Header */}
      <Typography
        sx={{
            fontSize: "24px",
            fontWeight: 100,
            fontFamily: "Lato",
            color: "#888",
            textTransform: "uppercase",
            marginBottom: "10px",
        }}
      >
        {header}
      </Typography>

      {/* Description */}
      {Array.isArray(description) ? (
        description.map((paragraph, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              fontFamily: "Lato",
              marginBottom: index !== description.length - 1 ? "20px" : "0",
            }}
          >
            {paragraph}
          </Typography>
        ))
      ) : (
        <Typography
          sx={{ 
            fontSize: "18px", 
            fontWeight: 400,
            fontFamily: "Lato", }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default Section;