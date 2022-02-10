import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { Container } from "./styles";

function Header({ toggleTheme }) {
  // Pega as cores e o titulo do tema
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
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
      <h1>GitHub Stars</h1>
      <h3>Status: online</h3>
    </Container>
  );
}

export default Header;
