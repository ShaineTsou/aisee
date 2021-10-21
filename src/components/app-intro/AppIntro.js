import { Link } from "react-router-dom";
import { StyledIntroduction, StyledSuggestion } from "./AppIntro.styles";
import PageTitle from "../../components/page-title/PageTitle";
const AppIntro = ({ isSignin }) => {
  return (
    <>
      <PageTitle>aiSee</PageTitle>
      <StyledIntroduction>
        shows you the hex code, the density and the closest color name in the
        image
      </StyledIntroduction>
      <StyledSuggestion>
        <Link to="signin">{isSignin ? "" : "Sign in/up to save results!"}</Link>
      </StyledSuggestion>
    </>
  );
};

export default AppIntro;
