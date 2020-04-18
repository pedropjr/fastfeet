import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Options from '~/components/Options';

import { showProblemRequest } from '~/store/modules/problem/actions';
import { TableContainer } from './styles';
import ProblemItem from '~/pages/DeliveryProblems/Visualizar';

export default function DeliveryProblemsTable({
  tableHeaders,
  deliveryProblems,
  changeHasDeleted,
}) {
  const hideShowButtons = [true, false, true];
  const [windowVisibility, setWindowVisibility] = useState(false);

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
          {deliveryProblems.map((delivery) =>
            delivery.DeliveryProblems.map((problem) => (
              <tr key={problem.id}>
                <td>{problem.delivery_id}</td>
                <td>{problem.description}</td>
                <td>
                  <Options
                    hideShowButtons={hideShowButtons}
                    objectId={problem.id}
                    action={showProblemRequest}
                    customText="Cancelar encomenda"
                    changeHasDeleted={changeHasDeleted}
                    setWindowVisibility={setWindowVisibility}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <ProblemItem
        setWindowVisibility={setWindowVisibility}
        windowVisibility={windowVisibility}
      />
    </TableContainer>
  );
}

DeliveryProblemsTable.propTypes = {
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  deliveryProblems: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeHasDeleted: PropTypes.func.isRequired,
};
