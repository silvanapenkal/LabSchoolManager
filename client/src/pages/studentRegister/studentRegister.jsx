import Button from "../../components/button/button";
import Input from "../../components/input/input";
import PageWrapper from "../../components/pageWrapper/pageWrapper";
import { ButtonDiv, StyledCard, StyledForm } from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useUserRegister from "../../hooks/useUserRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  grade: yup.number("Deve ser um número").required("Campo obrigatório"),
  birthDate: yup.string().required("Campo obrigatório"),
  cpf: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
});

function StudentRegister() {
  // eslint-disable-next-line no-unused-vars
  const [content, setContent] = useState({ value: "", error: "" });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      grade: "",
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
    const token = localStorage.getItem("token");
    postRequest('/students', {Headers: {Authorization: `Bearer ${token}`}, Body: {data}});
    navigate("/home");
  };

  return (
    <PageWrapper>
      <StyledCard>
        <h1 className="register-page-section-title">Cadastro de Aluno</h1>
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
            labelText="Nota"
            type="number"
            helperText={errors?.email?.message}
            {...register("grade")}
          />     
          <ButtonDiv>
            <Button type="submit" onSubmit={handleSubmit(onSubmit)}>Cadastrar</Button>
            <Button type="button" onClick={() => navigate("/home")}>
              Cancelar
            </Button>
          </ButtonDiv>
        </StyledForm>
      </StyledCard>
    </PageWrapper>
  );
}

export default StudentRegister;
