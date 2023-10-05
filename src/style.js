import styled from "styled-components";

export const AppStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: Arial, Helvetica, sans-serif;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    max-width: 90%;

    border: solid 1px;
    border-radius: 6px;

    padding: 40px 20px;

    span {
      color: red;
    }

    button {
      cursor: pointer;
      font-size: 22px;
      padding: 10px;
      background-color: rgba(58, 144, 247, 0.7);
      color: white;
      border: solid 2px transparent;
      border-radius: 6px;
    }

    button:hover {
      background-color: rgba(58, 144, 247, 1);
      border: solid 2px rgba(14, 119, 246, 1);
    }
  }
`;
