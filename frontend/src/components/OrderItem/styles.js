import styled from 'styled-components';

export const Container = styled.div`
  height: 57px;
  background: #fff;
  border-radius: 4px;
  padding-left: 25px;
  padding-right: 13px;
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr 1fr 1.5fr 1fr 1fr;
  > small {
    font-size: 16px;
    color: #666;
    text-align: left;
    margin: auto 0;
  }
  > section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.backgroundColor};
  width: 110px;
  border-radius: 23px;
  height: 25px;
  align-self: center;
  justify-content: center;
  align-items: center;

  span {
    color: ${(props) => props.fontColor};
    padding-left: 5px;
    font-weight: bold;
  }
`;

export const DeliverymanContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;

  span {
    font-size: 16px;
    color: #666;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
