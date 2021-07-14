import styled from 'styled-components';

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${({theme, mt}) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({theme, mb}) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({theme, ml}) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({theme, mr}) => theme.metrics.px(mr || 0)}px;
`;

export const InputText = styled.TextInput`
  height: ${({theme}) => theme.metrics.px(48)}px;
  border-radius: ${({theme}) => theme.metrics.px(12)}px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.backgroundLight};
  margin-top: ${({theme}) => theme.metrics.px(12)}px;
  font-size: ${({theme}) => theme.metrics.px(16)}px;
  color: white;
  padding-left: ${({theme}) => theme.metrics.px(12)}px;
  font-family: 'Montserrat-Regular';
`;
