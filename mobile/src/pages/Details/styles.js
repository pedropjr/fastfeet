import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 5px 20px;
  justify-content: space-evenly;
`;

export const Top = styled.View`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px;
  background: #fff;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const TextoTitulo = styled.Text`
  color: #7159c1;
  padding-left: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const Texto = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #777;
  margin-bottom: 3px;
`;

export const Info = styled.Text`
  font-size: 15px;
  color: #666;
  padding-left: 5px;
  margin-bottom: 7px;
`;

export const Middle = styled.View`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px;
  background: #fff;
`;

export const Datas = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DataContainer = styled.View``;

export const Bottom = styled.View`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  background: #fff;
`;

export const ButtonContainer = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
`;

export const Legenda = styled.Text`
  text-align: center;
  font-size: 15px;
  color: #666;
`;

export const TakeDelivery = styled(Button)`
  background: #12e038;
  color: #fff;
`;
