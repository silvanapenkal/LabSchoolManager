import AccompanimentList from "../../components/list/accompanimentList";
import Filter from "../../components/filter/filter";
import PageWrapper from "../../components/pageWrapper/pageWrapper";
import Button from "../../components/button/button";
import Toolbar from "../../components/toolbar/toolbar";
import useAccompanimentList from "../../hooks/useAccompanimentList";
import { useNavigate } from "react-router-dom";

function AccompanimentListPage() {
  const navigate = useNavigate();
  const { data, error, isLoading, fetchData } = useAccompanimentList();

  return (
    <>
      <Toolbar />
      <PageWrapper>
        <Filter onFilter={fetchData} />

        {isLoading && <h1>Carregando...</h1>}

        {!isLoading && !!error && <p>{error}</p>}

        {!isLoading && !error && !!data.length && <AccompanimentList list={data} />}

        {!isLoading && !error && !data.length && (
          <h1>Nenhum atendimento cadatrado</h1>
        )}

        <Button type="button" onClick={() => navigate("/home")}>
          Voltar
        </Button>
      </PageWrapper>
    </>
  );
}

export default AccompanimentListPage;