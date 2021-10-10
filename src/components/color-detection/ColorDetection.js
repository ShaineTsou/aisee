import {
  StyledColorDetectionContainer,
  StyledImageContainer,
  StyledResultsContainer,
} from "./ColorDetection.styles";

import ColorTag from "../color-tag/ColorTag";

const ColorDetection = () => {
  return (
    <StyledColorDetectionContainer>
      <StyledImageContainer>
        <img
          src="https://unsplash.com/photos/MliheRJu0sk/download?force=true&w=640"
          alt=""
        />
      </StyledImageContainer>
      <StyledResultsContainer>
        <ColorTag />
        <ColorTag />
        <ColorTag />
      </StyledResultsContainer>
    </StyledColorDetectionContainer>
  );
};

export default ColorDetection;
