import { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContainer, AppContainerWrapper } from "./components/Global";
import { AuthContext } from "./context/authContext";
import Home from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const { getUser, user } = useContext(AuthContext);

  useEffect(() => {
    getUser();
    console.log(user);
  }, []);

  return (
    <AppContainerWrapper>
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </AppContainerWrapper>
  );
};

export default App;
