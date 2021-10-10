import { ThemeProvider } from "styled-components";
import { theme } from "./components/global-styles/theme";
import ParticlesBackground from "./components/particles-background/ParticlesBackground";
import { GlobalStyles } from "./components/global-styles/Global.styles";

import Header from "./components/header/Header";
import ImageForm from "./components/image-form/ImageForm";
import ColorDetection from "./components/color-detection/ColorDetection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ParticlesBackground />
      <Header />
      <ImageForm />
      <ColorDetection />
    </ThemeProvider>
  );
}

export default App;
