import styled from "styled-components";
import { roundCornerMixin, shadowMixin } from "../../styles/mixin";

export const StyledFormCardContainer = styled.div`
  margin: 50px auto 0;
  padding: 20px 30px;
  width: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid silver;

  ${shadowMixin}
  ${roundCornerMixin}

  a {
    text-align: end;
  }

  .warning {
    color: red;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
