import React from 'react';
import PropTypes from 'prop-types';
import Options from '~/components/Options';

import { TableContainer } from './styles';
import { showDeliverymanRequest } from '~/store/modules/deliveryman/actions';

export default function DeliverymenTable({
  tableHeaders,
  filteredDeliverymen,
  changeHasDeleted,
}) {
  const hideShowButtons = [false, true, true];

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredDeliverymen.map((deliveryman) => (
            <tr key={deliveryman.id}>
              <td>{deliveryman.id}</td>
              <td>
                <img
                  src={
                    deliveryman.avatar_id
                      ? deliveryman.avatar.url
                      : `https://ui-avatars.com/api/?name=${
                          deliveryman.name.split(' ')[0]
                        }+${deliveryman.name.split(' ')[1]}`
                  }
                  alt="deliveryman_avatar"
                />
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <Options
                  hideShowButtons={hideShowButtons}
                  objectId={deliveryman.id}
                  action={showDeliverymanRequest}
                  changeHasDeleted={changeHasDeleted}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}

DeliverymenTable.propTypes = {
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  filteredDeliverymen: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeHasDeleted: PropTypes.func.isRequired,
};
