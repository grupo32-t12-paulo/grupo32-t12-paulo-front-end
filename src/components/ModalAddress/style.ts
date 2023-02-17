import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  gap: 16px;

  background-color: #212529c7;
  border-radius: 4px;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
  padding: 10px 10px 20px 10px;

  background-color: var(--whiteFixed);
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  h3 {
    font-size: 0.8rem;
    text-align: left;
    font-weight: var(--Heading-3-500);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1rem;
    font-weight: 600;
  }

  .buttonExit {
    width: 40px;
    height: 40px;

    background-color: var(--whiteFixed);
    border: none;

    font-size: 1.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    text-align: left;
    font-size: 0.8rem;
    font-weight: var(--input-label);
    margin-bottom: 4px;
  }

  input {
    width: 280px;
    height: 40px;

    margin-bottom: 40px;
    border: 1px solid var(--grey4);
    font-size: 0.8rem;
    font-weight: var(--input-placeholder);
  }

  .state-city,
  .number-complement {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .divState,
  .divCity,
  .divNumber,
  .divComplement {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .state,
  .city,
  .complement,
  .number {
    width: 134px;
  }

  .button-cancel-save {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .buttonCancel {
    width: 120px;
    height: 40px;
    background-color: var(--grey6);
    font-weight: var(--button-medium-text);
  }

  .buttonSave {
    width: 140px;
    height: 40px;
    background-color: #4529e6;
    color: var(--whiteFixed);
    font-weight: var(--button-medium-text);
  }

  @media (min-width: 769px) {
    input {
      width: 400px;
      margin-bottom: 30px;
    }

    .state,
    .city,
    .complement,
    .number {
      width: 196px;
    }

    .button-cancel-save {
      display: flex;
      flex-direction: row;
      justify-content: right;
      gap: 10px;
    }
  }
`;
