import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SplashScreen, DetailScreen} from '../screens';

export const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
