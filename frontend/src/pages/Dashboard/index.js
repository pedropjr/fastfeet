import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import SearchBar from '~/components/SearchBar/index';
import OrdersTable from '~/components/OrdersTable/index';

import { Container, PageContainer, PageButton } from './styles';

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [hasDeleted, setHasDeleted] = useState(false);

  const tableHeaders = [
    'ID',
    'Destinatário',
    'Entregador',
    'Cidade',
    'Estado',
    'Status',
    'Ações',
  ];

  function changeHasDeleted() {
    setPage(1);
    setHasDeleted(!hasDeleted);
  }

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders', {
        params: {
          page,
          product: searchInput,
        },
      });
      const formattedOrders = response.data.map((order) => {
        if (order.canceled_at) {
          return {
            ...order,
            status: 'CANCELADO',
            circleColor: '#DE3B3B',
            backgroundColor: '#FAB0B0',
          };
        }
        if (order.end_date) {
          return {
            ...order,
            status: 'ENTREGUE',
            circleColor: '#2CA42B',
            backgroundColor: '#DFF0DF',
          };
        }
        if (order.start_date) {
          return {
            ...order,
            status: 'PENDENTE',
            circleColor: '#C1BC35',
            backgroundColor: '#F0F0DF',
          };
        }
        return {
          ...order,
          status: 'RETIRADA',
          circleColor: '#4D85EE',
          backgroundColor: '#BAD2FF',
        };
      });

      setOrders(formattedOrders);
    }
    loadOrders();
  }, [hasDeleted, page, searchInput]);

  return (
    <Container>
      <SearchBar title="encomendas" setSearchInput={setSearchInput} />
      <OrdersTable
        tableHeaders={tableHeaders}
        filteredOrders={orders}
        changeHasDeleted={changeHasDeleted}
      />
      <PageContainer>
        <PageButton disabled={page === 1} onClick={() => setPage(page - 1)}>
          <MdChevronLeft size={25} color="#7159c1" />
        </PageButton>
        <span>{page}</span>
        <PageButton
          disabled={orders.length < 5}
          onClick={() => setPage(page + 1)}
        >
          <MdChevronRight size={25} color="#7159c1" />
        </PageButton>
      </PageContainer>
    </Container>
  );
}
