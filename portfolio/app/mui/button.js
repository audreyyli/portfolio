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
        padding: '8px 18px', 
        fontSize: '18px', 
        backgroundColor: 'transparent',
        color: "#666",
        fontWeight: "400",
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        transition: 'transform 0.03s, background-color 0.06s',
        '&:hover': {
            color: '#111',
            fontWeight: "400",
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
    }),
}));

export default CustomButton;