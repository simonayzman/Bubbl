import React, { PropTypes, Component } from 'react';
import { Animated } from 'react-native';
import { View, Button, Icon, Image } from '@shoutem/ui';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-carousel-control';
import ArticleCard from './ArticleCard';

const SPECTRUM_WIDTH = 375;
const PARTISAN_RANK_SIZE = 35;
const LEFT_BOUNDARY = 0;
const RIGHT_BOUNDARY = SPECTRUM_WIDTH - PARTISAN_RANK_SIZE;
const PARTISAN_RANK_RANGE = SPECTRUM_WIDTH - PARTISAN_RANK_SIZE;
const CENTER_COORDINATE = (LEFT_BOUNDARY + RIGHT_BOUNDARY) / 2;

export default class TopicBundleCarousel extends Component {

  static propTypes = {
    // Required, but coming in via navigation
    // topicBundle: PropTypes.object.isRequired,
    // initialArticleIndex: PropTypes.number.isRequired,
    onOpenCarousel: PropTypes.func,
    onCloseCarousel: PropTypes.func,
  };

  static defaultProps = {
    onOpenCarousel: () => {},
    onCloseCarousel: () => {},
  }

  constructor(props) {
    super(props);

    const { topicBundle, initialArticleIndex } = props.navigation.state.params;
    let partisanRankValue = this.getCurrentPartisanTranslation(topicBundle, initialArticleIndex)
    this.state = {
      currentArticleIndex: initialArticleIndex,
      partisanRankAnimation: new Animated.Value(partisanRankValue),
    }
  }

  onOpenArticle = (article) => {
    this.props.navigation.navigate('ArticlePage', { url: article.canonicalUrl });
  }

  getCurrentPartisanTranslation = (topicBundle, articleIndex) => {
    let article = topicBundle.articles[articleIndex];
    let partisanRank = article.partisanRank;
    var multiplier = 0;
    var translation = 0;
    if (partisanRank[0] !== 'N') {
      if (partisanRank[0] === 'L') {
        multiplier = -1;
      } else if (partisanRank[0] === 'C') {
        multiplier = 1;
      }
      let strength = parseInt(partisanRank[1]);
      translation = 0.2 * strength;
    }
    return multiplier * translation;
  }

  onArticleChange = (articleIndex) => {
    this.setState({
      currentArticleIndex: articleIndex,
    });
    const { topicBundle } = this.props.navigation.state.params;
    console.log(topicBundle, this.state)
    let partisanRankTranslation = this.getCurrentPartisanTranslation(topicBundle, articleIndex)
    Animated.spring(
      this.state.partisanRankAnimation,
      { toValue: partisanRankTranslation },
    ).start();
  }

  renderTopicBundleCarousel() {
    const { topicBundle } = this.props.navigation.state.params;

    let carousel = []
    for (let article of topicBundle.articles) {
      carousel.push((
        <ArticleCard
          key={article.canonicalUrl}
          compact
          article={article}
          onPressContent={this.onOpenArticle}
        />
      ));
    }

    return carousel;
  }

  render() {
    let partisanRankTranslation = this.state.partisanRankAnimation.interpolate({
      inputRange: [-1, 1],
      outputRange: [LEFT_BOUNDARY, RIGHT_BOUNDARY]
    });
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Carousel
          pageStyle={{ alignSelf: 'center', height: 500 }}
          currentPage={this.state.currentArticleIndex}
          onPageChange={this.onArticleChange}
        >
          {this.renderTopicBundleCarousel()}
        </Carousel>
        <View style={{ width: SPECTRUM_WIDTH, marginBottom: 50, alignSelf: 'center' }}>
          <Animated.View
            style={{
              position: 'absolute',
              zIndex: 2,
              top: -30,
              transform: [{ translateX: partisanRankTranslation }],
            }}
          >
            <Icon
              name="pin"
              style={{ fontSize: PARTISAN_RANK_SIZE, color: 'white' }}
            />
          </Animated.View>
          <Image
            source={require('../../images/spectrum.png')}
            style={{ width: SPECTRUM_WIDTH, height: 15}}
          />
        </View>
      </View>
    );
  }
}
