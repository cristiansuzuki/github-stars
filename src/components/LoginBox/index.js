import React from "react";
import gitdark from "../../assets/gitdark.svg";
import gitlight from "../../assets/gitlight.svg";
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
  return (
    <Container>
      <BoxOne>
        <BoxTwo>
          <Logo src={gitdark} />
          <Title>Login</Title>
          <TextInput type="text" placeholder="Usuário do GitHub" />
          <Button> Entrar </Button>
        </BoxTwo>
      </BoxOne>
    </Container>
  );
}

export default LoginBox;
