import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ label, onTap, ...otherProps }) => (
  <TouchableOpacity onPress={onTap} {...otherProps}>
    <Text>{label}</Text>
  </TouchableOpacity>
);

export default Button;
