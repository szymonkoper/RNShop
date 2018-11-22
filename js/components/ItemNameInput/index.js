import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Button from '../Button';

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  button: {
  },
});

class ItemNameInput extends React.Component {
  state = { inputText: '' }

  onTap = () => {
    const { onAddTapped } = this.props;
    const { inputText } = this.state;
    onAddTapped(inputText);
  }

  render() {
    const { onAddTapped, ...otherProps } = this.props;
    return (
      <View style={styles.layout} {...otherProps}>
        <TextInput
          style={styles.input}
          onChangeText={inputText => this.setState({ inputText })}
          placeholder="Something to buy..."
        />
        <Button style={styles.button} label="Add" onTap={this.onTap} />
      </View>
    );
  }
}

export default ItemNameInput;
