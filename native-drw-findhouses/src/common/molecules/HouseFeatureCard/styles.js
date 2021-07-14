import styled from 'styled-components/native';

export const FeatureCardContainer = styled.View`
  height: ${({theme}) => theme.metrics.px(80)}px;
  width: ${({theme}) => theme.metrics.px(80)}px;
  background-color: ${({theme}) => theme.colors.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme}) => theme.metrics.px(6)}px;
`;
