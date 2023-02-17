import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
  height: 100vh;
  overflow-y: scroll;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 20px;
  gap: 6px;

  h2 {
    font-weight: var(--Heading-3-500);
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  h3 {
    font-weight: var(--Heading-3-500);
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  label {
    text-align: left;
    font-weight: var(--input-label);
    font-size: 0.8rem;
    margin-bottom: 2px;
  }

  input,
  textarea {
    width: 280px;
    height: 40px;

    font-size: 0.8rem;
    font-weight: var(--input-placeholder);
    margin-bottom: 20px;
    border: 1px solid var(--grey4);
  }

  textarea {
    height: 80px;
    margin-bottom: 20px;
    resize: none;
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
  }

  .state,
  .city,
  .complement,
  .number {
    width: 134px;
  }

  .button-buyer-advertiser {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .button-buyer {
    width: 120px;
    height: 40px;
    font-weight: var(--button-medium-text);
    background-color: var(--brand1);
    color: var(--whiteFixed);
  }

  .button-advertiser {
    width: 120px;
    height: 40px;
    border: 1px solid var(--grey4);
    background-color: var(--whiteFixed);
    font-weight: var(--button-medium-text);
  }

  .buttonRegister {
    width: 280px;
    height: 40px;
    font-weight: var(--button-big-text);
    background-color: var(--brand1);
    color: var(--whiteFixed);
    margin-top: 20px;
  }
`;
