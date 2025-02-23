"use client";
import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import Link from "next/link";
import ArrowOutward from "@mui/icons-material/ArrowOutward";

const Aside = ({ image, company, title, type, category, year, link, width }) => {
  return (
    <Link href={link} passHref legacyBehavior>
      <Box component="a" sx={{ textDecoration: "none", width: "100%" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            backgroundColor: "rgba(247, 248, 252, 0.2)",
            backdropFilter: "blur(80px)",
            boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)",
            position: "relative",
            width: width,
            border: "1px solid transparent",
            borderRadius: "25px",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out, border-color 0.3s ease-in-out",
            "&:hover": {
              borderColor: "#222",
              "& .view-work-btn": {
                color: "#222",
                boxShadow: "none",
                "& .MuiButton-endIcon": {
                  transform: "rotate(45deg)",
                },
                "&::after": {
                  width: "100%",
                  color: "#222",
                },
              },
            },
          }}
        >
          {/* Image */}
          <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
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
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "left", padding: "16px", width: "100%" }}>
            <CardContent sx={{ padding: 0 }}>
              <Typography sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: 400, color: "#444", textTransform: "uppercase" }}>{company}</Typography>
              <Typography sx={{ fontSize: { xs: "18px", md: "24px" }, fontFamily: "Lato", fontStyle: "italic", fontWeight: 700, color: "#222" }}>{title}</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: 400, color: "#444", paddingBottom: "10px" }}>{type} · {category} · {year}</Typography>
                <Box sx={{ marginLeft: "auto" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowOutward />}
                    className="view-work-btn"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      paddingBottom: "10px",
                      textTransform: "none",
                      backgroundColor: "transparent",
                      color: "rgba(68, 68, 68, 0.6)",
                      boxShadow: "none",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease-in-out",
                      "& .MuiButton-endIcon": { transition: "transform 0.3s ease-in-out" },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "12px",
                        left: 0,
                        height: "1px",
                        backgroundColor: "#222",
                        width: "0%",
                        transition: "width 0.4s ease",
                        marginX: "15px",
                        maxWidth: "60%",
                      },
                      "&:hover::after": { width: "100%" },
                    }}
                  >
                    View Work
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Link>
  );
};

export default Aside;
