import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 20px;

  * {
    -khtml-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  svg {
    cursor: pointer;
    margin-right: 5px;
  }
`;

export const ButtonList = styled.div`
  position: absolute;
  width: 110px;
  z-index: 1;
  top: calc(100% + 20px);
  left: -45px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #c4c4c4;
  }

  div:nth-of-type(1) {
    padding: 15px 0 5px 10px;
  }

  div:nth-of-type(2) {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 5px 0 5px 10px;
  }
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0 15px 10px;
  color: #999;
  transition: all 0.2s;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &:hover {
    color: #555;
    background: rgba(0, 0, 0, 0.1);
  }

  span {
    font-size: 12px;

    font-weight: bold;
  }
`;
