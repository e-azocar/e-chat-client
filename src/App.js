import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContainer, AppContainerWrapper } from "./components/Global";
import Home from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
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
