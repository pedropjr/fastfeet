import styled from 'styled-components/native';

export const Container = styled.View`
  height: 46px;
  flex-direction: row;
  background: #fff;
  border-radius: 4px;
  padding: 0 15px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#666',
})`
  flex: 1;
  color: #333;
  font-size: 16px;
`;
