import React from 'react';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';

import {
  Container,
  RecipientContainer,
  DeliverymanContainer,
  ProductContainer,
} from './styles';

export default function OrderForm({
  recipients,
  deliverymen,
  setRecipientId,
  setDeliverymanId,
  setProductName,
}) {
  /** Async Data to Recipients */
  const filterRecipients = (inputValue) => {
    return recipients.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseRecipients = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterRecipients(inputValue));
      }, 500);
    });
  /** ----------------- */

  /** Async Data to Deliverymen */
  const filterDeliverymen = (inputValue) => {
    return deliverymen.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseDeliverymen = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterDeliverymen(inputValue));
      }, 500);
    });
  /** ----------------- */

  /** Senders */
  function sendBackRecipientId(inputValue) {
    setRecipientId(inputValue.value);
  }

  function sendBackDeliverymanId(inputValue) {
    setDeliverymanId(inputValue.value);
  }

  function sendBackProductName(event) {
    setProductName(event.target.value);
  }

  /** */

  return (
    <Container>
      <RecipientContainer>
        <span>Destinatário</span>
        <AsyncSelect
          cacheOptions
          defaultOptions={recipients}
          loadOptions={promiseRecipients}
          placeholder="Selecione um destinatário"
          onChange={sendBackRecipientId}
        />
      </RecipientContainer>
      <DeliverymanContainer>
        <span>Entregadores</span>
        <AsyncSelect
          cacheOptions
          defaultOptions={deliverymen}
          loadOptions={promiseDeliverymen}
          placeholder="Selecione um entregador"
          onChange={sendBackDeliverymanId}
        />
      </DeliverymanContainer>
      <ProductContainer>
        <span>Nome do produto</span>
        <input
          type="text"
          placeholder="Insira o nome do produto"
          onChange={sendBackProductName}
        />
      </ProductContainer>
    </Container>
  );
}

OrderForm.propTypes = {
  recipients: PropTypes.arrayOf(PropTypes.object).isRequired,
  deliverymen: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRecipientId: PropTypes.func.isRequired,
  setDeliverymanId: PropTypes.func.isRequired,
  setProductName: PropTypes.func.isRequired,
};
