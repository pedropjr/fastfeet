import React from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  TopContainer,
  BottomContainer,
  InputContainer1,
  InputContainer2,
} from './styles';

export default function RecipientsCadastro() {
  function handleBackButton() {
    history.goBack();
  }

  async function handleNewRecipient(data) {
    const { nome, rua, numero, complemento, cidade, estado, cep } = data;
    try {
      /** Inserir recipient */
      await api.post('recipients', {
        nome,
        rua,
        numero,
        complemento,
        cidade,
        estado,
        cep,
      });

      history.push('/recipients');
      toast.success('Destinatário cadastrado com sucesso!');
    } catch (error) {
      toast.error('Por favor, insira os campos do destinatário!');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleNewRecipient}>
        <TopContainer>
          <h1>Cadastro de destinatários</h1>
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
              <Input label="CEP" type="text" name="cep" maxLength={9} />
            </div>
          </InputContainer2>
        </BottomContainer>
      </Form>
    </Container>
  );
}
