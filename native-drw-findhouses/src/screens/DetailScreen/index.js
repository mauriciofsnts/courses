import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {
  IconButton,
  DetailSectionTitle,
  DetailSubTitle,
  DetailText,
  DetailTitle,
  HouseFeatureCard,
  Loader,
} from '../../common';
import {
  ScreenContainer,
  BottomScreenContainer,
  FeaturesContainer,
  ImageBackground,
} from './styles';

import {getHouseDetail} from '../../services/calls';
import {useHousesStore} from '../../services/stores';
import {
  getIfHouseIsFavorite,
  saveHouseAsFavorite,
  removeHouseAsFavorite,
} from '../../services/db';

export const DetailScreen = ({navigation}) => {
  const {selectedHouse} = useHousesStore();

  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [houseDetail, setHouseDetail] = useState(false);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const callGetHouseDetail = async () => {
    const result = await getHouseDetail(selectedHouse.property_id);
    setHouseDetail(result.properties[0]);
    setLoading(false);
  };

  const checkIfHouseIsFavorite = async () => {
    const isFavorite = await getIfHouseIsFavorite(selectedHouse.property_id);
    setFavorite(isFavorite);
  };

  const saveFavoriteHouse = async () => {
    if (favorite) {
      await removeHouseAsFavorite(selectedHouse.property_id);
      Alert.alert('Imóvel removido como favorito com sucesso!');
      setFavorite(false);
    } else {
      await saveHouseAsFavorite(selectedHouse.property_id);
      Alert.alert('Imóvel salvo como favorito com sucesso!');
      setFavorite(true);
    }
  };

  useEffect(() => {
    callGetHouseDetail();
    checkIfHouseIsFavorite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickArrowBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <ImageBackground source={{uri: selectedHouse.photos[0].href}}>
        <IconButton
          iconName="chevron-back"
          transparent
          onPress={onClickArrowBack}
        />

        <IconButton
          iconName={favorite ? 'star' : 'star-outline'}
          transparent
          onPress={saveFavoriteHouse}
          fill={favorite}
        />
      </ImageBackground>

      {loading ? (
        <Loader />
      ) : (
        <BottomScreenContainer>
          <DetailTitle>{houseDetail.address.line}</DetailTitle>

          <DetailSubTitle>
            {formattedPrice.format(houseDetail.community.price_max)} / mo
          </DetailSubTitle>
          <DetailText>{`${houseDetail.address.neighborhood_name} - ${houseDetail.address.state}`}</DetailText>

          <DetailSectionTitle mt={24} mb={12}>
            Detalhes
          </DetailSectionTitle>

          <FeaturesContainer>
            <HouseFeatureCard
              iconName="arrow-collapse-all"
              featureText={`${houseDetail.lot_size.size} ${houseDetail.lot_size.units}`}
              iconLib="materialcommunity"
            />
            <HouseFeatureCard
              iconName="bed-king-outline"
              featureText={`${houseDetail.community.beds_min} - ${houseDetail.community.beds_max} beds`}
              iconLib="materialcommunity"
            />
            <HouseFeatureCard
              iconName="bath"
              featureText={`${houseDetail.community.baths_min} - ${houseDetail.community.baths_max} baths`}
              iconLib="fontawesome"
            />
          </FeaturesContainer>

          <DetailSectionTitle mt={24} mb={12}>
            Vantagens do Imóvel
          </DetailSectionTitle>

          {houseDetail.features[1].text.map(feature => {
            return (
              <DetailText mb={2} key={feature}>
                {feature}
              </DetailText>
            );
          })}
        </BottomScreenContainer>
      )}
    </ScreenContainer>
  );
};
