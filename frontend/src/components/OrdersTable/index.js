import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';
import Options from '~/components/Options';

import {
  showOrderRequest,
  showFormattedOrder,
} from '~/store/modules/order/actions';
import { TableContainer, StatusContainer } from './styles';
import VisualizarEncomenda from '~/pages/Dashboard/Visualizar/index';

export default function OrdersTable({
  tableHeaders,
  filteredOrders,
  changeHasDeleted,
}) {
  const hideShowButtons = [true, true, true];
  const [windowVisibility, setWindowVisibility] = useState(false);

  return (
    <>
      <TableContainer windowVisibility={windowVisibility}>
        <table>
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} stat={order.status}>
                <td>{order.id}</td>
                <td>{order.recipient_id ? order.recipient.nome : ''}</td>
                <td>
                  {' '}
                  <img
                    src={
                      order.deliveryman_id
                        ? order.deliveryman.avatar.url
                        : `https://ui-avatars.com/api/?name=${
                            order.deliveryman.name.split(' ')[0]
                          }+${order.deliveryman.name.split(' ')[1]}`
                    }
                    alt="deliveryman_avatar"
                  />
                  {order.deliveryman_id ? order.deliveryman.name : ''}
                </td>
                <td>{order.recipient_id ? order.recipient.cidade : ''}</td>
                <td>{order.recipient_id ? order.recipient.estado : ''}</td>
                <td>
                  <StatusContainer
                    circleColor={order.circleColor}
                    backgroundColor={order.backgroundColor}
                  >
                    <FaCircle color={order.circleColor} size={10} />
                    <span>{order.status}</span>
                  </StatusContainer>
                </td>
                <td>
                  <Options
                    hideShowButtons={hideShowButtons}
                    objectId={order.id}
                    action={showOrderRequest}
                    changeHasDeleted={changeHasDeleted}
                    showFormattedAction={showFormattedOrder}
                    setWindowVisibility={setWindowVisibility}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
      <VisualizarEncomenda
        setWindowVisibility={setWindowVisibility}
        windowVisibility={windowVisibility}
      />
    </>
  );
}

OrdersTable.propTypes = {
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  filteredOrders: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeHasDeleted: PropTypes.func.isRequired,
};
