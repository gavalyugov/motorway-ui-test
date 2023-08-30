const ImageWithFallback = ({ imageURL, alt, className }) => {
  return (
    <picture>
      <source srcSet={`${imageURL}.webp`} type="image/webp" />
      <source srcSet={`${imageURL}.jpg`} type="image/jpeg" />
      <img className={className} src={`${imageURL}.jpg`} alt={alt} />
    </picture>
  );
};

export default ImageWithFallback;
