import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { StyledIntroduction, StyledSuggestion } from "./AppIntro.styles";
import PageTitle from "../../components/page-title/PageTitle";
const AppIntro = ({ currentUser }) => {
  return (
    <>
      <PageTitle>aiSee</PageTitle>
      <StyledIntroduction>
        shows you the hex code, the density and the closest color name in the
        image
      </StyledIntroduction>
      <StyledSuggestion>
        <Link to="/aisee/signin">
          {currentUser.userId > 0 ? "" : "Sign in/up to save results!"}
        </Link>
      </StyledSuggestion>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(AppIntro);
