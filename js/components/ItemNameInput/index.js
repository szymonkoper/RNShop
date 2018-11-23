import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Button from '../Button';

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    margin: 10,
    fontSize: 18,
  },
});

class ItemNameInput extends React.PureComponent {
  state = { inputText: '' }

  onTap = () => {
    const { onAddTapped } = this.props;
    const { inputText } = this.state;
    onAddTapped(inputText);
  }

  render() {
    const { onAddTapped, ...otherProps } = this.props;
    return (
      <View {...otherProps}>
        <View style={styles.layout}>
          <TextInput
            style={styles.input}
            multiline={false}
            onChangeText={inputText => this.setState({ inputText })}
            placeholder="Something to buy..."
          />
          <Button label="Add" onTap={this.onTap} />
        </View>
      </View>
    );
  }
}

export default ItemNameInput;
