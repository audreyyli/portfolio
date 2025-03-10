"use client";
import { createTheme, ThemeProvider, keyframes } from "@mui/material/styles";
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Carousel from "./components/carousel/carousel.js";
import Image from "next/image";
import "./globals.css";
import React from "react";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import Tooltip from "@mui/material/Tooltip";

const items = [
  {
    image: "/images/instagram.png",
    company: "Instagram",
    title: "Improving personalization for Instagram's explore page",
    type: "Product Strategy",
    category: "Fellowship",
    year: "2024",
    link: "/projects/instagram",
    color: "#FFC7DE",
  },
  {
    image: "/images/twoSmallMen.png",
    company: "Two Small Men with Big Hearts",
    title: "Simplifying your moving quote journey",
    type: "Design & Front-End",
    category: "Internship",
    year: "2024",
    link: "/projects/twoSmallMen",
    color: "#D9E6FF",
  },
  {
    image: "/images/epiPlan.png",
    company: "EpiPlan",
    title: "Designing a companion for dietary needs",
    type: "Product Design",
    category: "Mobile App",
    year: "2023",
    link: "/projects/epiPlan",
    color: "#FFEED9",
  },
  {
    image: "/images/wuksa.png",
    company: "Western university korean student association",
    title: "Re-envisioning WUKSA's brand identity",
    type: "Brand Design",
    category: "Design Strategy",
    year: "2023",
    link: "/projects/wuksa",
    color: "#ECD9FF",
  },
];

const graphics = [
  {
    image: "/images/instagram.png",
    company: "",
    title: "Western University Korean Student Association",
    type: "",
    category: "",
    year: "",
    link: "",
    color: "",
  },
  {
    image: "/images/twoSmallMen.png",
    company: "",
    title: "Bubbli",
    type: "",
    category: "",
    year: "",
    link: "",
    color: "",
  },
  {
    image: "/images/epiPlan.png",
    company: "",
    title: "Western AI",
    type: "",
    category: "",
    year: "",
    link: "",
    color: "",
  },
  {
    image: "/images/wuksa.png",
    company: "",
    title: "Global Research & Consulting Group",
    type: "",
    category: "",
    year: "",
    link: "",
    color: "",
  },
];

const floatRotateAnimation1 = keyframes`
  0% { transform: translateX(-40%) translateY(30%) scale(1) rotate(0deg); }
  25% { transform: translateX(-50%) translateY(20%) scale(1.05) rotate(90deg); }
  50% { transform: translateX(-60%) translateY(5%) scale(1.1) rotate(180deg); }
  75% { transform: translateX(-50%) translateY(20%) scale(1.05) rotate(270deg); }
  100% { transform: translateX(-40%) translateY(30%) scale(1) rotate(360deg); }
`;

const floatRotateAnimation2 = keyframes`
  0% { transform: translateX(-30%) translateY(-10%) scale(1) rotate(0deg); }
  25% { transform: translateX(-45%) translateY(0%) scale(1.05) rotate(-90deg); }
  50% { transform: translateX(-60%) translateY(10%) scale(1.1) rotate(-180deg); }
  75% { transform: translateX(-45%) translateY(0%) scale(1.05) rotate(-270deg); }
  100% { transform: translateX(-30%) translateY(-10%) scale(1) rotate(-360deg); }
`;

const floatRotateAnimation3 = keyframes`
  0% { transform: translateX(20%) translateY(40%) scale(1) rotate(0deg); }
  25% { transform: translateX(15%) translateY(30%) scale(1.08) rotate(45deg); }
  50% { transform: translateX(10%) translateY(20%) scale(1.15) rotate(90deg); }
  75% { transform: translateX(15%) translateY(30%) scale(1.08) rotate(135deg); }
  100% { transform: translateX(20%) translateY(40%) scale(1) rotate(180deg); }
`;

const theme = createTheme({
  typography: {
    fontFamily:
      "Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
});

function MyApp() {
  const [view, setView] = React.useState("selected");
  const handleViewChange = (
    _event: React.MouseEvent<HTMLElement>,
    newView: React.SetStateAction<string> | null
  ) => {
    if (newView === "graphic") {
      window.open(
        "https://drive.google.com/drive/folders/11o1Zc3D7-3sTHqD69pxoI-UADxdLoG7c?usp=drive_link",
        "_blank"
      );
    } else if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: { xs: "auto", sm: "100vh" },
          width: "100vw",
          backgroundColor: "#F7F8FC",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "0", md: "20px" },
          padding: { xs: "10px", md: "20px" },
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: "60%",
            left: "10%",
            zIndex: 0,
            animation: `${floatRotateAnimation1} 8s ease-in-out infinite alternate`,
            width: { xs: "300px", md: "950px" },
            height: { xs: "300px", md: "950px" },
            filter: "blur(100px)",
            backgroundImage:
              "linear-gradient(rgba(11, 168, 255, 0.4), rgba(98, 135, 255, 0.4))",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "fixed",
            top: "5%",
            left: "85%",
            zIndex: 0,
            animation: `${floatRotateAnimation2} 9s ease-in-out infinite alternate`,
            width: { xs: "300px", md: "950px" },
            height: { xs: "300px", md: "950px" },
            filter: "blur(120px)",
            backgroundImage:
              "linear-gradient(rgba(98, 135, 255, 0.4), rgba(11, 168, 255, 0.4))",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "fixed",
            top: "-20%",
            left: "10%",
            zIndex: 0,
            animation: `${floatRotateAnimation3} 7s ease-in-out infinite alternate`,
            width: { xs: "100px", md: "650px" },
            height: { xs: "100px", md: "650px" },
            filter: "blur(110px)",
            backgroundImage:
              "linear-gradient(rgba(198, 135, 255, 0.4), rgba(11, 168, 255, 0.4))",
            borderRadius: "50%",
          }}
        />

        <Box
          sx={{
            zIndex: 1,
            maxWidth: { xs: "100%", md: "80%" },
            width: "100%",
            height: { xs: "auto", md: "150px" },
            paddingX: { xs: "10px", md: "20px" },
            flexDirection: { xs: "column", md: "row" },
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            borderRadius: "25px",
            backgroundColor: "rgba(247, 248, 252, 0.2)",
            backdropFilter: "blur(80px)",
            boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              textAlign: { xs: "center", md: "left" },
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                textAlign: { xs: "center", md: "left" },
                width: "100%",
                justifyContent: { xs: "space-between", md: "flex-start" },
                gap: { xs: "10px", md: "20px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  textAlign: "left",
                  width: "100%",
                  paddingTop: { xs: "5px", md: "0" },
                  justifyContent: { xs: "flex-start", md: "flex-start" },
                  gap: "15px",
                }}
              >
                <Image
                  src="/images/Headshot.png"
                  alt="Audrey Headshot"
                  width={110}
                  height={110}
                  style={{
                    borderRadius: "50%",
                    marginRight: "0px",
                  }}
                />
                <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
                  {" "}
                  {/* Limit text width */}
                  <Typography
                    fontSize={{ xs: "24px", md: "28px" }}
                    color="#222"
                    fontFamily="Lato"
                    fontStyle="italic"
                    fontWeight="700"
                    sx={{ textAlign: "left" }}
                  >
                    Hi! I&apos;m Audrey Li!
                  </Typography>
                  <Typography
                    fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
                    fontWeight="400"
                    color="#444"
                    mt={1}
                    sx={{
                      maxWidth: "600px",
                      textAlign: "left",
                    }}
                  >
                    I’m a product designer & developer with a passion for
                    creating impactful solutions from 0→1 that solve real-world
                    problems.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                textAlign: { xs: "center", md: "right" },
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: { xs: "center", md: "flex-end" },
                marginTop: { xs: "10px", md: "0" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: "8px", md: "10px" },
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    fontSize: { xs: "14px", md: "18px" },
                    backgroundColor: "transparent",
                    color: "#444",
                    fontWeight: "400",
                    position: "relative",
                    overflow: "hidden",
                    textAlign: "center",
                    transition: "transform 0.03s, background-color 0.06s",
                    boxShadow: "none",
                    textTransform: "none",
                    width: { xs: "auto", md: "180px" },
                    marginBottom: { xs: "0", md: "-20px" },
                    left: "0",
                    "& .MuiButton-endIcon": {
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&:hover": {
                      color: "#222",
                      borderColor: "#222",
                      "& .MuiButton-endIcon": {
                        transform: "rotate(45deg)",
                      },
                      "&::after": {
                        width: "100%",
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "7px",
                      left: "0",
                      height: "1px",
                      backgroundColor: "#222",
                      width: "0%",
                      transition: "width 0.4s ease",
                    },
                  }}
                  href="https://drive.google.com/file/d/1eOHmzWdY5Zceaydb229MO6Q5DgXx2H6h/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Resume
                </Button>

                <Typography
                  sx={{
                    display: { xs: "block", md: "none" },
                    color: "#444",
                    fontSize: "14px",
                  }}
                >
                  |
                </Typography>

                <Button
                  variant="text"
                  endIcon={<ArrowOutward />}
                  sx={{
                    fontSize: { xs: "14px", md: "18px" },
                    backgroundColor: "transparent",
                    color: "#444",
                    fontWeight: "400",
                    position: "relative",
                    overflow: "hidden",
                    textAlign: "center",
                    transition: "transform 0.03s, background-color 0.06s",
                    boxShadow: "none",
                    textTransform: "none",
                    width: { xs: "auto", md: "180px" },
                    paddingX: "12px",
                    left: "0",
                    "& .MuiButton-endIcon": {
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&:hover": {
                      color: "#222",
                      borderColor: "#222",
                      "& .MuiButton-endIcon": {
                        transform: "rotate(45deg)",
                      },
                      "&::after": {
                        width: "100%",
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "7px",
                      left: "0",
                      height: "1px",
                      backgroundColor: "#222",
                      width: "0%",
                      transition: "width 0.4s ease",
                    },
                  }}
                  href="https://www.linkedin.com/in/audreylii/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let&apos;s Connect!
                </Button>
              </Box>
              <Typography
                fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
                color="#888"
                fontFamily="Lato"
                fontWeight="400"
                paddingBottom={{ xs: "5px", md: "0" }}
                textAlign={{ xs: "center", md: "right" }}
                sx={{
                  maxWidth: { xs: "100%", md: "200%" },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                © 2025 | Site developed with love by Audrey Li
              </Typography>
            </Box>
          </Box>
        </Box>

        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          sx={{
            borderRadius: "50px",
            position: "relative",
            padding: { xs: "10px", sm: "12px", md: "15px" },
            width: { xs: "100%", sm: "450px", md: "600px" },
            backgroundColor: "rgba(247, 248, 252, 0.2)",
            boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(80px)",
            marginBottom: { xs: "5px", md: "-15px" },
            marginTop: "15px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: view === "selected" ? "2.5%" : "52.5%",
              width: "45%",
              height: "calc(100% - 20px)",
              backgroundColor: "rgba(247, 248, 252, 0.4)",
              borderRadius: "45px",
              transform: "translateY(-50%)",
              transition: "left 0.3s ease",
              zIndex: 0,
            }}
          />
          <ToggleButton
            value="selected"
            disableRipple
            sx={{
              zIndex: 1,
              backgroundColor: "transparent",
              border: "none",
              flex: 1,
              justifyContent: "center",
              color: "rgba(68, 68, 68, 0.6)",
              fontWeight: "400",
              fontFamily: "Lato",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              "&:hover": {
                backgroundColor: "transparent !important",
                color: "#444",
                fontWeight: "700",
              },
              "&.Mui-selected": {
                backgroundColor: "transparent",
                color: "#444",
                fontWeight: "700",
              },
              "&.Mui-focusVisible": { backgroundColor: "transparent" },
              "&:active": { backgroundColor: "transparent" },
              "&:focus": { backgroundColor: "transparent" },
            }}
          >
            Selected Works
          </ToggleButton>
          <ToggleButton
            value="graphic"
            disableRipple
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/11o1Zc3D7-3sTHqD69pxoI-UADxdLoG7c?usp=drive_link",
                "_blank"
              )
            }
            sx={{
              zIndex: 1,
              backgroundColor: "transparent",
              border: "none",
              flex: 1,
              justifyContent: "center",
              color: "rgba(68, 68, 68, 0.6)",
              fontWeight: "400",
              fontFamily: "Lato",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              cursor: "default",
              "&:hover": {
                backgroundColor: "transparent !important",
                color: "#222",
                fontWeight: "700",
              },
              "&.Mui-selected": {
                backgroundColor: "transparent",
                color: "#444",
                fontWeight: "700",
              },
              "&.Mui-focusVisible": { backgroundColor: "transparent" },
              "&:active": { backgroundColor: "transparent" },
              "&:focus": { backgroundColor: "transparent" },
            }}
          >
            Graphic Library
          </ToggleButton>
        </ToggleButtonGroup>

        <Typography
          fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
          color="#444"
          fontFamily="Lato"
          fontWeight="400"
          textAlign="center"
          marginBottom={{ xs: "15px", md: "-10px" }}
          sx={{ zIndex: 1, maxWidth: { xs: "90%", sm: "100%" } }}
        >
          {view === "selected"
            ? "Projects where I’ve helped move the needle, designing impactful products that customers love."
            : "Graphics I've done throughout the years"}
        </Typography>

        <Box
          sx={{
            zIndex: 2,
            width: "100vw",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: { xs: "-15px", md: "-40px" },
          }}
        >
          <Carousel items={view === "selected" ? items : graphics} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
