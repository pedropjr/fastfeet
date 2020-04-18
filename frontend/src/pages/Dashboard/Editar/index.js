import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { updateOrderRequest } from '~/store/modules/order/actions';
import history from '~/services/history';
import api from '~/services/api';
import {
  Container,
  RecipientContainer,
  DeliverymanContainer,
  ProductContainer,
  TopContainer,
  BackContainer,
  SaveContainer,
  BottomContainer,
} from './styles';

export default function OrderUpdate() {
  const [updatedOrder, setUpdatedOrder] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [deliverymen, setDeliverymen] = useState([]);
  const dispatch = useDispatch();

  const { order } = useSelector((state) => state.order);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('/recipients');
      const formattedRecipients = [];

      response.data.forEach((rec) => {
        formattedRecipients.push({
          value: rec.id,
          label: rec.nome,
        });
      });

      setRecipients(formattedRecipients);
    }

    async function loadDeliverymen() {
      const response = await api.get('/deliveryman');
      const formattedDeliverymen = [];

      response.data.forEach((del) => {
        formattedDeliverymen.push({
          value: del.id,
          label: del.name,
        });
      });
      setDeliverymen(formattedDeliverymen);
    }

    async function loadOrder() {
      setUpdatedOrder({
        recipient_id: order.recipient.value,
        deliveryman_id: order.deliveryman.value,
        product: order.product,
      });
    }

    loadOrder();
    loadRecipients();
    loadDeliverymen();
  }, [order.deliveryman.value, order.product, order.recipient.value]);

  function handleRecipientChange(inputValue) {
    setUpdatedOrder({ ...updatedOrder, recipient_id: inputValue.value });
  }

  function handleDeliverymanChange(inputValue) {
    setUpdatedOrder({ ...updatedOrder, deliveryman_id: inputValue.value });
  }

  function handleProductChange(event) {
    setUpdatedOrder({ ...updatedOrder, product: event.target.value });
  }

  function handleBackButton() {
    history.goBack();
  }

  function handleSaveButton() {
    dispatch(updateOrderRequest(order.id, updatedOrder));
  }

  return (
    <Container>
      <TopContainer>
        <h1>Edição de encomendas</h1>
        <div>
          <BackContainer onClick={handleBackButton}>
            <MdChevronLeft size={28} color="#fff" />
            <button type="button">VOLTAR</button>
          </BackContainer>
          <SaveContainer onClick={handleSaveButton}>
            <MdCheck size={28} color="#fff" />
            <button type="button">SALVAR</button>
          </SaveContainer>
        </div>
      </TopContainer>

      <BottomContainer>
        <RecipientContainer>
          <Select
            onChange={handleRecipientChange}
            options={recipients}
            defaultValue={order.recipient}
          />
        </RecipientContainer>

        <DeliverymanContainer>
          <Select
            onChange={handleDeliverymanChange}
            options={deliverymen}
            defaultValue={order.deliveryman}
          />
        </DeliverymanContainer>
        <ProductContainer>
          <input
            type="text"
            onChange={handleProductChange}
            placeholder="Insira o nome da encomenda"
            defaultValue={order.product}
          />
        </ProductContainer>
      </BottomContainer>
    </Container>
  );
}
