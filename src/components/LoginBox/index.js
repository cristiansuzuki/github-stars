import React from "react";
import { Container, BoxOne, BoxTwo, Title, TextInput, Button } from "./styles";

function LoginBox() {
  return (
    <Container>
      <BoxOne>
        <BoxTwo>
          <Title>Login</Title>
          <TextInput placeholder="Usuário" />
          <Button />
        </BoxTwo>
      </BoxOne>
    </Container>
  );
}

export default LoginBox;
