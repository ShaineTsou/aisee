import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  position: relative;
`;

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-container {
    text-align: start;
    width: 30%;
    display: flex;
    align-items: center;

    &:hover {
      color: inherit;
      filter: drop-shadow(0px 0px 15px #ccc);
    }

    .logo {
      width: 70px;
      height: 70px;
    }

    .logo-text {
      font-family: "Kalam", cursive;
      font-size: 1.75em;
      font-weight: 700;
      letter-spacing: 3px;

      @media screen and (max-width: 480px) {
        display: none;
      }
    }
  }

  .options-container {
    display: flex;
    justify-content: end;
    width: 70%;

    .option {
      display: flex;
      align-items: center;
      margin: 0 15px;
      font-size: 1.2em;
    }
  }
`;
