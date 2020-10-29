import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Styles, Sizes } from '../utils/styles';

const categoryItem = (props) => {

  const [value, setValue] = useState(props.item[1]._name)
  const textInput = useRef();

  useEffect(() => {
    if (props.item[1]?._name === '' && textInput?.current) {
      textInput.current.focus();
    }
  }, [props.item])

  return (
    <TouchableOpacity
      style={[stl.catItem, props.hightlighted && { ...Styles.elevateFifteen }]}
      onPress={() => props.setCurrentCat(props.item)}
    >
      <TextInput
        allowFontScaling={false}
        editable={props.item[1]?._name === ''}
        numberOfLines={1}
        ref={textInput}
        underlineColorAndroid={'transparent'}
        onChangeText={txt => setValue(txt)}
        onEndEditing={() => props.updateCategory(value)}
        multiline={true}
        maxLength={20}
        value={value}
        blurOnSubmit={true}
        placeholder={props.item[1]?._name || ''}
        defaultValue={props.item[1]?._name || ''}
        disableFullscreenUI={true}
      />
    </TouchableOpacity>
  );
}

const stl = StyleSheet.create({
  catItem: {
    width: Sizes.FAV_BOX,
    width: '30%',
    ...Styles.box
  }
});

export default categoryItem;