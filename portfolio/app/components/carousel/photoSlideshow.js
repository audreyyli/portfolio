import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

const PhotoSlideshow = ({
  photos = [],
  autoplaySpeed = 3000,
  speed = 500,
  dots = true,
  arrows = false,
  slidesToShow = 1,
  slidesToScroll = 1,
  borderRadius = "24px 4px 24px 4px",
}) => {
  const settings = {
    dots,
    infinite: true,
    speed,
    autoplay: true,
    autoplaySpeed,
    slidesToShow,
    slidesToScroll,
    arrows,
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: borderRadius,
        overflow: "hidden",
        "& .slick-list": {
          height: "100%",
        },
        "& .slick-track": {
          height: "100%",
          display: "flex",
        },
        "& .slick-slide": {
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Slider {...settings}>
        {photos.map((src, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default PhotoSlideshow;
