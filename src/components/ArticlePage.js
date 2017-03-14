import React, { PropTypes, Component } from 'react';
import { WebView } from 'react-native';

export default class ArticlePage extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    return (
      <WebView
        source={{ uri: this.props.navigation.state.params.url }}
        style={{ flex: 1, marginTop: 20 }}
      />
    );
  }
}
