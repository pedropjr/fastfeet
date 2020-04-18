import React from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import { Container, CloseContainer } from './styles';

export default function VisualizarEncomenda({
  windowVisibility,
  setWindowVisibility,
}) {
  const { order } = useSelector((state) => state.order);
  const address = order.recipient_id
    ? `${order.recipient.rua}, ${order.recipient.numero}, ${order.recipient.complemento}, ${order.recipient.cidade}-${order.recipient.estado}`
    : '';

  function handleClose() {
    setWindowVisibility(false);
  }

  return (
    <Container windowVisibility={windowVisibility}>
      <CloseContainer>
        <MdClose size={30} color="red" onClick={handleClose} />
      </CloseContainer>

      <div>
        <h1>Informações da encomenda</h1>
        <span>{address}</span>
      </div>
      <div>
        <h1>Datas</h1>

        <span>
          <strong>Retirada: </strong>
          {order.start_date
            ? format(parseISO(order.start_date), 'dd/MM/yyyy HH:mm', {
                locale: ptBR,
              })
            : ''}
        </span>

        <span>
          <strong>Entrega: </strong>
          {order.end_date
            ? format(parseISO(order.end_date), 'dd/MM/yyyy HH:mm', {
                locale: ptBR,
              })
            : ''}
        </span>
      </div>
      <div>
        <h1>Assinatura do Cliente</h1>
        {order.signature_id && <img src={order.signature.url} alt="" />}
      </div>
    </Container>
  );
}

VisualizarEncomenda.propTypes = {
  windowVisibility: PropTypes.bool.isRequired,
  setWindowVisibility: PropTypes.func.isRequired,
};
