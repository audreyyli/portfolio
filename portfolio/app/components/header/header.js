import React, { useState } from "react";
import Link from "next/link";
import { AppBar, Toolbar, Box, Button, Menu, MenuItem } from "@mui/material";
import CustomButton from "../../mui/button.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };

  return (
    <Box
      position="sticky"
      top={0}
      sx={{
        width: "100%",
        backgroundColor: "none",
        zIndex: 1100,
        boxShadow: "none",
        paddingY: "10px",
        margin: "0 auto",
      }}
    >
      <AppBar
        position="static"
        color="none"
        sx={{
          maxWidth: "100%",
          margin: "0 auto",
          backgroundColor: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left: Logo */}
          <Box
            sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link href="/" passHref>
              <Box
                component="img"
                src={isHovered ? "/images/logoHover.png" : "/images/logo.png"}
                alt="Logo"
                sx={{ width: { xs: "50px", md: "60px" }, height: "auto", cursor: "pointer" }}
              />
            </Link>
          </Box>

          {/* Right: Navigation */}
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              gap: { xs: "1px", md: "20px" },
            }}
          >
            <Box
              onMouseEnter={handleMenuOpen}
              onMouseLeave={handleMenuClose}
              sx={{ position: "relative" }}
            >
              <Button
                endIcon={<ExpandMoreIcon />}
                disableRipple
                sx={{
                  textTransform: "none",
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "18px" },
                  color: "#888",
                  position: "relative",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                works
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
                MenuListProps={{
                  onMouseEnter: () => setMenuOpen(true),
                  onMouseLeave: handleMenuClose,
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: "transparent",
                    color: "#444",
                    boxShadow: "none",
                  },
                }}
              >
                <MenuItem
                  onClick={handleMenuClose}
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666",
                    textTransform: "none",
                    position: "relative",
                    overflow: "hidden",
                    padding: "8px 16px",
                    transition: "color 0.3s",
                    backgroundColor: "transparent",
                    "&:hover": {
                      color: "#111",
                      backgroundColor: "transparent",
                      "&::after": {
                        width: "100%",
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "0px",
                      left: "0",
                      height: "2px",
                      backgroundColor: "#111",
                      width: "0%",
                      transition: "width 0.4s ease",
                    },
                  }}
                >
                  <Link href="/#section2" passHref>
                    projects
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleMenuClose}
                  sx={{
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: 400,
                    color: "#888",
                    textTransform: "none",
                    position: "relative",
                    overflow: "hidden",
                    padding: "8px 16px",
                    transition: "color 0.3s",
                    backgroundColor: "transparent",
                    "&:hover": {
                      color: "#111",
                      backgroundColor: "transparent",
                      "&::after": {
                        width: "100%",
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "0px",
                      left: "0",
                      height: "2px",
                      backgroundColor: "#111",
                      width: "0%",
                      transition: "width 0.4s ease",
                    },
                  }}
                >
                  <Link href="/graphics" passHref>
                    graphics
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Link href="/about" passHref>
              <CustomButton
                variantType="header"
                sx={{ textTransform: "none", fontSize: { xs: "14px", md: "18px" } }}
              >
                about me
              </CustomButton>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1T9rz24Lk_VVmbJu8VPyuUEPD3zT7-ujs/view?usp=sharing"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton
                variantType="header"
                sx={{ textTransform: "none", fontSize: { xs: "14px", md: "18px" } }}
              >
                resume
              </CustomButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}