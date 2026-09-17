"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  { label: "Challenge", id: "challenge" },
  { label: "Problem", id: "problem" },
  { label: "Solution", id: "solution" },
  { label: "Outcome", id: "outcome" },
];

export default function CaseStudyLayout({ children }) {
  const router = useRouter();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F7F9FB",
        color: "#344154",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "320px minmax(0, 768px)",
          },
          columnGap: {
            md: "76px",
            lg: "100px",
          },
          px: {
            xs: "24px",
            sm: "40px",
            md: "44px",
          },
          pb: "120px",
        }}
      >
        {/* LEFT SIDEBAR */}
        <Box
          component="aside"
          sx={{
            pt: { xs: "24px", md: "34px" },
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            sx={{
              position: "sticky",
              top: "34px",
            }}
          >
            <Button
              onClick={() => router.back()}
              startIcon={<ArrowBackIcon sx={{ fontSize: "16px !important" }} />}
              disableRipple
              sx={{
                p: 0,
                minWidth: 0,
                color: "#8793A0",
                fontSize: "14px",
                fontWeight: 400,
                textTransform: "uppercase",
                justifyContent: "flex-start",
                "&:hover": {
                  bgcolor: "transparent",
                  color: "#344154",
                },
              }}
            >
              Back
            </Button>

            <Box
              component="nav"
              sx={{
                mt: "34px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
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
                    justifyContent: "flex-start",
                    textTransform: "none",
                    color: "#929CA7",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: 1.4,
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "#344154",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>

        {/* MAIN CONTENT */}
        <Box
          component="main"
          sx={{
            minWidth: 0,
            pt: {
              xs: "28px",
              md: "38px",
            },
          }}
        >
          {/* mobile back */}
          <Button
            onClick={() => router.back()}
            startIcon={<ArrowBackIcon sx={{ fontSize: "16px !important" }} />}
            sx={{
              display: { xs: "flex", md: "none" },
              p: 0,
              mb: "40px",
              color: "#8793A0",
              textTransform: "uppercase",
            }}
          >
            Back
          </Button>

          {children}
        </Box>
      </Box>
    </Box>
  );
}
