import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import PageWrapper from "../../components/pageWrapper/pageWrapper";
import Checkbox from "../../components/checkbox/checkbox";
import Select from "../../components/select/select";
import useAccompanimentDetails from "../../hooks/useAccompanimentDetails";
import usePedagogueList from "../../hooks/usePedagogueList";
import useStudentList from "../../hooks/useStudentList";
import { ButtonDiv, StyledCard, StyledForm } from "./styles";

const schema = yup.object().shape({
  studentId: yup.number().required("Campo obrigatório"),
  userId: yup.number("Deve ser um número").required("Campo obrigatório"),
  date: yup.string().required("Campo obrigatório"),
  title: yup.string().required("Campo obrigatório"),
  description: yup.string(),
  finished: yup.boolean().required("Campo obrigatório"),
});

function AccompanimentEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, accompanimentPut } = useAccompanimentDetails(id);
  const { studentList } = useStudentList();
  const {pedagogueList} = usePedagogueList();

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
      finished: "false",
    },
    values: {
      studentId: data?.studentId,
      userId: data?.userId,
      date: data?.date,
      title: data?.title,
      description: data?.description,
      finished: data?.finished,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    data.id = id;
    accompanimentPut(data);
    navigate("/home");
  };

  return (
    <PageWrapper>
      <StyledCard>
        <h1 className="register-page-section-title">Dados do atendimento</h1>
        <StyledForm id="register-user-form" onSubmit={handleSubmit(onSubmit)}>
        <Select
            id="estudante"
            labelText="Id do estudante"
            placeholder="Selecione"
            inputName = "estudante"
            data = {studentList}
            helperText={errors?.studentId?.message}
            {...register("studentId")}
          ></Select>
          <Select
            id="pedagogo"
            labelText="Id do pedagogo"
            placeholder="Selecione"
            inputName = "pedagogo"
            data = {pedagogueList}
            helperText={errors?.userId?.message}
            {...register("userId")}
          ></Select>
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
          <Checkbox labelText="Concluído" {...register("finished")} />
          <ButtonDiv>
            <Button type="submit">Atualizar</Button>
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
