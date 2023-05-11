import UserRegister from "./pages/userRegister/userRegister";
import Login from "./pages/login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthenticationProvider } from "./hooks/useAuthentication";
import StudentRegister from "./pages/studentRegister/studentRegister";
import AccompanimentRegister from "./pages/accompanimentRegister/accompanimentRegister";
import StudentList from "./pages/studentList/studentList";
import AccompanimentListPage from "./pages/accompanimentListPage/accompanimentListPage";
import AccompanimentEditPage from "./pages/accompanimentEditPage/accompanimentEditPage";
import UserAccompanimentListPage from "./pages/home/home";
import NotFound from "./pages/pageNotFound/pageNotFound";

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/student" element={<StudentRegister />} />
            <Route path="/accompaniment" element={<AccompanimentRegister />} />
            <Route path="/home" element={<UserAccompanimentListPage />} />
            <Route path="/alunos" element={<StudentList />} />
            <Route
              path="/acompanhamentos"
              element={<AccompanimentListPage />}
            />
            <Route
              path="/accompaniments/:id"
              element={<AccompanimentEditPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
