import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';

export default class PlayerItem extends Component {
  render() {
    const {imageGame, imagePlayer} = this.props;
    return (
      <View style={styles.playerContainer}>
        <View style={styles.border}>
          <Image style={styles.imageGame} source={imageGame} />
        </View>
        <View style={styles.triangle} />
        <Image style={styles.imageGame} source={imagePlayer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerContainer: {
    alignItems: 'center',
  },
  border: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'yellow',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'yellow',
    // transform: [{rotate: '180deg'}],
  },
  imageGame: {
    height: 90,
    width: 90,
  },
});
