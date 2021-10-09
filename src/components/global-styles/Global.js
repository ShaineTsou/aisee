import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

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
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  p {
    font-family: 'Montserrat', sans-serif;
  }
`;
