import React from "react";
import { FileUploader } from "react-drag-drop-files";
import DragDropDesign from "./DragDropDesign";

const fileTypes = ["JPG", "PNG", "GIF"];

const DragDrop = (props) => {
  const handleChange = (file) => {
    fetch("http://localhost:8000/api/image", {
      method: "POST",
      body: JSON.stringify({ image: file }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    props.load();
  };

  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      children={<DragDropDesign />}
    />
  );
};

export default DragDrop;
