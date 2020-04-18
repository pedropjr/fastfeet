import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import SearchBar from '~/components/SearchBar/index';
import DeliverymenTable from '~/components/DeliverymenTable';
import { Container, PageContainer, PageButton } from './styles';

export default function DeliverymenList() {
  const [page, setPage] = useState(1);
  const [deliverymen, setDeliverymen] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [hasDeleted, setHasDeleted] = useState(false);
  const tableHeaders = ['ID', 'Foto', 'Nome', 'Email', 'Ações'];

  function changeHasDeleted() {
    setPage(1);
    setHasDeleted(!hasDeleted);
  }

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('deliveryman', {
        params: {
          page,
          name: searchInput,
        },
      });
      setDeliverymen(response.data);
    }
    loadDeliverymen();
  }, [hasDeleted, page, searchInput]);

  return (
    <Container>
      <SearchBar title="entregadores" setSearchInput={setSearchInput} />
      <DeliverymenTable
        tableHeaders={tableHeaders}
        filteredDeliverymen={deliverymen}
        changeHasDeleted={changeHasDeleted}
      />

      <PageContainer>
        <PageButton disabled={page === 1} onClick={() => setPage(page - 1)}>
          <MdChevronLeft size={25} color="#7159c1" />
        </PageButton>
        <span>{page}</span>
        <PageButton
          disabled={deliverymen.length < 5}
          onClick={() => setPage(page + 1)}
        >
          <MdChevronRight size={25} color="#7159c1" />
        </PageButton>
      </PageContainer>
    </Container>
  );
}
