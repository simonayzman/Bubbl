import codePush from 'react-native-code-push';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppViewContainer from './src/containers/AppViewContainer';

class Bubbl extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}

Bubbl = codePush(Bubbl);

AppRegistry.registerComponent('Bubbl', () => Bubbl);
