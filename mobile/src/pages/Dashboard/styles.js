import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  padding: 15px 30px;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 82px;
  height: 82px;
  border-radius: 41px;
`;

export const Info = styled.View``;

export const LogoutButton = styled(TouchableOpacity)``;

export const Message = styled.Text`
  color: #666;
  font-size: 12px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const FilterBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const Right = styled.View`
  flex-direction: row;
`;

export const Filter = styled(TouchableOpacity)``;

export const FilterText = styled.Text`
  color: ${(props) => (props.selected ? '#7159c1' : '#999')};
  font-weight: bold;
  margin-left: 10px;
  text-decoration: underline;
`;

export const Deliveries = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
