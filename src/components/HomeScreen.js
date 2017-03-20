import React, { Component } from 'react';
import { AsyncStorage, LayoutAnimation } from 'react-native';
import { Image, View, ListView, Divider, Heading } from '@shoutem/ui';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-spinkit';

import TopicBundleCard from './TopicBundleCard';
import { randomShuffle } from '../services/random';

const TOPIC_BUNDLES_URL = 'https://bubbl-server.herokuapp.com/news/bundles'
const CACHED_TOPIC_BUNDLES_KEY = 'CACHED_TOPIC_BUNDLES_KEY';

export default class HomeScreen extends Component {

  constructor() {
    super();

    this.state = {
      isLoading: true,
      topicBundles: [],
    };
    this.retrieveCachedTopicBundles();
    this.fetchTopicBundles();
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  onOpenArticle = (topicBundle, articleIndex) => {
    const article = topicBundle.articles[articleIndex];
    Actions.article({ url: article.canonicalUrl });
  }

  onOpenCarousel = (topicBundle, articleIndex) => {
    Actions.topic({ topicBundle, initialArticleIndex: articleIndex });
  }

  retrieveCachedTopicBundles = () => {
    AsyncStorage.getItem(CACHED_TOPIC_BUNDLES_KEY)
      .then((topicBundlesString) => {
        if (topicBundlesString !== null) {
          const topicBundles = JSON.parse(topicBundlesString);
          console.log('Successfully retrieved cache: ', topicBundles);
          this.setState({ topicBundles });
        }
      });
  }

  fetchTopicBundles = () => {
    return fetch(TOPIC_BUNDLES_URL)
      .then(response => response.json())
      .then((topicBundles) => {
        console.log('Successfully fetched: ', topicBundles);
        const topicBundlesString = JSON.stringify(topicBundles);
        AsyncStorage.setItem(CACHED_TOPIC_BUNDLES_KEY, topicBundlesString);
        this.setState({
          topicBundles,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.warn(error)
        this.setState({ isLoading: false });
      });
  }

  renderFeedHeader = () => (
    <View>
      <Divider style={{ backgroundColor: 'transparent' }} />
      <Heading styleName={'md-gutter-left bold'} style={{ color: 'gray' }}>FEATURED STORIES</Heading>
      <Divider style={{ backgroundColor: 'transparent' }} />
    </View>
  )

  renderFeedRow = (data) => {
    let feedRow = null;
    if (data.isFakeRow) {
      feedRow = (<Image source={data.source} />);
    } else {
      feedRow = (
        <TopicBundleCard
          topicBundle={data}
          onPressContent={this.onOpenCarousel}
          onLongPressContent={this.onOpenArticle}
        />
      );
    }
    return (
      <View style={{ alignItems: 'center' }}>
        {feedRow}
        <Divider style={{ backgroundColor: 'transparent' }} />
      </View>
    );
  }

  renderLoader = () => {
    return (!this.state.isLoading) ? null : (
      <Spinner
        style={{ alignSelf: 'center', marginVertical: 25, backgroundColor: 'transparent' }}
        isVisible
        size={100}
        type={'Bounce'}
        color={'#3B5998'}
      />
    );
  }

  render() {
    if (this.state.topicBundles.length === 0) {
      return null;
    }

    const randomizedFeed = randomShuffle(this.state.topicBundles);

    return (
      <View style={{ flex: 1, backgroundColor: '#ededed' }}>
        {this.renderLoader()}
        <ListView
          data={randomizedFeed}
          loading={this.state.isLoading}
          renderRow={this.renderFeedRow}
        />
      </View>
    );
  }
}
