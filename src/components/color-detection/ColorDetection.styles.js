import styled from "styled-components";
import { roundCornerMixin, shadowMixin } from "../global-styles/mixin";

export const StyledColorDetectionContainer = styled.div`
  display: ${({ colorDetectionHidden }) =>
    colorDetectionHidden ? "none" : "flex"};
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledImageContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: flex;
  height: 425px;
  overflow: hidden;

  ${roundCornerMixin}
  ${shadowMixin}

  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  @media screen and (max-width: 768px) {
    width: 450px;
    height: auto;
  }
`;

export const StyledResultsContainer = styled.div`
  width: 300px;
  margin: 10px;
  padding: 5px 10px;
  color: ${({ theme: { colors } }) => colors.resultsText};
  background-color: ${({ theme: { colors } }) => colors.resultsBg};

  ${roundCornerMixin}
  ${shadowMixin}

  .instruction {
    margin: 5px 0;
  }
`;
