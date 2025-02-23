"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Aside from "../projects/aside";
import "../../globals.css";

const Carousel = ({ items }) => {
  const theme = useTheme();
  const scrollRef = useRef(null);
  const [isXs, setIsXs] = useState(false);

  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const itemWidth = isSm ? "500px" : isMd ? "700px" : "750px";
  const gap = isXs ? "15px" : "30px";

  useEffect(() => {
    const checkScreenSize = () => setIsXs(window.innerWidth < 600);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: isXs ? "visible" : "hidden",
      }}
    >
      <motion.div
        ref={scrollRef}
        className="carousel-scroll"
        style={{
          display: "flex",
          flexDirection: isXs ? "column" : "row",
          alignItems: "center",
          gap,
          overflowX: isXs ? "hidden" : "auto",
          overflowY: isXs ? "auto" : "hidden",
          scrollBehavior: "smooth",
          padding: isXs ? "20px 10px" : "40px 100px",
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
            width={isXs ? "100%" : itemWidth}
            color={item.color}
          />
        ))}
      </motion.div>
    </Box>
  );
};

export default Carousel;
