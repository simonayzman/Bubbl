import React from 'react';
import { View, StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { getTheme } from '@shoutem/ui';
import { StyleProvider } from '@shoutem/theme';
import Navigator from './Navigator';
import _ from 'lodash';

export default function AppViewContainer() {
  const appTheme = _.merge(getTheme(), customTheme);
  return (
    <StyleProvider style={appTheme}>
      <Navigator />
    </StyleProvider>
  );
}

const customTheme = {
  defaultFont: {
    fontFamily: 'Helvetica',
  },
  // 'shoutem.ui.Card': {
  //     // card component variants
  //     '.dark': {
  //       backgroundColor: '#000'
  //     },
  //
  //     '.light': {
  //       backgroundColor: '#fff'
  //     },
  //
  //     // style variant available to child components of any type
  //     '*.card-content': {
  //       padding: 15
  //     },
  //
  //     // style that will be applied to all child image components
  //     'shoutem.ui.Image': {
  //       flex: 1,
  //       resizeMode: 'cover',
  //     },
  //
  //     // style variant available to child image comoponents
  //     'shoutem.ui.Image.banner': {
  //       height: 85
  //     },
  //
  //     // default card style, we usually place these rules at the bottom
  //     backgroundColor: '#fff',
  //     borderRadius: 2,
  //
  //     // card shadow style
  //     shadowColor: 'black',
  //     shadowRadius: 9,
  //     shadowOpacity: 0.3,
  //     shadowOffset: { width: 5, height: 7 }
  //   },
};