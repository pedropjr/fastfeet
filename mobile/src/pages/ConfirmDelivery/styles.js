import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 30px 20px;
`;

export const CameraView = styled.View`
  flex: 1;
  background: #eee;
`;

export const Preview = styled.Image`
  flex: 1;
`;

export const CameraButton = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.3);
  align-self: center;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  background: #7159c1;
  display: ${(state) => (state.file ? 'flex' : 'none')};
`;
