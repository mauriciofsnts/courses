import styled from 'styled-components/native';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import {HouseFeatureCard} from './index';
import React from 'react';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  padding: ${({theme}) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('Cards', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Feature Card', () => {
  const icon = text('icon', 'filter');
  const label = text('featureCard', 'Ar condicionado');
  return <HouseFeatureCard icon={icon} featureText={label} />;
});
