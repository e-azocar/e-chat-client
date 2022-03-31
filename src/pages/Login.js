import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthButton, AuthInput } from "../components/Auth";
import {
  LoginCard,
  LoginContainer,
  LoginForm,
  LoginTitle,
} from "../components/Login/Login.styled";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      return toast.error("Todos los campos son requeridos");
    }

    const res = await login({ username, password });

    if (res.error) {
      setPassword("");
      return toast.error(res.message);
    }

    return navigate("/");
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginForm onSubmit={submitHandler}>
          <LoginTitle>Inicio de sesión</LoginTitle>
          <AuthInput
            placeholder="Nombre de usuario"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <AuthInput
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AuthButton>Iniciar sesión</AuthButton>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
