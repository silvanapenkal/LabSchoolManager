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
  studentId: yup.number().required("Campo obrigatório"),
  userId: yup.number("Deve ser um número").required("Campo obrigatório"),
  date: yup.string().required("Campo obrigatório"),
  title: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  finished: yup.boolean().required("Campo obrigatório"),
});

function AccompanimentRegister() {
  // eslint-disable-next-line no-unused-vars
  const [content, setContent] = useState({ value: "", error: "" });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
        studentId: "",
        userId: "",
        date: "",
        title: "",
        description: "",
        finished: false
    },
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line no-unused-vars
  const { isSubmitting, postRequest } = useUserRegister();

  const onSubmit = (data) => {
    const token = localStorage.getItem("token");    
    postRequest('/accompaniments', {Headers: {Authorization: `Bearer ${token}`}, Body: {data}});
    navigate("/home");
  };

  return (
    <PageWrapper>
      <StyledCard>
        <h1 className="register-page-section-title">Agendamento do atendimento</h1>
        <StyledForm id="register-user-form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelText="Id do estudante"
            placeholder="Digite o id do estudante"
            helperText={errors?.studentId?.message}
            {...register("studentId")}
          />
          <Input
            labelText="Id do pedagogo"
            placeholder="Digite o id do pedagogo"
            helperText={errors?.userId?.message}
            {...register("userId")}
          />
          <Input
            labelText="Data do atendimento"
            type="date"
            helperText={errors?.date?.message}
            {...register("date")}
          />
          <Input
            labelText="Título do atendimento"
            type="string"
            helperText={errors?.title?.message}
            {...register("title")}
          />
          <Input
            labelText="Descrição do atendimento"
            type="string"
            helperText={errors?.description?.message}
            {...register("description")}
          />
          <Input
            labelText="Status do atendimento"
            type="string"
            helperText={errors?.finished?.message}
            {...register("finished")}
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

export default AccompanimentRegister;
