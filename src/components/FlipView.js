import React, { Component, PropTypes } from "react";
import {
  Animated,
  Easing,
  TouchableOpacity,
  Text,
  View
} from "react-native";

const styles = {
  animatedContainer: {
    flex: 1
  }
};

export default class FlipView extends Component {

  static propTypes = {
    renderFront: PropTypes.func.isRequired,
    renderBack: PropTypes.func.isRequired,
    onFlip: PropTypes.func,
    flipped: PropTypes.bool,
    velocity: PropTypes.number,
    tension: PropTypes.number,
    friction: PropTypes.number,
  };

  static defaultProps = {
    onFlip: () => {},
    flipped: false,
    duration: 750,
    velocity: 7,
    tension: 10,
    friction: 5,
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
      velocity: this.props.velocity,
      // tension: this.props.tension,
      // friction: this.props.friction,
    }).start();
  }

  renderFlippedView() {
    if (this.props.flipped) {
      return this.props.renderBack();
    } else {
      return this.props.renderFront();
    }
  }

  render() {
    const rotateX = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '360deg', '0deg']
    });
    return (
      <Animated.View style={{ flex: 1, transform: [{ rotateX }] }}>
        {this.renderFlippedView()}
      </Animated.View>
    );
  }

}
