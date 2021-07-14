import api from './api';

export const getHousesCall = async query => {
  const {
    sizeMin,
    sizeMax,
    priceMin,
    priceMax,
    bedsMin,
    bathsMin,
    offset,
  } = query;

  let baseQuery = `properties/v2/list-for-rent?city=Miami&state_code=FL&limit=15&offset=${offset}&sort=relevance`;

  if (sizeMin) {
    baseQuery += `&sqft_min=${sizeMin}`;
  }

  if (sizeMax) {
    baseQuery += `&sqft_max=${sizeMax}`;
  }

  if (priceMin) {
    baseQuery += `&price_min=${priceMin}`;
  }

  if (priceMax) {
    baseQuery += `&price_max=${priceMax}`;
  }

  if (bedsMin) {
    baseQuery += `&beds_min=${bedsMin}`;
  }

  if (bathsMin) {
    baseQuery += `&baths_min=${bathsMin}`;
  }

  try {
    const result = await api.get(baseQuery);

    return result.data;
  } catch (error) {
    return error;
  }
};

export const getHouseDetail = async property_id => {
  try {
    const result = await api.get(
      'properties/v2/detail?property_id=' + property_id,
    );

    return result.data;
  } catch (error) {
    return error;
  }
};
