import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 150px;

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

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 95%;
  left: 50%;

  span {
    font-size: 25px;
    color: #7159c1;
  }
`;

export const PageButton = styled.button`
  background: none;
  border: 0;
`;
