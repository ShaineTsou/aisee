import styled from "styled-components";
import { roundCornerMixin } from "../global-styles/mixin";

export const StyledColorTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 5px 0;
  padding: 10px;
  font-size: 0.85em;

  background-color: ${({ color }) => color};

  ${roundCornerMixin}
`;
