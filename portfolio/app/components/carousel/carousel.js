"use client";
import React, { useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useTheme, useMediaQuery, Box, Button } from "@mui/material";
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
      ? ["0%", `-1750px`]
      : ["0%", `-2700px`]
  );

  const x = useSpring(mappedX, {
    stiffness: 2000,
    damping: 300,
    mass: 3,
  });

  // const [activeIndex, setActiveIndex] = useState(0);

  // const handleNext = () => {
  //   if (activeIndex < items.length - 1) {
  //     setActiveIndex(activeIndex + 1);
  //   }
  // };

  // const handlePrev = () => {
  //   if (activeIndex > 0) {
  //     setActiveIndex(activeIndex - 1);
  //   }
  // };

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
      {/* {isSm && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            marginTop: 2,
            position: "absolute",
            width: "30%",
          }}
        >
          <Button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            variant="outlined"
            sx={{
              borderRadius: "50px", // Makes it a pill shape
              border: "2px solid black", // 2px black border
              backgroundColor: "transparent", // No fill
              fontFamily: "Lato, sans-serif",
              fontWeight: 100,
              color: activeIndex === 0 ? "#666" : "black", // Inactive state color
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)", // Light gray hover effect
              },
              "&.Mui-disabled": {
                color: "#666", // Gray out text when disabled
                borderColor: "#666", // Gray out border when disabled
              },
            }}
          >
            ◀ Prev
          </Button>
          <Button
            onClick={handleNext}
            disabled={activeIndex === items.length - 1}
            variant="outlined"
            sx={{
              borderRadius: "50px", // Makes it a pill shape
              border: "2px solid black", // 2px black border
              backgroundColor: "transparent", // No fill
              fontFamily: "Lato, sans-serif",
              fontWeight: 100,
              color: activeIndex === items.length - 1 ? "#666" : "black", // Inactive state color
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)", // Light gray hover effect
              },
              "&.Mui-disabled": {
                color: "#666", // Gray out text when disabled
                borderColor: "#666", // Gray out border when disabled
              },
            }}
          >
            Next ▶
          </Button>
        </Box>
      )} */}
    </div>
  );
};

export default Carousel;