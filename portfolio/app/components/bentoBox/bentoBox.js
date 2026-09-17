"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

// ============================================
// MAIN PHOTO
// ============================================

const centerPhoto = {
  src: "/images/MyPics/1.jpg",
};

// ============================================
// PHOTO GALLERY STICKERS
// ============================================

const photoStickers = [
  // ==========================================
  // MY PICTURES
  // ==========================================

  {
    id: "my-pics",

    title: "Community & Friends",

    description:
      "Happiest when I’m surrounded by good people. I love spending time with friends, meeting new people, and finding communities that make life a little more fun.",

    images: [
      "/images/MyPics/4.JPG",
      "/images/MyPics/3.jpg",
      "/images/MyPics/5.JPEG",
      "/images/MyPics/6.JPG",
      "/images/MyPics/7.JPEG",
      "/images/MyPics/8.jpg",
      "/images/MyPics/9.JPG",
      "/images/MyPics/10.JPG",
    ],

    desktop: {
      top: "14%",
      left: "27%",
    },

    mobile: {
      top: "8%",
      left: "3%",
    },

    width: {
      xs: "115px",
      sm: "145px",
      md: "175px",
    },

    rotation: -8,

    tooltipSide: "left",
  },

  // ==========================================
  // FOOD
  // ==========================================

  {
    id: "food-pics",

    title: "The Way To My Heart",

    description:
      "I LOVEEE eating and trying new foods and cuisines. One of my life goals is to travel the world and eat my way through as many places as possible.",

    images: [
      "/images/FoodPics/1.JPG",
      "/images/FoodPics/2.jpg",
      "/images/FoodPics/4.JPG",
      "/images/FoodPics/5.jpg",
      "/images/FoodPics/6.jpg",
      "/images/FoodPics/7.jpg",
    ],

    desktop: {
      top: "16%",
      right: "25%",
    },

    mobile: {
      top: "11%",
      right: "2%",
    },

    width: {
      xs: "110px",
      sm: "140px",
      md: "170px",
    },

    rotation: 9,

    tooltipSide: "right",
  },

  // ==========================================
  // MATCHA
  // ==========================================

  {
    id: "matcha-pics",

    title: "Matcha Lover",

    description:
      "Extremely overcaffeinated. I love cafe hopping, trying new matcha spots, and finding the perfect matcha latte.",

    images: [
      "/images/MatchaPics/1.jpg",
      "/images/MatchaPics/2.jpg",
      "/images/MatchaPics/4.jpg",
      "/images/MatchaPics/5.jpg",
      "/images/MatchaPics/6.jpg",
    ],

    desktop: {
      bottom: "10%",
      left: "25%",
    },

    mobile: {
      bottom: "6%",
      left: "2%",
    },

    width: {
      xs: "100px",
      sm: "140px",
      md: "175px",
    },

    rotation: 7,

    tooltipSide: "left",
  },

  // ==========================================
  // PICKLES
  // ==========================================

  {
    id: "pickle-pics",

    title: "Pickle Enthusiast",

    description: "Really love a good pickle.",

    images: ["/images/PicklePics/1.jpg", "/images/PicklePics/2.JPG"],

    desktop: {
      bottom: "8%",
      right: "26%",
    },

    mobile: {
      bottom: "3%",
      right: "2%",
    },

    width: {
      xs: "120px",
      sm: "150px",
      md: "180px",
    },

    rotation: -7,

    tooltipSide: "right",
  },
];

// ============================================
// VLOG VIDEO STICKERS
// ============================================

const videoStickers = [
  // ==========================================
  // VLOG 1 — LEFT
  // ==========================================

  {
    id: "vlog-1",

    src: "/videos/About/vlog1.mp4",

    title: "My Digital Diary",

    description:
      "I love vlogging about my days. It lets me create a little digital diary to look back on and reminisce.",

    url: "https://www.instagram.com/reys.diiary/",

    desktop: {
      top: "43%",
      left: "8%",
    },

    mobile: {
      top: "49%",
      left: "1%",
    },

    width: {
      xs: "150px",
      sm: "190px",
      md: "240px",
    },

    rotation: 6,

    tooltipSide: "right",
  },

  // ==========================================
  // VLOG 2 — RIGHT
  // ==========================================

  {
    id: "vlog-2",

    src: "/videos/About/vlog2.mp4",

    title: "My Digital Diary",

    description:
      "I love vlogging about my days. It lets me create a little digital diary to look back on and reminisce about the moments, places, and people that made them special.",

    url: "https://www.instagram.com/reys.diiary/",

    desktop: {
      top: "46%",
      right: "7%",
    },

    mobile: {
      top: "47%",
      right: "1%",
    },

    width: {
      xs: "150px",
      sm: "190px",
      md: "240px",
    },

    rotation: -6,

    tooltipSide: "left",
  },
];

// ============================================
// INTEREST STICKERS
// ============================================

const interests = [
  // ==========================================
  // SMISKI
  // ==========================================

  {
    id: "smiski",

    image: "/images/smiski.png",

    title: "Smiski Collector",

    description:
      "Tiny glowing guys have slowly taken over my desk. Finding a new one is always a little serotonin boost.",

    type: "outline",

    desktop: {
      top: "28%",
      right: "12%",
    },

    mobile: {
      top: "37%",
      right: "0%",
    },

    width: {
      desktop: 125,
      mobile: 78,
    },

    rotation: 8,
  },

  // ==========================================
  // SPOTIFY
  // ==========================================

  {
    id: "spotify",

    image: "/images/spotifyLogo.png",

    title: "Always Listening",

    description:
      "There is almost always music playing while I'm designing, coding, commuting, or doing absolutely nothing.",

    type: "normal",

    desktop: {
      top: "29%",
      left: "13%",
    },

    mobile: {
      top: "35%",
      left: "1%",
    },

    width: {
      desktop: 85,
      mobile: 55,
    },

    rotation: -10,
  },

  // ==========================================
  // BUBBLI
  // ==========================================

  {
    id: "bubbli",

    image: "/images/bubbliLogo.png",

    title: "Making Things",

    description:
      "Started bubbli as a creative side project and somehow turned making tiny things into a tiny business.",

    type: "circle",

    url: "https://www.instagram.com/shopbubbli/",

    desktop: {
      bottom: "18%",
      right: "16%",
    },

    mobile: {
      bottom: "20%",
      right: "1%",
    },

    width: {
      desktop: 105,
      mobile: 70,
    },

    rotation: 10,
  },
];

// ============================================
// COMPONENT
// ============================================

const BentoBoxGrid = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ============================================
  // STATE
  // ============================================

  const [hoveredSticker, setHoveredSticker] = useState(null);

  const [stickerPhotoIndexes, setStickerPhotoIndexes] = useState({});

  // ============================================
  // CHANGE GALLERY PHOTO
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

  // ============================================
  // OPEN EXTERNAL LINK
  // ============================================

  const openExternalLink = (url) => {
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // ============================================
  // PRELOAD GALLERY IMAGES
  // ============================================

  useEffect(() => {
    const preloadRemainingImages = () => {
      photoStickers.forEach((sticker) => {
        sticker.images.slice(1).forEach((src) => {
          const img = new window.Image();

          img.src = src;
        });
      });
    };

    if (document.readyState === "complete") {
      preloadRemainingImages();
    } else {
      window.addEventListener("load", preloadRemainingImages, {
        once: true,
      });
    }

    return () => {
      window.removeEventListener("load", preloadRemainingImages);
    };
  }, []);

  // ============================================
  // PAGE
  // ============================================

  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",

        height: "100%",

        minHeight: {
          xs: "560px",
          md: "450px",
        },

        overflow: "hidden",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        background: "transparent",
      }}
    >
      {/* ============================================
          INTERACTION HINT
          ============================================ */}

      <Box
        sx={{
          position: "absolute",

          top: {
            xs: "18px",
            md: "22px",
          },

          left: "50%",

          transform: "translateX(-50%)",

          zIndex: 100,

          display: "flex",

          alignItems: "center",

          gap: {
            xs: "6px",
            md: "8px",
          },

          whiteSpace: "nowrap",

          pointerEvents: "none",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",

            fontSize: {
              xs: "9px",
              md: "12px",
            },

            letterSpacing: "-0.2px",

            color: "#808080",
          }}
        >
          Click the photos to flip through
        </Typography>

        <Box
          sx={{
            width: "3px",

            height: "3px",

            borderRadius: "50%",

            backgroundColor: "#B8B8B8",
          }}
        />

        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",

            fontSize: {
              xs: "9px",
              md: "12px",
            },

            letterSpacing: "-0.2px",

            color: "#808080",
          }}
        >
          Hover to learn more
        </Typography>
      </Box>

      {/* ============================================
          MAIN AUDREY PHOTO
          ============================================ */}

      <Box
        sx={{
          position: "relative",

          width: {
            xs: "230px",
            sm: "290px",
            md: "360px",
          },

          zIndex: 1,

          transform: "rotate(-2deg)",

          userSelect: "none",

          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",

          "&:hover": {
            transform: "rotate(-1deg) scale(1.015)",
          },
        }}
      >
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
              sizes="
                (max-width: 600px) 230px,
                (max-width: 900px) 290px,
                360px
              "
              quality={80}
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* ============================================
          PHOTO GALLERY STICKERS
          ============================================ */}

      {photoStickers.map((sticker) => {
        const currentIndex = stickerPhotoIndexes[sticker.id] || 0;

        const currentPhoto = sticker.images[currentIndex];

        const hovered = hoveredSticker === sticker.id;

        const tooltipOnLeft = sticker.tooltipSide === "left";

        return (
          <Box
            key={sticker.id}
            onMouseEnter={() => setHoveredSticker(sticker.id)}
            onMouseLeave={() => setHoveredSticker(null)}
            onClick={() => {
              cycleStickerPhoto(sticker);

              if (isMobile) {
                setHoveredSticker(hovered ? null : sticker.id);
              }
            }}
            sx={{
              position: "absolute",

              ...(isMobile ? sticker.mobile : sticker.desktop),

              width: sticker.width,

              backgroundColor: "#FFFFFF",

              p: {
                xs: "6px",
                md: "7px",
              },

              borderRadius: {
                xs: "25px",
                md: "32px",
              },

              boxShadow: hovered
                ? `
                      0 18px 35px rgba(0,0,0,0.16),
                      0 4px 8px rgba(0,0,0,0.05)
                    `
                : `
                      0 10px 25px rgba(0,0,0,0.12),
                      0 2px 5px rgba(0,0,0,0.04)
                    `,

              cursor: "pointer",

              transform: `rotate(${sticker.rotation}deg)`,

              zIndex: hovered ? 50 : 10,

              userSelect: "none",

              willChange: "transform",

              transition: `
                  transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                  box-shadow 0.35s ease
                `,

              "&:hover": {
                transform: "rotate(0deg) scale(1.09) translateY(-4px)",
              },

              "&:active": {
                transform: "rotate(0deg) scale(1.03)",
              },
            }}
          >
            {/* PHOTO */}

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
                src={currentPhoto}
                alt={sticker.title}
                fill
                sizes="
                    (max-width: 600px) 120px,
                    (max-width: 900px) 150px,
                    180px
                  "
                quality={70}
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* ======================================
                  PHOTO HOVER DESCRIPTION
                  ====================================== */}

            <Box
              sx={{
                position: "absolute",

                top: "50%",

                ...(tooltipOnLeft
                  ? {
                      right: "calc(100% + 12px)",
                    }
                  : {
                      left: "calc(100% + 12px)",
                    }),

                width: {
                  xs: "155px",
                  sm: "185px",
                  md: "210px",
                },

                p: {
                  xs: 1.2,
                  md: 1.5,
                },

                backgroundColor: "#FFFFFF",

                border: "1px solid rgba(0,0,0,0.05)",

                borderRadius: "14px",

                boxShadow: "0 12px 35px rgba(0,0,0,0.12)",

                opacity: hovered ? 1 : 0,

                visibility: hovered ? "visible" : "hidden",

                transform: hovered
                  ? "translateY(-50%)"
                  : tooltipOnLeft
                    ? "translate(6px, -50%)"
                    : "translate(-6px, -50%)",

                pointerEvents: "none",

                zIndex: 100,

                transition: `
                    opacity 0.2s ease,
                    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
                    visibility 0.2s ease
                  `,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Bootzy, sans-serif",

                  fontSize: {
                    xs: "16px",
                    md: "18px",
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

                  lineHeight: 1.2,

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

      {/* ============================================
          VLOG VIDEO STICKERS
          ============================================ */}

      {videoStickers.map((sticker) => {
        const hovered = hoveredSticker === sticker.id;

        const tooltipOnLeft = sticker.tooltipSide === "left";

        return (
          <Box
            key={sticker.id}
            onMouseEnter={() => setHoveredSticker(sticker.id)}
            onMouseLeave={() => setHoveredSticker(null)}
            onClick={() => {
              if (isMobile) {
                if (!hovered) {
                  setHoveredSticker(sticker.id);

                  return;
                }
              }

              openExternalLink(sticker.url);
            }}
            sx={{
              position: "absolute",

              ...(isMobile ? sticker.mobile : sticker.desktop),

              width: sticker.width,

              backgroundColor: "#FFFFFF",

              p: {
                xs: "6px",
                md: "7px",
              },

              borderRadius: {
                xs: "24px",
                md: "30px",
              },

              boxShadow: hovered
                ? `
                      0 18px 35px rgba(0,0,0,0.15),
                      0 4px 8px rgba(0,0,0,0.05)
                    `
                : `
                      0 10px 25px rgba(0,0,0,0.12),
                      0 2px 5px rgba(0,0,0,0.04)
                    `,

              transform: `rotate(${sticker.rotation}deg)`,

              zIndex: hovered ? 55 : 11,

              cursor: "pointer",

              userSelect: "none",

              willChange: "transform",

              transition: `
                  transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                  box-shadow 0.35s ease
                `,

              "&:hover": {
                transform: "rotate(0deg) scale(1.06) translateY(-3px)",
              },

              "&:active": {
                transform: "rotate(0deg) scale(1.02)",
              },
            }}
          >
            {/* ======================================
                  VIDEO
                  ====================================== */}

            <Box
              sx={{
                position: "relative",

                width: "100%",

                aspectRatio: "16 / 9",

                overflow: "hidden",

                borderRadius: {
                  xs: "14px",
                  md: "19px",
                },

                backgroundColor: "#F3F3F3",
              }}
            >
              <Box
                component="video"
                src={sticker.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
                sx={{
                  position: "absolute",

                  inset: 0,

                  width: "100%",

                  height: "100%",

                  objectFit: "cover",

                  display: "block",

                  pointerEvents: "none",
                }}
              />
            </Box>

            {/* ======================================
                  VLOG HOVER DESCRIPTION
                  ====================================== */}

            <Box
              sx={{
                position: "absolute",

                top: "50%",

                ...(tooltipOnLeft
                  ? {
                      right: "calc(100% + 12px)",
                    }
                  : {
                      left: "calc(100% + 12px)",
                    }),

                width: {
                  xs: "155px",
                  sm: "185px",
                  md: "210px",
                },

                p: {
                  xs: 1.2,
                  md: 1.5,
                },

                backgroundColor: "#FFFFFF",

                border: "1px solid rgba(0,0,0,0.05)",

                borderRadius: "14px",

                boxShadow: "0 12px 35px rgba(0,0,0,0.12)",

                opacity: hovered ? 1 : 0,

                visibility: hovered ? "visible" : "hidden",

                transform: hovered
                  ? "translateY(-50%)"
                  : tooltipOnLeft
                    ? "translate(6px, -50%)"
                    : "translate(-6px, -50%)",

                pointerEvents: "none",

                zIndex: 100,

                transition: `
                    opacity 0.2s ease,
                    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
                    visibility 0.2s ease
                  `,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Bootzy, sans-serif",

                  fontSize: {
                    xs: "16px",
                    md: "18px",
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

                  lineHeight: 1.2,

                  letterSpacing: "-0.2px",

                  color: "#808080",
                }}
              >
                {sticker.description}
              </Typography>

              <Typography
                sx={{
                  mt: 0.8,

                  fontFamily: "Arial, sans-serif",

                  fontSize: {
                    xs: "8px",
                    md: "10px",
                  },

                  fontWeight: 600,

                  color: "#464F5B",
                }}
              >
                Click to watch more ↗
              </Typography>
            </Box>
          </Box>
        );
      })}

      {/* ============================================
          INTEREST STICKERS
          ============================================ */}

      {interests.map((sticker) => {
        const hovered = hoveredSticker === sticker.id;

        const stickerWidth = isMobile
          ? sticker.width.mobile
          : sticker.width.desktop;

        return (
          <Box
            key={sticker.id}
            onMouseEnter={() => setHoveredSticker(sticker.id)}
            onMouseLeave={() => setHoveredSticker(null)}
            onClick={() => {
              /*
               * Bubbli has a URL, so clicking
               * the logo opens Instagram.
               */
              if (sticker.url) {
                if (isMobile && !hovered) {
                  setHoveredSticker(sticker.id);

                  return;
                }

                openExternalLink(sticker.url);

                return;
              }

              /*
               * Other interest stickers keep
               * their normal tap interaction.
               */
              setHoveredSticker(hovered ? null : sticker.id);
            }}
            sx={{
              position: "absolute",

              ...(isMobile ? sticker.mobile : sticker.desktop),

              width: `${stickerWidth}px`,

              zIndex: hovered ? 60 : 15,

              cursor: sticker.url ? "pointer" : "default",

              transform: `rotate(${sticker.rotation}deg)`,

              willChange: "transform",

              transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",

              "&:hover": {
                transform:
                  sticker.type === "outline"
                    ? `rotate(${sticker.rotation - 2}deg) scale(1.04)`
                    : `rotate(${sticker.rotation - 3}deg) scale(1.1)`,
              },
            }}
          >
            {/* ======================================
                  SMISKI
                  ====================================== */}

            {sticker.type === "outline" && (
              <Box
                sx={{
                  position: "relative",

                  width: "100%",

                  filter: `
                      drop-shadow(4px 0 0 #FFFFFF)
                      drop-shadow(-4px 0 0 #FFFFFF)
                      drop-shadow(0 4px 0 #FFFFFF)
                      drop-shadow(0 -4px 0 #FFFFFF)
                      drop-shadow(0 5px 5px rgba(0,0,0,0.12))
                    `,

                  transform: "translateZ(0)",

                  backfaceVisibility: "hidden",
                }}
              >
                <Image
                  src={sticker.image}
                  alt={sticker.title}
                  width={300}
                  height={300}
                  sizes={`${stickerWidth}px`}
                  quality={80}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            )}

            {/* ======================================
                  BUBBLI
                  ====================================== */}

            {sticker.type === "circle" && (
              <Box
                sx={{
                  position: "relative",

                  width: "100%",

                  aspectRatio: "1 / 1",

                  backgroundColor: "#FFFFFF",

                  p: {
                    xs: "5px",
                    md: "7px",
                  },

                  borderRadius: "50%",

                  boxShadow: hovered
                    ? `
                          0 15px 30px rgba(0,0,0,0.16),
                          0 3px 7px rgba(0,0,0,0.05)
                        `
                    : `
                          0 8px 20px rgba(0,0,0,0.12),
                          0 2px 5px rgba(0,0,0,0.04)
                        `,

                  transition: "box-shadow 0.3s ease",
                }}
              >
                <Box
                  sx={{
                    position: "relative",

                    width: "100%",

                    height: "100%",

                    borderRadius: "50%",

                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={sticker.image}
                    alt={sticker.title}
                    fill
                    sizes={`${stickerWidth}px`}
                    quality={80}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            )}

            {/* ======================================
                  SPOTIFY
                  ====================================== */}

            {sticker.type === "normal" && (
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
                  sizes={`${stickerWidth}px`}
                  quality={80}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            )}

            {/* ======================================
                  INTEREST HOVER DESCRIPTION
                  ====================================== */}

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

                visibility: hovered ? "visible" : "hidden",

                transform: hovered
                  ? `translate(-50%, 0) rotate(${
                      sticker.type === "outline"
                        ? -(sticker.rotation - 2)
                        : -(sticker.rotation - 3)
                    }deg)`
                  : `translate(-50%, -5px) rotate(${-sticker.rotation}deg)`,

                transformOrigin: "top center",

                pointerEvents: "none",

                zIndex: 100,

                transition: `
                    opacity 0.2s ease,
                    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
                    visibility 0.2s ease
                  `,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Bootzy, sans-serif",

                  fontSize: {
                    xs: "16px",
                    md: "18px",
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

                  lineHeight: 1.2,

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
