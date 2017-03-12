import React, { PropTypes, Component } from 'react';
import {
  LayoutAnimation,
  Image as ReactImage,
//   StatusBar,
//   Modal,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
//   StyleSheet,
  ActivityIndicator
} from 'react-native';
// import {
//   Card,
//   CardItem,
//   Left,
//   Body,
//   Thumbnail,
//   Text,
//   Button,
//   Icon,
//   Right,
//   H1,
//   H2,
//   H3
// } from 'native-base';

import {
  Spinner,
  Tile,
  Row,
  Image,
  Title,
  Subtitle,
  Caption,
  View,
  Button,
  Icon,
  Card,
  TouchableOpacity,
  ListView,
  Divider,
  NavigationBar,
} from '@shoutem/ui';

import * as Animatable from 'react-native-animatable';
import CarouselControl from 'react-native-carousel-control';

export default class Carousel extends Component {

  static propTypes = {
    topicBundle: PropTypes.object.isRequired,
    // counter: PropTypes.number.isRequired,
    // userName: PropTypes.string,
    // userProfilePhoto: PropTypes.string,
    // loading: PropTypes.bool.isRequired,
    // counterStateActions: PropTypes.shape({
    //   increment: PropTypes.func.isRequired,
    //   reset: PropTypes.func.isRequired,
    //   random: PropTypes.func.isRequired
    // }).isRequired,
  };

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  onCloseCarousel = () => {
    this.setState({
      isInTopicBundleView: false,
      selectedTopicBundleIndex: null,
    })
  }

  renderTopicBundleCarousel() {
    const { params } = this.props.navigation.state;

    let carousel = []
    let topicBundle = params.topicBundle
    for (let article of topicBundle) {
      let articleCard = (<View style={{ flex: 1, backgroundColor: 'green'}}/>);
      carousel.push(articleCard);
    }
    return carousel.length == 0 ? null : carousel;
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black'}}>
        <CarouselControl>
          {this.renderTopicBundleCarousel()}
        </CarouselControl>
      </View>
    );
  }
}
