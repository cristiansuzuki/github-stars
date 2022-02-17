import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: #007a33;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const ButtonBack = styled.button`
  width: 5%;
  border-radius: 8px;
  border: 0.5px solid;
  color: ${(props) => props.theme.colors.text};
  padding: 10px;
  background-color: #007a33;
  :hover {
    transition: 0.2s ease-in-out;
    background-color: #00a853;
    cursor: pointer;
  }
`;
