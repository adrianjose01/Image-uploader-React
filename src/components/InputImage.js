import React, { useRef } from "react";
import DragDrop from "./DragDrop";

const InputImage = (props) => {
  const imageInputRef = useRef();

  const loadImage = (e) => {
    const file = imageInputRef.current.files[0];
    props.uploadImg(file);
  };
  return (
    <div className="input_image_container">
      <h2>Upload Your Image</h2>
      <small>File should be Jpeg, PNG...</small>
      <DragDrop uploadImg={props.uploadImg} />
      <br />
      <p>Or</p>
      <label htmlFor="file-upload" className="custom-file-upload">
        Choose a file
      </label>
      <input
        ref={imageInputRef}
        id="file-upload"
        type="file"
        onChange={(e) => loadImage(e)}
      />
    </div>
  );
};

export default InputImage;
