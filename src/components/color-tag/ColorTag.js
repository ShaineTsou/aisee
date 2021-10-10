import { StyledColorTag } from "./ColorTag.styles";

const ColorTag = () => {
  return (
    <StyledColorTag color={`#d87561`}>
      <span className="color-name">{`Salmon #d87561`}</span>
      <span className="color-density">{`4%`}</span>
    </StyledColorTag>
  );
};

export default ColorTag;
