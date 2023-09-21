import { useState } from "react";
import InputImage from "./components/InputImage";
import Uploading from "./components/Uploading";
import Success from "./components/Success";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <div className="app_container">
        {!isLoading && !isLoaded && (
          <InputImage load={setIsLoading} loaded={setIsLoaded} />
        )}
        {isLoading && !isLoaded && <Uploading />}
        {!isLoading && isLoaded && <Success />}
      </div>
      <p className="footer">Created by adrianjose01 - DevChallenge.io</p>
    </>
  );
}

export default App;
