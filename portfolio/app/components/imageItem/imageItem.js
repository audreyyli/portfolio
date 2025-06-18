import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Pill from "../pill/pill";

const ImageItem = ({
  image,
  title,
  company,
  year,
  icon1,
  icon2,
  colour1,
  colour2,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        borderRadius: isMobile ? "24px" : "36px",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        backgroundColor: "#fff",
        border: `1px solid #fff`,
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "400px",
          height: "auto",
          display: "block",
        }}
      />

      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            color: colour1,
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? "16px" : "22px",
            lineHeight: 1.1,
            py: 1,
            px: 1,
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Pills */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          pb: 2,
          flexWrap: "wrap",
        }}
      >
        <Pill text={company} colour1={colour1} colour2={colour2} icon={icon1} />
        <Pill text={year} colour1={colour1} colour2={colour2} icon={icon2} />
      </Box>
    </Box>
  );
};

export default ImageItem;
