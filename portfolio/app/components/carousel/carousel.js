"use client";
import React from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";
import Aside from "../projects/aside";

const Carousel = ({ triggerScroll, items }) => {
  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  const itemWidth = isSm
    ? "320px"
    : isMd
    ? "380px"
    : isLg
    ? "400px"
    : "650px";

  const gap = isSm ? "20px" : "40px";

  const mappedX = useTransform(
    triggerScroll,
    [0, 1],
    isSm
      ? ["0%", `-2900px`]
      : ["0%", `-4400px`]
  );

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
        drag={isSm ? "x" : false}
        dragConstraints={{ left: -((items.length - 1) * 250), right: 0 }}
        style={{
          display: "flex",
          x,
          gap,
          cursor: isSm ? "grab" : "default",
        }}
        whileTap={{ cursor: "grabbing" }}
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