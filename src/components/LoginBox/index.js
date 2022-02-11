import React, { useState } from "react";
import gitdark1 from "../../assets/gitdark1.svg";
import gitlight1 from "../../assets/gitlight1.svg";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import { ThemeProvider } from "styled-components";

import {
  Container,
  BoxOne,
  BoxTwo,
  Title,
  TextInput,
  Button,
  Logo,
} from "./styles";

function LoginBox() {
  const [theme, setTheme] = useState(dark);
  return (
    <Container>
      <BoxOne>
        <BoxTwo>
          {console.log(theme)}
          {theme.title === "dark" ? (
            <Logo src={gitdark1} />
          ) : (
            <Logo src={gitlight1} />
          )}

          {/* <Title>Login</Title> */}
          <TextInput type="text" placeholder="Usuário do GitHub" />
          <Button> Entrar </Button>
        </BoxTwo>
      </BoxOne>
    </Container>
  );
}

export default LoginBox;
