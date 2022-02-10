import React, { Component, useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { Container } from "./styles";

function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      Hello W0rld !
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
}

export default Header;
