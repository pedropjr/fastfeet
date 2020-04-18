import React from 'react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import PropTypes from 'prop-types';

import {
  Container,
  DescriptionContainer,
  DataContainer,
  Description,
  Date,
} from './styles';

export default function Problem({ problem }) {
  return (
    <Container>
      <DescriptionContainer>
        <Description>{problem.description}</Description>
      </DescriptionContainer>

      <DataContainer>
        <Date>
          {format(parseISO(problem.createdAt), 'dd/MM/yyyy', {
            locale: ptBR,
          })}
        </Date>
      </DataContainer>
    </Container>
  );
}

Problem.propTypes = {
  problem: PropTypes.shape({
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};
