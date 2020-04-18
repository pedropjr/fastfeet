import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 20px 30px;
`;

export const ProblemInput = styled(Input)`
  background: #fff;
  flex: 1;
  max-height: 300px;
  margin-bottom: 30px;
  border: 1px solid #c4c4c4;
`;

export const SubmitButton = styled(Button)`
  background: #7159c1;
`;
