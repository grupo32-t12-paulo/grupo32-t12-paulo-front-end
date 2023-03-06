import styled from "styled-components";

export const ContainerRoot = styled.div`
  background: linear-gradient(
    180deg,
    rgba(69, 41, 230, 1) 25%,
    rgba(248, 249, 250, 1) 25%
  );

  @media (min-width: 769px) {
    background: linear-gradient(
      180deg,
      rgba(69, 41, 230, 1) 35%,
      rgba(248, 249, 250, 1) 35%
    );
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
