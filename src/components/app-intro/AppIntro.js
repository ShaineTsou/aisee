import { StyledIntroduction } from "./AppIntro.styles";
import PageTitle from "../../components/page-title/PageTitle";
const AppIntro = () => {
  return (
    <>
      <PageTitle>aiSee</PageTitle>
      <StyledIntroduction>
        shows you the hex code, the density and the closest color name in the
        image
      </StyledIntroduction>
    </>
  );
};

export default AppIntro;
