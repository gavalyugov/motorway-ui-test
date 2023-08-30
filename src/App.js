import React, { useEffect, useState } from "react";
import "./css/App.css";
import "./css/User.css";
import { format } from "date-fns";
import { ReactComponent as Like } from "./icons/like.svg";
import Car from "./components/Car";
import UserFilter from "./components/UserFilter";

const App = () => {
  const [images, setImages] = useState();
  const [filteredImages, setFilteredImages] = useState(images);

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        const sortedImages = sortByDate(data);
        setImages(sortedImages);
        setFilteredImages(sortedImages);
      });
  }, []);

  const filterByUser = (userId) => {
    setFilteredImages(images.filter((image) => image.user.id === userId));
  };

  return (
    <div className="container">
      <div className="content">
        {images && (
          <UserFilter
            users={images?.map((img) => img.user)}
            onFilterByUser={filterByUser}
          />
        )}
        <div className="timeline">
          {filteredImages?.map((img) => (
            <div className="item" key={img.id}>
              <div>
                <label className="timestamp">
                  {format(new Date(img.created_at), "d MMM yyyy")}
                </label>
              </div>
              <Car image={img} />
              <div className="icon-container">
                <div className="like">
                  <Like />
                </div>{" "}
                {img.likes}
              </div>
            </div>
          ))}
        </div>
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
