import {
  StyledImageFormContainer,
  StyledImageLink,
  StyledDetectButton,
} from "./ImageForm.styles";

const ImageForm = () => {
  return (
    <StyledImageFormContainer>
      <StyledImageLink
        type="text"
        name="image-link"
        id="image-link"
        placeholder="Put image link here to detect colors"
      />
      <StyledDetectButton className="detect-btn">Detect</StyledDetectButton>
    </StyledImageFormContainer>
  );
};

export default ImageForm;
