import { lighten } from 'polished';
import styled from 'styled-components';

export const TableContainer = styled.div`
  min-width: 773px;
  display: block;

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
        td:nth-of-type(1) {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        td:nth-of-type(4) {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
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

      img {
        height: 50px;
        border-radius: 50%;
      }
    }
  }
`;
