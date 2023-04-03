import Toolbar from "./components/toolbar/toolbar";
import UserRegister from "./pages/userRegister/userRegister";
import Login from "./pages/login/login";
import { GlobalStateProvider } from "./hooks/useGlobalState";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <GlobalStateProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/register"
              element={
                <>
                  <Toolbar />
                  <UserRegister />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalStateProvider>
  );
}

export default App;
