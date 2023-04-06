import { useAuthenticationContext } from "../../hooks/useAuthentication";
import Button from "../button/button";
import Logo from "../logo/logo";
import { ButtonDiv, StyledDiv, ToolBarDiv } from "./styles";

function Toolbar() {
  const { user } = useAuthenticationContext();
  return (
    <ToolBarDiv>
        <StyledDiv>
          <Logo />
          <ButtonDiv>
            <Button>
              <img
                src="../../src/assets/student.svg"
                aria-label="alunos"
                width="32px"
              />
            </Button>
            <Button>
              <img
                src="../../src/assets/accompaniment.svg"
                aria-label="acompanhamento pedagógico"
                width="32px"
              />
            </Button>
            <Button>
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
