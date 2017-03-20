import React, { Component, PropTypes } from 'react';
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

    const randomArticleIndex = this.getRandomArticleIndex(props.topicBundle);
    this.state = {
      showingInitialArticle: true,
      initialArticleIndex: randomArticleIndex,
    };
  }

  onPressHeader = (article) => {
    const articleIndex = this.findArticleIndex(this.props.topicBundle, article);
    this.props.onPressHeader(this.props.topicBundle, articleIndex);
    this.setState({ showingInitialArticle: !this.state.showingInitialArticle });
  }

  onLongPressHeader = (article) => {
    const articleIndex = this.findArticleIndex(this.props.topicBundle, article);
    this.props.onLongPressHeader(this.props.topicBundle, articleIndex);
  }

  onPressContent = (article) => {
    const articleIndex = this.findArticleIndex(this.props.topicBundle, article);
    this.props.onPressContent(this.props.topicBundle, articleIndex);
  }

  onLongPressContent = (article) => {
    const articleIndex = this.findArticleIndex(this.props.topicBundle, article);
    this.props.onLongPressContent(this.props.topicBundle, articleIndex);
  }

  getRandomArticleIndex = topicBundle => (
    Math.floor(Math.random() * topicBundle.articles.length)
  )

  getMiddleArticleIndex = topicBundle => (
    Math.floor((topicBundle.articles.length - 1) / 2)
  )

  getOppositeArticleIndex = (topicBundle, articleIndex) => {
    const lastArticleIndex = topicBundle.articles.length - 1;
    let oppositeArticleIndex = lastArticleIndex - articleIndex;
    if (oppositeArticleIndex === articleIndex) {
      oppositeArticleIndex += 1;
    }
    return oppositeArticleIndex;
  }

  getArticleAtIndex = (topicBundle, index) => (
    topicBundle.articles[index]
  )

  findArticleIndex = (topicBundle, article) => (
    topicBundle.articles.findIndex(
      currentArticle => currentArticle.canonicalUrl === article.canonicalUrl,
    )
  )

  renderInitialArticle = () => {
    const article = this.getArticleAtIndex(this.props.topicBundle, this.state.initialArticleIndex);
    return (
      <ArticleCard
        article={article}
        onPressHeader={this.onPressHeader}
        onLongPressHeader={this.onLongPressHeader}
        onPressContent={this.onPressContent}
        onLongPressContent={this.onLongPressContent}
      />
    );
  }

  renderFlippedArticle = () => {
    const oppositeArticleIndex =
      this.getOppositeArticleIndex(this.props.topicBundle, this.state.initialArticleIndex);
    const oppositeArticle =
      this.getArticleAtIndex(this.props.topicBundle, oppositeArticleIndex);
    return (
      <ArticleCard
        styleName={'dark'}
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
