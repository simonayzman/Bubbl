import React, { Component, PropTypes } from 'react';
import { Tile, Row, Image, Title, Subtitle, View, Icon, TouchableOpacity, Button } from '@shoutem/ui';
import _ from 'lodash';

export default class ArticleCard extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired,
    onPressHeader: PropTypes.func,
    onLongPressHeader: PropTypes.func,
    onPressContent: PropTypes.func,
    onLongPressContent: PropTypes.func,
    styleName: PropTypes.string,
    compact: PropTypes.bool,
  };

  static defaultProps = {
    onPressHeader: () => {},
    onLongPressHeader: () => {},
    onPressContent: () => {},
    onLongPressContent: () => {},
    styleName: '',
    compact: false,
  }

  renderHeader = () => {
    const { article } = this.props;
    return (
      <Row styleName={this.props.styleName} style={{ padding: 8, flex: 0 }}>
        <View>
          <TouchableOpacity
            onPress={() => { this.props.onPressHeader(article); }}
            onLongPress={() => { this.props.onLongPressHeader(article); }}
            delayLongPress={600}
            activeOpacity={0.1}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Image
              styleName={'rounded-corners'}
              style={{ width: 45, height: 45, margin: 0 }}
              source={{ uri: article.sourceThumbnail }}
            />
            <View styleName={'vertical stretch'} style={{ marginHorizontal: 10, marginVertical: 5 }}>
              <Title styleName={this.props.styleName}>{article.source}</Title>
              <Subtitle styleName={this.props.styleName} style={{ color: 'gray' }}>{article.date}</Subtitle>
            </View>
          </TouchableOpacity>
        </View>
        <Button styleName={'right-icon'}>
          <Icon name={'share'} style={{ fontSize: 26, color: 'gray' }} />
        </Button>
      </Row>
    );
  }

  renderContent = () => {
    const { article } = this.props;
    let description = null;
    if (article.description && _.trim(article.description).length !== 0) {
      description = (
        <Subtitle styleName={this.props.styleName} style={{ color: 'gray' }}>
          {article.description}
        </Subtitle>
      );
    }
    let contentImage = null;
    if (this.props.compact) {
      contentImage = (
        <Image
          source={{ uri: article.image }}
          style={{ width: 300, height: 200, alignSelf: 'center' }}
        />
      );
    } else {
      contentImage = (
        <Image
          styleName={'large-banner'}
          source={{ uri: article.image }}
        />
      );
    }
    return (
      <TouchableOpacity
        onPress={() => { this.props.onPressContent(article); }}
        onLongPress={() => { this.props.onLongPressContent(article); }}
        delayLongPress={600}
        activeOpacity={0.1}
      >
        <Tile styleName={this.props.styleName}>
          {contentImage}
          <View styleName={'content'} style={{ paddingTop: 10 }}>
            <Title styleName={this.props.styleName}>{article.headline}</Title>
            {description}
          </View>
        </Tile>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    );
  }
}
