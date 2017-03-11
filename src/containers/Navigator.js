import { StackNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen'
import Carousel from '../components/Carousel'
import ArticlePage from '../components/ArticlePage'

const routeConfigs = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Facebook',
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
}

const stackNavigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'screen',
  mode: 'modal',
}

const Navigator = StackNavigator(routeConfigs, stackNavigatorConfig);

export default Navigator;
