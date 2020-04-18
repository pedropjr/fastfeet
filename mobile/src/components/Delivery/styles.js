import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 15px 0 5px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  margin-left: 10px;
`;

export const Middle = styled.View`
  margin: 10px 0 20px;
`;

export const Bottom = styled.View`
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 20px 0;
`;

export const Data = styled.View`
  flex: 1;
  align-items: center;
`;

export const City = styled.View`
  flex: 1;
  align-items: center;
`;

export const DetailsButton = styled.View`
  flex: 1;
  align-items: center;
`;

export const Texto = styled.Text`
  font-size: 12px;
  color: #666;
  text-align: left;
`;

export const Info = styled.Text`
  font-size: 15px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;

export const Details = styled.Text`
  font-size: 15px;
  color: #7159c1;
  font-weight: bold;
`;
