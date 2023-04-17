import Button from "../../components/button/button";
import Input from "../../components/input/input";
import PageWrapper from "../../components/pageWrapper/pageWrapper";
import { ButtonDiv, StyledCard, StyledForm, StyledTitle } from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useUserRegister from "../../hooks/useUserRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/checkbox/checkbox"

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
  const inicialDate= new Date().toLocaleDateString("he-il").replace('.', '/').replace('.', '/')
  console.log(inicialDate)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      studentId: "",
      userId: "",
      date: `${inicialDate}`,
      title: "",
      description: "",
      finished: false,
    },
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line no-unused-vars
  const { isSubmitting, postRequest } = useUserRegister();

  const onSubmit = (data) => {
    postRequest("/accompaniments", data);
    navigate("/home");
  };

  return (
    <PageWrapper>
      <StyledCard>
        <StyledTitle className="register-page-section-title">
          Agendamento do atendimento
        </StyledTitle>
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
            type="string"
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
          <Checkbox labelText="Concluído" {...register("finished")} />
          <ButtonDiv>
            <Button type="submit" onSubmit={handleSubmit(onSubmit)}>
              Cadastrar
            </Button>
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
