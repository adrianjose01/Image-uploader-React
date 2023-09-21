import React from "react";
import testImage from "../assets/R.jpeg";
import successImage from "../assets/checked.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Success = () => {
  return (
    <div className="success_container">
      <img src={successImage} alt="success" width="50" />
      <h3>Uploaded Successfully!</h3>
      <img className="uploaded_image" src={testImage} alt="test" />
      <div className="copy_image_container">
        <input
          readOnly
          className="image_url_input"
          type="text"
          value={testImage}
        />
        <CopyToClipboard text={testImage} onCopy={() => console.log("Copied")}>
          <button className="btn_copy">Copy Link</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Success;
