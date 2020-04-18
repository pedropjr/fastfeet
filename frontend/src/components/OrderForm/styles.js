import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
  padding: 40px 30px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  span {
    font-weight: bold;
    font-size: 15px;
    color: #333;
  }
`;

export const RecipientContainer = styled.div`
  width: 50%;
  padding-right: 15px;

  @media (max-width: 1200px) {
    width: 100%;
    padding-right: 0;
  }
`;

export const DeliverymanContainer = styled.div`
  width: 50%;
  padding-left: 15px;

  @media (max-width: 1200px) {
    padding-left: 0;
    width: 100%;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  input {
    height: 38px;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    padding-left: 10px;
  }
`;
