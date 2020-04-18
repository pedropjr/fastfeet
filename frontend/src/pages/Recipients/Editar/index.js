import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { updateRecipientRequest } from '~/store/modules/recipient/actions';
import history from '~/services/history';

import {
  Container,
  TopContainer,
  BottomContainer,
  InputContainer1,
  InputContainer2,
} from './styles';

export default function RecipientsUpdate() {
  const dispatch = useDispatch();
  const { recipient } = useSelector((state) => state.recipient);

  function handleBackButton() {
    history.goBack();
  }

  function handleSubmit({
    nome,
    rua,
    numero,
    complemento,
    estado,
    cidade,
    cep,
  }) {
    const { id } = recipient;
    dispatch(
      updateRecipientRequest({
        id,
        nome,
        rua,
        numero,
        complemento,
        cidade,
        estado,
        cep,
      })
    );
  }

  return (
    <Container>
      <Form initialData={recipient} onSubmit={handleSubmit}>
        <TopContainer>
          <h1>Edição de destinatários</h1>
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
        </TopContainer>

        <BottomContainer>
          <Input label="Nome" type="text" name="nome" />
          <InputContainer1>
            <div>
              <Input label="Rua" type="text" name="rua" />
            </div>
            <div>
              <Input label="Numero" type="number" name="numero" />
            </div>
            <div>
              <Input label="Complemento" type="text" name="complemento" />
            </div>
          </InputContainer1>

          <InputContainer2>
            <div>
              <Input label="Cidade" type="text" name="cidade" />
            </div>
            <div>
              <Input label="Estado" type="text" name="estado" maxLength={2} />
            </div>
            <div>
              <Input label="CEP" type="text" name="cep" />
            </div>
          </InputContainer2>
        </BottomContainer>
      </Form>
    </Container>
  );
}
