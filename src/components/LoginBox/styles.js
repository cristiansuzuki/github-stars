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
  alignItems: center;
  justifyContent: space-between;
  flex-direction: {
    xs: "column",
    sm: "row",
  }
  width: 100%;
  maxWidth: 700px;
  borderRadius: 5px;
  padding: 32px;
  margin: 16px;
  boxShadow: 0 2px 10px 0 rgb(0, 0, 0, 20%);
  backgroundColor: #fff;
`;

export const BoxTwo = styled.div`
  display: flex;
  flexdirection: column;
  alignItems: center;
  justifyContent: center;
  width: {
    xs: 100%,
    sm: 50%,
  }
  textAlign: center;
  marginBottom: 32px;
`;

export const Title = styled.text`
  marginbottom: 32px;
  color: ${(props) => props.theme.colors.text};
`;

export const TextInput = styled.input`
  type: text;
`;

export const Button = styled.button`
  type: submit;
`;
