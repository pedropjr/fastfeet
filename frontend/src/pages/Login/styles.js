import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(-45deg, #8459c1, #7159c1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  max-width: 315px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  img {
    width: 240px;
    align-self: center;
    margin-top: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 30px 30px;
    align-items: center;

    span {
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      color: #666;
      align-self: flex-start;
    }

    input {
      border: 1px solid #c9c9c9;
      border-radius: 4px;
      height: 35px;
      padding: 20px 20px;
      color: #666;
      width: 100%;
      margin: 10px 0 20px 0;
    }

    button {
      border: 0;
      border-radius: 4px;
      background: #7159c1;
      width: 100%;
      height: 40px;
      color: #fff;
      font-weight: bold;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.04, '#7159c1')};
      }
    }
  }
`;
