import { createContext, useState } from "react";
import { createRequestHandler } from "../lib/api";

export const AuthContext = createContext({});
const api = createRequestHandler();

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = async ({ username, password }) => {
    const res = await api.post("/api/user/login", {
      username,
      password,
    });

    if (res.status === 401) {
      setIsLoggedIn(false);
      return { error: true, message: "Usuario o contraseña incorretos" };
    }

    localStorage.setItem("auth", res.data.token);
    setIsLoggedIn(true);
    setUser(res.data.user);
    return { error: false };
  };

  const register = async ({name, username, password}) => {
    const res = await api.post("/api/user/register", {
      name,
      username,
      password,
    });
  };

  const logout = () => {};

  const getUser = async () => {
    if (localStorage.getItem("auth")) {
      const res = await api.get("/api/user/me");

      if (res.data.error) {
        localStorage.removeItem("auth");
        setUser({});
        return setIsLoggedIn(false);
      }

      setUser(res.data);
      return setIsLoggedIn(true);
    } else {
      setUser({});
      return setIsLoggedIn(false);
    }
  };

  const authContextValue = {
    login,
    register,
    logout,
    getUser,
    isLoggedIn,
    user,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};
