import {
  StyledColorDetectionContainer,
  StyledImageContainer,
  StyledResultsContainer,
} from "./ColorDetection.styles";

import ColorTag from "../color-tag/ColorTag";

const ColorDetection = ({ imageUrl, colorDetectionHidden, colors }) => {
  return (
    <StyledColorDetectionContainer colorDetectionHidden={colorDetectionHidden}>
      <StyledImageContainer>
        <img src={imageUrl} alt="" />
      </StyledImageContainer>
      <StyledResultsContainer>
        <p className="instruction">↓ Click to copy hex code ↓</p>
        {colors.map(({ raw_hex, value, w3c }) => (
          <ColorTag
            bgHex={raw_hex}
            density={value}
            name={w3c.name}
            key={raw_hex}
          />
        ))}
      </StyledResultsContainer>
    </StyledColorDetectionContainer>
  );
};

export default ColorDetection;
