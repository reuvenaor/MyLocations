import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../utils/styles';
import UiText from '../components/uText';

const UiButton = ({onPress, title, style}) => {

  return (
    <TouchableOpacity onPress={onPress} style={[stl.btn, style]}>
      <UiText>{title}</UiText>
    </TouchableOpacity>
  );
}

const stl = StyleSheet.create({
  btn: {
    width: 90,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.DARK,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default UiButton;