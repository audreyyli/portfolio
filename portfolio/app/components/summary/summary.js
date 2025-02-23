import React from "react";
import { Box, Typography } from "@mui/material";

const SummarySection = ({ title, customTitle, description, images }) => {
    return (
      <Box sx={{ marginBottom: "40px" }}>
        {/* Section Title */}
        <Typography
          sx={{ fontWeight: 100, fontFamily: "Lato", color: "#888", fontSize: "18px", textTransform: "uppercase" }}
        >
          {title}
        </Typography>
  
        {/* Custom Header */}
        {customTitle && (
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: "Lato",
              fontStyle: "italic",
              fontSize: "32px",
            }}
          >
            {customTitle}
          </Typography>
        )}
  
        {/* Description */}
        {description && (
          <Typography sx={{ fontWeight: 400, fontFamily: "Lato", fontSize: "18px", marginBottom: "20px" }}>
            {description}
          </Typography>
        )}
  
        {/* Single Image */}
        {images && images.length > 0 && (
          <Box
            component="img"
            src={images[0]}
            alt={`${title} Image`}
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
        )}
      </Box>
    );
  };

const Summary = ({ context, problem, solution, outcomes }) => {
  return (
    <Box sx={{ maxWidth: "1300px", margin: "0 auto" }}>
      {/* CONTEXT Section */}
      <SummarySection
        title="CONTEXT"
        customTitle={context.customTitle}
        description={context.description}
      />

      {/* PROBLEM Section */}
      <SummarySection
        title="PROBLEM"
        customTitle={problem.customTitle}
        description={problem.description}
      />

      {/* SOLUTION Section */}
      <SummarySection
        title="SOLUTION"
        customTitle={solution.customTitle}
        images={solution.images}
      />

      {/* OUTCOMES Section */}
      <SummarySection
        title="OUTCOMES"
        customTitle={outcomes.customTitle}
        images={outcomes.images}
      />
    </Box>
  );
};

export default Summary;