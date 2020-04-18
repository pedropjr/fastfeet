import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const IdInput = styled(Input)`
  margin-top: 40px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  align-self: stretch;
`;
