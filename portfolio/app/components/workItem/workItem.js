import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Pill from "../pill/pill";
import ImageLayout from "../imageLayout/imageLayout";

const WorkItem = ({
  images,
  layout,
  company,
  title,
  category,
  year,
  colour1,
  colour2,
  icon1,
  icon2,
  isActive,
  isHovered,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: isMobile ? "280px" : "550px",
        height: isMobile ? "380px" : "600px",
        background: colour1,
        borderRadius: isMobile ? "24px" : "36px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: isMobile ? "0px" : "20px",
        boxShadow: isActive ? "0 0 40px rgba(0,0,0,0.4)" : "none",
        border: isActive
          ? isHovered
            ? "1px solid #171717"
            : "1px solid #fff"
          : "none",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", height: isMobile ? "250px" : "400px" }}>
        <ImageLayout images={images} layout={layout} hovered={isHovered} />

        <Box
          sx={{
            position: "absolute",
            top: isMobile ? "90%" : "50%",
            left: 0,
            right: 0,
            height: "100%",
            background: isMobile
              ? `linear-gradient(to top, ${colour1} 75%, ${colour1}00 100%)`
              : `linear-gradient(to top, ${colour1} 30%, ${colour1}00 100%)`,
            zIndex: 4,
          }}
        />
      </Box>
      <Box
        sx={{
          textAlign: "left",
          mt: 2,
          zIndex: 5,
          p: isMobile ? 1 : 0,
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Lato, sans-serif",
            fontSize: { xs: "12px", md: "16px" },
            textTransform: "uppercase",
            fontWeight: 300,
          }}
        >
          {company}
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "18px", md: "24px" },
            lineHeight: 1.1,
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 0.5,
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Pill
              text={category}
              colour1={colour1}
              colour2={colour2}
              icon={icon1}
            />
            <Pill
              text={year}
              colour1={colour1}
              colour2={colour2}
              icon={icon2}
            />
          </Box>
          <Typography
            sx={{
              position: "relative",
              fontSize: { xs: "12px", md: "16px" },
              fontFamily: "Urbanist, sans-serif",
              color: isHovered ? "#171717" : "#fff",
              fontWeight: 300,
              whiteSpace: "nowrap",

              "&::after": {
                content: '""',
                position: "absolute",
                top: 23,
                bottom: 0,
                left: 0,
                width: "100%",
                height: "1px",
                backgroundColor: "#171717",
                transform: `scaleX(${isHovered ? 1 : 0})`,
                transformOrigin: "left",
                transition: "transform 0.5s ease",
              },
            }}
          >
            View Work ↗
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkItem;
