import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";

const Pill = ({ text, colour1, colour2, icon }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        px: isMobile ? 1 : 1.5,
        py: 0.5,
        borderRadius: "999px",
        backgroundColor: "#fff",
        border: `2px solid ${colour2}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.5,
      }}
    >
      {icon && (
        <Icon
          icon={icon}
          width={isMobile ? "12" : "16"}
          height={isMobile ? "12" : "16"}
          color={colour1}
        />
      )}
      <Typography
        sx={{
          fontFamily: "Lato, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "7px", md: "12px" },
          background: colour1,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Pill;
