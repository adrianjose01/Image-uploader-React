import { useState } from "react";
import InputImage from "./components/InputImage";
import Uploading from "./components/Uploading";
import Success from "./components/Success";
import storage from "./FirebaseConfig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleImageUpload = async (img) => {
    const imageName = (Math.random() * 10).toString().replace(".", "");
    const imageFirabaseRef = ref(storage, imageName);
    try {
      // FIREBASE IMAGE UPLOADING
      setIsLoading(true);
      await uploadBytes(imageFirabaseRef, img);
      const url = await getDownloadURL(ref(imageFirabaseRef));
      setImageUrl(url);
      setTimeout(() => {
        setIsLoading(false);
        setIsLoaded(true);
      }, 3000);
    } catch (err) {
      alert("Something went Wrong" + err);
    }
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
      <p className="footer">
        Created by <a href="https://github.com/adrianjose01">adrianjose01</a> -
        DevChallenge.io
      </p>
    </>
  );
}

export default App;
