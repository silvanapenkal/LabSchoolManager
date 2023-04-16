import { useAuthenticationContext } from "../../hooks/useAuthentication";
import Button from "../button/button";
import Logo from "../logo/logo";
import { ButtonDiv, StyledDiv, ToolBarDiv } from "./styles";
import { useNavigate } from "react-router-dom";


function Toolbar() {
  const { user, logout } = useAuthenticationContext();
  const navigate = useNavigate();


  return (
    <ToolBarDiv>
        <StyledDiv>
          <Logo type="button" onClick={() => navigate('/home')}/>
          <ButtonDiv>
            <Button type="button" onClick={() => navigate('/alunos')}>
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
        <h4>{user?.name}</h4>
    </ToolBarDiv>
  );
}

export default Toolbar;
