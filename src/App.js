import React, { useEffect, useState } from "react";
import "./css/App.css";
import "./css/User.css";
import CarPost from "./components/CarPost";
import UserFilter from "./components/UserFilter";
import CarPostLabel from "./components/CarPostLabel";
import CarPostDetails from "./components/CarPostDetails";
import Form from "./components/Form";

const App = () => {
  const [images, setImages] = useState();
  const [filteredImages, setFilteredImages] = useState(images);

  const fetchImages = async () => {
    const imagesResponse = await fetch("images?limit=10");
    const images = await imagesResponse.json();
    const sortedImages = sortByDate(images);
    setImages(sortedImages);
    setFilteredImages(sortedImages);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const filterByUser = (userId) => {
    setFilteredImages(images.filter((image) => image.user.id === userId));
  };

  return (
    <div className="container">
      <div className="content">
        <div>
          {images && (
            <UserFilter
              users={images?.map((img) => img.user)}
              onFilterByUser={filterByUser}
            />
          )}
        </div>
        <div className="timeline">
          {filteredImages?.map((image) => (
            <div className="item" key={image.id}>
              <CarPostLabel image={image} />
              <CarPost image={image} />
              <CarPostDetails image={image} />
            </div>
          ))}
        </div>
        <Form />
      </div>
    </div>
  );
};

export default App;

// Helpers

function sortByDate(images) {
  return images.sort((image1, image2) => {
    if (new Date(image1.created_at) <= new Date(image2.created_at)) {
      return 1;
    }

    return -1;
  });
}
