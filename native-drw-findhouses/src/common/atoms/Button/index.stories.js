import styled from 'styled-components/native';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import {Button} from './index';
import React from 'react';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  padding: ${({theme}) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('Button', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standart', () => {
  const value = text('TextButton', 'Aplicar');
  return <Button> {value} </Button>;
});
