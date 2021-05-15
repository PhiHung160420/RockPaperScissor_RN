import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  BackgroundImage,
  Bot,
  Paper,
  Player,
  Rock,
  Scissor,
} from '../assets/index';

import PlayerItem from './PlayerItem';
import SelectContent from './SelectContent';
import ResultContent from './ResultContent';

export default class RockPaperScissor extends Component {
  state = {
    arrayGame: [
      {id: 'scissor', image: Scissor, status: false},
      {id: 'rock', image: Rock, status: false},
      {id: 'paper', image: Paper, status: true},
    ],
    playerSelect: {id: 'paper', image: Paper, status: true},
    botSelect: {id: 'scissor', image: Scissor, status: false},
    score: 0,
    times: 9,
    disabled: false,
  };

  onSelectedItem = selectedItem => {
    const arrayGame = this.state.arrayGame;
    const index = arrayGame.findIndex(item => item.id === selectedItem.id);
    if (!arrayGame[index].status) {
      const previousStatusIndex = arrayGame.findIndex(item => item.status);
      arrayGame[previousStatusIndex].status = false;
      arrayGame[index].status = true;
    }
    this.setState({playerSelect: selectedItem, arrayGame});
  };

  onPressPlayButton = () => {
    this.setState({disabled: true});
    const random = setInterval(() => {
      this.state.botSelect =
        this.state.arrayGame[Math.floor(Math.random() * 3)];
      this.setState({botSelect: this.state.botSelect});
    }, 100);

    setTimeout(() => {
      clearInterval(random);
      this.setState({disabled: false});
      let times, score;
      switch (this.state.playerSelect.id) {
        case 'paper':
          if (this.state.botSelect.id === 'paper') {
            times = this.state.times - 1;
            score = this.state.score;
          } else if (this.state.botSelect.id === 'scissor') {
            score = this.state.score - 1;
            times = this.state.times - 1;
          } else {
            score = this.state.score + 1;
            times = this.state.times + 1;
          }
          break;
        case 'scissor':
          if (this.state.botSelect.id === 'scissor') {
            times = this.state.times - 1;
            score = this.state.score;
          } else if (this.state.botSelect.id === 'rock') {
            score = this.state.score - 1;
            times = this.state.times - 1;
          } else {
            score = this.state.score + 1;
            times = this.state.times + 1;
          }
          break;
        case 'rock':
          if (this.state.botSelect.id === 'rock') {
            times = this.state.times - 1;
            score = this.state.score;
          } else if (this.state.botSelect.id === 'paper') {
            score = this.state.score - 1;
            times = this.state.times - 1;
          } else {
            score = this.state.score + 1;
            times = this.state.times + 1;
          }
          break;
        default:
          break;
      }
      this.setState({disable: false, times, score});
    }, 2000);
  };

  onPressResetButton = () => {
    this.setState({
      times: 9,
      score: 0,
      playerSelect: {id: 'paper', image: Paper, status: true},
      botSelect: {id: 'scissor', image: Scissor, status: false},
    });
    this.state.arrayGame.map(item => (item.status = false));
    this.state.arrayGame[2].status = true;
  };

  render() {
    return (
      <ImageBackground
        style={styles.backgroundContent}
        source={BackgroundImage}>
        <StatusBar barStyle="light-content" />
        <View style={styles.overlay}>
          <SafeAreaView style={styles.container}>
            <View style={styles.playerContent}>
              <PlayerItem
                imageGame={this.state.playerSelect.image}
                imagePlayer={Player}
              />
              <PlayerItem
                imageGame={this.state.botSelect.image}
                imagePlayer={Bot}
              />
            </View>
            <View style={styles.selectContent}>
              <SelectContent
                arrayGame={this.state.arrayGame}
                onSelectItem={this.onSelectedItem}
                isSelected={this.state.isSelected}
                disabled={this.state.disabled}
              />
            </View>
            <ResultContent
              score={this.state.score}
              times={this.state.times}
              disabled={this.state.disabled}
              onPressPlayButton={this.onPressPlayButton}
              onPressResetButton={this.onPressResetButton}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContent: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    flex: 1,
  },
  playerContent: {
    flex: 2,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  selectContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  imageItem: {
    width: 50,
    height: 50,
  },
  borderItem: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'yellow',
  },
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
});
