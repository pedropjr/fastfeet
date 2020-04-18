import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { signOut } from '~/store/modules/auth/actions';
import { Container, Avatar, Label, Info, LogoutButton } from './styles';

export default function Profile() {
  const { deliveryman } = useSelector((state) => state.deliveryman);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: deliveryman.avatar_id
            ? deliveryman.avatar.url
            : `https://ui-avatars.com/api/?name=${
                deliveryman.name.split(' ')[0]
              }+${deliveryman.name.split(' ')[1]}`,
        }}
      />
      <Label>Nome completo</Label>
      <Info>{deliveryman.name}</Info>

      <Label>E-mail</Label>
      <Info>{deliveryman.email}</Info>

      <Label>Data de cadastro</Label>
      <Info>
        {format(parseISO(deliveryman.createdAt), 'dd/MM/yyyy HH:mm', {
          locale: ptBR,
        })}
      </Info>

      <LogoutButton loading={loading} onPress={handleLogout}>
        Logout
      </LogoutButton>
    </Container>
  );
}
