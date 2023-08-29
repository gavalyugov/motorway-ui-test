import React, { useEffect, useState } from "react";
import "./App.css";
import { format } from "date-fns";
import { ReactComponent as Like } from "./icons/like.svg";
import ImageWithFallback from "./components/imageWithFallback";

const App = () => {
  const [images, setImages] = useState();
  const [filters, setFilters] = useState("");

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setImages(sortByDate(data));
      });
  }, []);

  return (
    <div className="content">
      {/* <select>
        <option value="user">Some option</option>
        <option value="otherOption">Other option</option>
      </select> */}
      <div className="timeline">
        {images?.map((img) => (
          <div className="item" key={img.id}>
            <div>
              <label className="timestamp">
                {format(new Date(img.created_at), "d MMM yyyy")}
              </label>
            </div>
            <div className="item-image">
              <div className="car-container">
                <ImageWithFallback
                  imageURL={img.url}
                  alt={img.alt_description}
                  className="car"
                />
              </div>
              <ImageWithFallback
                className="user"
                imageURL={img.user.profile_image}
                alt={img.user.alt}
              />
            </div>
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
