import styled from 'styled-components/native';

const BaseText = styled.Text`
  margin-top: ${({theme, mt}) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({theme, mb}) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({theme, ml}) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({theme, mr}) => theme.metrics.px(mr || 0)}px;
`;

export const Title = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(28)}px;
  color: white;
  font-weight: bold;
  font-family: 'Montserrat-Bold';
`;

export const InputLabel = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(14)}px;
  color: white;
  font-family: 'Montserrat-SemiBold';
`;

export const InputSectionLabel = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(16)}px;
  color: white;
  font-family: 'Montserrat-SemiBold';
`;

export const ButtonText = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(22)}px;
  color: white;
  font-family: 'Montserrat-Bold';
`;

// Detail Texts

export const DetailTitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(24)}px;
  color: white;
  font-family: 'Montserrat-Bold';
`;

export const DetailText = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(14)}px;
  color: white;
  font-family: 'Montserrat-Regular';
`;

export const DetailSubTitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(18)}px;
  color: white;
  font-family: 'Montserrat-SemiBold';
`;

export const DetailSectionTitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(20)}px;
  color: white;
  font-family: 'Montserrat-SemiBold';
`;

// Cards Texts

export const CardTitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(14)}px;
  color: white;
  font-family: 'Montserrat-Bold';
`;

export const CardDescription = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(10)}px;
  color: white;
  font-family: 'Montserrat-Regular';
`;

export const CardHightLightText = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(16)}px;
  color: white;
  font-family: 'Montserrat-Bold';
`;
