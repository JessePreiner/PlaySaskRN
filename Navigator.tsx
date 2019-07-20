import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { HomeScreen, Games, Blog } from './App';

const AppNavigator = createBottomTabNavigator(
  {
      Home: { // personally set up shit
          screen: HomeScreen,

      },
      Games: { // games
          screen: Games,
      },
      Blog: { // blog
          screen: Blog,
      },
  },
  {
      initialRouteName: 'Home',
  },
);

export const AppContainer = createAppContainer(AppNavigator);