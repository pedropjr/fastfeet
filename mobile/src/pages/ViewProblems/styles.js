import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px 15px;
`;

export const Titulo = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

export const ProblemList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
