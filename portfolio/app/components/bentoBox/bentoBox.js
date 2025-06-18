import React from "react";
import { Box, useMediaQuery, useTheme, Typography, Stack } from "@mui/material";
import { Icon } from "@iconify/react";
import PhotoSlideshow from "../carousel/photoSlideshow";

const BentoBoxGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const myPhotos = [
    "/images/MyPics/1.jpg",
    "/images/MyPics/2.jpg",
    "/images/MyPics/3.JPEG",
    "/images/MyPics/4.JPG",
    "/images/MyPics/5.jpg",
    "/images/MyPics/6.JPG",
    "/images/MyPics/7.JPG",
    "/images/MyPics/8.jpg",
    "/images/MyPics/9.JPG",
    "/images/MyPics/10.jpg",
    "/images/MyPics/11.JPEG",
    "/images/MyPics/12.JPG",
  ];

  const foodPhotos = [
    "/images/FoodPics/1.jpg",
    "/images/FoodPics/2.JPG",
    "/images/FoodPics/3.jpg",
    "/images/FoodPics/4.JPG",
    "/images/FoodPics/5.jpg",
    "/images/FoodPics/6.jpg",
    "/images/FoodPics/7.jpg",
    "/images/FoodPics/8.jpg",
    "/images/FoodPics/9.JPG",
    "/images/FoodPics/10.JPG",
    "/images/FoodPics/11.jpg",
    "/images/FoodPics/12.jpg",
  ];

  const columns = isMobile ? 1 : 10;
  const rows = isMobile ? 9 : 8;

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          height: isMobile ? "auto" : "75vh",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: isMobile ? "auto" : `repeat(${rows}, 1fr)`,
          gap: 1,
        }}
      >
        {/* Box 1: col2, row2: span 2 columns */}
        <Box
          sx={{
            backgroundColor: "transparent",
            gridColumn: isMobile ? "1 / span 1" : "2 / span 2",
            gridRow: isMobile ? "7 / span 1" : "2 / span 1",
            borderRadius: "24px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            transform: "translateY(30px)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Box
              component="a"
              href="https://open.spotify.com/user/1sa27j0rbpnsx3yundn8bapht?si=ab427a847e5b424a"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-block",
                ml: isMobile ? 2 : 3,
                mr: isMobile ? -6 : -8,
                mb: isMobile ? 2 : 0,
              }}
            >
              <Box
                component="img"
                src="/images/spotifyLogo.png"
                alt="Spotify Logo"
                sx={{
                  width: "auto",
                  height: "auto",
                  maxWidth: isMobile ? "50%" : "33%",
                  maxHeight: isMobile ? "50%" : "33%",
                  cursor: "pointer",
                }}
              />
            </Box>

            <Box
              component="img"
              src="/images/tetrisPill.png"
              alt="Tetris Pill"
              sx={{
                width: "auto",
                height: "auto",
                maxWidth: "80%",
                maxHeight: "80%",
                mr: isMobile ? 0 : -1,
                mb: isMobile ? 0 : -1.5,
              }}
            />
          </Box>
        </Box>

        {/* Box 2: col2, row3: span 2 columns */}
        <Box
          sx={{
            backgroundColor: "transparent",
            gridColumn: isMobile ? "1 / span 1" : "2 / span 2",
            gridRow: isMobile ? "8 /span 1" : "3 / span 1",
            borderRadius: "24px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Box
            component="img"
            src="/images/nightPill.png"
            alt="NightOwl Pill"
            sx={{
              width: "auto",
              height: "auto",
              maxWidth: isMobile ? "100%" : "130%",
              maxHeight: isMobile ? "100%" : "130%",
              mr: isMobile ? 0 : -1,
              mb: isMobile ? 0 : -1.5,
            }}
          />
        </Box>

        {/* Box 3: col1, row4: span 3 columns */}
        <Box
          sx={{
            backgroundColor: "#fff",
            gridColumn: isMobile ? "1 / span 1" : "1 / span 3",
            gridRow: isMobile ? "4 / span 1" : "4 / span 1",
            borderRadius: "24px",
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontStyle: "italic",
              fontWeight: 300,
              color: "#808080",
              mb: 1,
            }}
          >
            Places I&apos;ve worked at:
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="/images/tsmLogo.png"
              alt="TwoSmallMen Logo"
              sx={{
                width: 40,
                height: 40,
                borderRadius: "8px",
                objectFit: "contain",
                transform: "rotate(-7deg)",
              }}
            />
            <Box
              component="img"
              src="/images/itcLogo.png"
              alt="IveyTechClub Logo"
              sx={{
                width: 40,
                height: 40,
                borderRadius: "8px",
                objectFit: "contain",
                transform: "rotate(3deg)",
              }}
            />
            <Box
              component="img"
              src="/images/ipsLogo.png"
              alt="IveyProductSociety Logo"
              sx={{
                width: 40,
                height: 40,
                borderRadius: "8px",
                objectFit: "contain",
                transform: "rotate(-5deg)",
              }}
            />
            <Box
              component="img"
              src="/images/waiLogo.png"
              alt="WesternAI Logo"
              sx={{
                width: 40,
                height: 40,
                borderRadius: "8px",
                objectFit: "contain",
                transform: "rotate(-2deg)",
              }}
            />
            <Box
              component="img"
              src="/images/wuksaLogo.png"
              alt="WesternUKSA Logo"
              sx={{
                width: 40,
                height: 40,
                borderRadius: "8px",
                objectFit: "contain",
                transform: "rotate(4deg)",
              }}
            />
          </Box>
        </Box>

        {/* Box 4: col2, row5: span 2 columns and 3 rows */}
        <Box
          sx={{
            backgroundColor: "#fff",
            gridColumn: isMobile ? "1 / span 1" : "2 / span 2",
            gridRow: isMobile ? "6 / span 1" : "5 / span 3",
            borderRadius: "24px",
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100%",
          }}
        >
          <Typography
            sx={{ fontFamily: "Urbanist, sans-serif", fontWeight: 700 }}
          >
            Owner & Founder
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Box
              component="img"
              src="/images/bubbliLogo.png"
              alt="Bubbli Logo"
              sx={{
                width: 20,
                height: 20,
                mr: 1,
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontWeight: 400,
              }}
            >
              bubbli
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              flexGrow: 1,
              borderRadius: "24px 4px 24px 4px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="/images/bubbliPic.png"
              alt="Bubbli Pic"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        {/* Box 5: col4, row2: span 3 columns and 3 rows */}
        <Box
          sx={{
            backgroundColor: "#fff",
            gridColumn: isMobile ? "1 / span 1" : "4 / span 3",
            gridRow: isMobile ? "1 / span 1" : "2 / span 3",
            borderRadius: "24px",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 400,
              color: "#808080",
              fontSize: "22px",
              mb: 2,
            }}
          >
            I’m a product designer & developer who is always:
          </Typography>

          <Stack spacing={1}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon="material-symbols:star-shine-outline-rounded"
                width={28}
                height={28}
                color="#808080"
              />
              <Typography
                sx={{
                  fontFamily: "Urbanist, sans-serif",
                  fontWeight: 400,
                  color: "#808080",
                  ml: 1,
                  fontSize: "18px",
                }}
              >
                Leading student clubs & organizations
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon="material-symbols:fastfood-outline-rounded"
                width={24}
                height={24}
                color="#808080"
              />
              <Typography
                sx={{
                  fontFamily: "Urbanist, sans-serif",
                  fontWeight: 400,
                  color: "#808080",
                  ml: 1,
                  fontSize: "18px",
                }}
              >
                Searching for good eats
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon="tabler:tools"
                width={24}
                height={24}
                color="#808080"
              />
              <Typography
                sx={{
                  fontFamily: "Urbanist, sans-serif",
                  fontWeight: 400,
                  color: "#808080",
                  ml: 1,
                  fontSize: "18px",
                }}
              >
                Tinkering with side projects
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Box 6: col4, row5: span 3 columns and 4 rows */}
        <Box
          sx={{
            backgroundColor: "#fff",
            gridColumn: isMobile ? "1 / span 1" : "4 / span 3",
            gridRow: isMobile ? "5 / span 1" : "5 / span 4",
            borderRadius: "24px",
            overflow: "hidden",
            p: 2,
            height: isMobile ? "70%" : "100%",
          }}
        >
          <PhotoSlideshow
            photos={foodPhotos}
            autoplaySpeed={4000}
            speed={1000}
            borderRadius="4px 24px 4px 24px"
          />
        </Box>

        {/* Box 7: col7, row1: span 3 columns and 4 rows */}
        <Box
          sx={{
            backgroundColor: "#fff",
            gridColumn: isMobile ? "1 / span 1" : "7 / span 3",
            gridRow: isMobile ? "2 / span 1" : "1 / span 4",
            borderRadius: "24px",
            overflow: "hidden",
            p: 2,
            height: isMobile ? "70%" : "100%",
          }}
        >
          <PhotoSlideshow
            photos={myPhotos}
            autoplaySpeed={5500}
            speed={1000}
            borderRadius="24px 4px 24px 4px"
          />
        </Box>

        {/* Box 8: col7, row5: span 4 columns */}
        <Box
          sx={{
            backgroundColor: "#fff",
            gridColumn: isMobile ? "1 / span 1" : "7 / span 4",
            gridRow: isMobile ? "3 /span 1" : "5 / span 1",
            borderRadius: "24px",
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography component="div">
            <span
              style={{
                color: "#808080",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "16px",
              }}
            >
              Student @{" "}
            </span>
            <span
              style={{ color: "#171717", fontWeight: 400, fontSize: "16px" }}
            >
              Ivey Business School & Western University
            </span>
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Typography
              sx={{ color: "#808080", fontWeight: 300, fontSize: "16px" }}
            >
              Dual Degree - Computer Science & Business Administration
            </Typography>

            <Stack direction="row" spacing={1.5} mr={5}>
              <Box
                component="img"
                src="/images/iveyLogo.png"
                alt="School 1"
                sx={{
                  width: isMobile ? 40 : 50,
                  height: isMobile ? 40 : 50,
                  borderRadius: "8px",
                  objectFit: "contain",
                  transform: "rotate(-5deg)",
                }}
              />
              <Box
                component="img"
                src="/images/westernLogo.png"
                alt="School 2"
                sx={{
                  width: isMobile ? 40 : 50,
                  height: isMobile ? 40 : 50,
                  borderRadius: "8px",
                  objectFit: "contain",
                  transform: "rotate(5deg)",
                }}
              />
            </Stack>
          </Box>
        </Box>

        {/* Box 9: col7, row6: span 2 columns */}
        <Box
          sx={{
            backgroundColor: "transparent",
            gridColumn: isMobile ? "1 /span 1" : "7 / span 2",
            gridRow: isMobile ? "9 / span 1" : "6 / span 1",
            borderRadius: "24px",
            display: "flex",
            alignItems: isMobile ? "flex-end" : "flex-start",
            justifyContent: isMobile ? "flex-end" : "flex-start",
          }}
        >
          <Box
            component="img"
            src="/images/cafePill.png"
            alt="CafeHopper Pill"
            sx={{
              width: "auto",
              height: "auto",
              maxWidth: isMobile ? "100%" : "120%",
              maxHeight: isMobile ? "100%" : "120%",
              ml: isMobile ? 0 : -2,
              mt: isMobile ? 0 : -1.5,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BentoBoxGrid;
