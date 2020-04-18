import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import stepIndicatorStyles from './stepIndicatorStyles';
import {
  Container,
  Top,
  Title,
  Middle,
  Bottom,
  Data,
  Texto,
  Info,
  City,
  Details,
  DetailsButton,
} from './styles';

export default function Delivery({ delivery }) {
  const navigation = useNavigation();

  const currentPosition = useMemo(() => {
    if (delivery.end_date !== null) {
      return 3;
    }
    if (delivery.start_date !== null) {
      return 2;
    }

    return 1;
  }, [delivery.end_date, delivery.start_date]);

  const formattedDate = useMemo(() => {
    return delivery.createdAt
      ? format(parseISO(delivery.createdAt), 'dd/MM/yyyy', {
          locale: ptBR,
        })
      : '--/--/--';
  }, [delivery.createdAt]);

  return (
    <Container>
      <Top>
        <Icon name="truck" size={30} color="#7159c1" />
        <Title>Encomenda {delivery.id}</Title>
      </Top>

      <Middle>
        <StepIndicator
          stepCount={3}
          labels={['Aguardando retirada', 'Retirada', 'Entregue']}
          currentPosition={currentPosition}
          customStyles={stepIndicatorStyles}
        />
      </Middle>

      <Bottom>
        <Data>
          <Texto>Data</Texto>
          <Info>{formattedDate}</Info>
        </Data>

        <City>
          <Texto>Cidade</Texto>
          <Info>{delivery.recipient.cidade}</Info>
        </City>

        <DetailsButton>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', { delivery, currentPosition })
            }
          >
            <Details>Ver detalhes</Details>
          </TouchableOpacity>
        </DetailsButton>
      </Bottom>
    </Container>
  );
}

Delivery.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number,
    product: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    createdAt: PropTypes.string,
    recipient: PropTypes.shape({
      cidade: PropTypes.string,
    }),
    currentPosition: PropTypes.number,
  }).isRequired,
};
