import { StyledLoader } from "./Loader.styles";
import { ReactComponent as LoaderSvg } from "./loader.svg";

const Loader = () => {
  return (
    <StyledLoader>
      <LoaderSvg className="loader" />
    </StyledLoader>
  );
};

export default Loader;
