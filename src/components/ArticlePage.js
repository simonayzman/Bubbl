import React, { PropTypes } from 'react';
import { WebView } from 'react-native';

const ArticlePage = () => (
  <WebView
    source={{ uri: this.props.navigation.state.params.url }}
    style={{ flex: 1, marginTop: 20 }}
  />
);

ArticlePage.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ArticlePage;
