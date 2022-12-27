import React from "react";
import { theme } from "./assets/styles/Theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello world!</h1>
    </ThemeProvider>
  );
}

export default App;
