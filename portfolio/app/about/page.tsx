"use client";

import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const BentoBoxGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ============================================
  // CENTER PHOTO
  // ============================================

  const centerPhoto = {
    src: "/images/MyPics/1.jpg",
  };

  // ============================================
  // INTEREST STICKERS
  // ============================================

  const interests = [
    {
      id: "smiski",
      image: "/images/About/smiski.png",
      title: "Smiski Collector",
      description:
        "Tiny glowing guys have slowly taken over my desk. Finding a new one is always a little serotonin boost.",

      desktop: {
        top: "20%",
        right: "27%",
      },

      mobile: {
        top: "17%",
        right: "7%",
      },

      width: {
        desktop: 125,
        mobile: 75,
      },

      rotation: 8,
    },

    {
      id: "food",
      image: "/images/About/food.png",
      title: "Food Enthusiast",
      description:
        "Always searching for the next restaurant, café, or dessert spot to add to the list.",

      desktop: {
        bottom: "20%",
        left: "26%",
      },

      mobile: {
        bottom: "15%",
        left: "5%",
      },

      width: {
        desktop: 135,
        mobile: 80,
      },

      rotation: -8,
    },

    {
      id: "cafe",
      image: "/images/cafePill.png",
      title: "Café Hopper",
      description:
        "A good drink, a cute interior, and somewhere to sit with my laptop is basically my ideal afternoon.",

      desktop: {
        bottom: "16%",
        right: "24%",
      },

      mobile: {
        bottom: "9%",
        right: "4%",
      },

      width: {
        desktop: 150,
        mobile: 95,
      },

      rotation: 5,
    },

    {
      id: "spotify",
      image: "/images/spotifyLogo.png",
      title: "Always Listening",
      description:
        "There is almost always music playing while I'm designing, coding, commuting, or doing absolutely nothing.",

      desktop: {
        top: "25%",
        left: "27%",
      },

      mobile: {
        top: "22%",
        left: "7%",
      },

      width: {
        desktop: 75,
        mobile: 50,
      },

      rotation: -10,
    },

    {
      id: "bubbli",
      image: "/images/bubbliLogo.png",
      title: "Making Things",
      description:
        "Started bubbli as a creative side project and somehow turned making tiny things into a tiny business.",

      desktop: {
        top: "48%",
        right: "20%",
      },

      mobile: {
        top: "49%",
        right: "2%",
      },

      width: {
        desktop: 90,
        mobile: 55,
      },

      rotation: 10,
    },
  ];

  // ============================================
  // PHOTO STICKERS
  // ============================================

  const photoStickers = [
    {
      id: "friends",

      images: [
        "/images/MyPics/3.JPEG",
        "/images/MyPics/4.JPG",
        "/images/MyPics/5.jpg",
        "/images/MyPics/6.JPG",
      ],

      desktop: {
        top: "46%",
        left: "27%",
      },

      mobile: {
        top: "47%",
        left: "2%",
      },

      rotation: -9,
    },

    {
      id: "adventures",

      images: [
        "/images/MyPics/7.JPG",
        "/images/MyPics/8.jpg",
        "/images/MyPics/9.JPG",
        "/images/MyPics/10.jpg",
      ],

      desktop: {
        top: "15%",
        left: "35%",
      },

      mobile: {
        top: "11%",
        left: "23%",
      },

      rotation: 7,
    },

    {
      id: "memories",

      images: [
        "/images/MyPics/11.JPEG",
        "/images/MyPics/12.JPG",
        "/images/MyPics/2.jpg",
      ],

      desktop: {
        bottom: "12%",
        right: "33%",
      },

      mobile: {
        bottom: "7%",
        right: "19%",
      },

      rotation: -6,
    },
  ];

  // ============================================
  // STATE
  // ============================================

  const [hoveredSticker, setHoveredSticker] = useState(null);

  const [stickerPhotoIndexes, setStickerPhotoIndexes] = useState({});

  // ============================================
  // CYCLE PHOTO
  // ============================================

  const cycleStickerPhoto = (sticker) => {
    setStickerPhotoIndexes((prev) => {
      const currentIndex = prev[sticker.id] || 0;

      const nextIndex = (currentIndex + 1) % sticker.images.length;

      return {
        ...prev,
        [sticker.id]: nextIndex,
      };
    });
  };

  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",

        /*
         * Use the available screen rather than
         * creating a giant page.
         */
        height: {
          xs: "calc(100dvh - 80px)",
          md: "calc(100dvh - 90px)",
        },

        minHeight: {
          xs: "560px",
          md: "650px",
        },

        /*
         * Nothing inside the sticker canvas
         * can create scrolling.
         */
        overflow: "hidden",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        /*
         * NO BACKGROUND COLOR.
         * Whatever is behind this component
         * will show through.
         */
        background: "transparent",
      }}
    >
      {/* ============================================
          CENTER PHOTO
          
          This deliberately sits BEHIND the
          surrounding stickers.
          ============================================ */}

      <Box
        sx={{
          position: "relative",

          width: {
            xs: "230px",
            sm: "290px",
            md: "360px",
          },

          /*
           * LOW z-index.
           * Outer stickers can overlap Audrey.
           */
          zIndex: 1,

          transform: "rotate(-2deg)",

          userSelect: "none",

          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",

          "&:hover": {
            transform: "rotate(-1deg) scale(1.015)",
          },
        }}
      >
        {/* WHITE STICKER BORDER */}

        <Box
          sx={{
            position: "relative",

            width: "100%",

            aspectRatio: "4 / 5",

            p: {
              xs: "7px",
              md: "9px",
            },

            backgroundColor: "#FFFFFF",

            borderRadius: {
              xs: "30px",
              md: "40px",
            },

            boxShadow: `
              0 16px 40px rgba(0,0,0,0.11),
              0 3px 8px rgba(0,0,0,0.05)
            `,
          }}
        >
          <Box
            sx={{
              position: "relative",

              width: "100%",
              height: "100%",

              overflow: "hidden",

              borderRadius: {
                xs: "24px",
                md: "32px",
              },
            }}
          >
            <Image
              src={centerPhoto.src}
              alt="Audrey"
              fill
              priority
              sizes="360px"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* ============================================
          PHOTO STICKERS
          ============================================ */}

      {photoStickers.map((sticker) => {
        const currentIndex = stickerPhotoIndexes[sticker.id] || 0;

        const currentPhoto = sticker.images[currentIndex];

        return (
          <Box
            key={sticker.id}
            onClick={() => cycleStickerPhoto(sticker)}
            sx={{
              position: "absolute",

              ...(isMobile ? sticker.mobile : sticker.desktop),

              width: {
                xs: "100px",
                sm: "130px",
                md: "155px",
              },

              /*
               * White outer edge gives the
               * photo the sticker appearance.
               */
              backgroundColor: "#FFFFFF",

              p: {
                xs: "6px",
                md: "7px",
              },

              borderRadius: {
                xs: "25px",
                md: "32px",
              },

              boxShadow: `
                0 10px 25px rgba(0,0,0,0.12),
                0 2px 5px rgba(0,0,0,0.04)
              `,

              cursor: "pointer",

              transform: `rotate(${sticker.rotation}deg)`,

              /*
               * ABOVE center photo.
               */
              zIndex: 10,

              userSelect: "none",

              transition: `
                transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow 0.35s ease
              `,

              "&:hover": {
                transform: "rotate(0deg) scale(1.09) translateY(-4px)",

                boxShadow: `
                  0 18px 35px rgba(0,0,0,0.16),
                  0 4px 8px rgba(0,0,0,0.05)
                `,

                zIndex: 50,
              },

              "&:active": {
                transform: "rotate(0deg) scale(1.03)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",

                width: "100%",

                aspectRatio: "1 / 1",

                overflow: "hidden",

                borderRadius: {
                  xs: "19px",
                  md: "25px",
                },
              }}
            >
              <Image
                key={currentPhoto}
                src={currentPhoto}
                alt={`${sticker.id} ${currentIndex + 1}`}
                fill
                sizes="155px"
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        );
      })}

      {/* ============================================
          INTEREST STICKERS
          ============================================ */}

      {interests.map((sticker) => {
        const hovered = hoveredSticker === sticker.id;

        return (
          <Box
            key={sticker.id}
            onMouseEnter={() => setHoveredSticker(sticker.id)}
            onMouseLeave={() => setHoveredSticker(null)}
            onClick={() => setHoveredSticker(hovered ? null : sticker.id)}
            sx={{
              position: "absolute",

              ...(isMobile ? sticker.mobile : sticker.desktop),

              width: isMobile
                ? `${sticker.width.mobile}px`
                : `${sticker.width.desktop}px`,

              /*
               * Also above the center image.
               */
              zIndex: hovered ? 60 : 15,

              cursor: "pointer",

              transform: `rotate(${sticker.rotation}deg)`,

              transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",

              "&:hover": {
                transform: `
                  rotate(${sticker.rotation - 3}deg)
                  scale(1.1)
                `,
              },
            }}
          >
            {/* STICKER IMAGE */}

            <Box
              sx={{
                position: "relative",

                width: "100%",

                filter: hovered
                  ? "drop-shadow(0 10px 10px rgba(0,0,0,0.18))"
                  : "drop-shadow(0 5px 5px rgba(0,0,0,0.13))",

                transition: "filter 0.3s ease",
              }}
            >
              <Image
                src={sticker.image}
                alt={sticker.title}
                width={300}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>

            {/* ========================================
                HOVER INFORMATION
                ======================================== */}

            <Box
              sx={{
                position: "absolute",

                top: "calc(100% + 8px)",
                left: "50%",

                width: {
                  xs: "155px",
                  md: "195px",
                },

                p: {
                  xs: 1.2,
                  md: 1.5,
                },

                backgroundColor: "#FFFFFF",

                border: "1px solid rgba(0,0,0,0.05)",

                borderRadius: "12px",

                boxShadow: "0 12px 35px rgba(0,0,0,0.12)",

                opacity: hovered ? 1 : 0,

                transform: hovered
                  ? "translate(-50%, 0)"
                  : "translate(-50%, -5px)",

                pointerEvents: "none",

                transition: `
                  opacity 0.2s ease,
                  transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)
                `,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Bootzy, sans-serif",

                  fontSize: {
                    xs: "16px",
                    md: "19px",
                  },

                  color: "#464F5B",

                  letterSpacing: "0.4px",
                }}
              >
                {sticker.title}
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,

                  fontFamily: "Arial, sans-serif",

                  fontSize: {
                    xs: "9px",
                    md: "11px",
                  },

                  lineHeight: 1.5,

                  letterSpacing: "-0.2px",

                  color: "#808080",
                }}
              >
                {sticker.description}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default BentoBoxGrid;
