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
  height: 80vh;
  overflow-y: scroll;

  gap: 16px;
  padding: 10px 10px 20px 10px;

  background-color: var(--whiteFixed);
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1rem;
    font-weight: var(--Heading-2-600);
  }

  .buttonExit {
    width: 40px;
    height: 40px;

    background-color: var(--whiteFixed);
    font-size: 1.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 0.8rem;
    text-align: left;
    font-weight: var(--Heading-5-500);
    margin-bottom: 20px;
  }

  .sale-auction,
  .car-motorcycle,
  .cancel-createContente {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .buttonSale,
  .buttonCar,
  .buttonCreateContente {
    width: 132px;
    height: 40px;
    background-color: var(--brand1);
    color: var(--whiteFixed);
    font-weight: var(--button-medium-text);
  }

  .buttonAuction,
  .buttonMotorcycle {
    width: 132px;
    height: 40px;

    margin-bottom: 20px;

    border: 1px solid var(--grey3);
    background-color: var(--whiteFixed);
    font-weight: var(--button-medium-text);
  }

  .buttonCancel {
    width: 132px;
    height: 40px;
    background-color: var(--button-gray);
    font-weight: var(--button-medium-text);
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

    margin-bottom: 40px;
    border: 1px solid var(--grey4);
    font-size: 0.8rem;
    font-weight: var(--input-placeholder);
  }

  textarea {
    height: 80px;
    resize: none;
  }

  .div-year-mileage {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .divYear,
  .divMileage,
  .divPrice {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .year,
  .mileage {
    width: 134px;
  }

  span {
    background-color: var(--brand4);
    color: var(--brand1);

    text-align: center;
    font-size: 0.8rem;
    font-weight: var(--button-medium-text);
    padding: 12px;

    border-radius: 4px;
    margin-bottom: 30px;
  }

  @media (min-width: 769px) {
    .cancel-createContente {
      justify-content: right;
      gap: 10px;
    }

    .buttonSale,
    .buttonCar {
      width: 160px;
    }

    .buttonCreateContente {
      width: 150px;
    }
    .buttonCancel {
      width: 100px;
    }

    .buttonAuction,
    .buttonMotorcycle {
      width: 160px;

      margin-bottom: 20px;
    }

    input,
    textarea {
      width: 340px;
    }

    .year-mileage-price {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .div-year-mileage {
      gap: 20px;
    }

    .year,
    .mileage,
    .price {
      width: 100px;
    }
    span {
      width: 16vw;
      text-align: start;
      font-size: 0.7rem;
      padding: 12px;
    }
  }
`;
