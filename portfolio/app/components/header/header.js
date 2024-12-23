import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Box, Button, Menu, MenuItem } from '@mui/material';
import CustomButton from "../../mui/button.js";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      position="sticky"
      top={0}
      sx={{
        width: '100%',
        backgroundColor: 'none',
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
          maxWidth: '100%',
          margin: '0 auto',
          backgroundColor: 'none',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Left: Logo */}
          <Box
            sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}
          >
            <Link href="/" passHref>
              <Box
                component="img"
                src="/images/logo.png"
                alt="Logo"
                sx={{ width: '60px', height: 'auto', cursor: 'pointer' }}
              />
            </Link>
          </Box>

          {/* Right: Navigation */}
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center', gap: '20px' }}>
            <Box>
              <Button
                endIcon={<ExpandMoreIcon />}
                onClick={handleMenuOpen}
                disableRipple
                sx={{
                  textTransform: 'none',
                  fontWeight: 400,
                  fontSize: '18px',
                  color: '#666',
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'center',
                  transition: 'transform 0.03s, background-color 0.06s',
                  '&:hover': {
                    color: '#111',
                    fontWeight: "400",
                    background: "none",
                    '&::after': {
                      width: '100%',
                    },
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '10px',
                    left: '0',
                    height: '2px',
                    backgroundColor: '#111',
                    width: '0%',
                    transition: 'width 0.4s ease',
                  },
                }}
              >
                works
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    backgroundColor: 'transparent',
                    color: '#444',
                    boxShadow: 'none',
                  },
                }}
              >
                <MenuItem
                  onClick={handleMenuClose}
                  sx={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#666',
                    textTransform: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '8px 16px',
                    transition: 'color 0.3s',
                    '&:hover': {
                      color: '#111',
                      background: "none",
                      '&::after': {
                        width: '100%',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '0px',
                      left: '0',
                      height: '2px',
                      backgroundColor: '#111',
                      width: '0%',
                      transition: 'width 0.4s ease',
                    },
                  }}
                >
                  <Link href="/projects" passHref>
                    case studies
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleMenuClose}
                  sx={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#666',
                    textTransform: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '8px 16px',
                    transition: 'color 0.3s',
                    '&:hover': {
                      color: '#111',
                      background: "none",
                      '&::after': {
                        width: '100%',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '0px',
                      left: '0',
                      height: '2px',
                      backgroundColor: '#111',
                      width: '0%',
                      transition: 'width 0.4s ease',
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
              <CustomButton variantType="header" sx={{ textTransform: 'none' }}>about me</CustomButton>
            </Link>
            <Link href="https://drive.google.com/file/d/14twAB9mIQ9TBQth6yLCh9OF9hvbNvMjq/view?usp=sharing" passHref target="_blank" rel="noopener noreferrer">
              <CustomButton variantType="header" sx={{ textTransform: 'none' }}>resume</CustomButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}