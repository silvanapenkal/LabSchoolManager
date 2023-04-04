import Button from "../button/button";
import Logo from "../logo/logo";
import { ButtonDiv, LineDiv, StyledDiv, ToolBarDiv } from "./styles";

function Toolbar() {
  return (
    <ToolBarDiv className='toolbar'>
      <LineDiv>
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
        <h4>Silvana Penkal Santos</h4>
      </LineDiv>
    </ToolBarDiv>
  );
}

export default Toolbar;
