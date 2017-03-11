import { StackNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen'

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
});

export default Navigator;
