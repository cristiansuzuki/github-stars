import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const BoxOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: {
    xs: "column",
    sm: "row",
  }
  width: 100%;
  max-width: 700px;
  border-radius: 5px;
  padding: 32px;
  margin: 16px;
  box-shadow: 0 2px 10px 0 rgb(0, 0, 0, 20%);
  background-color: #fff;
`;

export const BoxTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: {
    xs: 100%,
    sm: 50%,
  }
  text-align: center;
  margin-bottom: 32px;
`;

export const Title = styled.text`
  font-size: 24px;
  margin-bottom: 32px;
  color: ${(props) => props.theme.colors.text};
`;

export const TextInput = styled.input`
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 3px;
  border: 1px solid;
  color: #e4e7eb;
  margin: 0 1em;
  padding: 0.25em 1em;
  background-color: #007a33;
`;

export const Logo = styled.img``;
