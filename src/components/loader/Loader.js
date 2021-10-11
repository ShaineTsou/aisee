import { StyledLoader } from "./Loader.styles";
import { ReactComponent as LoaderSvg } from "./loader.svg";

const Loader = ({ loaderHidden }) => {
  return (
    <StyledLoader loaderHidden={loaderHidden}>
      <LoaderSvg className="loader" />
    </StyledLoader>
  );
};

export default Loader;
