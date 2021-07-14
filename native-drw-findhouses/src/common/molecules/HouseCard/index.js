import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';
import {useHousesStore} from '../../../services/stores';
import {CardTitle, CardDescription, CardHightLightText} from '../../atoms';

export const HouseCard = ({imgSource, title, description, price, item}) => {
  const {setSelectedHouse} = useHousesStore();
  const navigation = useNavigation();

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const onClickItemContainer = () => {
    setSelectedHouse(item);
    navigation.navigate('Detail');
  };

  return (
    <CardContainer onPress={onClickItemContainer}>
      <CardImage source={{uri: imgSource}} />

      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHightLightText>
            {formattedPrice.format(price)}
          </CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
