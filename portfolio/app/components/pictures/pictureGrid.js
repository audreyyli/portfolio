import React from 'react';
import { Grid, Box, Typography, Card, CardMedia } from '@mui/material';

const pictureGrid = ({ pictures }) => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        paddingLeft: "25px",
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr', // 1 column for extra-small screens (mobile)
          sm: '1fr 1fr', // 2 columns for small screens
          md: 'repeat(2, 1fr)', // 2 columns for medium screens
          lg: 'repeat(3, 1fr)', // 3 columns for large screens
        },
        gap: '25px', // Adjust the gap between items
      }}
    >
      {pictures.map((pic, index) => (
        <Card
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%', // Full width of the column
            height: 'auto',
            backgroundColor: '#F8F8F8',
            borderRadius: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
          }}
        >
          <CardMedia
            component="img"
            src={pic.image}
            alt={pic.alt}
            sx={{
              width: '100%', // Full width
              height: 'auto', // Maintain aspect ratio
              marginBottom: '10px',
              borderRadius: '15px',
            }}
          />
          <Box sx={{ width: '100%', textAlign: 'left' }}>
            <Typography
              variant="h6"
              component="p"
              sx={{ fontWeight: 600, marginBottom: '5px', color: "#444" }}
            >
              {pic.title}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                fontStyle: 'italic',
                fontWeight: 500,
                color: '#888',
              }}
            >
              {pic.type}
            </Typography>
          </Box>
        </Card>
      ))}
    </Grid>
  );
};

export default pictureGrid;