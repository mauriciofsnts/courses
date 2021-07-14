import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITE_KEY = '@FindHouses:Favorites';

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log({error});
  }
};

export const readData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.log({error});
  }
};

export const getIfHouseIsFavorite = async houseId => {
  const arrayFavorites = await readData(FAVORITE_KEY);

  if (arrayFavorites) {
    if (arrayFavorites.find(h => h === houseId)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const saveHouseAsFavorite = async houseId => {
  const savedFavorites = await readData(FAVORITE_KEY);

  if (savedFavorites) {
    if (savedFavorites.find(h => h === houseId)) {
      return {
        error: 'Imóvel já é favorito',
      };
    }

    savedFavorites.push(houseId);

    await saveData(FAVORITE_KEY, JSON.stringify(savedFavorites));
  } else {
    const newArray = new Array(houseId);
    const arrayFavorites = JSON.stringify(newArray);
    await saveData(FAVORITE_KEY, arrayFavorites);
  }

  return;
};

export const removeHouseAsFavorite = async houseId => {
  const savedFavorites = await readData(FAVORITE_KEY);

  if (savedFavorites) {
    if (savedFavorites.find(h => h === houseId)) {
      const newSavedFavorite = savedFavorites.filter(h => h !== houseId);
      await saveData(FAVORITE_KEY, JSON.stringify(newSavedFavorite));
    }
  } else {
    return {
      error: 'Imóvel não é favorito',
    };
  }

  return;
};
