import Button from "../../components/button/button";
import { StyledDiv, StyledTitle } from "./styles";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <StyledDiv>
      <img src="../../src/assets/sad.svg" aria-label="sad" width="52px" />
      <StyledTitle>Página não encontrada</StyledTitle>
      <Button onClick={() => navigate("/home")}>Voltar para Home</Button>
    </StyledDiv>
  );
}

export default NotFound;
