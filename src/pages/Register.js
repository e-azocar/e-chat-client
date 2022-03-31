import { useState } from "react";
import toast from "react-hot-toast";
import { AuthButton, AuthInput } from "../components/Auth";
import {
  RegisterCard,
  RegisterContainer,
  RegisterForm,
  RegisterTitle,
} from "../components/Register/Register.styled";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()

    if (!username || !password || !name) {
      return toast.error("Todos los campos son requeridos");
    }
  };

  return (
    <RegisterContainer>
      <RegisterCard>
        <RegisterForm onSubmit={submitHandler}>
          <RegisterTitle>Registro</RegisterTitle>
          <AuthInput
            placeholder="Nombre"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <AuthButton>Registrarse</AuthButton>
        </RegisterForm>
      </RegisterCard>
    </RegisterContainer>
  );
};

export default Register;
