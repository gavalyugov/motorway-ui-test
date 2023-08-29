import React, { useEffect, useState } from "react";
import "./App.css";
import { format } from "date-fns";

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setImages(sortByDate(data));
      });
  }, []);

  return (
    <div className="content">
      <div className="timeline">
        {images?.map((img) => (
          <div className="item" key={img.id}>
            <div className="timestamp">
              <label className="timestamp">
                {format(new Date(img.created_at), "d MMM yyyy")}
              </label>
            </div>
            <img
              src={`${img.url}.jpg`}
              alt={img.alt_description}
              className="car"
            />
            <img
              className="user"
              src={`${img.user.profile_image}.webp`}
              alt=""
            />
          </div>
        ))}
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
