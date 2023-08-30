import React, { useState } from "react";
import ImageWithFallback from "./ImageWithFallback";
import "../css/Car.css";
import ImageModal from "./ImageModal";

const CarPost = ({ image }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="car-item">
      {modalOpen && (
        <ImageModal isOpen={modalOpen} onClose={closeModal} image={image} />
      )}
      <div className="car-container" onClick={openModal}>
        <ImageWithFallback
          imageURL={image.url}
          alt={image.alt_description}
          className="car"
        />
      </div>
      <div className="quote-container">
        <ImageWithFallback
          className="user"
          imageURL={image.user.profile_image}
          alt={image.user.alt}
        />
      </div>
    </div>
  );
};

export default CarPost;
