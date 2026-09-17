"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";

import WorkItem from "../workItem/workItem";

const WorksCarousel = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  /*
   * Split into two independent columns.
   *
   * 0 → left
   * 1 → right
   * 2 → left
   * 3 → right
   */
  const leftItems = items
    .map((item, index) => ({
      ...item,
      originalIndex: index,
    }))
    .filter((_, index) => index % 2 === 0);

  const rightItems = items
    .map((item, index) => ({
      ...item,
      originalIndex: index,
    }))
    .filter((_, index) => index % 2 !== 0);

  /*
   * Different heights create
   * the gallery / masonry feeling.
   */
  const getCardHeight = (index) => {
    const heights = [
      {
        xs: "420px",
        md: "470px",
        lg: "510px",
      },
      {
        xs: "420px",
        md: "590px",
        lg: "380px",
      },
      {
        xs: "420px",
        md: "570px",
        lg: "620px",
      },
      {
        xs: "420px",
        md: "460px",
        lg: "470px",
      },
    ];

    return heights[index % heights.length];
  };

  const renderCard = (item) => {
    const index = item.originalIndex;

    return (
      <Box
        key={`${item.company}-${item.title}`}
        component={Link}
        href={item.link}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        sx={{
          display: "block",
          width: "100%",
          textDecoration: "none",

          borderRadius: {
            xs: "24px",
            md: "30px",
          },
        }}
      >
        <WorkItem
          {...item}
          cardHeight={getCardHeight(index)}
          isHovered={hoveredIndex === index}
        />
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",

        px: {
          xs: 1.5,
          sm: 2,
          md: 2,
        },

        pb: {
          xs: 3,
          md: 6,
        },

        boxSizing: "border-box",
      }}
    >
      {/* MOBILE */}

      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },

          flexDirection: "column",

          gap: 1.5,
        }}
      >
        {items.map((item, index) =>
          renderCard({
            ...item,
            originalIndex: index,
          })
        )}
      </Box>

      {/* DESKTOP MASONRY GALLERY */}

      <Box
        sx={{
          display: {
            xs: "none",
            md: "grid",
          },

          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",

          gap: {
            md: 1.5,
            lg: 2,
          },

          alignItems: "start",
        }}
      >
        {/* LEFT COLUMN */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            gap: {
              md: 1.5,
              lg: 2,
            },
          }}
        >
          {leftItems.map(renderCard)}
        </Box>

        {/* RIGHT COLUMN */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            gap: {
              md: 1.5,
              lg: 2,
            },

            /*
             * Slight offset for the editorial look.
             */
            pt: {
              md: 5,
              lg: 7,
            },
          }}
        >
          {rightItems.map(renderCard)}
        </Box>
      </Box>
    </Box>
  );
};

export default WorksCarousel;
