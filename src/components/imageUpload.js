import React, { useState } from "react";
import axios from "axios";
export const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const handelChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const fData = new FormData();
    fData.append("file", file);
    try {
      const { data } = await axios.post(`http://localhost:1234/files`, fData);
      if (data.statusCode === 201) {
        alert("File uploaded successfully!");
        window.location.reload();
      } else {
        alert(data);
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong while uploading image");
    }
  };
  return (
    <div className="container">
      <form
        className="inner_container"
        encType="multipart/form-data"
        onSubmit={handelSubmit}
      >
        <input name="file" type="file" onChange={handelChange} required />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};
