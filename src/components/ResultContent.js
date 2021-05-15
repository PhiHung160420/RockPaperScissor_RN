import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class ResultContent extends Component {
  render() {
    return (
      <>
        <View style={styles.infoContent}>
          <Text style={styles.infoTxt}>Score: {this.props.score}</Text>
          <Text style={styles.infoTxt}>Times: {this.props.times}</Text>
        </View>
        <View style={styles.buttonContent}>
          <TouchableOpacity
            style={styles.buttonPlay}
            disabled={this.props.disabled}
            onPress={this.props.onPressPlayButton}>
            <Text style={styles.buttonTxt}>Play</Text>
          </TouchableOpacity>
          <LinearGradient
            style={styles.buttonReset}
            colors={['#daaa0c', '#ffce35']}>
            <TouchableOpacity onPress={this.props.onPressResetButton}>
              <Text style={styles.buttonTxt}>Reset</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  infoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00fecd',
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonPlay: {
    height: 50,
    width: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9aff',
    marginRight: 10,
  },
  buttonReset: {
    height: 50,
    width: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
