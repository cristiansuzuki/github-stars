import React, { useState, useContext } from "react";
import gitdark1 from "../../assets/gitdark1.svg";
import gitlight1 from "../../assets/gitlight1.svg";
import { ThemeContext } from "styled-components";
import { apiGithub } from "../../services/api";

import { Container, BoxOne, BoxTwo, TextInput, Button, Logo } from "./styles";

function LoginBox() {
  const [username, setUsername] = useState("");
  const [userValido, setUserValido] = useState(false);
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <BoxOne>
        <BoxTwo
          as="form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          {title === "dark" ? (
            <Logo src={gitdark1} />
          ) : (
            <Logo src={gitlight1} />
          )}

          <TextInput
            type="text"
            placeholder="Usuário do GitHub"
            onChange={(event) => {
              const valor = event.target.value;
              console.log(valor);
              fetch(`${apiGithub}${valor}`, { method: "GET" }).then(
                (retorno) => {
                  if (retorno.status === 200) {
                    console.log("STATUS 200 !!!");
                    setUsername(valor);
                    setUserValido(true);
                  } else if (retorno.status === 404) {
                    setUserValido(false);
                  }
                }
              );
            }}
          />
          <Button type="submit"> Entrar </Button>
        </BoxTwo>
      </BoxOne>
    </Container>
  );
}

export default LoginBox;
