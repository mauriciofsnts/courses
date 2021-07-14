import create from 'zustand';

export const useHousesStore = create(set => ({
  offset: 0,
  setOffset: offset => set({offset}),

  houseList: [],
  setHouseList: houseList => set({houseList}),

  selectedHouse: null,
  setSelectedHouse: selectedHouse => set({selectedHouse}),

  loadingHouseList: true,
  setLoadingHouseList: loadingHouseList => set({loadingHouseList}),

  query: null,
  setQuery: query => set({query}),
}));
