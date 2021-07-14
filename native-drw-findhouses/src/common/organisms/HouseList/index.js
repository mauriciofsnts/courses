import React from 'react';
import {HouseCard} from '../../molecules';
import {HouseListContainer} from './styles';

export const HouseList = ({data, children, loading, onEndReached}) => {
  return (
    <HouseListContainer
      data={data}
      onEndReached={onEndReached}
      refreshing={loading}
      renderItem={({item}) => (
        <HouseCard
          item={item}
          title={item.address.line}
          description={`${item.address.neighborhood_name} - ${item.address.state}`}
          price={item.community.price_max ? item.community.price_max : 0}
          imgSource={item.photos[0].href}
        />
      )}
      keyExtractor={item => item.property_id}
      ListHeaderComponent={children}
    />
  );
};
