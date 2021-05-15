import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class SelectContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.arrayGame.map(item => (
      <TouchableOpacity
        disabled={this.props.disabled}
        key={item.id}
        style={[styles.borderItem, item.status && styles.selectedItem]}
        onPress={() => this.props.onSelectItem(item)}>
        <Image style={styles.imageItem} source={item.image} />
      </TouchableOpacity>
    ));
  }
}

const styles = StyleSheet.create({
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
  },
  selectedItem: {
    borderWidth: 3,
    borderColor: 'yellow',
  },
});
