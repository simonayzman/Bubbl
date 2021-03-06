import React, { PropTypes, Component } from 'react';
import { WebView } from 'react-native';

export default class ArticlePage extends Component {

  static propTypes = {
    url: PropTypes.string.isRequired,
  };

  render = () => (
    <WebView source={{ uri: this.props.url }} style={{ flex: 1 }} />
  )

}
