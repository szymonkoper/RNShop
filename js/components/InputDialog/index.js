import React from 'react';
import {
  Modal, Text, View, TextInput, StyleSheet, Dimensions,
} from 'react-native';
import propTypes from 'prop-types';
import Button from '../Button';

const { height, width } = Dimensions.get('window');
const style = StyleSheet.create({
  borderRadius: 5,
  borderWidth: 2,
  marginHorizontal: width * 0.1,
  marginVertical: height * 0.3,
});

class InputDialog extends React.Component {
  state = { inputText: '' };

  onChangeText = inputText => this.setState({ inputText });

  onTap = () => {
    const { onPositive, onDismiss } = this.props;
    const { inputText } = this.state;

    onPositive(inputText);
    onDismiss();
  }

  render() {
    const {
      visible, label, positiveLabel, onDismiss,
    } = this.props;

    return (
      <Modal animationType="slide" transparent visible={visible}>
        <View style={style}>
          <View>
            <Text>{label}</Text>
            <TextInput onChangeText={this.onChangeText} />
            <Button label={positiveLabel} onTap={this.onTap} />
            <Button label="Cancel" onTap={() => onDismiss()} />
          </View>
        </View>
      </Modal>
    );
  }
}

InputDialog.propTypes = {
  visible: propTypes.bool.isRequired,
  label: propTypes.string.isRequired,
  positiveLabel: propTypes.string.isRequired,
  onPositive: propTypes.func.isRequired,
  onDismiss: propTypes.func.isRequired,
};

export default InputDialog;
