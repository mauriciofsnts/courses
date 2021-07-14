import styled from 'styled-components/native';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import {
  Title,
  ButtonText,
  InputLabel,
  InputSectionLabel,
  CardDescription,
  CardHightLightText,
  CardTitle,
  DetailSectionTitle,
  DetailSubTitle,
  DetailText,
  DetailTitle,
} from './index';
import React from 'react';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundDark};
`;

const stories = storiesOf('Text', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Title', () => {
  const value = text('Text', 'Exemplo de texto');
  return <Title>{value}</Title>;
});

stories.add('InputLabel', () => {
  const value = text('Text', 'Exemplo de texto');
  return <InputLabel>{value}</InputLabel>;
});

stories.add('InputSectionLabel', () => {
  const value = text('Text', 'Exemplo de texto');
  return <InputSectionLabel>{value}</InputSectionLabel>;
});

stories.add('ButtonText', () => {
  const value = text('Text', 'Exemplo de texto');
  return <ButtonText>{value}</ButtonText>;
});

// Cards texts

stories.add('CardTitle', () => {
  const value = text('CardTitle', 'Exemplo de texto');
  return <CardTitle>{value}</CardTitle>;
});

stories.add('CardDescription', () => {
  const value = text('CardDescription', 'Exemplo de texto');
  return <CardDescription>{value}</CardDescription>;
});

stories.add('CardHightLightText', () => {
  const value = text('CardHightLightText', 'Exemplo de texto');
  return <CardHightLightText>{value}</CardHightLightText>;
});

// Detail texts

stories.add('DetailSectionTitle', () => {
  const value = text('DetailSectionTitle', 'Exemplo de texto');
  return <DetailSectionTitle>{value}</DetailSectionTitle>;
});

stories.add('DetailSubTitle', () => {
  const value = text('DetailSubTitle', 'Exemplo de texto');
  return <DetailSubTitle>{value}</DetailSubTitle>;
});

stories.add('DetailText', () => {
  const value = text('DetailText', 'Exemplo de texto');
  return <DetailText>{value}</DetailText>;
});

stories.add('DetailTitle', () => {
  const value = text('DetailTitle', 'Exemplo de texto');
  return <DetailTitle>{value}</DetailTitle>;
});
