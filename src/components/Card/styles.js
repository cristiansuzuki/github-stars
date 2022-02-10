import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  margin-top: 3%;
  border: 0.5px solid;
  border-radius: 12px;
  display: flex;
  height: 750px;
  width: 700px;
  background: transparent;
`;

export const Text = styled.text`
  margin: auto;
  align-self: center;
  color: ${(props) => props.theme.colors.text};
`;
