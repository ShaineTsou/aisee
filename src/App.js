import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import ParticlesBackground from "./components/particles-background/ParticlesBackground";
import { GlobalStyles } from "./styles/Global.styles";

import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import SignInPage from "./pages/sign-in/SignInPage";
import SignUpPage from "./pages/sign-up/SignUpPage";
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
          <Route exact path="/aisee/">
            <HomePage isSignin={isSignin} userInfo={userInfo} />
          </Route>
          <Route
            exact
            path="/aisee/signin"
            render={() =>
              isSignin ? (
                <Redirect to="/aisee/profile" />
              ) : (
                <SignInPage handleSignin={handleSignin} />
              )
            }
          />
          <Route
            exact
            path="/aisee/signup"
            render={() =>
              isSignin ? (
                <Redirect to="/aisee/profile" />
              ) : (
                <SignUpPage handleSignin={handleSignin} />
              )
            }
          />
          <Route
            exact
            path="/aisee/profile"
            render={() =>
              isSignin ? (
                <ProfilePage userInfo={userInfo} />
              ) : (
                <Redirect to="/aisee/signin" />
              )
            }
          />
          <Route path="/aisee/" component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
