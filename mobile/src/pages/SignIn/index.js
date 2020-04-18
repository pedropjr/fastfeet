import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';

import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/fastfeet-logo-white.png';
import { Container, IdInput, SubmitButton } from './styles';
import Background from '~/components/Background';

export default function SignIn() {
  const [deliverymanId, setDeliverymanId] = useState('');
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(deliverymanId));
  }
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <IdInput
          placeholder="Informe seu ID de cadastro"
          keyboardType="number-pad"
          returnKeyType="send"
          value={deliverymanId}
          onSubmitEditing={handleSubmit}
          onChangeText={setDeliverymanId}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </SubmitButton>
      </Container>
    </Background>
  );
}
