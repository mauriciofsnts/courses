import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import {DetailText} from '../../';
import {FeatureCardContainer} from './styles';

export const HouseFeatureCard = ({iconName, iconLib, featureText}) => {
  return (
    <FeatureCardContainer>
      {iconLib === 'fontawesome' && (
        <IconFontAwesome name={iconName} color="white" size={36} />
      )}
      {iconLib === 'materialcommunity' && (
        <Icon name={iconName} color="white" size={40} />
      )}
      <DetailText>{featureText}</DetailText>
    </FeatureCardContainer>
  );
};
