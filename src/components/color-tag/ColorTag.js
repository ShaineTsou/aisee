import { StyledColorTag } from "./ColorTag.styles";

const ColorTag = ({ bgHex, density, name }) => {
  const densityPercentage = Math.round(density * 100, 0);

  const getContrastTextColor = (bgHex) => {
    // Convert hex value into rgb values of 3 primary colors
    const redRGB = parseInt(bgHex.slice(1, 3), 16);
    const greenRGB = parseInt(bgHex.slice(3, 5), 16);
    const blueRGB = parseInt(bgHex.slice(5, 7), 16);

    // Convert RGB value to grayscale using the NTSC formula
    const grayscale = redRGB * 0.299 + greenRGB * 0.587 + blueRGB * 0.114;

    return grayscale > 186 ? "black" : "white";
  };

  return (
    <StyledColorTag bgColor={bgHex} textColor={getContrastTextColor(bgHex)}>
      <span className="color-name">{`${name} ${bgHex}`}</span>
      <span className="color-density">{densityPercentage}%</span>
    </StyledColorTag>
  );
};

export default ColorTag;
