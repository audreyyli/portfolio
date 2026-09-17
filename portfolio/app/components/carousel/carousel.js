"use client";

import React from "react";
import { Box } from "@mui/material";
import Aside from "../projects/aside";
import "../../globals.css";

const Carousel = ({ items }) => {
  return (
    <Box
      sx={{
        width: "100%",

        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(2, minmax(0, 1fr))",
          xl: "repeat(3, minmax(0, 1fr))",
        },

        gap: {
          xs: "16px",
          md: "24px",
        },

        p: {
          xs: "16px",
          md: "24px",
        },

        boxSizing: "border-box",
        alignItems: "start",
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            minWidth: 0,
          }}
        >
          <Aside
            image={item.image}
            company={item.company}
            title={item.title}
            type={item.type}
            category={item.category}
            year={item.year}
            link={item.link}
            width="100%"
            color={item.color}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Carousel;
