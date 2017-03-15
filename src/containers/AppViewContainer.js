import React from 'react';
import { Navigator } from 'react-native';
import { Router, Scene, Modal } from 'react-native-router-flux';
import { getTheme } from '@shoutem/ui';
import { StyleProvider } from '@shoutem/theme';
import _ from 'lodash';

import HomeScreen from '../components/HomeScreen';
import ArticlePage from '../components/ArticlePage';
import TopicBundleCarousel from '../components/TopicBundleCarousel';
import MainTheme from '../themes';

export default function AppViewContainer() {
  const appTheme = _.merge(getTheme(), MainTheme);
  const navHeight = Navigator.NavigationBar.Styles.General.TotalNavHeight;
  return (
    <StyleProvider style={appTheme}>
      <Router navigationBarStyle={{ backgroundColor: '#3B5998' }} titleStyle={{ color: 'white' }}>
        <Scene key="modal" component={Modal}>
          <Scene key="root">
            <Scene key="home" initial component={HomeScreen} title={'🤔'} sceneStyle={{ marginTop: navHeight }} />
            <Scene key="article" component={ArticlePage} sceneStyle={{ marginTop: navHeight }} />
            <Scene key="topic" component={TopicBundleCarousel} direction={'vertical'} hideNavBar />
          </Scene>
        </Scene>
      </Router>
    </StyleProvider>
  );
}
