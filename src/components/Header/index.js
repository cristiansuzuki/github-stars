import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { Container, ButtonBack } from "./styles";
import { useNavigate } from "react-router-dom";

function Header({ toggleTheme }) {
  const navigate = useNavigate();
  // Pega as cores e o titulo do tema
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <ButtonBack
        onClick={(event) => {
          event.preventDefault();
          // Redireciona para a rota /main/:username
          navigate("/");
        }}
      >
        Home
      </ButtonBack>
      <h1>GitHub Stars</h1>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              color: "orange",
              paddingRight: 2,
            }}
          >
            🌜
          </div>
        }
        uncheckedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              color: "orange",
              paddingRight: 2,
            }}
          >
            🌞
          </div>
        }
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={shade(0.15, colors.primary)}
      />
    </Container>
  );
}

export default Header;
