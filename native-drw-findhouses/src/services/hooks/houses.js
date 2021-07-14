import {getHousesCall} from '../calls';
import {useHousesStore} from '../stores';

export const useHousesHooks = () => {
  const {
    setHouseList,
    setLoadingHouseList,
    offset,
    setOffset,
    houseList,
    query,
    setQuery,
  } = useHousesStore();

  const onGetHouses = async () => {
    setLoadingHouseList(true);
    const result = await getHousesCall({
      ...query,
      offset,
    });

    if (offset > 0) {
      setHouseList(
        result.properties ? [...houseList, ...result.properties] : houseList,
      );
    } else {
      setHouseList(result.properties ? result.properties : []);
    }

    setLoadingHouseList(false);
    setOffset(offset + 15);
  };

  const onFilterHousesList = async receivedQuery => {
    setLoadingHouseList(true);
    setQuery(receivedQuery);

    if (receivedQuery !== query) {
      setHouseList([]);
      setOffset(0);
    }

    const result = await getHousesCall({
      query: receivedQuery,
      offset,
    });
    setHouseList(result.properties ? result.properties : []);
    setLoadingHouseList(false);
  };

  return {
    onGetHouses,
    onFilterHousesList,
  };
};
