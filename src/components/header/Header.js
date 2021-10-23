import { Link } from "react-router-dom";
import { StyledHeader, StyledNavbar } from "./Header.styles";

import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import logo from "../../assets/logo.png";

const Header = ({ isSignin, handleSignout }) => {
  return (
    <StyledHeader>
      <StyledNavbar>
        <Link to="/aisee/" className="logo-container">
          <img src={logo} alt="website logo" className="logo" />
        </Link>
        <div className="options-container">
          {isSignin ? (
            <>
              <Link
                to="/aisee/signin"
                className="option"
                onClick={handleSignout}
              >
                Sign Out
              </Link>
              <Link to="/aisee/profile" className="option">
                <ProfileIcon />
              </Link>
            </>
          ) : (
            <Link to="/aisee/signin" className="option">
              Sign In / Up
            </Link>
          )}
        </div>
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;
