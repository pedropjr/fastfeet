import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  MdSettings,
  MdVisibility,
  MdEdit,
  MdDeleteForever,
} from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';
import { Container, ButtonList, Button } from './styles';

export default function Options({
  customText,
  hideShowButtons,
  objectId,
  action,
  showFormattedAction,
  changeHasDeleted,
  setWindowVisibility,
}) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleShow() {
    if (setWindowVisibility) {
      setWindowVisibility(true);
    }
    dispatch(action(objectId));
    setVisible(!visible);
  }

  function handleFormattedShow() {
    dispatch(showFormattedAction(objectId));
    setVisible(!visible);
  }

  async function handleDelete() {
    setVisible(!visible);
    // eslint-disable-next-line no-alert
    const confirmacao = window.confirm('Você tem certeza?');
    if (confirmacao) {
      if (customText === 'Excluir') {
        await api.delete(`${history.location.pathname}/${objectId}`);
        changeHasDeleted();
      } else {
        await api.put(`problems/${objectId}/cancel`);
        changeHasDeleted();
      }
    }
  }

  return (
    <Container>
      <MdSettings color="#7159c1" size={20} onClick={handleToggleVisible} />
      <ButtonList visible={visible}>
        <Button visible={hideShowButtons[0]} onClick={handleShow}>
          <MdVisibility color="#7159c1" size={17} />
          <span>Visualizar</span>
        </Button>
        <Button
          visible={hideShowButtons[1]}
          onClick={showFormattedAction ? handleFormattedShow : handleShow}
        >
          <MdEdit color="blue" size={17} />
          <span>Editar</span>
        </Button>
        <Button visible={hideShowButtons[2]} onClick={handleDelete}>
          <MdDeleteForever color="red" size={17} />
          <span>{customText}</span>
        </Button>
      </ButtonList>
    </Container>
  );
}

Options.propTypes = {
  customText: PropTypes.string,
  hideShowButtons: PropTypes.arrayOf(PropTypes.bool),
  objectId: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
  showFormattedAction: PropTypes.func,
  changeHasDeleted: PropTypes.func.isRequired,
  setWindowVisibility: PropTypes.func,
};

Options.defaultProps = {
  customText: 'Excluir',
  hideShowButtons: [true, true, true],
  showFormattedAction: null,
  setWindowVisibility: null,
};
