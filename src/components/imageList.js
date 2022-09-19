import React, { useEffect, useState } from "react";
import axios from "axios";
export const ImageList = () => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const { data } = await axios("http://localhost:1234/files");
      setImages(data.data);
    } catch (err) {
      alert("Something went wrong");

    }
  };
  useEffect(() => {
    getImages();
  }, []);
  return (
    <div className="imageContainer">
      {images.map((image) => (
        <div key={image._id}>
          <img src={image.url} alt={image._id} width="200px" />
        </div>
      ))}
    </div>
  );
};
