import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid rgba(0, 0, 0, 0.07);
  background: #fff;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  margin-bottom: 10px;
`;

export const DescriptionContainer = styled.View`
  flex: 2;
`;

export const DataContainer = styled.View`
  flex: 1;
  margin-left: 5px;
`;

export const Description = styled.Text`
  color: #666;
  font-size: 20px;
`;

export const Date = styled.Text`
  text-align: right;
  color: #666;
  font-size: 16px;
`;
