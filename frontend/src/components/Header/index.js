import React from 'react';
import { useDispatch } from 'react-redux';

import {
  Container,
  LeftContainer,
  RightContainer,
  NavLinkCustom,
} from './styles';
import logo from '../../assets/logo.svg';
import { logOut } from '~/store/modules/user/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logOut());
  }

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt="FastFeet-Logo" />

        <NavLinkCustom to="/orders">ENCOMENDAS</NavLinkCustom>
        <NavLinkCustom to="/deliveryman">ENTREGADORES</NavLinkCustom>
        <NavLinkCustom to="/recipients">DESTINATÁRIOS</NavLinkCustom>
        <NavLinkCustom to="/problems">PROBLEMAS</NavLinkCustom>
      </LeftContainer>
      <RightContainer>
        <span>Admin FastFeet</span>
        <button type="button" onClick={handleLogOut}>
          Sair do sistema
        </button>
      </RightContainer>
    </Container>
  );
}
