import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion'; // Import Framer Motion

const Hero = ({
  headerImage,
  blurImage,
  title,
  timeline,
  role,
  toolsSkills,
  company,
  header,
  projectType,
  description,
  mainColour,
}) => {

    const pageAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
    };

  return (
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={pageAnimation}
            >
        <Grid container spacing={4} alignItems="center" sx={{ marginTop: "5px" }}>
          {/* Left Section - Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "24px" }} gutterBottom>{title}</Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: "40px" }} gutterBottom>{header}</Typography>

            {/* Company Pill */}
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                backgroundColor: mainColour,
                color: "#FFFFFF",
                padding: '5px 15px',
                borderRadius: '50px',
                marginRight: '10px',
                fontSize: '18px',
                fontWeight: 'bold',
                marginTop: '10px'
              }}
            >
              {company}
            </Box>

            {/* Project Type Pill */}
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                border: `2px solid ${mainColour}`,
                color: mainColour,
                padding: '5px 15px',
                borderRadius: '50px',
                fontSize: '18px',
                fontWeight: 'bold',
                marginTop: '10px'
              }}
            >
              {projectType}
            </Box>

            <Typography variant="body1" sx={{ marginTop: '20px', fontSize: "18px" }}>
              {description}
            </Typography>

            {/* Divider Line */}
            <Divider sx={{ marginTop: '40px', marginBottom: '40px' }} />

            {/* 3-Column Grid for Timeline, Role, and Tools/Skills */}
            <Grid container spacing={4}>
              <Grid item xs={12} md={5}>
                <Typography variant="h6" sx={{ fontSize: "24px", fontWeight: 'bold', textTransform: 'uppercase', color: mainColour, opacity: 0.5 }}>Timeline</Typography>
                <Typography variant="body1" sx= {{ fontSize: "18px" }}>{timeline}</Typography>
              </Grid>

              <Grid item xs={12} md={5}>
                <Typography variant="h6" sx={{ fontSize: "24px", fontWeight: 'bold', textTransform: 'uppercase', color: mainColour, opacity: 0.5 }}>Role</Typography>
                <Typography variant="body1" sx= {{ fontSize: "18px" }}>{role}</Typography>
              </Grid>

              <Grid item xs={12} md={10}>
                <Typography variant="h6" sx={{ fontSize: "24px", fontWeight: 'bold', textTransform: 'uppercase', color: mainColour, opacity: 0.5 }}>Tools/Skills</Typography>
                <Typography variant="body1" sx={{ fontSize: "18px" }}>{toolsSkills}</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Section - Image */}
          <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
              {/* Blurred Image - Positioned behind */}
              <Box
                component="img"
                src={blurImage}
                alt="Blurred Background"
                sx={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: "scale(1.25)",
                  zIndex: 1,
                  borderRadius: '8px',
                }}
              />
              {/* Main Image */}
              <Box 
                component="img" 
                src={headerImage} 
                alt={title} 
                sx={{ 
                  width: '100%',
                  height: 'auto', 
                  objectFit: "cover", 
                  borderRadius: '8px',
                  position: 'relative', 
                  zIndex: 2,
                }} 
              />
            </Box>
          </Grid>
        </Grid>
        </motion.div>
      </Box>
  );
};

export default Hero;