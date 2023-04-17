import AccompanimentList from "../../components/list/accompanimentList";
import PageWrapper from "../../components/pageWrapper/pageWrapper";
import Toolbar from "../../components/toolbar/toolbar";
import useAccompanimentList from "../../hooks/useAccompanimentList";
import { useAuthenticationContext } from "../../hooks/useAuthentication";
import { useEffect } from "react";

function UserAccompanimentListPage() {
  const userId  = localStorage.getItem("userId")
  const { data, isLoading, error, getUserAccompaniments } =
    useAccompanimentList();

  useEffect(() => {
    getUserAccompaniments(userId);
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

      </PageWrapper>
    </>
  );
}

export default UserAccompanimentListPage;
