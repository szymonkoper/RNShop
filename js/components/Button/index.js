import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#009955',
    borderColor: '#016FB9',
    borderWidth: 5,
    margin: 10,
    padding: 15,
    borderRadius: 5,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const Button = ({ label, onTap }) => (
  <TouchableOpacity style={styles.layout} onPress={onTap}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

export default Button;
