import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  position: relative;
`;

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 70px;
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

    .logo {
      width: 50px;
      height: 50px;
      border-radius: 15px;

      &:hover {
        filter: drop-shadow(0px 0px 15px #ccc);
      }
    }
  }

  .options-container {
    display: flex;
    justify-content: end;
    width: 70%;

    .option {
      margin: 0 20px;
      font-size: 1.2em;

      &:visited {
        color: inherit;
      }
    }
  }
`;

export const StyledIntroContainer = styled.div`
  margin: 0 auto;
  padding: 70px 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    margin: 0;
    font-size: 3.5em;
    letter-spacing: 0.2em;
  }

  .introduction {
    font-size: 1.25em;
    margin: 0;
  }
`;
