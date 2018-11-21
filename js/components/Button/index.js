import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ label, onTap }) => (
  <TouchableOpacity onPress={onTap}>
    <Text>{label}</Text>
  </TouchableOpacity>
);

export default Button;
