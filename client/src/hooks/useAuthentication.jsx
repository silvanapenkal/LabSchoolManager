import { createContext, useContext, useState } from "react";
import useUserRegister from "./useUserRegister";
import { useNavigate } from "react-router-dom";

const AuthenticationContext = createContext({});

export function useAuthenticationContext() {
  return useContext(AuthenticationContext);
}

// eslint-disable-next-line react/prop-types
export const AuthenticationProvider = ({ children }) => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const {postRequest} = useUserRegister();


  const login = async (email, password) => {
    const data = await postRequest("/login", {email, password})
    if (data) {
      setUser({id: data.user.id, name: data.user.name})
      localStorage.setItem("token",data.accessToken)
      navigate('/register')
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <AuthenticationContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
