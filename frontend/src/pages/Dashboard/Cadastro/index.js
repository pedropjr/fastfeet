import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';

import NewOrderSchema from '~/validations/NewOrderSchema';
import api from '~/services/api';
import OrderForm from '~/components/OrderForm';
import history from '~/services/history';

import {
  Container,
  TopContainer,
  BackContainer,
  SaveContainer,
} from './styles';

export default function EncomendaCadastro() {
  const [recipients, setRecipients] = useState([]);
  const [deliverymen, setDeliverymen] = useState([]);
  const [newOrder, setNewOrder] = useState([]);
  const [recipientId, setRecipientId] = useState(null);
  const [deliverymanId, setDeliverymanId] = useState(null);
  const [productName, setProductName] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('/recipients');
      const formattedRecipients = [];

      response.data.forEach((recipient) => {
        formattedRecipients.push({
          value: recipient.id,
          label: recipient.nome,
        });
      });
      setRecipients(formattedRecipients);
    }

    async function loadDeliverymen() {
      const response = await api.get('/deliveryman');
      const formattedDeliverymen = [];

      response.data.forEach((deliveryman) => {
        formattedDeliverymen.push({
          value: deliveryman.id,
          label: deliveryman.name,
        });
      });
      setDeliverymen(formattedDeliverymen);
    }

    loadRecipients();
    loadDeliverymen();
  }, []);

  useEffect(() => {
    setNewOrder({
      recipient_id: recipientId,
      deliveryman_id: deliverymanId,
      product: productName,
    });
  }, [recipientId, deliverymanId, productName]);

  async function handleNewOrder() {
    /** Checking if the schema is valid */
    if (!NewOrderSchema.isValid(newOrder)) {
      toast.error('Por favor, insira todos os campos!!');
    }
    try {
      await api.post('orders', newOrder);
      history.push('/orders');
      toast.success('Encomenda Cadastrada!');
    } catch (error) {
      toast.error('Erro ao cadastrar encomenda para o entregador!');
    }
  }

  function handleBackButton() {
    history.push('/orders');
  }

  return (
    <Container>
      <TopContainer>
        <h1>Cadastro de encomendas</h1>
        <div>
          <BackContainer onClick={handleBackButton}>
            <MdChevronLeft size={28} color="#fff" />
            <button type="button">VOLTAR</button>
          </BackContainer>
          <SaveContainer onClick={handleNewOrder}>
            <MdCheck size={28} color="#fff" />
            <button type="button">SALVAR</button>
          </SaveContainer>
        </div>
      </TopContainer>
      <OrderForm
        recipients={recipients}
        deliverymen={deliverymen}
        setRecipientId={setRecipientId}
        setDeliverymanId={setDeliverymanId}
        setProductName={setProductName}
      />
    </Container>
  );
}
