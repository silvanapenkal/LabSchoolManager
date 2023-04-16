import Button from "../../components/button/button";
import { StyledDiv } from "./styles";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <StyledDiv>
      <img src="../../src/assets/sad.svg" aria-label="sad" width="52px" />
      <h1>Página não encontrada</h1>
      <Button onClick={() => navigate("/home")}>Voltar para Home</Button>
    </StyledDiv>
  );
}

export default NotFound;
