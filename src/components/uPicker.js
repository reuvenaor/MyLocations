import React from 'react';
import {
  View,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import UiText from './uText';

const UiPicker = (props) => {

  function onValueChange(val) {
    props.onValueChange(val);
  }

  return (
    <View style={{width: '100%', padding: '2%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <UiText >{props.title}</UiText>
      <Picker
        selectedValue={props.value}
        style={{ width: '50%', alignItems: 'center' }}
        mode={'dropdown'}
        onValueChange={onValueChange}
      >
        {props.array.map((i, idx) => <Picker.Item key={idx} label={i[1]._name} value={i} />)}
      </Picker>
    </View>
  );
}


export default UiPicker;