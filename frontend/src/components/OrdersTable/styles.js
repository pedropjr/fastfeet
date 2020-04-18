import styled from 'styled-components';
import { lighten } from 'polished';

export const TableContainer = styled.div`
  min-width: 773px;
  display: block;
  pointer-events: ${(props) => (props.windowVisibility ? 'none' : 'all')};

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;

    th {
      text-align: left;
      color: #333;
      font-size: 18px;
    }

    th,
    td {
      padding: 10px 15px;
    }

    tbody {
      tr:hover {
        cursor: pointer;
        background-color: ${lighten(0.3, '#7159c1')};
      }

      tr {
        background: #fff;
        height: 70px;
        td:nth-of-type(1) {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        td:nth-of-type(7) {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }

        td:nth-of-type(3) {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        img {
          margin-right: 5px;
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }
      }
    }

    td {
      font-size: 15px;
      color: #666;

      button {
        font-weight: bold;
        font-size: 20px;
        background-color: transparent;
        border: 0;
        color: #666;
      }
    }
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.backgroundColor};
  width: 120px;
  height: 25px;
  border-radius: 25px;

  span {
    font-size: 12px;
    font-weight: bold;
    margin-left: 5px;
    color: ${(props) => props.circleColor};
  }
`;
