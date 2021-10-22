import ColorTag from "../color-tag/ColorTag";
import {
  StyledResult,
  StyledResultImageContainer,
  StyledImageAndTagsContainer,
} from "./ProfileResult.styles";

const ProfileResult = ({ result }) => {
  return (
    <StyledResult>
      <p className="submit-date">{result.submitDate}</p>
      <StyledImageAndTagsContainer>
        <a href={result.imageUrl} target="_blank" rel="noreferrer noopener">
          <StyledResultImageContainer>
            <img src={result.imageUrl} alt="" className="result-image" />
          </StyledResultImageContainer>
        </a>
        <div className="tags-container">
          {result.colors.map(({ colorId, density, hexColor, w3cName }) => (
            <ColorTag
              bgHex={hexColor}
              density={density}
              name={w3cName}
              key={colorId}
            />
          ))}
        </div>
      </StyledImageAndTagsContainer>
    </StyledResult>
  );
};

export default ProfileResult;
