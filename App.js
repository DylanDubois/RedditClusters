import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const variables = require('./variables.js');

import HomeScreen from './screens/HomeScreen';
import ClusterScreen from './screens/ClusterScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Cluster: { screen: ClusterScreen }
}, {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: variables.colors.primaryColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: variables.fontStyles.header,
    },
  });

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
