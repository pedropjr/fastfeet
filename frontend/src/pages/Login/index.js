import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { logInRequest } from '../../store/modules/user/actions';
import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';

export default function Login() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(logInRequest(email, password));
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="FastFeet Logo" />
        <Form onSubmit={handleSubmit}>
          <span>SEU E-MAIL</span>
          <Input type="email" name="email" placeholder="example@email.com" />
          <span>SUA SENHA</span>
          <Input type="password" name="password" placeholder="********" />
          <button type="submit">Entrar no sistema</button>
        </Form>
      </Content>
    </Container>
  );
}
