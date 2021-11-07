import { Link } from "react-router-dom";
import { StyledHeader, StyledNavbar } from "./Header.styles";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import logo from "../../assets/logo.png";

const Header = ({ currentUser, setCurrentUser }) => {
  const { userId } = currentUser;

  const handleSignOut = () => {
    setCurrentUser({
      userId: 0,
      displayName: "",
      email: "",
      joinedDate: "",
    });
  };

  return (
    <StyledHeader>
      <StyledNavbar>
        <Link to="/aisee/" className="logo-container">
          <img src={logo} alt="website logo" className="logo" />
          <span className="logo-text">aiSee</span>
        </Link>
        <div className="options-container">
          {userId > 0 ? (
            <>
              <Link
                to="/aisee/signin"
                className="option"
                onClick={handleSignOut}
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
