import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
import { Sizes, Colors } from '../utils/styles';
import UiText from './uText';

const UiTextInput = (props) => {

  return (
    <>
      {props.title ? <UiText>{props.title}</UiText> : null }
      <TextInput
        allowFontScaling={false}
        editable={props.editable || true}
        style={[stl.textInput, props.style]}
        numberOfLines={1}
        underlineColorAndroid={'transparent'}
        onChangeText={props.onChangeText}
        multiline={true}
        maxLength={20}
        value={props.value}
        blurOnSubmit={true}
        disableFullscreenUI={true}
      />
    </>
  );
}

const stl = StyleSheet.create({
  textInput: {
    width: '76%',
    marginHorizontal: '2%',
    borderRadius: Sizes.PREC_2,
    elevation: 2,
    paddingHorizontal: '5%',
    backgroundColor: Colors.LIGHT,
    marginVertical: '2%'
  },
});


export default UiTextInput;