import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import { Container } from './styles';

export default function ProblemItem({ windowVisibility, setWindowVisibility }) {
  const { problem } = useSelector((state) => state.problem);

  function handleClose() {
    setWindowVisibility(false);
  }

  return (
    <Container windowVisibility={windowVisibility}>
      <MdClose size={30} onClick={handleClose} />
      <div>
        <h1>VISUALIZAR ENCOMENDA</h1>
        <span>{problem.description}</span>
      </div>
    </Container>
  );
}

ProblemItem.propTypes = {
  windowVisibility: PropTypes.bool.isRequired,
  setWindowVisibility: PropTypes.func.isRequired,
};
