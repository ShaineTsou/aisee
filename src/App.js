import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "./components/global-styles/theme";
// import ParticlesBackground from "./components/particles-background/ParticlesBackground";
import { GlobalStyles } from "./components/global-styles/Global.styles";

import Header from "./components/header/Header";
import ImageForm from "./components/image-form/ImageForm";
import ColorDetection from "./components/color-detection/ColorDetection";

function App() {
  const [inputText, setInputText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [colorDetectionHidden, setColorDetectionHidden] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setColorDetectionHidden(true);
    setImageUrl("");
    setImageLoaded(false);
  };

  const handleImageSubmit = () => {
    if (inputText.length) {
      setImageUrl(inputText);
      setInputText("");
      setColorDetectionHidden(false);
    }
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  // test url: https://unsplash.com/photos/KMn4VEeEPR8/download?force=true&w=640

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <ParticlesBackground /> */}
      <Header />
      <ImageForm
        inputText={inputText}
        handleInputChange={handleInputChange}
        handleImageSubmit={handleImageSubmit}
      />
      <ColorDetection
        imageUrl={imageUrl}
        imageLoaded={imageLoaded}
        handleImageLoaded={handleImageLoaded}
        colorDetectionHidden={colorDetectionHidden}
      />
    </ThemeProvider>
  );
}

export default App;
