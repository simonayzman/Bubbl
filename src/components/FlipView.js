import React, { Component, PropTypes } from 'react';
import { Animated } from 'react-native';

export default class FlipView extends Component {

  static propTypes = {
    renderFront: PropTypes.func.isRequired,
    renderBack: PropTypes.func.isRequired,
    onFlip: PropTypes.func,
    flipped: PropTypes.bool,
  };

  static defaultProps = {
    onFlip: () => {},
    flipped: false,
  }

  constructor() {
    super();
    this.state = { animatedValue: new Animated.Value(0) };
  }

  componentDidUpdate(nextProps) {
    if (this.props.flipped !== nextProps.flipped) {
      this.props.onFlip();
      this.animateFlipping();
    }
  }

  animateFlipping = () => {
    Animated.spring(this.state.animatedValue, {
      toValue: 0,
      velocity: 7,
      // tension: 10,
      // friction: 5,
    }).start();
  }

  renderFlippedView() {
    if (this.props.flipped) {
      return this.props.renderBack();
    }
    return this.props.renderFront();
  }

  render() {
    const rotateX = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '360deg', '0deg'],
    });
    return (
      <Animated.View style={{ flex: 1, transform: [{ rotateX }] }}>
        {this.renderFlippedView()}
      </Animated.View>
    );
  }

}
