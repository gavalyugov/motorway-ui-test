import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="content">
      <div className="timeline">
        {images?.map((img) => (
          <div className="item" key={img.id}>
            <img src={`${img.url}.jpg`} alt="" className="car" />
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
