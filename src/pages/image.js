import React from "react";
import { ImageList } from "../components/imageList";
import { ImageUpload } from "../components/imageUpload";

export const Image = () => {
  return (
    <div>
      <ImageUpload />
      <ImageList />
    </div>
  );
};
