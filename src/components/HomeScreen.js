import React, { Component, PropTypes } from 'react';
import {
  LayoutAnimation,
  Image as ReactImage,
  TouchableOpacity as ReactTouchableOpacity,
  ActivityIndicator
} from 'react-native';
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
} from '@shoutem/ui';

import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-carousel-control';

export default class HomeScreen extends Component {

  constructor() {
    super();

    this.state = {
      fakeRows: this.buildFakeRows(),
      isLoading: true,
      topicBundles: [],
      selectedTopicBundleIndex: null,
      isInTopicBundleView: false,
    };

    this.buildTopicBundles()
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  buildTopicBundles = () => {
    let promises = [];
    promises.push(fetch("https://bubbl-server.herokuapp.com/news/bundle?search=trump"))
    promises.push(fetch("https://bubbl-server.herokuapp.com/news/bundle?search=isis"))
    promises.push(fetch("https://bubbl-server.herokuapp.com/news/bundle?search=judge"))
    promises.push(fetch("https://bubbl-server.herokuapp.com/news/bundle?search=wiretap"))
    promises.push(fetch("https://bubbl-server.herokuapp.com/news/bundle?search=obamacare"));
    Promise.all(promises)
      .then((responses) => {
        let jsonResponses = []
        for (let response of responses) {
          let promise = response.json()
          jsonResponses.push(promise)
        }
        return Promise.all(jsonResponses)
      })
      .then((responseTopicBundles) => {
        let topicBundles = responseTopicBundles.map((json) => json.newsStories)
        this.setState({
          topicBundles,
          isLoading: false,
        });
      }
    );
  }

  buildFakeRows() {
    let rows = [
      require('../../images/ad.png'),
      require('../../images/event.png'),
      require('../../images/photoAlbum.png'),
      require('../../images/instagramPhoto.png'),
    ];
    let transformedRows = rows.map((element) => ({ isFakeRow: true, source: element }))
    return transformedRows;
  }

  getCurrentSelectedTopicBundle() {
    return this.state.topicBundles[this.state.selectedTopicBundleIndex]
  }

  getMiddleArticleInTopicBundle(topicBundle) {
    let middleIndex = this.getMiddleArticleIndexInTopicBundle(topicBundle)
    return topicBundle[middleIndex];
  }

  getMiddleArticleIndexInTopicBundle(topicBundle) {
    return Math.floor((topicBundle.length - 1) / 2)
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

    let topicBundle = this.state.topicBundles[selectedTopicBundleIndex]
    this.props.navigation.navigate('Carousel', { topicBundle })

    // this.refs.baseFeed.fadeOutUpBig(500).then(() => {
    //   this.setState({
    //     isInTopicBundleView: true,
    //     selectedTopicBundleIndex,
    //   });
    // })
  }

  onCloseCarousel = () => {
    this.setState({
      isInTopicBundleView: false,
      selectedTopicBundleIndex: null,
    })
  }

  onFlipCard = () => {

  }

  randomShuffle(array) {
    let shuffledArray = array;
    var currentIndex = shuffledArray.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }

    return shuffledArray;
  }

  renderFeed() {
    if (this.state.isLoading) {
      return (
        <Spinner
          styleName='v-center h-center'
          size={'large'}
          style={{ height: 80 }}
        />
      )
    }

    let baseFeed = []
    for (let currentTopicBundle of this.state.topicBundles) {
      let article = this.getMiddleArticleInTopicBundle(currentTopicBundle)
      baseFeed.push(article);
    }

    if (baseFeed.length == 0) {
      return null
    }

    let combinedFeed = baseFeed.concat(this.state.fakeRows);
    let randomizedFeed = this.randomShuffle(combinedFeed);

    return (
      <ListView
        data={randomizedFeed}
        loading={this.state.isLoading}
        renderRow={this.renderFeedRow}
        renderHeader={this.renderFeedHeader}
      />
    );
  }

  renderFeedHeader = () => {
    return (
      <View>
        <Image source={require('../../images/prompt.png')} style={{ alignSelf: 'center'}}/>
        <Image source={require('../../images/topAction.png')} style={{ alignSelf: 'center'}}/>
        <Divider style={{ backgroundColor: 'transparent' }} />
      </View>
    )
  }

  renderFeedRow = (data) => {
    let row = null
    if (data.isFakeRow) {
      row = this.renderFakeRow(data);
    } else {
      row = this.renderArticleCard(data);
    }
    return (
      <View>
        {row}
        <Divider style={{ backgroundColor: 'transparent' }} />
      </View>
    );
  }

  renderFakeRow = (fakeData) => {
    return (<Image source={fakeData.source} style={{ alignSelf: 'center'}}/>);
  }

  renderArticleCard = (article) => {
    return (
      <View key={article.canonicalUrl}>
        <Row style={{ padding: 10 }}>
          <View>
            <TouchableOpacity
              onLongPress={() => { this.onShowCarousel(article) }}
              delayLongPress={600}
              activeOpacity={0.1}
              style={{ flexDirection: 'row' }}
            >
              <Image
                styleName="rounded-corners"
                style={{ width: 50, height: 50, margin: 0 }}
                source={{ uri: article.sourceThumbnail }}
              />
              <View styleName="vertical stretch" style={{ marginHorizontal: 10, marginVertical: 5, }}>
                <Title>{article.source}</Title>
                <Subtitle style={{ color: 'gray' }}>{article.date}</Subtitle>
              </View>
            </TouchableOpacity>
          </View>
          <Button styleName="right-icon">
            <Icon name='share' style={{ fontSize: 40 }}/>
          </Button>
        </Row>
        <Tile>
          <ReactTouchableOpacity
            onPress={() => { this.props.navigation.navigate('ArticlePage', { url: article.canonicalUrl }) }}
            onLongPress={() => { this.onShowCarousel(article) }}
            delayLongPress={600}
            activeOpacity={0.9}
          >
            <Image
              styleName="large-banner"
              source={{ uri: article.image }}
            />
            <View styleName="content">
              <Title styleName="bold">{article.headline}</Title>
              <Subtitle>{article.description}</Subtitle>
            </View>
          </ReactTouchableOpacity>
        </Tile>
      </View>
    );
  }

  renderTopicBundleCarousel() {
    let carousel = []
    let topicBundle = this.getCurrentSelectedTopicBundle()
    for (let article of topicBundle) {
      let articleCard = this.renderArticleCard(article)
      carousel.push(articleCard);
    }
    return carousel.length == 0 ? null : carousel;
  }

  renderCarouselView() {
    let topicBundle = this.getCurrentSelectedTopicBundle();
    let middleArticleIndex = this.getMiddleArticleIndexInTopicBundle(topicBundle);
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
      bodyContent = this.renderFeed()
    }

    return bodyContent;
  }
}
