import React from 'react';
import {
  Modal, Text, View, TextInput, StyleSheet, Dimensions,
} from 'react-native';
import propTypes from 'prop-types';
import Button from '../Button';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  modal: {
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: width * 0.1,
    marginVertical: height * 0.3,
    backgroundColor: '#fff',
  },
  layout: {
    margin: 10,
  },
  header: {
    fontSize: 18,
    color: '#016FB9',
    alignSelf: 'center',
  },
  input: {
    margin: 10,
    padding: 10,
    fontSize: 18,
  },
});

class InputDialog extends React.PureComponent {
  state = { inputText: '' };

  onChangeText = inputText => this.setState({ inputText });

  onTap = () => {
    const { onPositive, onDismiss } = this.props;
    const { inputText } = this.state;

    if (!inputText) return;

    onPositive(inputText);
    onDismiss();
  }

  render() {
    const {
      visible, label, placeholder, positiveLabel, onDismiss,
    } = this.props;

    return (
      <Modal animationType="slide" transparent visible={visible}>
        <View style={styles.modal}>
          <View style={styles.layout}>
            <Text style={styles.header}>{label}</Text>

            <TextInput
              style={styles.input}
              placeholder={placeholder}
              onChangeText={this.onChangeText}
            />

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
  placeholder: propTypes.string.isRequired,
  positiveLabel: propTypes.string.isRequired,
  onPositive: propTypes.func.isRequired,
  onDismiss: propTypes.func.isRequired,
};

export default InputDialog;
