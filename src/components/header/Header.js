import { Link } from "react-router-dom";
import { StyledHeader, StyledNavbar } from "./Header.styles";

import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import logo from "../../assets/logo.png";

const Header = ({ isSignin, handleSignout }) => {
  return (
    <StyledHeader>
      <StyledNavbar>
        <Link to="/" className="logo-container">
          <img src={logo} alt="website logo" className="logo" />
        </Link>
        <div className="options-container">
          <Link to="/" className="option">
            Home
          </Link>
          <Link to="/about" className="option">
            About
          </Link>
          {isSignin ? (
            <>
              <Link to="/signin" className="option" onClick={handleSignout}>
                Sign Out
              </Link>
              <Link to="/profile" className="option">
                <ProfileIcon />
              </Link>
            </>
          ) : (
            <Link to="signin" className="option">
              Sign In / Sign Up
            </Link>
          )}
        </div>
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;
