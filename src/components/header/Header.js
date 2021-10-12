import { Link } from "react-router-dom";
import { StyledHeader, StyledNavbar } from "./Header.styles";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNavbar>
        <a href="/" className="logo-container">
          <img src={logo} alt="website logo" className="logo" />
        </a>
        <div className="options-container">
          <Link to="/" className="option">
            Home
          </Link>
          <Link to="/about" className="option">
            About
          </Link>
          <Link to="signin" className="option">
            Sign In
          </Link>
        </div>
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;
