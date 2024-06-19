import React, { useEffect, useState } from 'react';

const ImageEnlarger = ({ src, alt }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  
  useEffect(() => {
    setIsEnlarged(!isEnlarged);
  }, [])

  const handleClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  const imageStyle = {
    width: isEnlarged ? '500px' : '300px',
    transition: 'width 0.3s ease-in-out',
    cursor: 'pointer',
  };

  return (
    <img
      src={src}
      alt={alt}
      style={imageStyle}
      onClick={handleClick}
    />
  );
};

export default ImageEnlarger;