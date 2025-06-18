"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";
import React, { useEffect, useState } from "react";
import ProfileCard from "./components/profileCard/profileCard";
import WorksCard from "./components/worksCard/worksCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = createTheme({
  typography: {
    fontFamily:
      "Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
});

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -20,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeIn",
    },
  }),
};

type SplashScreenProps = {
  onComplete: () => void;
};

function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsExiting(true), 2500);
    const finalTimer = setTimeout(onComplete, 3200);
    return () => {
      clearTimeout(timer);
      clearTimeout(finalTimer);
    };
  }, [onComplete]);

  const renderText = (
    text: string,
    key: React.Key | null | undefined,
    style: MotionStyle | undefined
  ) => (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }} key={key}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={textVariant}
          style={{
            ...style,
            display: "inline-block",
            whiteSpace: "pre",
          }}
        >
          {char}
        </motion.span>
      ))}
    </Box>
  );

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {renderText("product builder", "title", {
            fontSize: "40px",
            fontWeight: 400,
            color: "#171717",
            fontFamily: "Urbanist, sans-serif",
          })}
          {renderText("audrey li", "subtitle", {
            fontSize: "28px",
            fontWeight: 300,
            color: "#808080",
            fontFamily: "Urbanist, sans-serif",
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MyApp() {
  const [showSplash, setShowSplash] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const splashAlreadyShown = sessionStorage.getItem("splashShown");
    if (!splashAlreadyShown) {
      setShowSplash(true);
      sessionStorage.setItem("splashShown", "true");
    }
    setInitialized(true);
  }, []);

  if (!initialized) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", width: "100vw", position: "relative" }}>
        <AnimatePresence mode="wait">
          {showSplash && (
            <motion.div
              key="splash"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 10,
              }}
            >
              <SplashScreen onComplete={() => setShowSplash(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              minHeight: "100vh",
              width: isMobile ? "98%" : "100vw",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: isMobile ? "center" : "flex-start",
              alignItems: "center",
              opacity: showSplash ? 0 : 1,
              transition: "opacity 0.8s ease-in-out",
              padding: isMobile ? "10px" : "0px",
              margin: isMobile ? "0 auto" : "none",
              overflow: isMobile ? "hidden" : "none",
            }}
          >
            <Box
              sx={{
                height: isMobile ? "auto" : "95vh",
                width: isMobile ? "100%" : "35vw",
                mb: isMobile ? "20px" : "0px",
              }}
            >
              <ProfileCard />
            </Box>
            <Box
              sx={{
                height: isMobile ? "600px" : "95vh",
                width: isMobile ? "100%" : "64vw",
                ml: isMobile ? "none" : "1vw",
              }}
            >
              <WorksCard />
            </Box>
          </motion.div>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
