import { useState } from "react";
import Clarifai from "clarifai";

import { ThemeProvider } from "styled-components";
import { theme } from "./components/global-styles/theme";
import ParticlesBackground from "./components/particles-background/ParticlesBackground";
import { GlobalStyles } from "./components/global-styles/Global.styles";

import Header from "./components/header/Header";
import ImageForm from "./components/image-form/ImageForm";
import ColorDetection from "./components/color-detection/ColorDetection";
import Loader from "./components/loader/Loader";

const app = new Clarifai.App({
  apiKey: "your_api_key",
});

function App() {
  const [inputText, setInputText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [colorDetectionHidden, setColorDetectionHidden] = useState(true);
  const [colors, setColors] = useState([]);
  const [loaderHidden, setLoaderHidden] = useState(true);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setColorDetectionHidden(true);
    setImageUrl("");
  };

  const handleImageSubmit = () => {
    if (inputText.length) {
      setImageUrl(inputText);
      setInputText("");
      setLoaderHidden(false);

      app.models
        .predict("eeed0b6733a644cea07cf4c60f87ebb7", inputText)
        .then((response) => {
          setColors(response.outputs[0].data.colors);
          setLoaderHidden(true);
          setColorDetectionHidden(false);
        })
        .catch((err) => console.log("err: ", err));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ParticlesBackground />
      <Loader loaderHidden={loaderHidden} />

      <Header />
      <ImageForm
        inputText={inputText}
        handleInputChange={handleInputChange}
        handleImageSubmit={handleImageSubmit}
      />
      <ColorDetection
        imageUrl={imageUrl}
        colorDetectionHidden={colorDetectionHidden}
        colors={colors}
      />
    </ThemeProvider>
  );
}

export default App;
