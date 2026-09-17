"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const CareerTimeline = ({ items }) => {
  const containerRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  // ============================================
  // SCROLL PROGRESS
  // ============================================

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let scrollParent = container.parentElement;

    while (scrollParent) {
      const style = window.getComputedStyle(scrollParent);

      if (style.overflowY === "auto" || style.overflowY === "scroll") {
        break;
      }

      scrollParent = scrollParent.parentElement;
    }

    if (!scrollParent) return;

    const handleScroll = () => {
      const currentScrollTop = scrollParent.scrollTop;

      const maxScrollTop =
        scrollParent.scrollHeight - scrollParent.clientHeight;

      if (maxScrollTop <= 0) {
        setScrollProgress(0);
        return;
      }

      /*
        0 = very top
        1 = absolute bottom
  
        This reacts immediately when the user scrolls
        and always reaches 1 at the bottom.
      */
      const progress = currentScrollTop / maxScrollTop;

      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    handleScroll();

    scrollParent.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      scrollParent.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // ============================================
  // TIMELINE HELPERS
  // ============================================

  /*
    Reserve the final 10% for the
    "Thanks for stopping by" section.
  */
  const CAREER_END = 0.92;

  const totalSegments = items.length;

  const getSegmentProgress = (index) => {
    if (totalSegments <= 0) return 0;

    const segmentStart = (index / totalSegments) * CAREER_END;

    const segmentEnd = ((index + 1) / totalSegments) * CAREER_END;

    const segmentLength = segmentEnd - segmentStart;

    if (segmentLength <= 0) {
      return 0;
    }

    const progress = (scrollProgress - segmentStart) / segmentLength;

    return Math.min(Math.max(progress, 0), 1);
  };

  const isStopActivated = (index) => {
    /*
      FIRST ITEM IS ALWAYS ACTIVE
    */
    if (index === 0) {
      return true;
    }

    if (totalSegments <= 0) {
      return false;
    }

    const stopPosition = (index / totalSegments) * CAREER_END;

    return scrollProgress >= stopPosition;
  };

  // ============================================
  // FINAL DESTINATION
  // ============================================

  const FINAL_START = CAREER_END;

  const finalSegmentProgress = Math.min(
    Math.max((scrollProgress - FINAL_START) / (1 - FINAL_START), 0),
    1
  );

  const finalStopActivated = scrollProgress >= 0.995;

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",

        px: {
          xs: 2,
          sm: 2.5,
          md: 3,
        },

        boxSizing: "border-box",
      }}
    >
      {/* ============================================
          CAREER STOPS
          ============================================ */}

      {items.map((job, index) => {
        const segmentProgress = getSegmentProgress(index);

        const stopActivated = isStopActivated(index);

        return (
          <Box
            key={`${job.company}-${job.year}`}
            sx={{
              position: "relative",

              display: "grid",

              gridTemplateColumns: {
                xs: "46px 16px minmax(0, 1fr)",
                sm: "58px 18px minmax(0, 1fr)",
              },

              columnGap: {
                xs: 1,
                sm: 1.5,
              },
            }}
          >
            {/* ============================================
                YEAR
                ============================================ */}

            <Typography
              sx={{
                pt: "2px",

                fontFamily: "monospace",

                fontSize: {
                  xs: "9px",
                  sm: "10px",
                },

                letterSpacing: "0.4px",

                whiteSpace: "nowrap",

                color: stopActivated ? "#2323FF" : "#999999",

                transition: "color 0.25s ease",
              }}
            >
              {job.year}
            </Typography>

            {/* ============================================
                FLIGHT PATH
                ============================================ */}

            <Box
              sx={{
                position: "relative",

                display: "flex",
                justifyContent: "center",

                minHeight: "100%",
              }}
            >
              {/* GREY TRACK */}

              <Box
                sx={{
                  position: "absolute",

                  top: "11px",
                  bottom: 0,

                  left: "50%",

                  transform: "translateX(-50%)",

                  width: "1px",

                  backgroundImage:
                    "linear-gradient(to bottom, #C9C9D1 45%, transparent 45%)",

                  backgroundSize: "1px 6px",

                  backgroundRepeat: "repeat-y",

                  zIndex: 0,
                }}
              />

              {/* BLUE SCROLL PROGRESS */}

              <Box
                sx={{
                  position: "absolute",

                  top: "11px",

                  left: "50%",

                  transform: "translateX(-50%)",

                  width: "2px",

                  height: `${segmentProgress * 100}%`,

                  background: "linear-gradient(to bottom, #2323FF, #6868FF)",

                  borderRadius: "999px",

                  /*
                    Keep this very fast so it feels
                    attached directly to scrolling.
                  */
                  transition: "height 0.03s linear",

                  zIndex: 1,
                }}
              />

              {/* STOP */}

              <Box
                sx={{
                  position: "relative",

                  width: stopActivated ? "10px" : "8px",

                  height: stopActivated ? "10px" : "8px",

                  mt: "1px",

                  borderRadius: "50%",

                  border: stopActivated
                    ? "1.5px solid #2323FF"
                    : "1.5px solid #BDBDC5",

                  backgroundColor: "#fff",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  zIndex: 2,

                  transition: `
                    width 0.25s ease,
                    height 0.25s ease,
                    border-color 0.25s ease,
                    box-shadow 0.25s ease
                  `,

                  ...(stopActivated && {
                    boxShadow: "0 0 0 3px rgba(35, 35, 255, 0.08)",
                  }),
                }}
              >
                <Box
                  sx={{
                    width: stopActivated ? "4px" : "3px",

                    height: stopActivated ? "4px" : "3px",

                    borderRadius: "50%",

                    backgroundColor: stopActivated ? "#2323FF" : "#BDBDC5",

                    transition: "background-color 0.25s ease",
                  }}
                />
              </Box>
            </Box>

            {/* ============================================
                EXPERIENCE
                ============================================ */}

            <Box
              sx={{
                minWidth: 0,

                pb: {
                  xs: 7,
                  sm: 15,
                  md: 20,
                },
              }}
            >
              {/* COMPANY */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  columnGap: 1,
                  rowGap: 0.5,
                }}
              >
                {/* COMPANY LOGO */}

                {job.logo && (
                  <Box
                    sx={{
                      position: "relative",

                      width: {
                        xs: "30px",
                        sm: "34px",
                        md: "38px",
                      },

                      height: {
                        xs: "30px",
                        sm: "34px",
                        md: "38px",
                      },

                      flexShrink: 0,

                      borderRadius: "50%",

                      overflow: "hidden",

                      backgroundColor: "#FFFFFF",

                      border: "0.7px solid rgba(0,0,0,0.08)",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      fill
                      sizes="38px"
                      style={{
                        objectFit: "cover",
                        padding: "scale(1.12)",
                      }}
                    />
                  </Box>
                )}

                {/* COMPANY NAME */}

                <Box
                  component="a"
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    position: "relative",

                    fontFamily: "Bootzy, sans-serif",

                    fontSize: {
                      xs: "21px",
                      sm: "25px",
                      md: "28px",
                    },

                    lineHeight: 1,

                    letterSpacing: "1px",

                    color: "#464F5B",

                    textDecoration: "none",

                    transition: "color 0.2s ease",

                    "&:hover": {
                      color: "#2323FF",
                    },

                    "&::after": {
                      content: '""',

                      position: "absolute",

                      left: 0,
                      right: 0,

                      bottom: "-3px",

                      height: "1px",

                      backgroundColor: "#2323FF",

                      transform: "scaleX(0)",

                      transformOrigin: "left",

                      transition:
                        "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    },

                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {job.company}
                </Box>

                {/* CURRENT */}

                {job.current && (
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "monospace",

                      fontSize: "8px",

                      fontWeight: 600,

                      letterSpacing: "1px",

                      color: "#2323FF",

                      lineHeight: 1,
                    }}
                  >
                    CURRENT
                  </Typography>
                )}
              </Box>

              {/* ROLE */}

              <Typography
                sx={{
                  mt: 0.7,

                  fontFamily: "Arial, sans-serif",

                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                  },

                  fontWeight: 500,

                  color: "#464F5B",

                  letterSpacing: "-0.3px",
                }}
              >
                {job.role}
              </Typography>

              {/* DESCRIPTION */}

              {job.description && (
                <Typography
                  sx={{
                    mt: 1.2,

                    maxWidth: "620px",

                    fontFamily: "Arial, sans-serif",

                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "14px",
                    },

                    lineHeight: 1.55,

                    letterSpacing: "-0.35px",

                    color: "#808080",
                  }}
                >
                  {job.description}
                </Typography>
              )}

              {/* ============================================
    MEDIA
    ============================================ */}

              {(job.images?.length > 0 || job.videos?.length > 0) && (
                <Box
                  sx={{
                    mt: {
                      xs: 2,
                      md: 2.5,
                    },

                    display: "flex",
                    flexWrap: "wrap",

                    gap: {
                      xs: 1,
                      md: 1.25,
                    },

                    alignItems: "flex-start",
                  }}
                >
                  {/* IMAGES */}

                  {job.images?.map((image, imageIndex) => (
                    <Box
                      key={`image-${image}-${imageIndex}`}
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "48%",
                          md: "60%",
                        },

                        maxWidth: {
                          xs: "100%",
                          sm: "340px",
                          md: "500px",
                        },

                        borderRadius: {
                          xs: "12px",
                          md: "16px",
                        },

                        overflow: "hidden",

                        backgroundColor: "#F4F4F4",

                        border: "1px solid rgba(0,0,0,0.04)",
                      }}
                    >
                      <Image
                        src={image}
                        alt={`${job.company} work ${imageIndex + 1}`}
                        width={1600}
                        height={1200}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 500px"
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    </Box>
                  ))}

                  {/* VIDEOS */}

                  {job.videos?.map((video, videoIndex) => (
                    <Box
                      key={`video-${video}-${videoIndex}`}
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "42%",
                          md: "38%",
                        },

                        maxWidth: {
                          xs: "100%",
                          sm: "280px",
                          md: "320px",
                        },

                        borderRadius: {
                          xs: "12px",
                          md: "16px",
                        },

                        overflow: "hidden",

                        backgroundColor: "#F4F4F4",

                        border: "1px solid rgba(0,0,0,0.04)",

                        lineHeight: 0,
                      }}
                    >
                      <Box
                        component="video"
                        src={video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        sx={{
                          display: "block",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        );
      })}

      {/* ============================================
          FINAL DESTINATION
          ============================================ */}

      <Box
        sx={{
          position: "relative",

          display: "grid",

          gridTemplateColumns: {
            xs: "46px 16px minmax(0, 1fr)",
            sm: "58px 18px minmax(0, 1fr)",
          },

          columnGap: {
            xs: 1,
            sm: 1.5,
          },

          minHeight: {
            xs: "140px",
            md: "180px",
          },
        }}
      >
        {/* EMPTY YEAR */}

        <Box />

        {/* FINAL PATH */}

        <Box
          sx={{
            position: "relative",

            display: "flex",

            justifyContent: "center",

            minHeight: "100%",
          }}
        >
          {/* GREY TRACK */}

          <Box
            sx={{
              position: "absolute",

              top: 0,

              bottom: "44px",

              left: "50%",

              transform: "translateX(-50%)",

              width: "1px",

              backgroundImage:
                "linear-gradient(to bottom, #C9C9D1 45%, transparent 45%)",

              backgroundSize: "1px 6px",

              backgroundRepeat: "repeat-y",

              zIndex: 0,
            }}
          />

          {/* BLUE FINAL PROGRESS */}

          <Box
            sx={{
              position: "absolute",

              top: 0,

              left: "50%",

              transform: "translateX(-50%)",

              width: "2px",

              height: `${finalSegmentProgress * 100}%`,

              maxHeight: "calc(100% - 44px)",

              background: "linear-gradient(to bottom, #2323FF, #6868FF)",

              borderRadius: "999px",

              transition: "height 0.03s linear",

              zIndex: 1,
            }}
          />

          {/* FINAL STOP */}

          <Box
            sx={{
              position: "absolute",

              bottom: "36px",

              width: finalStopActivated ? "12px" : "9px",

              height: finalStopActivated ? "12px" : "9px",

              borderRadius: "50%",

              border: finalStopActivated
                ? "1.5px solid #2323FF"
                : "1.5px solid #BDBDC5",

              backgroundColor: "#fff",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              zIndex: 2,

              transition: `
                width 0.3s ease,
                height 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease
              `,

              ...(finalStopActivated && {
                boxShadow: "0 0 0 4px rgba(35, 35, 255, 0.08)",
              }),
            }}
          >
            <Box
              sx={{
                width: finalStopActivated ? "5px" : "3px",

                height: finalStopActivated ? "5px" : "3px",

                borderRadius: "50%",

                backgroundColor: finalStopActivated ? "#2323FF" : "#BDBDC5",

                transition: "all 0.3s ease",
              }}
            />
          </Box>
        </Box>

        {/* ============================================
            END MESSAGE
            ============================================ */}

        <Box
          sx={{
            display: "flex",

            alignItems: "flex-end",

            pb: {
              xs: 3,
              md: 3.5,
            },

            minWidth: 0,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Bootzy, sans-serif",

                fontSize: {
                  xs: "22px",
                  sm: "26px",
                  md: "30px",
                },

                lineHeight: 1,

                letterSpacing: "1px",

                color: finalStopActivated ? "#2323FF" : "#464F5B",

                transform: finalStopActivated
                  ? "translateY(0)"
                  : "translateY(3px)",

                opacity: finalStopActivated ? 1 : 0.65,

                transition:
                  "color 0.35s ease, opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              Thanks for stopping by.
            </Typography>

            <Typography
              sx={{
                mt: 0.8,

                fontFamily: "Arial, sans-serif",

                fontSize: {
                  xs: "11px",
                  sm: "12px",
                },

                lineHeight: 1.4,

                letterSpacing: "-0.3px",

                color: "#909090",
              }}
            >
              More stops coming soon :)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(CareerTimeline);
