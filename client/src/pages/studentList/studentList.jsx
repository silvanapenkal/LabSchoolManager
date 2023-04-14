import List from "../../components/list/list";
import Filter from "../../components/filter/filter";
import PageWrapper from "../../components/pageWrapper/pageWrapper";
import Button from "../../components/button/button";
import Toolbar from "../../components/toolbar/toolbar";
import useList from "../../hooks/useList";
import { useNavigate } from "react-router-dom";

function StudentList() {
  const navigate = useNavigate();
  const { data, error, isLoading } = useList();
  console.log(error)
  console.log(isLoading)
  console.log(data)
  return (
    <>
      <Toolbar />
      <PageWrapper>
        <Filter />

        {isLoading && <h1>Carregando...</h1>}

        {!isLoading && !!error && <p>{error}</p>}

        {!isLoading && !error && !!data.length && <List list={data} />}

        {!isLoading && !error && !data.length && (
          <h1>Nenhum aluno cadatrado</h1>
        )}

        <Button type="button" onClick={() => navigate("/student")}>
          Cadastrar aluno
        </Button>
      </PageWrapper>
    </>
  );
}

export default StudentList;
