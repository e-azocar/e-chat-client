import React from "react";
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/authContext";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <Toaster position="top-right" />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
