import Button from "../../components/button/button";
import Input from "../../components/input/input";
import PageWrapper from "../../components/pageWrapper/pageWrapper";
import Logo from "../../components/logo/logo";

import { useState } from "react";
import useUserRegister from "../../hooks/useUserRegister";

function Login() {
  const [email, setEmail] = useState("");
  const [showEmailHelper, setShowEmailHelper] = useState(false);

  const [password, setPassword] = useState("");
  const [showPasswordHelper, setShowPasswordHelper] = useState(false);

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

  const handleLoginAction = async () => {
    setError(null);
    setShowEmailHelper(!email);
    setShowPasswordHelper(!password);
    if (!email || !password) {
      return;
    }
    setLoading(true);

    setLoading(false);
  };

  // eslint-disable-next-line no-unused-vars
  const { isSubmitting, registerUser } = useUserRegister();

  return (
    <PageWrapper>
      <Logo />
      <form>
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
        <Button onClick={handleLoginAction} disabled={loading}>
          Entrar
        </Button>
        <Button type="reset">Cadastrar novo usuário</Button>
      </form>
    </PageWrapper>
  );
}

export default Login;
