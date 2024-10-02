import React from 'react';
import { Grid, Box, Typography, Card, CardMedia, Chip } from '@mui/material';
import Link from 'next/link';

const projects = ({ image, title, company, time, link, skills }) => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        paddingLeft: "10px",
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Adjust for smaller screens
        gap: '15px',
        justifyContent: 'left',
      }}
    >
      {/* Wrap the entire card with Link */}
      <Link href={link} passHref>
        <Card
          sx={{
            position: 'relative', 
            width: { xs: '100%', md: '565px' }, // Full width on mobile, fixed width on larger screens
            height: 'auto',
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            padding: '0px',
            overflow: 'hidden',
            marginTop: '10px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
            '&:hover': {
              transform: 'translateY(-5px)', // Move the card upwards without affecting layout
              boxShadow: '0 5px 20px rgba(0, 35, 102, 0.2)', // Add a subtle shadow on hover
            },
            '&:hover .project-image': {
              transform: 'scale(1.04)', // Scale image when the card is hovered
            },
          }}
        >
          {/* Project Image */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '200px', md: '300px' }, // Smaller height for mobile
              overflow: 'hidden', // Ensure the image doesn't overflow
            }}
          >
            <CardMedia
              component="img"
              className="project-image"
              src={image}
              alt={title}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out', // Apply scaling smoothly
                willChange: 'transform', // Improve performance during hover
              }}
            />
          </Box>

          {/* Content Box */}
          <Box 
            sx={{ 
              width: '100%', 
              textAlign: 'left', 
              padding: { xs: '15px', md: '20px' }, // Adjust padding for smaller screens
              position: 'relative', 
              zIndex: 2,
            }}
          >
            {/* Project Title */}
            <Typography
              variant="h5"
              component="p"
              sx={{ fontWeight: 600, marginBottom: '5px', color: "#444", fontSize: { xs: '18px', md: '22px' } }} // Adjust font size for mobile
            >
              {title}
            </Typography>

            {/* Company Name */}
            <Typography
              variant="body2"
              component="p"
              sx={{
                fontStyle: 'italic',
                fontWeight: 500,
                color: '#888',
                fontSize: { xs: '14px', md: '16px' }, // Adjust font size for mobile
              }}
            >
              {company}
            </Typography>

            {/* Time Period */}
            <Typography
              variant="body2"
              sx={{ marginBottom: '12px', color: "#888", fontSize: { xs: '14px', md: '16px' } }} // Adjust font size for mobile
            >
              {time}
            </Typography>

            {/* Skills Used */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    border: '1px solid rgba(0, 35, 102, 0.5)',
                    color: 'rgba(0, 35, 102, 0.7)',
                    fontWeight: 'bold',
                    backgroundColor: 'transparent',
                    fontSize: { xs: '12px', md: '14px' }, // Adjust font size for skills
                  }}
                />
              ))}
            </Box>
          </Box>
        </Card>
      </Link>
    </Grid>
  );
};

export default projects;