import React, {PropTypes, Component} from 'react';
import { LayoutAnimation, StatusBar, Modal, ScrollView, Image, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet, ActivityIndicator} from 'react-native';
import NavigationViewContainer from './navigation/NavigationViewContainer';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';

import { Container, Content, Card, CardItem, Left, Body, Thumbnail, Text, Button, Icon, Right, H1, H2, H3 } from 'native-base';
import * as Animatable from 'react-native-animatable';
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

    StatusBar.setHidden(true)
    this.state = {
      topicBundles: [],
      selectedTopicBundleIndex: null,
      isInTopicBundleView: false,
    };
    this.buildTopicBundles()
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

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  buildTopicBundles() {
    let promises = [];
    promises.push(fetch("https://bubbl-server.herokuapp.com/news/bundle?search=isis"))
    promises.push(fetch("https://bubbl-server.herokuapp.com/news/bundle?search=justice"))
    promises.push(fetch("https://bubbl-server.herokuapp.com/news/bundle?search=trump"))
    promises.push(fetch("https://bubbl-server.herokuapp.com/news/bundle?search=wiretap"))
    promises.push(fetch("https://bubbl-server.herokuapp.com/news/bundle?search=obamacare"));
    promises.push(fetch("https://bubbl-server.herokuapp.com/news/bundle?search=immigration"));
    promises.push(fetch("https://bubbl-server.herokuapp.com/news/bundle?search=refugee"));
    Promise.all(promises)
      .then((responses) => {
        let jsonResponses = []
        for (let response of responses) {
          console.log(response)
          let promise = response.json()
          jsonResponses.push(promise)
        }
        return Promise.all(jsonResponses)
      })
      .then((responseTopicBundles) => {
        console.log(responseTopicBundles)
        let topicBundles = responseTopicBundles.map((json) => json.newsStories)
        console.log(topicBundles)
        this.setState({ topicBundles });
      }
    );
  }

  renderBaseFeed() {
    let baseFeed = []
    for (let currentTopicBundle of this.state.topicBundles) {
      let article = this.getMiddleArticleInTopicBundle(currentTopicBundle)
      let articleCard = this.renderArticleCard(article)
      baseFeed.push(articleCard);
    }
    return baseFeed
  }

  renderTopicBundleCarousel() {
    let carousel = []
    let topicBundle = this.getCurrentSelectedTopicBundle()
    console.log(topicBundle)
    for (let article of topicBundle) {
      let articleCard = this.renderArticleCard(article)
      carousel.push(articleCard);
    }
    return carousel
  }

  getCurrentSelectedTopicBundle() {
    return this.state.topicBundles[this.state.selectedTopicBundleIndex]
  }

  getMiddleArticleInTopicBundle(topicBundle) {
    let middleIndex = this.getMiddleArticleIndexInTopicBundle(topicBundle)
    return topicBundle[middleIndex];
  }

  getMiddleArticleIndexInTopicBundle(topicBundle) {
    return Math.floor(topicBundle.length / 2)
  }

  // getRandomArticleInTopicBundle(topicBundle) {
  //   return Math.floor(Math.random() * topicBundle.length))
  // }

  // findArticleIndexInTopicBundle(topicBundle, article) {
  //   return topicBundle.findIndex((element))
  // }

  onShowCarousel = (article) => {
    var selectedTopicBundleIndex = null

    let index = 0;
    for (let currentTopicBundle of this.state.topicBundles) {
      for (let currentArticle of currentTopicBundle) {
        if (article.canonicalUrl === currentArticle.canonicalUrl) {
          selectedTopicBundleIndex = index
        }
      }
      index++;
    }

    this.refs.baseFeed.fadeOutUpBig(500).then(() => {
      this.setState({
        isInTopicBundleView: true,
        selectedTopicBundleIndex,
      });
    })
  }

  onCloseCarousel = () => {
    this.setState({
      isInTopicBundleView: false,
      selectedTopicBundleIndex: null,
    })
  }

  onFlipCard = () => {

  }

  renderArticleCard(article) {
    return (
      <Card key={article.canonicalUrl}>
        <CardItem style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
          <Left>
            <TouchableOpacity
              onLongPress={this.onLongPress}
              delayLongPress={600}
              activeOpacity={0.1}
              style={{flexDirection: "row" }}
            >
              <Thumbnail source={{ uri: article.sourceThumbnail}} />
              <View>
                <Text style={{ alignSelf: 'flex-start' }}>{article.source}</Text>
                <Text note>{article.date}</Text>
              </View>
            </TouchableOpacity>
          </Left>
          <Right>
            <Icon active name='ios-share-alt' style={{ color: 'gray', fontSize: 35 }} />
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <TouchableOpacity
              onLongPress={() => { this.onShowCarousel(article) }}
              delayLongPress={600}
              activeOpacity={0.5}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: this.state.isInTopicBundleView ? 300 : 400,
                  height: this.state.isInTopicBundleView ? 200 : 250,
                  alignSelf: "center"
                }}
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

  renderCarouselView() {
    let topicBundle = this.getCurrentSelectedTopicBundle();
    let middleArticleIndex = this.getMiddleArticleIndexInTopicBundle(topicBundle);
    console.log(topicBundle)
    console.log(middleArticleIndex)
    return (
      <View>
        <TouchableOpacity
          style={{ alignSelf: 'flex-end', padding: 10 }}
          onPress={this.onCloseCarousel}
          hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
        >
          <Icon active name='md-close' style={{ color: 'white', fontSize: 35 }} />
        </TouchableOpacity>
        <Carousel currentPage={middleArticleIndex}>
          {this.renderTopicBundleCarousel()}
        </Carousel>
      </View>
    );
  }

  render() {
    var bodyContent = null

    if (this.state.isInTopicBundleView) {
      bodyContent = this.renderCarouselView()
    } else {
      bodyContent = (
        <Animatable.View ref="baseFeed">
          {this.renderBaseFeed()}
        </Animatable.View>
      )
    }

    return (
      <Container>
        <Content style={{ backgroundColor: (this.state.isInTopicBundleView ? 'black' : 'transparent') }}>
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
