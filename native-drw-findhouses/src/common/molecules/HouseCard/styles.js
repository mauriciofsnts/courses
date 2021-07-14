import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  width: ${({theme}) => theme.metrics.wp(86)}px;
  height: ${({theme}) => theme.metrics.px(240)}px;
  border-radius: ${({theme}) => theme.metrics.px(24)}px;
  background-color: ${({theme}) => theme.colors.backgroundLight};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: ${({theme}) => theme.metrics.px(24)}px;
  overflow: hidden;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 70%;
`;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-vertical: ${({theme}) => theme.metrics.px(12)}px;
  padding-horizontal: ${({theme}) => theme.metrics.px(14)}px;
  height: 30%;
`;

export const TextContainerLeft = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  height: 100%;
`;

export const TextContainerRight = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 30%;
  height: 100%;
`;
