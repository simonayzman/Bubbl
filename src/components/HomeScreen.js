import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Image, View, ListView, Divider } from '@shoutem/ui';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-spinkit';

import TopicBundleCard from './TopicBundleCard';
import { randomShuffle } from '../services/random';

export default class HomeScreen extends Component {

  constructor() {
    super();

    this.state = {
      isLoading: true,
      topicBundles: [],
      fakeRows: this.buildFakeRows(),
    };
    this.fetchTopicBundles();
  }

  onOpenArticle = (topicBundle, articleIndex) => {
    const article = topicBundle.articles[articleIndex];
    Actions.article({ url: article.canonicalUrl });
  }

  onOpenCarousel = (topicBundle, articleIndex) => {
    Actions.topic({ topicBundle, initialArticleIndex: articleIndex });
  }

  buildFakeRows = () => (
    [
      require('../../images/ad.png'),
      require('../../images/event.png'),
      require('../../images/photoAlbum.png'),
      require('../../images/instagramPhoto.png'),
    ].map(image => ({ isFakeRow: true, source: image }))
  )

  fetchTopicBundles = () => {
    const searchUrl = 'https://bubbl-server.herokuapp.com/news/bundles';
    return fetch(searchUrl, { timeout: 200 })
      .then(response => response.json())
      .then((topicBundles) => {
        console.log('Successfully fetched: ', topicBundles)
        this.setState({
          topicBundles,
          isLoading: false,
        });
      })
      .catch(() => {
        console.warning('Not connected to the internet.')
        this.setState({ isLoading: false });
      });
  }

  renderFeedHeader = () => {
    const { width } = Dimensions.get('window');
    return (
      <View style={{ alignItems: 'center'}}>
        <Image source={require('../../images/topAction.png')} style={{ width, borderColor: '#d3d3d3', borderWidth: 0.5 }} />
        <Image source={require('../../images/prompt.png')} style={{ width }} />
        <Divider style={{ backgroundColor: 'transparent' }} />
      </View>
    );
  }

  renderFeedRow = (data) => {
    let feedRow = null;
    if (data.isFakeRow) {
      feedRow = (<Image source={data.source} />);
    } else {
      feedRow = (
        <TopicBundleCard
          topicBundle={data}
          onPressContent={this.onOpenArticle}
          onLongPressContent={this.onOpenCarousel}
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

  render() {
    if (this.state.isLoading) {
      return (
        <Spinner
          style={{ alignSelf: 'center', marginTop: 50 }}
          isVisible
          size={100}
          type={'Bounce'}
          color={'#3B5998'}
        />
      );
    }

    if (this.state.topicBundles.length === 0) {
      return null;
    }

    const combinedFeed = this.state.topicBundles.concat(this.state.fakeRows);
    const randomizedFeed = randomShuffle(combinedFeed);

    return (
      <View style={{ flex: 1, backgroundColor: '#ededed' }}>
        <ListView
          data={randomizedFeed}
          loading={this.state.isLoading}
          renderRow={this.renderFeedRow}
          renderHeader={this.renderFeedHeader}
        />
      </View>
    );
  }
}
