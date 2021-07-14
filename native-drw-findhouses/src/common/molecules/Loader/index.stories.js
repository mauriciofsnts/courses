import styled from 'styled-components/native';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import {Loader} from './index';
import React from 'react';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  padding: ${({theme}) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('Loaders', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standart', () => {
  const loadingText = text('Text', 'Loading..');
  return <Loader text={loadingText} />;
});
