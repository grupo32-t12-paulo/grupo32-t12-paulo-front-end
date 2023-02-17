import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 350px;
  height: 320px;

  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  gap: 20px;

  img {
    width: 80px;
    height: 80px;

    margin: 20px 0px 0px 0px;
    border-radius: 50%;

    background-color: var(--brand1);
    color: var(--whiteFixed);
  }

  h2 {
    font-size: 1rem;
    font-weight: var(--Heading-2-600);
  }

  p {
    padding: 0px 30px;
    text-align: justify;
    font-size: 0.8rem;
    font-weight: var(--body-1-400);
  }

  button {
    width: 220px;
    height: 40px;

    font-weight: var(--button-big-text);

    background-color: var(--grey0);
    color: var(--whiteFixed);
  }
`;
