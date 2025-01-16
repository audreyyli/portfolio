"use client";
import React from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";
import Aside from "../projects/aside";

const Carousel = ({ triggerScroll, items }) => {
  const theme = useTheme();

  // Determine screen size with Material-UI breakpoints
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  // Responsive itemWidth based on screen size
  const itemWidth = isSm
    ? "320px"
    : isMd
    ? "380px"
    : isLg
    ? "400px"
    : "650px";

  // Responsive gap based on screen size
  const gap = isSm ? "20px" : "40px";

  // Adjust mappedX values based on screen size
  const mappedX = useTransform(
    triggerScroll,
    [0, 1],
    isSm
      ? ["0%", `-${items.length * 230}px`]
      : ["0%", `-4400px`]
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
      <motion.div
        drag={isSm ? "x" : false} // Enable dragging only on mobile
        dragConstraints={{ left: -((items.length - 1) * 250), right: 0 }} // Constrain drag bounds
        style={{
          display: "flex",
          x,
          gap,
          cursor: isSm ? "grab" : "default", // Change cursor for dragging
        }}
        whileTap={{ cursor: "grabbing" }} // Cursor style while dragging
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
  );
};

export default Carousel;