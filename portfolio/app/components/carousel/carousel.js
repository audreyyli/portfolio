"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Carousel = ({ triggerScroll, itemWidth = "400px", gap = "20px" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(triggerScroll, [false, true], ["0%", "-100%"]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: "400px",
        margin: "0 auto",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          x,
          gap,
          transition: "all 0.5s ease-out",
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            style={{
              width: itemWidth,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: index % 2 === 0 ? "#EEE" : "#CCC",
              color: "#666",
              fontSize: "24px",
              fontWeight: "bold",
              flexShrink: 0,
            }}
          >
            Project {index + 1}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;