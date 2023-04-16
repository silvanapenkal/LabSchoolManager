import Button from "../../components/button/button";
import Input from "../../components/input/input";
import PageWrapper from "../../components/pageWrapper/pageWrapper";
import { ButtonDiv, StyledCard, StyledForm } from "./styles";
import { useForm } from "react-hook-form";
import useAccompanimentDetails from "../../hooks/useAccompanimentDetails";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup.object().shape({
  studentId: yup.number().required("Campo obrigatório"),
  userId: yup.number("Deve ser um número").required("Campo obrigatório"),
  date: yup.string().required("Campo obrigatório"),
  title: yup.string().required("Campo obrigatório"),
  description: yup.string(),
  finished: yup.boolean().required("Campo obrigatório"),
});

function AccompanimentEditPage() {

  const {id} = useParams()

  const navigate = useNavigate();

  const { data, accompanimentPut } = useAccompanimentDetails(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
        studentId:"",
        userId: "",
        date: "",
        title: "",
        description: "",
        finished: ""
    },
    values: {
      studentId: data?.studentId,
      userId: data?.userId,
      date: data?.date,
      title: data?.title,
      description: data?.description,
      finished: data?.finished
  },
    resolver: yupResolver(schema),
  });

  console.log("data fora", data)

  const onSubmit = (data) => {
    data.id= id
    console.log("id: ",id)
    console.log("data: ",data)
    accompanimentPut(data);
    navigate("/home");
  };

  return (
    <PageWrapper>
      <StyledCard>
        <h1 className="register-page-section-title">Dados do atendimento</h1>
        <StyledForm id="register-user-form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelText="Id do estudante"
            helperText={errors?.studentId?.message}
            {...register("studentId")}
          />
          <Input
            labelText="Id do pedagogo"
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
            labelText= "Título do atendimento"
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
          <p> Atendimento finalizado
          <Input
            type="checkbox"
            {...register("finished")}
          />
          </p> 
          <ButtonDiv>
            <Button type="submit" >Atualizar</Button>
            <Button type="button" onClick={() => navigate("/acompanhamentos")}>
              Cancelar
            </Button>
          </ButtonDiv>
        </StyledForm>
      </StyledCard>
    </PageWrapper>
  );
}

export default AccompanimentEditPage;