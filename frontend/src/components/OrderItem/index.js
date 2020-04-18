/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';

import {
  showOrderRequest,
  showFormattedOrder,
} from '~/store/modules/order/actions';
import Options from '~/components/Options';

import { Container, Status, DeliverymanContainer } from './styles';

export default function OrderItem({
  order,
  changeHasDeleted,
  setWindowVisibility,
}) {
  const hideShowButtons = [true, true, true];
  const [circleColor, setCircleColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    if (order.status === 'delivered') {
      setCircleColor('#2CA42B');
      setBackgroundColor('#DFF0DF');
    }
    if (order.status === 'canceled') {
      setCircleColor('#DE3B3B');
      setBackgroundColor('#FAB0B0');
    }
    if (order.status === 'pending') {
      setCircleColor('#C1BC35');
      setBackgroundColor('#F0F0DF');
    }
    if (order.status === 'awaiting') {
      setCircleColor('#4D85EE');
      setBackgroundColor('#BAD2FF');
    }
  }, [order.status]);

  return (
    <Container>
      <small>#{order.id}</small>
      <small>{order.recipient_id ? order.recipient.nome : ''}</small>
      <DeliverymanContainer>
        <img
          src={
            order.deliveryman.avatar_id
              ? order.deliveryman.avatar.url
              : `https://ui-avatars.com/api/?name=${
                  order.deliveryman.name.split(' ')[0]
                }+${order.deliveryman.name.split(' ')[1]}`
          }
          alt="deliveryman_avatar"
        />
        <span>{order.deliveryman_id ? order.deliveryman.name : ''}</span>
      </DeliverymanContainer>
      <small>{order.recipient_id ? order.recipient.cidade : ''}</small>
      <small>{order.recipient_id ? order.recipient.estado : ''}</small>
      <Status fontColor={circleColor} backgroundColor={backgroundColor}>
        <FaCircle size={15} color={circleColor} />
        <span>{order.status}</span>
      </Status>
      <section>
        <Options
          hideShowButtons={hideShowButtons}
          objectId={order.id}
          action={showOrderRequest}
          changeHasDeleted={changeHasDeleted}
          showFormattedAction={showFormattedOrder}
          setWindowVisibility={setWindowVisibility}
        />
      </section>
    </Container>
  );
}
