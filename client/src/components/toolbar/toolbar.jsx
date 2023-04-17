import { useAuthenticationContext } from "../../hooks/useAuthentication";
import Button from "../button/button";
import Logo from "../logo/logo";
import { ButtonDiv, StyledDiv, ToolBarDiv } from "./styles";
import { useNavigate } from "react-router-dom";

function Toolbar() {
  const { user, logout } = useAuthenticationContext();
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName")

  return (
    <ToolBarDiv>
      <StyledDiv>
        <Logo />
        <ButtonDiv>
        <Button type="button" onClick={() => navigate("/home")}>
            <img
              src="../../src/assets/home.svg"
              aria-label="home"
              width="32px"
            />
          </Button>
          <Button type="button" onClick={() => navigate("/alunos")}>
            <img
              src="../../src/assets/student.svg"
              aria-label="alunos"
              width="32px"
            />
          </Button>
          <Button type="button" onClick={() => navigate("/acompanhamentos")}>
            <img
              src="../../src/assets/accompaniment.svg"
              aria-label="acompanhamento pedagógico"
              width="32px"
            />
          </Button>
          <Button type="button" onClick={() => logout()}>
            <img
              src="../../src/assets/logout.svg"
              aria-label="sair"
              width="32px"
            />
          </Button>
        </ButtonDiv>
      </StyledDiv>
      <p>Pedagogo: {userName}</p>
    </ToolBarDiv>
  );
}

export default Toolbar;
