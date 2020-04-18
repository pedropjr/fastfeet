import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import RecipientsTable from '~/components/RecipientsTable/index';
import SearchBar from '~/components/SearchBar/index';
import { Container, PageContainer, PageButton } from './styles';

export default function RecipientsList() {
  const [page, setPage] = useState(1);
  const [recipients, setRecipients] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [hasDeleted, setHasDeleted] = useState(false);
  const tableHeaders = ['ID', 'Nome', 'Endereço', 'Ações'];

  function changeHasDeleted() {
    setPage(1);
    setHasDeleted(!hasDeleted);
  }

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients', {
        params: {
          page,
          name: searchInput,
        },
      });
      setRecipients(response.data);
    }
    loadRecipients();
  }, [hasDeleted, page, searchInput]);

  return (
    <Container>
      <SearchBar title="destinatarios" setSearchInput={setSearchInput} />
      <RecipientsTable
        tableHeaders={tableHeaders}
        filteredRecipients={recipients}
        changeHasDeleted={changeHasDeleted}
      />

      <PageContainer>
        <PageButton disabled={page === 1} onClick={() => setPage(page - 1)}>
          <MdChevronLeft size={25} color="#7159c1" />
        </PageButton>
        <span>{page}</span>
        <PageButton
          disabled={recipients.length < 5}
          onClick={() => setPage(page + 1)}
        >
          <MdChevronRight size={25} color="#7159c1" />
        </PageButton>
      </PageContainer>
    </Container>
  );
}
