"use client";
import React from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";
import Aside from "../projects/aside";

const Carousel = ({ triggerScroll, items }) => {
  const theme = useTheme();

  // Determine screen size with Material-UI breakpoints
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  // Responsive itemWidth based on screen size
  const itemWidth = isXs
    ? "230px"
    : isSm
    ? "320px"
    : isMd
    ? "380px"
    : isLg
    ? "400px"
    : "650px";

  // Responsive gap based on screen size
  const gap = isXs
    ? "20px"
    : isSm
    ? "40px"
    : "40px";

  // Adjust mappedX values based on screen size
  const mappedX = useTransform(
    triggerScroll,
    [0, 1],
    isXs
      ? ["0%", "-3900%"]
      : isSm
      ? ["0%", "-3400%"]
      : ["0%", "-4400%"]
  );

  // Use spring for smooth, non-bouncy scrolling
  const x = useSpring(mappedX, {
    stiffness: 2000,
    damping: 300,
    mass: 3,
  });

  return (
    <div
      style={{
        position: "relative",
        margin: "0 auto",
        maxWidth: "1200px",
      }}
    >
      {/* Scrollable container */}
      <div
        style={{
          display: "flex",
          gap,
          scrollbarWidth: "thin", // Thin scrollbar for Firefox
        }}
      >
        <motion.div
          style={{
            display: "flex",
            x,
            gap,
          }}
        >
          {items.map((item, index) => (
            <Aside
              key={index}
              image={item.image}
              company={item.company}
              title={item.title}
              type={item.type}
              category={item.category}
              year={item.year}
              link={item.link}
              width={itemWidth}
              color={item.color}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;