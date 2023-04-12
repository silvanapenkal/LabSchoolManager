import Button from "../../components/button/button";
import Input from "../../components/input/input";
import PageWrapper from "../../components/pageWrapper/pageWrapper";
import Logo from "../../components/logo/logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthenticationContext } from "../../hooks/useAuthentication";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showEmailHelper, setShowEmailHelper] = useState(false);

  const [password, setPassword] = useState("");
  const [showPasswordHelper, setShowPasswordHelper] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  const handleChangeEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handleChangePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const { login } = useAuthenticationContext();

  const handleLoginAction = async (event) => {
    event.preventDefault();
    setError(null);
    
    setShowEmailHelper(!email);
    setShowPasswordHelper(!password);
    if (!email || !password) {
      return;
    }
    setLoading(true);
    login(email, password);
    setLoading(false);
  };

  return (
    <PageWrapper>
      <Logo />
      <form onSubmit={handleLoginAction}>
        <Input
          labelText="E-mail"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          helperText={showEmailHelper ? "Campo obrigatório" : ""}
        />
        <Input
          labelText="Senha"
          type="password"
          value={password}
          onChange={handleChangePassword}
          helperText={showPasswordHelper ? "Campo obrigatório" : ""}
        />
        <Button>
          Entrar
        </Button>
        <Button type="button" onClick={() => navigate("/register")}>Cadastrar</Button>
      </form>
    </PageWrapper>
  );
}

export default Login;
