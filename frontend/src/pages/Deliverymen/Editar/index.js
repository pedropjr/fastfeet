import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { updateDeliverymanRequest } from '~/store/modules/deliveryman/actions';
import history from '~/services/history';
import AvatarInput from '../AvatarInput';

import { Container, ButtonContainer, FormContainer } from './styles';

export default function DeliverymanUpdate() {
  const dispatch = useDispatch();
  const { deliveryman } = useSelector((state) => state.deliveryman);

  function handleBackButton() {
    history.goBack();
  }

  function handleSubmit({ name, email, avatar_id }) {
    const { id } = deliveryman;
    dispatch(updateDeliverymanRequest({ id, name, email, avatar_id }));
  }

  return (
    <Container>
      <Form initialData={deliveryman} onSubmit={handleSubmit}>
        <ButtonContainer>
          <h1>Edição de entregadores</h1>
          <div>
            <button type="button" onClick={handleBackButton}>
              <MdChevronLeft size={28} color="#fff" />
              VOLTAR
            </button>
            <button type="submit">
              <MdCheck size={28} color="#fff" />
              SALVAR
            </button>
          </div>
        </ButtonContainer>
        <FormContainer>
          <AvatarInput name="avatar_id" />
          <Input label="Nome" name="name" placeholder="Nome completo" />
          <Input label="E-mail" name="email" placeholder="E-mail" />
        </FormContainer>
      </Form>
    </Container>
  );
}
