import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  padding: 50px 500px;
  min-width: 980px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  span {
    font-weight: bold;
    font-size: 15px;
    color: #333;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
  padding: 40px 30px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #333;
    font-size: 25px;
  }

  div {
    display: flex;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 40px;
      border: 0;
      border-radius: 4px;
      padding-right: 6px;
    }

    button {
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      background: none;
      border: 0;
    }
  }
`;

export const BackContainer = styled.div`
  background: #c2c2c2;
  margin-right: 20px;

  &:hover {
    background: ${darken(0.1, '#999')};
    cursor: pointer;
  }
`;

export const SaveContainer = styled.div`
  background: #7159c1;

  &:hover {
    background: ${lighten(0.1, '#7159c1')};
    cursor: pointer;
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
    color: #666;
    font-size: 14px;
  }
`;
