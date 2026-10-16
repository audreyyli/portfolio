"use client";

import React, { useEffect, useState } from "react";

import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useRouter } from "next/navigation";

const DEFAULT_NAV_ITEMS = [
  { label: "Overview", id: "overview" },
  { label: "Problem", id: "problem" },
  { label: "Outcomes", id: "outcomes" },
  { label: "Reflection", id: "reflection" },
];

export default function CaseStudySidebar({ items = DEFAULT_NAV_ITEMS }) {
  const router = useRouter();

  const [activeSection, setActiveSection] = useState(items[0]?.id || "");

  // ============================================================
  // SCROLL TO SECTION
  // ============================================================

  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ============================================================
  // TRACK ACTIVE SECTION
  // ============================================================

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  // ============================================================
  // UI
  // ============================================================

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
      {/* ======================================================
          BACK BUTTON
      ====================================================== */}

      <Button
        onClick={() => router.back()}
        aria-label="Go back"
        disableRipple
        sx={{
          p: 0,

          width: "42px",
          minWidth: "42px",
          height: "42px",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          border: "1px solid #E4E6E8",

          borderRadius: "8px",

          bgcolor: "#FFFFFF",

          color: "#969DA6",

          boxShadow: "none",

          transition:
            "color 180ms ease, border-color 180ms ease, background-color 180ms ease",

          "&:hover": {
            bgcolor: "#E8F1FD",

            borderColor: "#D5E4F7",

            color: "#2323FF",
          },
        }}
      >
        <ArrowBackIcon
          sx={{
            fontSize: "18px",
          }}
        />
      </Button>

      {/* ======================================================
          NAVIGATION
      ====================================================== */}

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
        {items.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <Button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              disableRipple
              aria-current={isActive ? "true" : undefined}
              sx={{
                position: "relative",

                p: 0,

                pl: "14px",

                minWidth: 0,

                minHeight: "30px",

                mb: "5px",

                justifyContent: "flex-start",

                textTransform: "none",

                fontFamily: '"Google Sans Flex", Arial, sans-serif',

                fontSize: "13px",

                lineHeight: 1.45,

                fontWeight: isActive ? 600 : 400,

                letterSpacing: "-0.1px",

                color: isActive ? "#2323FF" : "#969DA6",

                transition: "color 180ms ease, font-weight 180ms ease",

                "&::before": {
                  content: '""',

                  position: "absolute",

                  left: 0,

                  top: "50%",

                  transform: "translateY(-50%)",

                  width: "2px",

                  height: isActive ? "16px" : "0px",

                  borderRadius: "999px",

                  bgcolor: "#2323FF",

                  opacity: isActive ? 1 : 0,

                  transition: "height 180ms ease, opacity 180ms ease",
                },

                "&:hover": {
                  bgcolor: "transparent",

                  color: "#2323FF",
                },
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
}
