import React, {useEffect, useState} from 'react';
import {
  ScreenContainer,
  TitleContainer,
  TopContainer,
  ContentContainer,
} from './styles';
import {
  Title,
  IconButton,
  Input,
  HouseList,
  Loader,
  FilterModal,
} from '../../common/';
import {useHousesHooks} from '../../services/hooks';
import {useHousesStore} from '../../services/stores';

export const HomeScreen = () => {
  const {houseList, loadingHouseList} = useHousesStore();
  const {onGetHouses} = useHousesHooks();

  const [filterModalVisible, setFilterModalVisible] = useState(false);

  useEffect(() => {
    onGetHouses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openFilterModal = () => setFilterModalVisible(true);
  const closeFilterModal = () => setFilterModalVisible(false);

  return (
    <ScreenContainer>
      <HouseList data={houseList} onEndReached={onGetHouses}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>

            <IconButton iconName="filter" onPress={openFilterModal} />
          </TopContainer>

          <Input label="Localização" placeholder="Digite o endereço" />

          {loadingHouseList && <Loader />}
        </ContentContainer>
      </HouseList>

      {filterModalVisible && (
        <FilterModal visible={filterModalVisible} onClose={closeFilterModal} />
      )}
    </ScreenContainer>
  );
};
