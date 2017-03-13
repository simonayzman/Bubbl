import React, { Component, PropTypes } from 'react';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-carousel-control';
import FlipView from './FlipView';
import ArticleCard from './ArticleCard';

export default class TopicBundleCard extends Component {

  static propTypes = {
    topicBundle: PropTypes.object.isRequired,
    onFlip: PropTypes.func,
    onPressHeader: PropTypes.func,
    onLongPressHeader: PropTypes.func,
    onPressContent: PropTypes.func,
    onLongPressContent: PropTypes.func,
  };

  static defaultProps = {
    onFlip: () => {},
    onPressHeader: () => {},
    onLongPressHeader: () => {},
    onPressContent: () => {},
    onLongPressContent: () => {},
  }

  constructor(props) {
    super();

    let randomArticleIndex = this.getRandomArticleIndex(props.topicBundle)
    this.state = {
      showingInitialArticle: true,
      initialArticleIndex: randomArticleIndex,
    };
  }

  getRandomArticleIndex(topicBundle) {
    return Math.floor(Math.random() * topicBundle.articles.length);
  }

  getMiddleArticleIndex(topicBundle) {
    return Math.floor((topicBundle.articles.length - 1) / 2);
  }

  getOppositeArticleIndex(topicBundle, articleIndex) {
    let lastArticleIndex = topicBundle.articles.length - 1;
    var oppositeArticleIndex = lastArticleIndex - articleIndex;
    if (oppositeArticleIndex === articleIndex) {
      oppositeArticleIndex++;
    }
    return oppositeArticleIndex;
  }

  findArticleIndex(topicBundle, article) {
    return topicBundle.articles.findIndex((currentArticle) =>
      currentArticle.canonicalUrl === article.canonicalUrl
    )
  }

  getArticleAtIndex(topicBundle, index) {
    return topicBundle.articles[index];
  }

  onPressHeader = (article) => {
    let articleIndex = this.findArticleIndex(this.props.topicBundle, article);
    this.props.onPressHeader(this.props.topicBundle, articleIndex);
  }

  onLongPressHeader = (article) => {
    let articleIndex = this.findArticleIndex(this.props.topicBundle, article);
    this.props.onLongPressHeader(this.props.topicBundle, articleIndex);
    this.setState({ showingInitialArticle: !this.state.showingInitialArticle })
  }

  onPressContent = (article) => {
    let articleIndex = this.findArticleIndex(this.props.topicBundle, article);
    this.props.onPressContent(this.props.topicBundle, articleIndex);
  }

  onLongPressContent = (article) => {
    let articleIndex = this.findArticleIndex(this.props.topicBundle, article);
    this.props.onLongPressContent(this.props.topicBundle, articleIndex);
  }

  renderInitialArticle = () => {
    let initialArticle = this.getArticleAtIndex(this.props.topicBundle, this.state.initialArticleIndex);
    return (
      <ArticleCard
        article={initialArticle}
        onPressHeader={this.onPressHeader}
        onLongPressHeader={this.onLongPressHeader}
        onPressContent={this.onPressContent}
        onLongPressContent={this.onLongPressContent}
      />
    );
  }

  renderFlippedArticle = () => {
    let oppositeArticleIndex = this.getOppositeArticleIndex(this.props.topicBundle, this.state.initialArticleIndex);
    let oppositeArticle = this.getArticleAtIndex(this.props.topicBundle, oppositeArticleIndex);
    return (
      <ArticleCard
        styleName='dark'
        article={oppositeArticle}
        onPressHeader={this.onPressHeader}
        onLongPressHeader={this.onLongPressHeader}
        onPressContent={this.onPressContent}
        onLongPressContent={this.onLongPressContent}
      />
    );
  }

  render() {
    return (
      <FlipView
        flipped={!this.state.showingInitialArticle}
        onFlip={this.props.onFlip}
        renderFront={this.renderInitialArticle}
        renderBack={this.renderFlippedArticle}
      />
    );
  }
}
