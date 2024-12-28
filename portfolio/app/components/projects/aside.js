"use client";
import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import Link from "next/link";
import ArrowOutward from "@mui/icons-material/ArrowOutward";

const Aside = ({ image, company, title, type, category, year, link, width, color }) => {
  return (
    <Link href={link} passHref>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          boxShadow: "none",
          position: "relative",
          width: width,
          background: "transparent",
          border: "2px solid transparent",
          borderRadius: "25px",
          textDecoration: "none",
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out, border-color 0.3s ease-in-out",
          "&:hover": {
            border: `2px solid ${color}`,
          },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "25px 25px 0 0",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
            image={image}
            alt={title}
          />
        </Box>

        {/* Text Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            textAlign: "left",
            padding: "16px",
            width: "100%",
          }}
        >
          <CardContent sx={{ padding: "0" }}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: 100,
                color: "#000",
                textTransform: "uppercase",
              }}
            >
              {company}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Lato",
                fontWeight: 100,
                color: "#000",
              }}
            >
              {title}
            </Typography>

            {/* Inline Section for Metadata and Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {/* Metadata */}
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontSize: "14px",
                  fontWeight: 100,
                  color: "#000",
                }}
              >
                {type} • {category} • {year}
              </Typography>

              {/* Button */}
              <Box sx={{ marginLeft: "auto" }}>
                <Link href={link} passHref>
                  <Button
                    variant="contained"
                    endIcon={<ArrowOutward />}
                    sx={{
                      fontSize: "14px",
                      textTransform: "none",
                      backgroundColor: "transparent",
                      color: "#000",
                      paddingBottom: "10px",
                      boxShadow: "none",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease-in-out",
                      "& .MuiButton-endIcon": {
                        transition: "transform 0.3s ease-in-out",
                      },
                      "&:hover": {
                        boxShadow: "none",
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
                        bottom: "12px",
                        left: "0",
                        height: "2px",
                        backgroundColor: "#000",
                        width: "0%",
                        transition: "width 0.4s ease",
                        marginX: "15px",
                        maxWidth: "60%",
                      },
                    }}
                  >
                    View Work
                  </Button>
                </Link>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};

export default Aside;