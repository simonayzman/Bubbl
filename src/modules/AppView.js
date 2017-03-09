import React, {PropTypes, Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import NavigationViewContainer from './navigation/NavigationViewContainer';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';

import { ScrollView, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Container, Content, Card, CardItem, Left, Body, Thumbnail, Text, Button, Icon, Right, H1, H2, H3 } from 'native-base';

import Carousel from 'react-native-carousel-control';
import SampleData from './SampleData';

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor() {
    super();
    let topicBundles = this.buildTopicBundles()
    this.state = {
      topicBundles,
      selectedTopicBundleIndex: null,
      isInTopicBundleView: false,
    };
  }

  componentDidMount() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const {dispatch} = this.props;

        if (snapshot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  }

  buildTopicBundles() {
    let allTopicBundles = []
    for (let currentTopicBundle of SampleData) {
      let topicBundle = [];
      var currentArticle;
      for (var strength = 5; strength > 0; strength--) {
        let opinionType = "l";
        let opinionValue = opinionType + strength;
        currentArticle = currentTopicBundle[opinionValue]
        if (currentArticle != undefined) {
          currentArticle.opinionValue = opinionValue;
          topicBundle.push(currentArticle);
        }
      }
      currentArticle = currentTopicBundle["n"]
      if (currentArticle != undefined) {
        currentArticle.opinionValue = "n";
        topicBundle.push(currentArticle);
      }
      for (var strength = 1; strength <= 5; strength++) {
        let opinionType = "c";
        let opinionValue = opinionType + strength;
        currentArticle = currentTopicBundle[opinionValue]
        if (currentArticle != undefined) {
          currentArticle.opinionValue = opinionValue;
          topicBundle.push(currentArticle);
        }
      }
      allTopicBundles.push(topicBundle);
    }
    return allTopicBundles;
  }

  renderBaseFeed() {
    let baseFeed = []
    for (let currentTopicBundle of this.state.topicBundles) {
      let article = this.getMiddleArticleInTopicBundle(currentTopicBundle)
      let articleCard = this.renderArticleCard(article)
      console.log(articleCard)
      baseFeed.push(articleCard);
    }
    return baseFeed
  }

  renderTopicBundleCarousel() {
    let carousel = []
    let topicBundle = this.state.topicBundles[this.state.selectedTopicBundleIndex]
    for (let article of topicBundle) {
      let articleCard = this.renderArticleCard(article)
      carousel.push(articleCard);
    }
    return carousel
  }

  getMiddleArticleInTopicBundle(topicBundle) {
    let numberOfArticles = topicBundle.length
    let middleArticleIndex = Math.floor(numberOfArticles / 2)
    return topicBundle[middleArticleIndex];
  }

  onLongPress = () => {
    console.log("Long press achieved.")
  }

  onShowCarousel = () => {

  }

  onFlipCard = () => {

  }

  renderArticleCard(article) {
    return (
      <Card key={article.canonicalUrl}>
        <CardItem style={{ padding: 0 }}>
          <Left>
            <TouchableOpacity
              onLongPress={this.onLongPress}
              delayLongPress={600}
              activeOpacity={0.5}
              style={{flexDirection: "row" }}
            >
              <Thumbnail source={{ uri: article.sourceThumbnail}} />
              <Body>
                <Text>{article.source}</Text>
                <Text note>{article.date}</Text>
              </Body>
            </TouchableOpacity>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <TouchableOpacity
              onLongPress={this.onLongPress}
              delayLongPress={600}
              activeOpacity={0.5}
            >
              <Image
                style={{ width: 400, height: 200, alignSelf: "center" }}
                source={{ uri: article.image}}
              />
              <Text>{article.headline}</Text>
              <Text note>{article.description}</Text>
            </TouchableOpacity>
          </Body>
        </CardItem>
      </Card>
    );
  }

  render() {
    console.log(this.state)

    var bodyContent = null
    if (this.state.isInTopicBundleView) {
      let carousel = this.renderTopicBundleCarousel()
      bodyContent = (
        <Carousel>
          {carousel}
        </Carousel>
      );
    } else {
      let feed = this.renderBaseFeed()
      bodyContent = (
        <View>
          {feed}
        </View>
      );
      console.log(feed)
    }

    return (
      <Container>
        <Content>
          {bodyContent}
        </Content>
      </Container>
    );

/*
    if (!this.props.isReady) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator style={styles.centered} />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <NavigationViewContainer />
        {__DEV__ && <DeveloperMenu />}
      </View>
    );
*/
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default AppView;
