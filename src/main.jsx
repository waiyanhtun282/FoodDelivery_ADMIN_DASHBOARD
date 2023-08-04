import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NavContextProvider } from "./context/NavProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavContextProvider>
        <App />
      </NavContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
