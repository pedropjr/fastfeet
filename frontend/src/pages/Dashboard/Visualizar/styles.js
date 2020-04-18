import styled from 'styled-components';

export const CloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  cursor: pointer;
`;

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
  justify-content: space-evenly;
  box-shadow: 0 0 0 3000px rgba(0, 0, 0, 0.6);

  div {
    h1 {
      font-weight: bold;
      font-size: 20px;
      color: #333;
      padding-bottom: 10px;
    }

    strong {
      font-size: 13px;
      color: #333;
      padding-left: 5px;
    }

    span {
      color: #666;
      padding-left: 5px;
    }
  }

  img {
    height: 140px;
    width: 300px;
    padding-left: 20px;
  }

  border-radius: 4px;
  background-color: white;
  padding: 0 20px 30px;

  div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
    padding: 15px 0;
  }

  div:nth-of-type(4) {
    display: flex;
    flex-direction: column;
    padding-top: 15px;
  }
`;
