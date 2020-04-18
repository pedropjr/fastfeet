import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  padding: 50px 500px;

  span {
    color: #333;
    font-weight: bold;
    font-size: 15px;
  }
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
      border-radius: 4px;
      width: 100px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button:nth-of-type(1) {
      background: #c2c2c2;
      margin-right: 20px;

      &:hover {
        background: ${darken(0.1, '#999')};
      }
    }

    button:nth-of-type(2) {
      background: #7159c1;

      &:hover {
        background: ${lighten(0.1, '#7159c1')};
      }
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 30px 20px;
  border-radius: 4px;
  margin-top: 30px;

  label {
    color: #333;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
  }

  input {
    height: 40px;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    padding-left: 8px;
    color: #666;
    font-size: 16px;
  }
`;

export const InputContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;

  div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    flex: 2;
    margin-right: 20px;
  }

  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 20px;
  }

  div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const InputContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;

  div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    flex: 2;
    margin-right: 20px;
  }

  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 20px;
  }

  div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;
