import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img,
    svg {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-style: dashed;
    }

    svg {
      border-radius: 0;
    }
    input {
      display: none;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        color: #999;
        font-size: 15px;
      }
    }
  }
`;
