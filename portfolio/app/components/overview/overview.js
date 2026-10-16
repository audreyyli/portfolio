"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

const ProjectOverview = ({ paragraphs }) => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",

        py: {
          xs: "72px",
          md: "110px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "220px 1fr",
          },

          columnGap: {
            md: "72px",
            lg: "100px",
          },

          rowGap: {
            xs: "28px",
            md: 0,
          },

          alignItems: "start",
        }}
      >
        {/* ====================================================
            SECTION LABEL
        ==================================================== */}

        <Box>
          <Typography
            component="p"
            sx={{
              fontFamily: '"Google Sans Flex", Arial, sans-serif',

              fontSize: {
                xs: "11px",
                md: "12px",
              },

              fontWeight: 600,

              letterSpacing: "0.09em",

              textTransform: "uppercase",

              color: "#464F5B",

              lineHeight: 1.4,

              m: 0,
            }}
          >
            Project Overview
          </Typography>
        </Box>

        {/* ====================================================
            CONTENT
        ==================================================== */}

        <Box
          sx={{
            maxWidth: "720px",
          }}
        >
          {paragraphs.map((paragraph, index) => (
            <Typography
              key={index}
              component="p"
              sx={{
                fontFamily: '"Google Sans Flex", Arial, sans-serif',

                fontSize: {
                  xs: "17px",
                  sm: "18px",
                  md: "19px",
                },

                fontWeight: 400,

                letterSpacing: "-0.25px",

                lineHeight: {
                  xs: 1.65,
                  md: 1.7,
                },

                color: "#464F5B",

                mt: 0,

                mb:
                  index === paragraphs.length - 1
                    ? 0
                    : {
                        xs: "24px",
                        md: "28px",
                      },
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectOverview;
