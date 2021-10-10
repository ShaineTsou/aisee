import { StyledCustomButton } from "./CustomButton.styles";

const CustomButton = ({ children, className, onClick }) => {
  return (
    <StyledCustomButton className={className} onClick={onClick}>
      {children}
    </StyledCustomButton>
  );
};

export default CustomButton;
