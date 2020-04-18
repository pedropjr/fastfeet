import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigationFocus } from '@react-navigation/compat';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Delivery from '~/components/Delivery/index';
import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';
import {
  Container,
  Header,
  Avatar,
  LogoutButton,
  Info,
  Message,
  Name,
  FilterBar,
  Title,
  Right,
  Filter,
  FilterText,
  Deliveries,
} from './styles';

function Dashboard({ isFocused }) {
  const { deliveryman } = useSelector((state) => state.deliveryman);
  const [deliveries, setDeliveries] = useState([]);
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(
        `deliveryman/${deliveryman.id}/deliveries`,
        {
          params: { delivered: selected ? 'ENTREGUE' : 'PENDENTE' },
        }
      );
      setDeliveries(response.data);
    }
    if (isFocused) {
      loadDeliveries();
    }
  }, [deliveryman.id, isFocused, selected]);

  return (
    <Container>
      <Header>
        <Avatar
          source={{
            uri: deliveryman.avatar_id
              ? deliveryman.avatar.url
              : `https://ui-avatars.com/api/?name=${
                  deliveryman.name.split(' ')[0]
                }+${deliveryman.name.split(' ')[1]}`,
          }}
        />

        <Info>
          <Message>Bem vindo de volta,</Message>
          <Name>{deliveryman.name}</Name>
        </Info>

        <LogoutButton onPress={handleLogout}>
          <Icon name="exit-to-app" size={30} color="red" />
        </LogoutButton>
      </Header>

      <FilterBar>
        <Title>Entregas</Title>
        <Right>
          <Filter onPress={() => setSelected(false)}>
            <FilterText selected={!selected}>Pendentes</FilterText>
          </Filter>
          <Filter onPress={() => setSelected(true)}>
            <FilterText selected={selected}>Entregues</FilterText>
          </Filter>
        </Right>
      </FilterBar>

      <Deliveries
        data={deliveries}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Delivery delivery={item} />}
      />
    </Container>
  );
}

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Dashboard);
