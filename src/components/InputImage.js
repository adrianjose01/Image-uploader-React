import React from "react";
import DragDrop from "./DragDrop";

const InputImage = (props) => {
  const loadImage = (e) => {
    props.load(true);
    setTimeout(() => {
      props.load(false);
      props.loaded(true);
    }, 3000);
  };
  return (
    <div className="input_image_container">
      <h2>Upload Your Image</h2>
      <small>File should be Jpeg, PNG...</small>
      <DragDrop load={loadImage} />
      <br />
      <p>Or</p>
      <label htmlFor="file-upload" className="custom-file-upload">
        Choose a file
      </label>
      <input id="file-upload" type="file" onChange={(e) => loadImage(e)} />
    </div>
  );
};

export default InputImage;
