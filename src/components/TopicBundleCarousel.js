import React, { PropTypes, Component } from 'react';
import { Animated } from 'react-native';
import { View, Icon, Image } from '@shoutem/ui';
import Carousel from 'react-native-carousel-control';
import ArticleCard from './ArticleCard';

const SPECTRUM_WIDTH = 375;
const PARTISAN_RANK_SIZE = 35;
const LEFT_BOUNDARY = 0;
const RIGHT_BOUNDARY = SPECTRUM_WIDTH - PARTISAN_RANK_SIZE;

export default class TopicBundleCarousel extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      state: PropTypes.shape({
        params: PropTypes.shape({
          topicBundle: PropTypes.object.isRequired,
          initialArticleIndex: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    const { topicBundle, initialArticleIndex } = props.navigation.state.params;
    const partisanRankValue = this.getCurrentPartisanTranslation(topicBundle, initialArticleIndex);
    this.state = {
      currentArticleIndex: initialArticleIndex,
      partisanRankAnimation: new Animated.Value(partisanRankValue),
    };
  }

  onOpenArticle = (article) => {
    this.props.navigation.navigate('ArticlePage', { url: article.canonicalUrl });
  }
  onArticleChange = (articleIndex) => {
    const { topicBundle } = this.props.navigation.state.params;
    const partisanRankTranslation = this.getCurrentPartisanTranslation(topicBundle, articleIndex);
    Animated.spring(
      this.state.partisanRankAnimation,
      { toValue: partisanRankTranslation },
    ).start();
    this.setState({ currentArticleIndex: articleIndex });
  }

  getCurrentPartisanTranslation = (topicBundle, articleIndex) => {
    const article = topicBundle.articles[articleIndex];
    const partisanRank = article.partisanRank;
    let multiplier = 0;
    let translation = 0;
    if (partisanRank[0] !== 'N') {
      if (partisanRank[0] === 'L') {
        multiplier = -1;
      } else if (partisanRank[0] === 'C') {
        multiplier = 1;
      }
      const strength = parseInt(partisanRank[1], 10);
      translation = 0.2 * strength;
    }
    return multiplier * translation;
  }

  renderTopicBundleCarousel() {
    const { topicBundle } = this.props.navigation.state.params;

    const carousel = [];
    for (const article of topicBundle.articles) {
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
    const partisanRankTranslation = this.state.partisanRankAnimation.interpolate({
      inputRange: [-1, 1],
      outputRange: [LEFT_BOUNDARY, RIGHT_BOUNDARY],
    });
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Carousel
          swipeThreshold={0.3}
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
            style={{ width: SPECTRUM_WIDTH, height: 15 }}
          />
        </View>
      </View>
    );
  }
}
