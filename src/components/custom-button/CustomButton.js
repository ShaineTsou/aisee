import { StyledCustomButton } from "./CustomButton.styles";

const CustomButton = ({ children, className }) => {
  return (
    <StyledCustomButton className={className}>{children}</StyledCustomButton>
  );
};

export default CustomButton;
