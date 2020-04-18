import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #333;
    padding-bottom: 20px;
    font-size: 25px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 40px 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #c2c2c2;
  height: 35px;

  svg {
    margin-left: 10px;
  }

  input {
    border: 0;
    padding-left: 15px;
    width: 200px;
    color: #666;

    &::placeholder {
      color: #c2c2c2;
      font-style: italic;
    }
  }
`;

export const ButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #7159c1;
  width: 140px;
  height: 40px;
  border: 0;
  border-radius: 4px;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background-color: ${darken(0.05, '#7159c1')};
  }

  span {
    color: #fff;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    padding-right: 15px;
  }
`;
