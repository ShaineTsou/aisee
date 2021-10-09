import { ThemeProvider } from "styled-components";
import { theme } from "./components/global-styles/theme";
import Header from "./components/header/Header";
import { GlobalStyles } from "./components/global-styles/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  );
}

export default App;
