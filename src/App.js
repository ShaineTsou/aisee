import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

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

function App({ currentUser }) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ParticlesBackground />
        <Header />

        <Switch>
          <Route exact path="/aisee/">
            <HomePage />
          </Route>
          <Route
            exact
            path="/aisee/signin"
            render={() =>
              currentUser.userId > 0 ? (
                <Redirect to="/aisee/profile" />
              ) : (
                <SignInPage />
              )
            }
          />
          <Route
            exact
            path="/aisee/signup"
            render={() =>
              currentUser.userId > 0 ? (
                <Redirect to="/aisee/profile" />
              ) : (
                <SignUpPage />
              )
            }
          />
          <Route
            exact
            path="/aisee/profile"
            render={() =>
              currentUser.userId > 0 ? (
                <ProfilePage />
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(App);
