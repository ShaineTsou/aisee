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
import NotFoundPage from "./pages/not-found/NotFoundPage";

function App() {
  const [isSignin, setIsSignin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userId: 0,
    displayName: "",
    email: "",
    joinedDate: "",
  });

  const handleSignin = (userInfo) => {
    const { user_id, display_name, email, joined_date } = userInfo;
    setIsSignin(true);
    setUserInfo({
      userId: user_id,
      displayName: display_name,
      email: email,
      joinedDate: joined_date,
    });
  };

  const handleSignout = () => {
    setIsSignin(false);
    setUserInfo({
      userId: 0,
      displayName: "",
      email: "",
      joinedDate: "",
    });
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ParticlesBackground />
        <Header isSignin={isSignin} handleSignout={handleSignout} />

        <Switch>
          <Route exact path="/">
            <HomePage isSignin={isSignin} userInfo={userInfo} />
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
          <Route path="/" component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
