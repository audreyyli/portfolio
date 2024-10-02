import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import Link from 'next/link';

const aside = ({ image, blurImage, title, company, description, link, flip, width, height, marginTop }) => {
  return (
    <Card 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: flip ? 'row-reverse' : 'row' }, 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        boxShadow: 'none',
        border: 'none',
        marginTop: marginTop,
        position: 'relative', 
        overflow: 'hidden', 
      }}
    >
      <Link href={link} passHref>
        <Box 
          sx={{ 
            position: 'relative', 
            width: { xs: '100%', md: width }, 
            height: { xs: 'auto', md: height }, 
            '&:hover .blurImage': { 
              opacity: 1, 
              transform: "scale(1.25)",
            },
            '&:hover .mainImage': { 
              transform: "scale(1.04)", 
            },
            textDecoration: 'none', // Keep link styling
            cursor: 'pointer', // Makes it clear it's clickable
          }}
        >
          {/* Container for both images */}
          <Box 
            sx={{
              position: 'relative',
              width: { xs: '100%', md: width },
              height: { xs: 'auto', md: height }, 
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
                height: { xs: 'auto', md: '100%' }, 
                objectFit: 'cover',
                filter: 'blur(8px)', 
                opacity: 0, 
                transition: 'opacity 0.3s ease-in-out', 
                zIndex: 1 
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
                height: { xs: 'auto', md: '100%' },
                objectFit: 'cover', 
                transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out", 
                zIndex: 2 
              }}
              image={image}
              alt={title}
            />
          </Box>
        </Box>
      </Link>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px', textAlign: 'left' }}>
        <CardContent>
          <Typography variant="h3" component="div" sx={{ marginBottom: '15px', lineHeight: "45px", color: "#444" }}>
            {title}
          </Typography>
          <Typography variant="h4" component="div" sx={{ fontSize: "20px", marginBottom: '10px', color: "#666" }}>
            {company}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "16px", marginBottom: '12px', color: "#888" }}>
            {description}
          </Typography>

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
                boxShadow: "none",
                transition: 'padding 0.3s ease', 
                '&:hover': {
                  backgroundColor: 'rgba(0, 35, 102, 0.7)', 
                  color: '#fff',
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
                  paddingRight: '50px', 
                  '& .arrow': { 
                    opacity: 1, 
                    transform: 'translateX(1px)', 
                    transition: 'transform 0.3s ease-in-out', 
                  },
                },
              }}
            >
              View Project
              <Box
                component="span"
                className="arrow"
                sx={{
                  opacity: 0, 
                  position: "absolute",
                  right: 16, 
                  display: "inline-block",
                  paddingRight: "10px",
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
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

export default aside;