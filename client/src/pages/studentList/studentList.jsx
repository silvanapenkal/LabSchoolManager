import List from "../../components/list/studentList";
import Filter from "../../components/filter/filter";
import PageWrapper from "../../components/pageWrapper/pageWrapper";
import Button from "../../components/button/button";
import Toolbar from "../../components/toolbar/toolbar";
import useStudentList from "../../hooks/useStudentList";
import { useNavigate } from "react-router-dom";

function StudentList() {
  const navigate = useNavigate();
  const { studentList, error, isLoading, fetchData } = useStudentList();

  return (
    <>
        <PageWrapper>
        <Filter onFilter={fetchData} />

        {isLoading && <h1>Carregando...</h1>}

        {!isLoading && !!error && <p>{error}</p>}

        {!isLoading && !error && !!studentList.length && <List list={studentList} />}

        {!isLoading && !error && !studentList.length && (
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
