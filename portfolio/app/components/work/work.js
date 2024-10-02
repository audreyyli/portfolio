import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, Chip } from '@mui/material';
import Link from 'next/link';

const work = ({ image, blurImage, title, company, time, link, flip, width, height, marginTop, skills }) => {
  return (
    <Card 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: flip ? 'row-reverse' : 'row' }, // Stack vertically on mobile, row on larger screens
        alignItems: 'center', 
        justifyContent: 'flex-start',
        boxShadow: 'none',
        border: 'none',
        marginTop: marginTop,
        position: 'relative', // Relative for positioning images
        overflow: 'hidden', // Prevent images from overflowing outside the container
      }}
    >
      <Link href={link} passHref>
        <Box 
          sx={{ 
            position: 'relative', 
            width: { xs: '100%', md: width }, // Full width on mobile, fixed width on larger screens
            height: { xs: 'auto', md: height }, // Auto height on mobile
            '&:hover .blurImage': { // Reveal blur image on hover
              opacity: 1,
              transform: "scale(1.25)", // Zoom the blurred image on hover
            },
            '&:hover .mainImage': { // Scale the main image on hover
              transform: "scale(1.04)", 
            },
            textDecoration: 'none' // Remove default link styling
          }}
        >
          {/* Container for both images */}
          <Box 
            sx={{
              position: 'relative',
              width: '100%', 
              height: { xs: 'auto', md: height }, // Auto height on mobile
            }}
          >
            {/* Blur Image */}
            <CardMedia
              component="img"
              className="blurImage"
              sx={{ 
                position: 'absolute', 
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'blur(8px)', 
                opacity: 0, // Initially hidden
                transition: 'opacity 0.3s ease-in-out', // Smooth transition
                zIndex: 1 // Behind main image
              }}
              image={blurImage}
              alt="Blurred Background"
            />

            {/* Main Image */}
            <CardMedia
              component="img"
              className="mainImage"
              sx={{ 
                position: 'relative',
                top: 0,
                left: 0,
                width: '100%', 
                height: { xs: 'auto', md: '100%' }, // Auto height on mobile, fixed height on larger screens
                objectFit: 'cover', // Ensure image covers the box
                transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out", 
                zIndex: 2 // On top of blur image
              }}
              image={image}
              alt={title}
            />
          </Box>
        </Box>
      </Link>

      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          padding: '16px', 
          textAlign: 'left', 
          width: { xs: '100%', md: 'auto' } 
        }}
      >
        <CardContent>
          {/* Title */}
          <Typography variant="h4" component="div" sx={{ marginBottom: '8px', lineHeight: "30px", color: "#444" }}>
            {title}
          </Typography>
          
          {/* Company Name */}
          <Typography variant="h6" component="div" sx={{ marginBottom: '8px', color: "#666" }}>
            {company}
          </Typography>

          {/* Time Period */}
          <Typography variant="body2" sx={{ marginBottom: '12px', color: "#888" }}>
            {time}
          </Typography>

          {/* Skills */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            {skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                sx={{
                  border: '1px solid rgba(0, 35, 102, 0.5)',
                  color: 'rgba(0, 35, 102, 0.7)',
                  fontWeight: 'bold',
                  backgroundColor: "transparent" 
                }}
              />
            ))}
          </Box>

          {/* Link Button */}
          <Link href={link} passHref>
            <Button 
              variant="contained"
              sx={{ 
                fontSize: "16px", 
                textTransform: 'none', 
                backgroundColor: "#002366", 
                borderRadius: "22px", 
                paddingX: "30px", 
                position: "relative",
                transition: 'padding 0.3s ease', // Smooth padding transition
                boxShadow: "none",
                '&:hover': {
                  backgroundColor: 'rgba(0, 35, 102, 0.7)', // White background on hover
                  color: '#fff',
                  paddingRight: '50px', // Increase padding to make space for arrow
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)", // Lighter shadow on hover
                  '& .arrow': { 
                    opacity: 1, // Make arrow visible
                    transform: 'translateX(1px)', // Move the arrow to the right
                    transition: 'transform 0.3s ease-in-out', // Smooth transition for movement
                  },
                },
              }}
            >
              View Experience
              <Box
                component="span"
                className="arrow"
                sx={{
                  opacity: 0, // Initially hidden
                  position: "absolute",
                  right: 16, // Position on the right side inside the button
                  display: "inline-block",
                  paddingRight: "10px",
                  transition: 'opacity 0.3s ease, transform 0.3s ease', // Smooth transition for appearance and movement
                }}
              >
                »
              </Box>
            </Button>
          </Link>
        </CardContent>
      </Box>
    </Card>
  );
};

export default work;