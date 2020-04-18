import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;
export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  align-self: center;
  margin: 60px 0 30px;
`;
export const Label = styled.Text`
  color: #999;
  font-size: 12px;
  margin-bottom: 5px;
`;
export const Info = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #666;
  margin-bottom: 10px;
`;

export const LogoutButton = styled(Button)`
  background: red;
  margin-top: 30px;
`;
