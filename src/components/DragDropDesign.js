import React from "react";
import image from "../assets/image.svg";

const DragDropDesign = () => {
  return (
    <div className="drop_design">
      <img src={image} alt="Drag and Drop" />
      <p>Drag and Drop your image here</p>
    </div>
  );
};

export default DragDropDesign;
