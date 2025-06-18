import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const ImageLayout = ({ images, layout, hovered }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (layout === "ig") {
    return (
      <Box sx={{ position: "relative", width: "100%", height: "400px" }}>
        <Box
          component="img"
          src={images[0]}
          sx={{
            position: "absolute",
            top: isMobile ? "50%" : "75%",
            left: "32%",
            transform: hovered
              ? "translate(-55%, -55%) rotate(-10deg)"
              : "translate(-50%, -50%) rotate(-7deg)",
            objectFit: "cover",
            zIndex: 1,
            width: isMobile ? "150px" : "270px",
            height: "auto",
            transition: "transform 0.5s ease",
          }}
        />
        <Box
          component="img"
          src={images[2]}
          sx={{
            position: "absolute",
            top: isMobile ? "25%" : "40%",
            left: "70%",
            transform: hovered
              ? "translate(-55%, -60%) rotate(12deg)"
              : "translate(-50%, -50%) rotate(7.03deg)",
            objectFit: "cover",
            zIndex: 2,
            width: isMobile ? "140px" : "260px",
            height: "auto",
            transition: "transform 0.5s ease",
          }}
        />
        <Box
          component="img"
          src={images[1]}
          sx={{
            position: "absolute",
            top: isMobile ? "60%" : "90%",
            left: "68%",
            transform: hovered
              ? "translate(-45%, -60%) rotate(20deg)"
              : "translate(-50%, -50%) rotate(12.48deg)",
            objectFit: "cover",
            zIndex: 3,
            width: isMobile ? "150px" : "270px",
            height: "auto",
            transition: "transform 0.5s ease",
          }}
        />
      </Box>
    );
  }

  if (layout === "td") {
    return (
      <Box sx={{ position: "relative", width: "100%", height: "400px" }}>
        <Box
          component="img"
          src={images[0]}
          sx={{
            position: "absolute",
            top: isMobile ? "45%" : "75%",
            left: "30%",
            transform: hovered
              ? "translate(-53%, -55%) rotate(-7deg)"
              : "translate(-50%, -50%) rotate(-2.69deg)",
            objectFit: "cover",
            zIndex: 1,
            width: isMobile ? "150px" : "270px",
            height: "auto",
            transition: "transform 0.5s ease",
          }}
        />
        <Box
          component="img"
          src={images[1]}
          sx={{
            position: "absolute",
            top: isMobile ? "55%" : "85%",
            left: "70%",
            transform: hovered
              ? "translate(-45%, -55%) rotate(7deg)"
              : "translate(-50%, -50%) rotate(4.8deg)",
            objectFit: "cover",
            zIndex: 2,
            width: isMobile ? "140px" : "260px",
            height: "auto",
            transition: "transform 0.5s ease",
          }}
        />
      </Box>
    );
  }

  if (layout === "epi") {
    return (
      <Box sx={{ position: "relative", width: "100%", height: "400px" }}>
        <Box
          component="img"
          src={images[1]}
          sx={{
            position: "absolute",
            top: isMobile ? "50%" : "85%",
            left: "28%",
            transform: hovered
              ? "translate(-55%, -55%) rotate(-6deg)"
              : "translate(-50%, -50%) rotate(-4.77deg)",
            objectFit: "cover",
            zIndex: 1,
            width: isMobile ? " 150px" : "270px",
            height: "auto",
            transition: "transform 0.5s ease",
          }}
        />
        <Box
          component="img"
          src={images[2]}
          sx={{
            position: "absolute",
            top: isMobile ? "25%" : "38%",
            left: "45%",
            transform: hovered
              ? "translate(-45%, -65%) rotate(3deg)"
              : "translate(-50%, -50%) rotate(-2.43deg)",
            objectFit: "cover",
            zIndex: 3,
            width: isMobile ? "110px" : "230px",
            height: "auto",
            transition: "transform 0.5s ease",
          }}
        />
        <Box
          component="img"
          src={images[0]}
          sx={{
            position: "absolute",
            top: isMobile ? "55%" : "100%",
            left: "65%",
            transform: hovered
              ? "translate(-45%, -60%) rotate(15deg)"
              : "translate(-50%, -50%) rotate(11.5deg)",
            objectFit: "cover",
            zIndex: 2,
            width: isMobile ? "150px" : "270px",
            height: "auto",
            transition: "transform 0.5s ease",
          }}
        />
      </Box>
    );
  }

  if (layout === "tsm") {
    return (
      <Box sx={{ position: "relative", width: "100%", height: "400px" }}>
        <Box
          component="img"
          src={images[0]}
          sx={{
            position: "absolute",
            top: isMobile ? "35%" : "50%",
            left: "50%",
            transform: hovered
              ? "translate(-53%, -60%) rotate(-5deg)"
              : "translate(-50%, -50%) rotate(-2.69deg)",
            objectFit: "cover",
            zIndex: 1,
            width: "510px",
            height: "auto",
            transition: "transform 0.5s ease",
          }}
        />
        <Box
          component="img"
          src={images[1]}
          sx={{
            position: "absolute",
            top: isMobile ? "55%" : "85%",
            left: "70%",
            transform: hovered
              ? "translate(-45%, -60%) rotate(12deg)"
              : "translate(-50%, -50%) rotate(7deg)",
            objectFit: "cover",
            zIndex: 2,
            width: isMobile ? "100px" : "200px",
            height: "auto",
            transition: "transform 0.5s ease",
          }}
        />
      </Box>
    );
  }

  return null;
};

export default ImageLayout;
