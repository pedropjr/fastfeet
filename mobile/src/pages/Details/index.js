/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format, parseISO } from 'date-fns';
import { Alert } from 'react-native';
import { ptBR } from 'date-fns/locale';

import api from '~/services/api';

import {
  Container,
  Top,
  Title,
  TextoTitulo,
  Texto,
  Info,
  Middle,
  Datas,
  DataContainer,
  Bottom,
  ButtonContainer,
  Legenda,
  TakeDelivery,
} from './styles';
import ExtraHeader from '~/components/ExtraHeader';

export default function Details({ route }) {
  const navigation = useNavigation();
  const { delivery, currentPosition } = route.params;
  const deliveryId = delivery.id;
  const { deliveryman_id } = delivery;
  const address = `${delivery.recipient.rua}, ${delivery.recipient.numero}, ${delivery.recipient.cidade} - ${delivery.recipient.estado}, ${delivery.recipient.cep}`;

  const status = useMemo(() => {
    if (currentPosition === 3) {
      return 'Entregue';
    }
    if (currentPosition === 2) {
      return 'Retirado';
    }
    return 'Aguardando retirada';
  }, [currentPosition]);

  async function handleTakeDelivery() {
    try {
      await api.put(`deliveryman/${deliveryman_id}/deliveries/${deliveryId}`);
      Alert.alert('Sucesso!', 'Encomenda retirada.');
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert(
        'Erro!',
        'Fora de horário ou limite de encomendas por dia atingido.'
      );
    }
  }

  return (
    <>
      <ExtraHeader />
      <Container>
        <Top>
          <Title>
            <Icon name="truck" color="#7159c1" size={30} />
            <TextoTitulo>Informações da entrega</TextoTitulo>
          </Title>

          <Texto>DESTINATÁRIO</Texto>
          <Info>{delivery.recipient.nome}</Info>

          <Texto>ENDEREÇO DE ENTREGA</Texto>
          <Info>{address}</Info>

          <Texto>PRODUTO</Texto>
          <Info>{delivery.product}</Info>
        </Top>

        <Middle>
          <Title>
            <Icon name="calendar" color="#7159c1" size={30} />
            <TextoTitulo>Situação da entrega</TextoTitulo>
          </Title>

          <Texto>STATUS</Texto>
          <Info>{status}</Info>

          <Datas>
            <DataContainer>
              <Texto>DATA DE RETIRADA</Texto>
              <Info>
                {' '}
                {delivery.start_date
                  ? format(parseISO(delivery.start_date), 'dd/MM/yyyy', {
                      locale: ptBR,
                    })
                  : '--/--/--'}
              </Info>
            </DataContainer>

            <DataContainer>
              <Texto>DATA DE ENTREGA</Texto>
              <Info>
                {delivery.end_date
                  ? format(parseISO(delivery.end_date), 'dd/MM/yyyy', {
                      locale: ptBR,
                    })
                  : '--/--/--'}
              </Info>
            </DataContainer>
          </Datas>
        </Middle>
        {delivery.start_date ? (
          <Bottom>
            <ButtonContainer
              onPress={() =>
                navigation.navigate('NewProblem', {
                  deliveryId,
                  deliveryman_id,
                })
              }
            >
              <Icon name="close-circle-outline" color="red" size={30} />
              <Legenda>Informar Problema</Legenda>
            </ButtonContainer>

            <ButtonContainer
              onPress={() =>
                navigation.navigate('ViewProblems', { deliveryId })
              }
            >
              <Icon name="information-outline" color="#e3dd3d" size={30} />
              <Legenda>Visualizar Problemas</Legenda>
            </ButtonContainer>

            <ButtonContainer
              onPress={() =>
                navigation.navigate('ConfirmDelivery', { deliveryId })
              }
            >
              <Icon name="check-circle-outline" color="#7159c1" size={30} />
              <Legenda>Confirmar Entrega</Legenda>
            </ButtonContainer>
          </Bottom>
        ) : (
          <TakeDelivery onPress={handleTakeDelivery}>
            Retirar Encomenda
          </TakeDelivery>
        )}
      </Container>
    </>
  );
}
