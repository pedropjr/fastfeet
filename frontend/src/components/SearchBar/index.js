import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch, MdAdd } from 'react-icons/md';
import history from '~/services/history';

import {
  Container,
  FlexContainer,
  SearchContainer,
  ButtonContainer,
} from './styles';

export default function SearchBar({ title, setSearchInput }) {
  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }

  function handleAddButton() {
    history.push(`${history.location.pathname}/cadastro`);
  }

  return (
    <Container>
      <h1>Gerenciando {title}</h1>
      <FlexContainer>
        <SearchContainer>
          <MdSearch color="#666" size={22} />
          <input
            type="text"
            placeholder={`Buscar por ${title}`}
            onChange={handleSearchInput}
          />
        </SearchContainer>
        <ButtonContainer onClick={handleAddButton}>
          <MdAdd color="#fff" size={30} />
          <span>CADASTRAR</span>
        </ButtonContainer>
      </FlexContainer>
    </Container>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
};
