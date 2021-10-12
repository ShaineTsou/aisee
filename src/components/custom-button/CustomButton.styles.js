import styled from "styled-components";
import { roundCornerMixin } from "../../styles/mixin";

export const StyledCustomButton = styled.button`
  margin: 10px;
  padding: 10px 15px;
  background-color: ${({ theme: { colors } }) => colors.btnBg};
  outline: none;
  border: none;

  font-size: 1em;
  font-weight: 700;
  letter-spacing: 1px;

  &:hover {
    filter: brightness(1.1);
  }

  ${roundCornerMixin}
`;
