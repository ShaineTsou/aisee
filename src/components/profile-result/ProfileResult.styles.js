import styled from "styled-components";
import { roundCornerMixin, shadowMixin } from "../../styles/mixin";

export const StyledResult = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  background-color: snow;
  border-bottom: 1px solid silver;
  padding: 15px;
  ${shadowMixin}

  p {
    margin: 15px;
    font-weight: 700;
    color: black;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const StyledResultImageContainer = styled.div`
  width: 250px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: flex;

  overflow: hidden;
  ${roundCornerMixin}

  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  @media screen and (max-width: 480px) {
    width: 200px;
  }
`;

export const StyledImageAndTagsContainer = styled.div`
  width: 100%;
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;
