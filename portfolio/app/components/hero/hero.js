import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Hero = ({
  title,
  timeline,
  role,
  toolsSkills,
  company,
  header,
  projectType,
  description,
  mainColour,
  subColour,
}) => {
  return (
    <Box
      style={{
        background: 'white',
        marginTop: '-150px',
      }}
    >
      <Box sx={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'left' }}>
        {/* Title and Header */}
        <Typography sx={{ fontWeight: 100, fontFamily: "Lato", fontSize: { sm: "20px", md: '24px' } }}>
          {title}
        </Typography>
        <Typography sx={{ fontWeight: 900, fontFamily: "Lato", fontSize: { sm: "25px", md: '40px' }, marginTop: "-10px", }} >
          {header}
        </Typography>

        {/* Company Pill */}
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            backgroundColor: mainColour,
            color: subColour,
            fontFamily: "Lato",
            fontWeight: 100,
            padding: '5px 15px',
            borderRadius: '50px',
            marginRight: '10px',
            fontSize: '18px',
            marginTop: '10px',
          }}
        >
          {company}
        </Box>

        {/* Project Type Pill */}
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            backgroundColor: mainColour,
            color: subColour,
            fontFamily: "Lato",
            fontWeight: 100,
            padding: '5px 15px',
            borderRadius: '50px',
            marginRight: '10px',
            fontSize: '18px',
            marginTop: '10px',
          }}
        >
          {projectType}
        </Box>

        {/* Description */}
        <Typography sx={{ fontWeight: 400, fontFamily: "Lato", marginTop: '20px', fontSize: '18px' }}>
          {description}
        </Typography>

        {/* Timeline, Role, and Tools/Skills in 3 Columns */}
        <Grid container spacing={4} sx={{ marginTop: "35px" }}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '24px',
                fontWeight: 100,
                fontFamily: "Lato",
                textTransform: 'uppercase',
                color: subColour,
              }}
            >
              Timeline
            </Typography>
            <Typography sx={{ fontWeight: 400, fontFamily: "Lato", fontSize: '18px' }}>
              {timeline}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '24px',
                fontWeight: 100,
                fontFamily: "Lato",
                textTransform: 'uppercase',
                color: subColour,
              }}
            >
              Role
            </Typography>
            <Typography sx={{ fontWeight: 400, fontFamily: "Lato", fontSize: '18px' }}>
              {role}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '24px',
                fontWeight: 100,
                fontFamily: "Lato",
                textTransform: 'uppercase',
                color: subColour,
              }}
            >
              Tools/Skills
            </Typography>
            <Typography sx={{ fontWeight: 400, fontFamily: "Lato", fontSize: '18px' }}>
              {toolsSkills}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;