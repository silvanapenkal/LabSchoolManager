import Button from "../../components/button/button";
import Input from "../../components/input/input";
import PageWrapper from "../../components/pageWrapper/pageWrapper";
import { ButtonDiv, StyledCard, StyledForm } from "./styles";
import { useForm } from "react-hook-form";
import useUserRegister from "../../hooks/useUserRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/logo";

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Deve ser um e-mail").required("Campo obrigatório"),
  birthDate: yup.string().required("Campo obrigatório"),
  cpf: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório").min(8),
  phone: yup.string().required("Campo obrigatório"),
});

function UserRegister() {
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
      birthDate: "",
      cpf: "",
    },
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line no-unused-vars
  const { isSubmitting, postRequest } = useUserRegister();

  const onSubmit = (data) => {
    postRequest("/register", data);
    navigate("/login");
  };

  return (
    <PageWrapper>
      <Logo />
      <StyledCard>
        <h1 className="register-page-section-title">Cadastro de usuário</h1>
        <StyledForm id="register-user-form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelText="Nome"
            placeholder="Digite seu nome"
            helperText={errors?.name?.message}
            {...register("name")}
          />
          <Input
            labelText="Telefone"
            placeholder="Digite seu telefone"
            helperText={errors?.phone?.message}
            {...register("phone")}
          />
          <Input
            labelText="Data de nascimento"
            type="date"
            helperText={errors?.birthDate?.message}
            {...register("birthDate")}
          />
          <Input
            labelText="CPF"
            type="cpf"
            helperText={errors?.cpf?.message}
            {...register("cpf")}
          />
          <Input
            labelText="E-mail"
            type="email"
            helperText={errors?.email?.message}
            {...register("email")}
          />
          <Input
            labelText="Senha"
            type="password"
            helperText={errors?.password?.message}
            {...register("password")}
          />
          <Input
            labelText="Confirme a senha"
            type="password"
            helperText={errors?.password?.message}
            {...register("passwordConfirmation")}
          />
          <ButtonDiv>
            <Button type="submit">Cadastrar</Button>
            <Button type="button" onClick={() => navigate("/login")}>
              Cancelar
            </Button>
          </ButtonDiv>
        </StyledForm>
      </StyledCard>
    </PageWrapper>
  );
}

export default UserRegister;
