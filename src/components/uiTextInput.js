import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors, Sizes, Styles } from '../utils/styles';

const UiTextInput = (props) => {

  const [value, setValue] = useState('');

  const onChangeText = txt => {
    setValue(txt);
  };

  const onSetMsg = () => {
    props.onSetMsg({txt: value, role: props.role, timeStamps: new Date()});
    setValue('');
  }

  return (
    <View style={stl.con}>
      <TextInput
        allowFontScaling={false}
        style={[stl.textInput, props.style]}
        keyboardType={props.keyboardType ?? 'default'}
        numberOfLines={props.numberOfLines ?? 4}
        underlineColorAndroid={'transparent'}
        onChangeText={onChangeText}
        value={value}
        blurOnSubmit={true}
        maxLength={props.maxLength ?? 300}
        placeholder={props.placeholder ?? ''}
        defaultValue={props.defaultValue ?? ''}
        multiline={props.multiline ?? true}
        keyboardAppearance={'dark'}
        disableFullscreenUI={true}
        textAlignVertical={'top'}
      />
      <TouchableOpacity style={stl.sendWrap} onPress={onSetMsg}>
        <View style={stl.sendIcon}>

        </View>
      </TouchableOpacity>
    </View>
  );
}

const stl = StyleSheet.create({
  con: {
    width: '100%',
    flexDirection: 'row',
    ...Styles.center,
    position: 'absolute',
    bottom: 0
  },
  textInput: {
    width: '76%',
    marginHorizontal: '2%',
    borderRadius: Sizes.PREC_2,
    elevation: 2,
    paddingHorizontal: '5%',
    backgroundColor: Colors.AMB
  },
  txtItem: {
    height: Sizes.PREC_3,
    width: '100%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
  },
  sendWrap: {
    width: '18%',
    marginHorizontal: '1%',
    height: 50,
    ...Styles.center,
    borderRadius: Sizes.PREC_2,
  },
  sendIcon: { width: '80%', height: 59, borderRadius: 15, backgroundColor: Colors.DARK, elevation: 2 }
});

export default UiTextInput;

