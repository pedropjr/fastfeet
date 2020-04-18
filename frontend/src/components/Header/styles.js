import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #c2c2c2;
  height: 60px;
  background-color: #fff;
  min-width: 875px;
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    border-right: 1px solid #eee;
    margin: 20px 30px;
    padding-right: 30px;
  }
`;

export const NavLinkCustom = styled(NavLink).attrs(() => ({
  activeStyle: { color: '#7159c1' },
}))`
  font-weight: bold;
  color: #999;

  & + a {
    margin-left: 20px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px 0 0;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 14px;
    color: #666;
  }

  button {
    border: 0;
    background-color: #fff;
    font-weight: normal;
    color: red;
    font-size: 12px;
    padding-top: 5px;
    transition: all 0.3s;
    transition-property: color, font-weight;

    &:hover {
      color: ${darken(0.2, 'red')};
      font-weight: bold;
    }
  }
`;
