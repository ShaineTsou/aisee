import styled from "styled-components";

export const StyledLoader = styled.div`
  height: 425px;
  position: relative;
  width: 50%;

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 768px) {
    height: 150px;
  }
`;
