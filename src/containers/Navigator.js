import { StackNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen'
import TopicBundleCarousel from '../components/TopicBundleCarousel'
import ArticlePage from '../components/ArticlePage'

const routeConfigs = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Bubbl',
      header: {
        titleStyle: {
          color: 'white',
        },
        style: {
          backgroundColor: '#3B5998',
        }
      }
    },
  },
  TopicBundleCarousel: {
    screen: TopicBundleCarousel,
    navigationOptions: {
      header: {
        visible: false,
      },
    },
  },
  ArticlePage: {
    screen: ArticlePage,
    navigationOptions: {
      header: {
        visible: false,
      },
    },
  }
}

const stackNavigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'screen',
  mode: 'modal',
}

const Navigator = StackNavigator(routeConfigs, stackNavigatorConfig);

export default Navigator;
