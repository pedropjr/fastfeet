import React, { useState, useEffect } from 'react';

import DeliveryProblemsTable from '~/components/DeliveryProblemsTable/index';
import { Container } from './styles';
import api from '~/services/api';

export default function DeliveryProblemsList() {
  const [deliveryProblems, setDeliveryProblems] = useState([]);
  const [hasDeleted, setHasDeleted] = useState(false);
  const tableHeaders = ['Encomenda', 'Descrição', 'Ações'];

  function changeHasDeleted() {
    setHasDeleted(!hasDeleted);
  }

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get('deliveries/problems');

      setDeliveryProblems(response.data);
    }
    loadDeliveryProblems();
  }, []);

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get('deliveries/problems');

      setDeliveryProblems(response.data);
    }
    loadDeliveryProblems();
  }, [hasDeleted]);

  return (
    <Container>
      <h1>Problemas nas entregas</h1>
      <DeliveryProblemsTable
        tableHeaders={tableHeaders}
        deliveryProblems={deliveryProblems}
        changeHasDeleted={changeHasDeleted}
      />
    </Container>
  );
}
