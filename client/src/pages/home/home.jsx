import AccompanimentList from "../../components/list/accompanimentList";
import PageWrapper from "../../components/pageWrapper/pageWrapper";
import Button from "../../components/button/button";
import Toolbar from "../../components/toolbar/toolbar";
import useAccompanimentList from "../../hooks/useAccompanimentList";
import { useNavigate } from "react-router-dom";
import { useAuthenticationContext } from "../../hooks/useAuthentication";
import { useEffect } from "react";

function UserAccompanimentListPage() {
  const navigate = useNavigate();
  const { user } = useAuthenticationContext();
  const { data, isLoading, error, getUserAccompaniments } =
    useAccompanimentList();

  useEffect(() => {
    getUserAccompaniments(user?.id);
  }, []);

  return (
    <>
      <Toolbar />
      <PageWrapper>
        {isLoading && <h1>Carregando...</h1>}

        {!isLoading && !!error && <p>{error}</p>}

        {!isLoading && !error && !!data.length && (
          <AccompanimentList list={data} />
        )}

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

export default UserAccompanimentListPage;
