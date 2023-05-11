import PropTypes from "prop-types";
import { StyledPage } from "./styles";
import Toolbar from "../toolbar/toolbar";
import { useAuthenticationContext } from "../../hooks/useAuthentication";
import { Link, useNavigate } from "react-router-dom";

function PageWrapper({ children }) {
  const {user} = useAuthenticationContext();

  return (
    <StyledPage>
    {(!user) && (<Link to="/login">Faça o Login</Link>) }
    {user &&
      <StyledPage className="pageWrapperContainer"><Toolbar/>{children}</StyledPage>
    }
    </StyledPage>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
