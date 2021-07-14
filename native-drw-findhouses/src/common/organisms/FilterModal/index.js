import React, {useState} from 'react';
import {Modal, Input, InputSectionLabel, Button} from '../../';
import {FilterContainer, InputsRowContainer, InputRowItem} from './styles';
import {useHousesHooks} from '../../../services/hooks';

export const FilterModal = ({onClose, visible}) => {
  const {onFilterHousesList} = useHousesHooks();

  const [sizeMin, setSizeMin] = useState();
  const [sizeMax, setSizeMax] = useState();
  const [priceMin, setPriceMin] = useState();
  const [priceMax, setPriceMax] = useState();
  const [bedsMin, setBedsMin] = useState();
  const [bathsMin, setBathsMin] = useState();

  const onClickApply = () => {
    onFilterHousesList({
      sizeMin,
      sizeMax,
      priceMin,
      priceMax,
      bedsMin,
      bathsMin,
    });
  };

  return (
    <Modal onClose={onClose} visible={visible} title="Filtrar">
      <FilterContainer>
        <InputSectionLabel mt={12} mb={6}>
          Tamanho
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              keyboardType="numeric"
              label="Minimo"
              placeholder="Ex: 77"
              value={sizeMin}
              onChangeText={t => setSizeMin(t)}
            />
          </InputRowItem>

          <InputRowItem>
            <Input
              keyboardType="numeric"
              label="Maximo"
              placeholder="Ex: 200"
              value={sizeMax}
              onChangeText={t => setSizeMax(t)}
            />
          </InputRowItem>
        </InputsRowContainer>

        <InputSectionLabel mt={12} mb={6}>
          Preço
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              keyboardType="numeric"
              label="Minimo"
              placeholder="Ex: 500"
              value={priceMin}
              onChangeText={t => setPriceMin(t)}
            />
          </InputRowItem>

          <InputRowItem>
            <Input
              keyboardType="numeric"
              label="Maximo"
              placeholder="Ex: 2000"
              value={priceMax}
              onChangeText={t => setPriceMax(t)}
            />
          </InputRowItem>
        </InputsRowContainer>

        <InputSectionLabel mt={12} mb={6}>
          Quartos
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              keyboardType="numeric"
              label="Minimo"
              placeholder="Ex: 2"
              value={bedsMin}
              onChangeText={t => setBedsMin(t)}
            />
          </InputRowItem>
        </InputsRowContainer>

        <InputSectionLabel mt={12} mb={6}>
          Banheiros
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              keyboardType="numeric"
              label="Minimo"
              placeholder="Ex: 1"
              value={bathsMin}
              onChangeText={t => setBathsMin(t)}
            />
          </InputRowItem>
        </InputsRowContainer>
      </FilterContainer>

      <Button mt={24} onPress={onClickApply}>
        Aplicar
      </Button>
    </Modal>
  );
};
