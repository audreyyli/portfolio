"use client";
import { styled } from '@mui/material/styles'; // Correct for Material UI v5
import { Button } from '@mui/material';

// Styled reusable button
const CustomButton = styled(Button)(({ variantType }) => ({
    padding: '10px 20px',
    fontSize: '8px',
    color: 'white',
    borderRadius: '15px',
    transition: 'transform 0.2s, background-color 0.2s',
    ...(variantType === 'primary' && {
        backgroundColor: '#4CAF50',
        '&:hover': {
            backgroundColor: '#45A049',
        },
    }),
    ...(variantType === 'secondary' && {
        backgroundColor: '#FF5722',
        '&:hover': {
            backgroundColor: '#E64A19',
        },
    }),
    ...(variantType === 'header' && {
        padding: '8px 18px',  // Smaller padding for the header buttons
        fontSize: '20px',      // Smaller font size for header buttons
        backgroundColor: 'transparent',
        color: "black",
        fontWeight: "400",
        transition: 'transform 0.03s, background-color 0.06s', // Faster transition
        '&:hover': {
            backgroundColor: '#F8F8F8', // Light grey background
            color: '#002366',
            transform: 'scale(1.1)',  // Slight pop effect
            fontWeight: "300",
        },
    }),
}));

export default CustomButton;