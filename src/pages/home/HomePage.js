import { useState } from "react";

import PageContainer from "../../components/page-container/PageContainer";
import Loader from "../../components/loader/Loader";
import AppIntro from "../../components/app-intro/AppIntro";
import ImageForm from "../../components/image-form/ImageForm";
import ColorDetection from "../../components/color-detection/ColorDetection";

const HomePage = ({ userInfo, isSignin }) => {
  const { userId } = userInfo;
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

      fetch("https://aisee-server.herokuapp.com/imageurl", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl: inputText,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            setColors(response.outputs[0].data.colors);
            setLoaderHidden(true);
            setColorDetectionHidden(false);

            if (userId !== 0) {
              fetch("https://aisee-server.herokuapp.com/image", {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userId: userId,
                  imageUrl: inputText,
                  colors: response.outputs[0].data.colors,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data === "storing colors success") {
                    return "Result update success";
                  } else {
                    return "User not found";
                  }
                })
                .catch((err) => "Unable to submit result");
            }
          }
        })
        .catch((err) => "Error detecting image");
    }
  };

  return (
    <PageContainer>
      <Loader loaderHidden={loaderHidden} />
      <AppIntro isSignin={isSignin} />
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
