import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import ParticlesBackground from "./components/particles-background/ParticlesBackground";
import { GlobalStyles } from "./styles/Global.styles";

import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import SigninPage from "./pages/sign-in/SigninPage";
import SignupPage from "./pages/sign-up/SignupPage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  const [isSignin, setIsSignin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    user_id: "",
    display_name: "",
    email: "",
    joined_date: "",
    results: [],
  });

  const handleSignin = (userInfo) => {
    setIsSignin(true);
    setUserInfo(userInfo);
  };

  const handleSignout = () => {
    setIsSignin(false);
    setUserInfo({});
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ParticlesBackground />
        <Header isSignin={isSignin} handleSignout={handleSignout} />

        <Switch>
          <Route exact path="/">
            <HomePage userInfo={userInfo} />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/signin">
            <SigninPage isSignin={isSignin} handleSignin={handleSignin} />
          </Route>
          <Route exact path="/signup">
            <SignupPage isSignin={isSignin} handleSignin={handleSignin} />
          </Route>
          <Route exact path="/profile">
            <ProfilePage isSignin={isSignin} userInfo={userInfo} />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
