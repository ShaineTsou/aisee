import {
  StyledImageFormContainer,
  StyledImageLink,
  StyledDetectButton,
} from "./ImageForm.styles";

const ImageForm = ({ inputText, handleInputChange, handleImageSubmit }) => {
  return (
    <StyledImageFormContainer>
      <StyledImageLink
        type="text"
        name="image-link"
        id="image-link"
        placeholder="Put image link here to detect colors"
        value={inputText}
        onChange={handleInputChange}
      />
      <StyledDetectButton className="detect-btn" onClick={handleImageSubmit}>
        Detect
      </StyledDetectButton>
    </StyledImageFormContainer>
  );
};

export default ImageForm;
