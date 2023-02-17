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
  padding: 10px 10px 0px 10px;

  background-color: var(--whiteFixed);
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;

  h2 {
    font-size: 1rem;
    font-weight: var(--Heading-3-500);
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
  padding: 10px;

  .cancel-saveEdition {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    height: 80px;
  }

  .buttonCancel {
    width: 120px;
    height: 40px;
    background-color: var(--grey6);
    font-weight: var(--button-medium-text);
  }

  .buttonSaveEdition {
    width: 150px;
    height: 40px;
    background-color: var(--brand1);
    color: var(--whiteFixed);
    font-weight: var(--button-medium-text);
  }

  @media (min-width: 769px) {
    .cancel-saveEdition {
      justify-content: right;
      gap: 10px;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 64vh;

  h3 {
    font-size: 0.8rem;
    text-align: left;
    font-weight: var(--Heading-3-500);
    margin-bottom: 30px;
  }

  label {
    text-align: left;
    font-size: 0.8rem;
    font-weight: var(--input-label);
    margin-bottom: 4px;
  }

  input,
  textarea {
    width: 280px;
    height: 40px;

    margin-bottom: 30px;
    border: 1px solid var(--grey4);

    font-size: 0.8rem;
    font-weight: var(--input-placeholder);
  }

  textarea {
    min-height: 100px;
    resize: none;
  }

  @media (min-width: 769px) {
    height: 50vh;
    input,
    textarea {
      margin-bottom: 20px;
      width: 340px;
      height: 40px;
    }
  }
`;
