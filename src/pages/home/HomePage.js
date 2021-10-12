import { useState } from "react";
import Clarifai from "clarifai";

import PageContainer from "../../components/page-container/PageContainer";
import Loader from "../../components/loader/Loader";
import AppIntro from "../../components/app-intro/AppIntro";
import ImageForm from "../../components/image-form/ImageForm";
import ColorDetection from "../../components/color-detection/ColorDetection";

const app = new Clarifai.App({
  apiKey: "your_access_key",
});

const HomePage = () => {
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
    <PageContainer>
      <Loader loaderHidden={loaderHidden} />
      <AppIntro />
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
    </PageContainer>
  );
};

export default HomePage;
