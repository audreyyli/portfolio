import React, { useRef, useEffect, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion, useMotionValue, animate } from "framer-motion";
import ImageItem from "../imageItem/imageItem";

const WorksCarousel = ({ graphicItems }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const containerRef = useRef(null);
  const totalItems = graphicItems.length;
  const visibleItems = 3;

  const itemWidth = isMobile ? 400 : 380;
  const itemSpacing = isMobile ? -70 : -100;
  const totalItemOffset = itemWidth + itemSpacing;

  const [currentVirtualIndex, setCurrentVirtualIndex] = useState(0);
  const isScrollingRef = useRef(false);

  const x = useMotionValue(0);

  const handleWheel = (e) => {
    e.preventDefault();
    if (isScrollingRef.current) return;

    const direction = e.deltaY > 0 ? 1 : -1;

    setCurrentVirtualIndex((prev) => {
      const next = prev + direction;
      return ((next % totalItems) + totalItems) % totalItems;
    });

    isScrollingRef.current = true;
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const centerOffset = -(currentVirtualIndex * totalItemOffset);
    animate(x, centerOffset, {
      type: "tween",
      duration: 5,
      ease: "easeInOut",
    });
  }, [currentVirtualIndex]);

  const modulo = (n, m) => ((n % m) + m) % m;

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "91%",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#F1F1F1",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "80%", display: "flex", justifyContent: "center" }}>
        <motion.div style={{ display: "flex", position: "relative" }}>
          {Array.from({ length: visibleItems }).map((_, idx) => {
            const offset = idx - Math.floor(visibleItems / 2);
            const virtualIdx = currentVirtualIndex + offset;
            const actualIdx = modulo(virtualIdx, totalItems);
            const isActive = offset === 0;
            const translateY = isActive ? -100 : 150;
            const zIndex = isActive ? 2 : 1;
            const scale = 1.2;
            const opacity = isActive ? 1 : 0.4;

            const item = graphicItems[actualIdx];

            if (isActive) {
              return (
                <motion.div
                  key={actualIdx}
                  animate={{
                    y: translateY,
                    scale,
                    opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                  }}
                  style={{
                    zIndex,
                    position: "relative",
                    marginLeft: idx === 0 ? 0 : itemSpacing,
                    width: `${itemWidth}px`,
                  }}
                >
                  <ImageItem {...item} />
                </motion.div>
              );
            }
            return (
              <motion.div
                key={actualIdx}
                animate={{ y: translateY, scale, opacity }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                  mass: 1.5,
                }}
                style={{
                  zIndex,
                  position: "relative",
                  marginLeft: idx === 0 ? 0 : isMobile ? -70 : -100,
                  cursor: "default",
                }}
              >
                <ImageItem {...item} />
              </motion.div>
            );
          })}
        </motion.div>
      </Box>
    </Box>
  );
};

export default WorksCarousel;
