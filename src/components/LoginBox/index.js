import React, { useState, useContext } from "react";
import gitdark1 from "../../assets/gitdark1.svg";
import gitlight1 from "../../assets/gitlight1.svg";
import { ThemeContext } from "styled-components";

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
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <BoxOne>
        <BoxTwo>
          {title === "dark" ? (
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
