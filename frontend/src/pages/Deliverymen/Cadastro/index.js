import React from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';
import history from '~/services/history';
import AvatarInput from '../AvatarInput';

import { Container, ButtonContainer, FormContainer } from './styles';

export default function DeliverymenCadastro() {
  function handleBackButton() {
    history.goBack();
  }

  async function handleSubmit(data) {
    const { name, email, avatar_id } = data;
    try {
      /** Inserir deliveryman */
      await api.post('deliveryman', {
        name,
        email,
        avatar_id,
      });

      history.push('/deliveryman');
      toast.success('Entregador cadastrado com sucesso!');
    } catch (error) {
      toast.error('Por favor, insira os campos do entregador corretamente!');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ButtonContainer>
          <h1>Cadastro de entregadores</h1>
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
          <Input
            label="Nome"
            name="name"
            placeholder="Nome completo do entregador"
          />
          <Input
            label="E-mail"
            name="email"
            placeholder="E-mail do entregador"
          />
        </FormContainer>
      </Form>
    </Container>
  );
}
