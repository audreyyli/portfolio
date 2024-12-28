"use client";
import React from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Aside from "../projects/aside"

const Carousel = ({ triggerScroll, items, itemWidth = "400px", gap = "40px" }) => {
  // Map triggerScroll to desired x positions
  const mappedX = useTransform(triggerScroll, [0, 1], ["0%", "-4000%"]);

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
  );
};

export default Carousel;