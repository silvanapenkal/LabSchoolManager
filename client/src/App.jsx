import Toolbar from "./components/toolbar/toolbar";
import UserRegister from "./pages/userRegister/userRegister";
import Login from "./pages/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthenticationProvider } from "./hooks/useAuthentication";

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/register"
              element={
                <>
                  <UserRegister />
                </>
              }
            />
            <Route path="/student"
            element = {<Toolbar />} />
          </Routes>
        </div>
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
