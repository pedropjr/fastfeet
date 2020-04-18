import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 400px;
  height: 400px;
  display: ${(props) => (props.windowVisibility ? 'flex' : 'none')};
  flex-direction: column;
  box-shadow: 0 0 0 3000px rgba(0, 0, 0, 0.6);
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;

  svg {
    padding-top: 5px;
    cursor: pointer;
    color: red;
    transition: color 0.2s;
    align-self: flex-end;

    &:hover {
      color: ${darken(0.3, 'red')};
    }
  }

  div {
    padding-top: 20px;

    h1 {
      font-size: 15px;
      color: #333;
    }
  }

  span {
    color: #666;
  }
`;
