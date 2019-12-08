import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const variables = require('./variables.js');

import ExampleScreen from './screens/Example.js';

const MainNavigator = createStackNavigator({
  Example: { screen: ExampleScreen },
}, {
    initialRouteName: 'Example',
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
