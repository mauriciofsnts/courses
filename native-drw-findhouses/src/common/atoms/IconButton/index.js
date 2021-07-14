import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconButtonContainer} from './styles';
Icon.loadFont();

export const IconButton = ({transparent, iconName, onPress, fill}) => {
  return (
    <IconButtonContainer transparent={transparent} onPress={onPress}>
      <Icon name={iconName} color={fill ? 'yellow' : 'white'} size={20} />
    </IconButtonContainer>
  );
};
