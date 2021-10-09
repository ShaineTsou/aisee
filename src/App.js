import { ThemeProvider } from "styled-components";
import { theme } from "./components/global-styles/theme";
import Header from "./components/header/Header";
import ParticlesBackground from "./components/particles-background/ParticlesBackground";
import { GlobalStyles } from "./components/global-styles/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <ParticlesBackground />
    </ThemeProvider>
  );
}

export default App;
