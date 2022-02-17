import React, { useState, useContext, useEffect } from "react";
import gitdark1 from "../../assets/gitdark1.svg";
import gitlight1 from "../../assets/gitlight1.svg";
import { ThemeContext } from "styled-components";
import { useNavigate } from "react-router-dom";

import { Container, BoxOne, BoxTwo, TextInput, Button, Logo } from "./styles";

function LoginBox() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <BoxOne>
        <BoxTwo
          as="form"
          onSubmit={(event) => {
            event.preventDefault();
            // Redireciona para a rota /main/:username
            navigate(`/main/${username}`);
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
              setUsername(event.target.value);
            }}
          />
          <Button disabled={!username} type="submit">
            Entrar
          </Button>
        </BoxTwo>
      </BoxOne>
    </Container>
  );
}

export default LoginBox;
