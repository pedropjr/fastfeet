/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import api from '~/services/api';

import {
  Container,
  CameraView,
  Preview,
  Camera,
  CameraButton,
  SubmitButton,
} from './styles';
import ExtraHeader from '~/components/ExtraHeader';

export default function ConfirmDelivery({ route }) {
  const [camera, setCamera] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { deliveryman } = useSelector((state) => state.deliveryman);
  const { deliveryId } = route.params;

  async function takePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: false,
      };
      const data = await camera.takePictureAsync(options);

      setFile(data);
    }
  }

  async function handleSubmit() {
    setLoading(true);
    try {
      const dataFile = new FormData();
      dataFile.append('file', {
        uri: file.uri,
        name: `${deliveryId}_signature.jpg`,
        type: 'image/jpeg',
      });

      const response = await api.post('files', dataFile);

      const { id } = response.data;

      await api.put(
        `/deliveryman/${deliveryman.id}/deliveries/${deliveryId}/finish`,
        { signature_id: id, finish: 'finish' }
      );
      setLoading(false);
      Alert.alert('Sucesso!', 'Encomenda entregue com sucesso!');
      navigation.navigate('Dashboard');
    } catch (err) {
      setLoading(false);
      Alert.alert('Erro!', 'Erro ao finalizar encomenda.');
    }
  }

  return (
    <>
      <ExtraHeader />
      <Container>
        <CameraView>
          {file ? (
            <Preview source={{ uri: file.uri }} />
          ) : (
            <Camera
              ref={(ref) => {
                setCamera(ref);
              }}
              type={RNCamera.Constants.Type.back}
              captureAudio={false}
              androidCameraPermissionOptions={{
                title: 'Permissão para usar a câmera',
                message: 'Precisamos de sua permissão para usar a câmera',
                buttonPositive: 'Autorizar',
                buttonNegative: 'Negar',
              }}
            />
          )}

          {file ? (
            <CameraButton onPress={() => setFile(null)}>
              <Icon name="close" size={24} color="#fff" />
            </CameraButton>
          ) : (
            <CameraButton onPress={takePicture}>
              <Icon name="camera" size={24} color="#fff" />
            </CameraButton>
          )}
        </CameraView>
        <SubmitButton loading={loading} file={file} onPress={handleSubmit}>
          Enviar
        </SubmitButton>
      </Container>
    </>
  );
}
