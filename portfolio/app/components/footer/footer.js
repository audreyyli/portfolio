"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowOutward from "@mui/icons-material/ArrowOutward";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "20px 10px", md: "20px 40px" },
        background: "none",
        position: "sticky",
        bottom: 0,
        zIndex: 1000,
      }}
    >
      {/* Footer Text */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
          color: "#888",
        }}
      >
        site developed by Audrey Li  ·  2024
      </Typography>

      {/* Social Media Links */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "10px", md: "20px" },
          marginLeft: { xs: "25px", md: "0" },
        }}
      >
        {/* Email Button */}
        <Button
          href="mailto:li.audrey04@gmail.com"
          disableRipple
          sx={{
            textTransform: "none",
            fontWeight: 400,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            color: "#888",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            padding: "5px 10px",
            transition: "color 0.3s ease, transform 0.3s ease",
            "&:hover": {
              color: "#111",
              background: "none",
              "&::after": {
                width: "100%",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "8px",
              left: "0",
              height: "2px",
              backgroundColor: "#111",
              width: "0%",
              transition: "width 0.4s ease",
            },
          }}
        >
          email
        </Button>

        {/* LinkedIn Button */}
        <Button
          variant="contained"
          endIcon={<ArrowOutward />}
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            textTransform: "none",
            backgroundColor: "transparent",
            color: "#888",
            border: "2px solid #888",
            borderRadius: "50px",
            paddingBottom: "10px",
            boxShadow: "none",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s ease-in-out",
            width: { xs: "155px", sm: "170px", md: "auto" },
            "& .MuiButton-endIcon": {
              transition: "transform 0.3s ease-in-out",
            },
            "&:hover": {
              color: "#111",
              boxShadow: "none",
              borderColor: "#111",
              "& .MuiButton-endIcon": {
                transform: "rotate(45deg)",
              },
              "&::after": {
                width: "100%",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "12px",
              left: "0",
              height: "2px",
              backgroundColor: "#111",
              width: "0%",
              transition: "width 0.4s ease",
              marginX: "15px",
              maxWidth: "70%",
            },
          }}
          href="https://www.linkedin.com/in/audreylii/"
          target="_blank"
          rel="noopener noreferrer"
        >
          let&apos;s connect!
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;