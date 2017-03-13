import React, { Component, PropTypes } from 'react';
import { Dimensions } from 'react-native';
import {
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
import Spinner from 'react-native-spinkit';
import _ from 'lodash';

import TopicBundleCard from './TopicBundleCard';
import { randomShuffle } from '../services/random'
import sampleData from '../sampleData';

export default class HomeScreen extends Component {

  constructor() {
    super();

    this.state = {
      isLoading: true,
      topicBundles: [],
      fakeRows: this.buildFakeRows(),
    };
    this.fetchTopicBundles()
  }

  fetchTopicBundles = () => {
    let topics = ['trump', 'judge', 'healthcare', 'congress', 'war', 'college']

    let topicBundlePromises = [];
    for (let topic of topics) {
      let topicBundleCall = this.fetchTopicBundle(topic)
      topicBundlePromises.push(topicBundleCall)
    }
    Promise.all(topicBundlePromises)
      .then((topicBundles) => {
        let trimmedTopicBundles = _.compact(topicBundles);
        this.setState({
          topicBundles: trimmedTopicBundles,
          isLoading: false,
        });
      })
      .catch(() => {
        console.warning('Not connected to the internet.')
        this.setState({
          topicBundles: sampleData,
          isLoading: false,
        });
      })
  }

  fetchTopicBundle = (topic) => {
    let searchUrl = 'https://bubbl-server.herokuapp.com/news/bundle?search=';
    let fullSearchUrl = searchUrl + topic;
    return fetch(fullSearchUrl)
      .then((response) => response.json())
      .then((jsonTopicBundle) => {
        let topicBundleArticles = jsonTopicBundle.newsStories;
        if (topicBundleArticles.length < 3) {
          return null;
        }
        return {
          id: topic,
          articles: topicBundleArticles,
        };
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

  onOpenArticle = (topicBundle, articleIndex) => {
    let article = topicBundle.articles[articleIndex];
    this.props.navigation.navigate('ArticlePage', { url: article.canonicalUrl })
  }

  onOpenCarousel = (topicBundle, articleIndex) => {
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

    this.props.navigation.navigate('TopicBundleCarousel', { topicBundle })
  }

  renderFeedHeader = () => {
    var { width } = Dimensions.get('window');
    return (
      <View style={{ alignItems: 'center'}}>
        <Image source={require('../../images/prompt.png')} style={{ width }}/>
        <Image source={require('../../images/topAction.png')} style={{ width }}/>
        <Divider style={{ backgroundColor: 'transparent' }} />
      </View>
    )
  }

  renderFeedRow = (data) => {
    let feedRow = null;
    if (data.isFakeRow) {
      feedRow = (<Image source={data.source}/>);
    } else {
      feedRow = (
        <TopicBundleCard
          topicBundle={data}
          onPressContent={this.onOpenArticle}
          onLongPressContent={this.onOpenCarousel}
        />);
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
      )
    }

    if (this.state.topicBundles.length == 0) {
      return null
    }

    let combinedFeed = this.state.topicBundles.concat(this.state.fakeRows);
    let randomizedFeed = combinedFeed//randomShuffle(combinedFeed);

    return (
      <ListView
        data={randomizedFeed}
        loading={this.state.isLoading}
        renderRow={this.renderFeedRow}
        renderHeader={this.renderFeedHeader}
      />
    );
  }
}
