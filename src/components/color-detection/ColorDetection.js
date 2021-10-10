import {
  StyledColorDetectionContainer,
  StyledImageContainer,
  StyledResultsContainer,
} from "./ColorDetection.styles";

import ColorTag from "../color-tag/ColorTag";
import Loader from "../loader/Loader";

const ColorDetection = ({
  imageUrl,
  imageLoaded,
  handleImageLoaded,
  colorDetectionHidden,
}) => {
  return (
    <StyledColorDetectionContainer colorDetectionHidden={colorDetectionHidden}>
      <StyledImageContainer>
        <img src={imageUrl} alt="" onLoad={handleImageLoaded} />
      </StyledImageContainer>
      {imageLoaded ? (
        <StyledResultsContainer>
          <ColorTag />
          <ColorTag />
          <ColorTag />
        </StyledResultsContainer>
      ) : (
        <Loader />
      )}
    </StyledColorDetectionContainer>
  );
};

export default ColorDetection;
