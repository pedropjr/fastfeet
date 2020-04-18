/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import Problem from '~/components/Problem';
import ExtraHeader from '~/components/ExtraHeader';

import { Container, Titulo, ProblemList } from './styles';
import api from '~/services/api';

export default function ViewProblems({ route }) {
  const { deliveryId } = route.params;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`deliveries/${deliveryId}/problems`);
      setProblems(response.data);
    }
    loadProblems();
  }, [deliveryId]);

  return (
    <>
      <ExtraHeader />
      <Container>
        <Titulo>Encomenda {deliveryId}</Titulo>
        <ProblemList
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Problem problem={item} />}
        />
      </Container>
    </>
  );
}
