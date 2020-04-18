import React from 'react';
import PropTypes from 'prop-types';
import Options from '~/components/Options';

import { TableContainer } from './styles';
import { showRecipientRequest } from '~/store/modules/recipient/actions';

export default function RecipientsTable({
  tableHeaders,
  filteredRecipients,
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
          {filteredRecipients.map((recipient) => (
            <tr key={recipient.id}>
              <td>{recipient.id}</td>
              <td>{recipient.nome}</td>
              <td>
                {recipient.rua}, {recipient.numero}, {recipient.complemento},{' '}
                {recipient.cidade} - {recipient.estado}
              </td>
              <td>
                <Options
                  hideShowButtons={hideShowButtons}
                  objectId={recipient.id}
                  action={showRecipientRequest}
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

RecipientsTable.propTypes = {
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  filteredRecipients: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeHasDeleted: PropTypes.func.isRequired,
};
