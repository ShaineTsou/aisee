import styled from "styled-components";

export const StyledLoader = styled.div`
  display: ${({ loaderHidden }) => (loaderHidden ? "none" : "block")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 2000;

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
