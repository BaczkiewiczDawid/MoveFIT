import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { theme } from "./assets/styles/Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
