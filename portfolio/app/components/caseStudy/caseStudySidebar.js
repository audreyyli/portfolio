"use client";

import React from "react";

import { Box, Button } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  { label: "Overview", id: "overview" },
  { label: "Problem", id: "problem" },
  { label: "Journey", id: "journey" },
  { label: "Solution", id: "solution" },
  { label: "Results", id: "results" },
  { label: "Reflections", id: "reflections" },
];

export default function CaseStudySidebar() {
  const router = useRouter();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box
      component="aside"
      sx={{
        position: "sticky",

        top: "48px",

        display: "flex",

        flexDirection: "column",

        alignItems: "flex-start",

        width: "100%",
      }}
    >
      {/* BACK ARROW */}

      <Button
        onClick={() => router.back()}
        aria-label="Go back"
        disableRipple
        sx={{
          p: 0,

          width: "44px",
          minWidth: "44px",
          height: "44px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          border: "1px solid #E6E8EB",
          borderRadius: "8px",

          bgcolor: "#FFFFFF",

          color: "#9CA3AD",

          boxShadow: "0px 2px 5px rgba(0,0,0,0.05)",

          transition: "color 180ms ease, background-color 180ms ease",

          "&:hover": {
            bgcolor: "#F7F8F9",
            color: "#202124",
          },
        }}
      >
        <ArrowBackIcon
          sx={{
            fontSize: "19px",
          }}
        />
      </Button>

      {/* NAV */}

      <Box
        component="nav"
        aria-label="Case study sections"
        sx={{
          mt: "40px",

          display: "flex",
          flexDirection: "column",

          alignItems: "flex-start",

          width: "100%",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <Button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            disableRipple
            sx={{
              p: 0,

              minWidth: 0,

              mb: "10px",

              justifyContent: "flex-start",

              textTransform: "none",

              fontSize: "14px",

              lineHeight: 1.45,

              fontWeight: 400,

              color: "#A1A5AB",

              transition: "color 180ms ease",

              "&:hover": {
                bgcolor: "transparent",

                color: "#202124",
              },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
