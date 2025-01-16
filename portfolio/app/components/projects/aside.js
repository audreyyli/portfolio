"use client";
import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import Link from "next/link";
import ArrowOutward from "@mui/icons-material/ArrowOutward";

const Aside = ({ image, company, title, type, category, year, link, width }) => {
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
          backgroundColor: "transparent",
          border: "1px solid transparent",
          borderRadius: "25px",
          textDecoration: "none",
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out, border-color 0.3s ease-in-out",
          "&:hover": {
            borderColor: "#000",
            "& .view-work-btn": {
              color: "#000",
              boxShadow: "none",
              "& .MuiButton-endIcon": {
                transform: "rotate(45deg)",
              },
              "&::after": {
                width: "100%",
              },
            },
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
            paddingTop: "16px",
            paddingLeft: "16px",
            paddingRight: "16px",
            width: "100%",
          }}
        >
          <CardContent
            sx={{
              padding: "0",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: 100,
                color: "#666",
                textTransform: "uppercase",
              }}
            >
              {company}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                fontFamily: "Lato",
                fontWeight: 400,
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
                sx={{
                  fontSize: "16px",
                  fontWeight: 100,
                  color: "#666",
                  paddingBottom: "10px",
                }}
              >
                {type} · {category} · {year}
              </Typography>

              {/* Button */}
              <Box sx={{ marginLeft: "auto" }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowOutward />}
                  className="view-work-btn"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 100,
                    paddingBottom: "10px",
                    textTransform: "none",
                    backgroundColor: "transparent",
                    color: "#666",
                    boxShadow: "none",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out",
                    "& .MuiButton-endIcon": {
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "12px",
                      left: "0",
                      height: "1px",
                      backgroundColor: "#000",
                      boxShadow: "none",
                      width: "0%",
                      transition: "width 0.4s ease",
                      marginX: "15px",
                      maxWidth: "60%",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  View Work
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};

export default Aside;