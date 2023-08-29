import React from "react";

const ImageWithFallback = ({ imageURL, alt, className }) => {
  return (
    <picture className="className">
      <source srcset={`${imageURL}.webp`} type="image/webp" />
      <source srcset={`${imageURL}.jpg`} type="image/jpeg" />
      <img className={className} src={`${imageURL}.jpg`} alt={alt} />
    </picture>
  );
};

export default ImageWithFallback;
