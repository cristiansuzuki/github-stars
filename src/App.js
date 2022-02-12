import React from "react";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/userPersistedState";
import LoginBox from "./components/LoginBox";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  // Toggle para alterar tema. Light (por default) ou Dark.
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Estilos globais do CSS */}
        <GlobalStyle />
        {/* Passando o toggleTheme para ser recebido no componente Header */}
        <Header toggleTheme={toggleTheme} />
        <LoginBox />
      </div>
    </ThemeProvider>
  );
}

export default App;
