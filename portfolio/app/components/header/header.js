import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CustomButton from "../../mui/button.js";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [hovered, setHovered] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{ width: { xs: '100%', md: '1200px' }, margin: '0 auto', marginTop: "10px", backgroundColor: 'white', boxShadow: 'none' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        {/* Left: Dropdown Menu for Mobile */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            fontSize="large"
            onClick={handleMenuOpen}
            sx={{ 
              mr: 2,
              fontSize: "40px", // Increase the size of the menu icon
              color: '#000', // Default color
              '&:hover': {
                color: 'rgba(0, 35, 102, 0.7)', // Change color on hover
                background: "none",
              },
            }}
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: 'rgba(0, 35, 102, 0.7)', // Apply the hover color to the menu background
                color: 'white', // Set text color to white for better visibility
              }
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href="/work" passHref>
                Work
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/projects" passHref>
                Projects
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/graphics" passHref>
                Graphics
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/about" passHref>
                About Me
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Link href="https://drive.google.com/file/d/14twAB9mIQ9TBQth6yLCh9OF9hvbNvMjq/view?usp=sharing" passHref target="_blank" rel="noopener noreferrer">
                    Resume
                </Link>
            </MenuItem>
          </Menu>
        </Box>

        {/* Center: Logo with hover effect */}
        <Box
          sx={{ flexGrow: { xs: 1, md: 1 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Link href="/" passHref>
            <Box
              component="img"
              src={hovered ? "/images/logoHover.png" : "/images/logo.png"}
              alt="Logo"
              sx={{ width: { xs: '50px', md: '60px' }, height: 'auto', cursor: 'pointer' }}
            />
          </Link>
        </Box>

        {/* Right: "Let's Connect!" Button */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: "flex-end", flexGrow: 1 }}>
          <Button 
            variant="contained" 
            sx={{ 
              fontSize: "14px",
              textTransform: 'none', 
              backgroundColor: "#002366", 
              borderRadius: "22px", 
              paddingX: "15px",
              boxShadow: "none",
              '&:hover': {
                backgroundColor: 'rgba(0, 35, 102, 0.7)',
                color: '#fff',
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
              },
            }} 
            href="https://www.linkedin.com/in/audreylii/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Let&apos;s Connect!
          </Button>
        </Box>

        {/* Center: Navigation buttons for Desktop (hidden on mobile) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: '20px', flexGrow: 2 }}>
          <Link href="/work" passHref>
            <CustomButton variantType="header" sx={{ textTransform: 'none' }}>Work</CustomButton>
          </Link>
          <Link href="/projects" passHref>
            <CustomButton variantType="header" sx={{ textTransform: 'none' }}>Projects</CustomButton>
          </Link>
          <Link href="/graphics" passHref>
            <CustomButton variantType="header" sx={{ textTransform: 'none' }}>Graphics</CustomButton>
          </Link>
          <Link href="/about" passHref>
            <CustomButton variantType="header" sx={{ textTransform: 'none' }}>About Me</CustomButton>
          </Link>
          <Link href="https://drive.google.com/file/d/14twAB9mIQ9TBQth6yLCh9OF9hvbNvMjq/view?usp=sharing" passHref target="_blank" rel="noopener noreferrer">
            <CustomButton variantType="header" sx={{ textTransform: 'none' }}>Resume</CustomButton>
          </Link>
        </Box>

        {/* Right: "Let's Connect!" Button for Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'flex-end' }}>
          <Button 
            variant="contained" 
            sx={{ 
              fontSize: "18px",
              textTransform: 'none', 
              backgroundColor: "#002366", 
              borderRadius: "22px", 
              paddingX: "20px", 
              boxShadow: "none",
              '&:hover': {
                backgroundColor: 'rgba(0, 35, 102, 0.7)',
                color: '#fff',
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
              },
            }} 
            href="https://www.linkedin.com/in/audreylii/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Let&apos;s Connect!
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}