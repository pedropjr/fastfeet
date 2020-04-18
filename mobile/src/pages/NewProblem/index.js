/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// import { NewProblemSchema } from '~/validations/index';
import api from '~/services/api';

import { Container, ProblemInput, SubmitButton } from './styles';
import ExtraHeader from '~/components/ExtraHeader';

export default function NewProblem({ route }) {
  const { deliveryId, deliveryman_id } = route.params;
  const [problem, setProblem] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function handleSubmit() {
    setLoading(true);
    try {
      await api.post(`deliveries/${deliveryId}/problems`, {
        description: problem,
        deliveryman_id,
      });
      setLoading(false);
      Alert.alert('Sucesso', `Problema criado para a encomenda ${deliveryId}.`);
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      Alert.alert(
        'Erro',
        'Aconteceu algum erro ou o limite de 10 caracteres não foi atingido!'
      );
      navigation.goBack();
    }
  }

  return (
    <>
      <ExtraHeader />
      <Container>
        <ProblemInput
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          value={problem}
          onChangeText={setProblem}
          multiline
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Enviar
        </SubmitButton>
      </Container>
    </>
  );
}
