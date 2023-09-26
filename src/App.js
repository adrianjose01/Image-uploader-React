import { useState } from "react";
import InputImage from "./components/InputImage";
import Uploading from "./components/Uploading";
import Success from "./components/Success";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleImageUpload = (img) => {
    const formData = new FormData();
    formData.append("image", img);
    axios
      .post("http://localhost:4000/upload-image", formData)
      .then((res) => setImageUrl(res.data.imagePath))
      .catch((err) => {
        alert("Something went wrong!");
        window.location.reload();
      });
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
    }, 3000);
  };
  return (
    <>
      <div className="app_container">
        {!isLoading && !isLoaded && (
          <InputImage
            load={setIsLoading}
            loaded={setIsLoaded}
            uploadImg={handleImageUpload}
          />
        )}
        {isLoading && !isLoaded && <Uploading />}
        {!isLoading && isLoaded && <Success imageUrl={imageUrl} />}
      </div>
      <p className="footer">Created by adrianjose01 - DevChallenge.io</p>
    </>
  );
}

export default App;
