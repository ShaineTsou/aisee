import styled from "styled-components";
import { roundCornerMixin } from "../global-styles/mixin";

export const StyledCustomButton = styled.button`
  outline: none;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1em;

  ${roundCornerMixin}
`;
