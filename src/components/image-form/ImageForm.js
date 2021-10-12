import CustomButton from "../custom-button/CustomButton";
import { StyledImageFormContainer, StyledImageLink } from "./ImageForm.styles";

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
      <CustomButton onClick={handleImageSubmit}>Detect</CustomButton>
    </StyledImageFormContainer>
  );
};

export default ImageForm;
