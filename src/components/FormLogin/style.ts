import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  background-color: var(--whiteFixed);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 20px;
  gap: 8px;
  box-sizing: border-box;

  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    font-weight: var(--Heading-5-500);
    margin-bottom: 20px;
  }

  label {
    text-align: left;
    font-size: 1rem;
    font-weight: var(--input-label);
  }

  input {
    width: 280px;
    height: 40px;

    border: 1px solid var(--grey4);
    margin-bottom: 10px;

    font-weight: var(--input-placeholder);
    font-size: 0.8rem;
  }

  span {
    text-align: right;
    font-size: 0.8rem;
    margin-bottom: 20px;
  }

  button {
    width: 280px;
    height: 40px;
    background-color: var(--brand1);
    color: var(--whiteFixed);
    font-weight: var(--button-medium-text);
    margin-bottom: 20px;
  }

  .cadastrar {
    width: 280px;
    height: 40px;
    border: 2px solid var(--grey3);
    background-color: var(--whiteFixed);
    color: var(--grey0);
    margin-top: 20px;
    font-weight: var(--button-medium-text);
  }

  h3 {
    text-align: center;
    font-size: 0.9rem;
    font-weight: var(--Heading-6-500);
  }
`;
