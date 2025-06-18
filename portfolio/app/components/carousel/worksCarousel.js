import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion, useMotionValue, animate } from "framer-motion";
import WorkItem from "../workItem/workItem";

const WorksCarousel = ({ items }) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const containerRef = useRef(null);
  const totalItems = items.length;
  const visibleItems = isMobile ? 3 : 5;

  const itemWidth = isMobile ? 320 : 550;
  const itemSpacing = isMobile ? -40 : -120;
  const totalItemOffset = itemWidth + itemSpacing;

  const [isHovered, setIsHovered] = useState(false);

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
    const containerWidth = isMobile
      ? window.innerWidth * 0.95
      : window.innerWidth * 0.8;
    const mobileCenterAdjustment = isMobile
      ? containerWidth / 2 - itemWidth / 2
      : 0;
    const centerOffset =
      -(currentVirtualIndex * totalItemOffset) + mobileCenterAdjustment;

    animate(x, centerOffset, {
      type: "tween",
      duration: 5,
      ease: "easeInOut",
    });
  }, [currentVirtualIndex, totalItemOffset, x, isMobile, itemWidth]);

  const modulo = (n, m) => ((n % m) + m) % m;

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "91%",
        width: "100%",
        backgroundColor: "#F1F1F1",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "95%" : "80%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div style={{ display: "flex", position: "relative" }}>
          {Array.from({ length: visibleItems }).map((_, idx) => {
            const offset = idx - Math.floor(visibleItems / 2);
            const virtualIdx = currentVirtualIndex + offset;
            const actualIdx = modulo(virtualIdx, totalItems);
            const isActive = offset === 0;
            const translateY = isActive
              ? isMobile
                ? -110
                : -100
              : isMobile
                ? 20
                : 50;
            const zIndex = isActive ? 2 : 1;
            const scale = isActive ? 1.1 : 0.9;
            const opacity = isActive ? 1 : 0.4;

            const item = items[actualIdx];

            const handleClick = () => {
              setTimeout(() => {
                router.push(item.link);
              }, 200);
            };

            if (isActive) {
              return (
                <motion.div
                  key={virtualIdx}
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
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <WorkItem
                    {...item}
                    isActive={isActive}
                    isHovered={isHovered}
                  />
                </motion.div>
              );
            }
            return (
              <motion.div
                key={virtualIdx}
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
                  marginLeft: idx === 0 ? 0 : isMobile ? -85 : -120,
                  cursor: "default",
                }}
              >
                <WorkItem {...item} isActive={isActive} isHovered={false} />
              </motion.div>
            );
          })}
        </motion.div>
      </Box>
    </Box>
  );
};

export default WorksCarousel;
