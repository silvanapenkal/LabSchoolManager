import Toolbar from "./components/toolbar/toolbar";
import UserRegister from "./pages/userRegister/userRegister";
import Login from "./pages/login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthenticationProvider } from "./hooks/useAuthentication";
import StudentRegister from "./pages/studentRegister/studentRegister";
import AccompanimentRegister from "./pages/accompanimentRegister/accompanimentRegister";
import StudentList from "./pages/studentList/studentList";

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<UserRegister />} />
            <Route
              path="/student"
              element={
                <>
                  <Toolbar />
                  <StudentRegister />
                </>
              }
            />
          <Route
              path="/accompaniment"
              element={
                <>
                  <Toolbar />
                  <AccompanimentRegister />
                </>
              }
            />
            <Route
              path="/home"
              element={
                <>
                  <Toolbar />
                </>
              }
            />
            <Route
              path="/alunos"
              element={
                <>
                  <StudentList />
                </>
              }
            />
          </Routes>
        </div>
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
