import styled from "styled-components";
import { roundCornerMixin } from "../../styles/mixin";

export const StyledImageFormContainer = styled.div`
  padding: 0 10px;
`;

export const StyledImageLink = styled.input`
  margin: 10px;
  padding: 10px 15px;
  width: 50%;
  min-width: 325px;

  outline: none;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1em;

  ${roundCornerMixin}

  &:focus {
    filter: drop-shadow(0px 0px 10px gold);
  }

  @media screen and (max-width: 480px) {
    min-width: 200px;
  }
`;
