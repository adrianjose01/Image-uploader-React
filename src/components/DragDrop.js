import React from "react";
import { FileUploader } from "react-drag-drop-files";
import DragDropDesign from "./DragDropDesign";

const fileTypes = ["JPG", "PNG", "GIF"];

const DragDrop = (props) => {
  const handleChange = (file) => {
    props.uploadImg(file);
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
