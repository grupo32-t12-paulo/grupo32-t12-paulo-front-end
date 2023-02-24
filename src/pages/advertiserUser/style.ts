import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    180deg,
    rgba(69, 41, 230, 1) 15%,
    rgba(248, 249, 250, 1) 15%
  );

  .action {
    display: none;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: var(--Heading-2-600);
    margin: 20px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    overflow-x: scroll;
    gap: 30px;
    margin: 0px 20px;
  }

  li {
    list-style: none;
  }

  @media (min-width: 769px) {
    background: linear-gradient(
      180deg,
      rgba(69, 41, 230, 1) 15%,
      rgba(248, 249, 250, 1) 15%
    );
  }

  .action,
  h2 {
    display: flex;
    margin: 6vw;
  }

  ul {
    gap: 20px;
    margin: 0px 50px;
  }
`;

export const CardInfor = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
`;

export const ActionCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;
  margin: 40px 20px;
  overflow-x: scroll;
`;
