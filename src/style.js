import styled from "styled-components";

export const AppStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  }
`;
