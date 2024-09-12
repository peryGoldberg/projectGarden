import React, { useState, useEffect } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ImageCarousel = () => {
  const images = [
    "https://www.ikea.com/ext/ingkadam/m/43e5470c2c881c2a/original/PH190463.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/73496a6c49ec8659/original/PH196616.JPG?f=xl",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{width: "100%", textAlign: "center"}}>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        style={{width: "100%"}}
      />
    </div>
  );
};

export default ImageCarousel;


