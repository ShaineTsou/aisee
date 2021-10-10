import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: 'Kalam', cursive;
    text-align: center;
    background: linear-gradient(to right, rgb(119, 175, 253), rgb(255, 77, 148));
    color: ${({ theme: { colors } }) => colors.globalText};
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  p, button, input, span {
    font-family: 'Montserrat', sans-serif;
  }
`;
