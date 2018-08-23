import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Home from './src/Home/Home';
import Header from './src/Header/Header';
import Extra from './src/Extra/Extra'

export default TabNavigator(
  {
    Home: { screen: Home },
    Extra: { screen: Extra },
  },
  {

    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);