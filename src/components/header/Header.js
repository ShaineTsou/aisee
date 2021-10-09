import {
  StyledHeader,
  StyledNavbar,
  StyledIntroContainer,
} from "./Header.styles";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNavbar>
        <a href="/" className="logo-container">
          <img src={logo} alt="website logo" className="logo" />
        </a>
        <div className="options-container">
          <a href="/" className="option">
            Home
          </a>
          <a href="/" className="option">
            Sign In
          </a>
        </div>
      </StyledNavbar>
      <StyledIntroContainer>
        <h1 className="title">aiSee</h1>
        <p className="introduction">
          shows you the hex code, the density and the closest color name in the
          image
        </p>
      </StyledIntroContainer>
    </StyledHeader>
  );
};

export default Header;
