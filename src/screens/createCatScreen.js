import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import { createCat } from '../store/actions/locationAction';
import { Styles, Sizes, Colors } from '../utils/styles';
import ToolsBar from '../components/toolsBar';
import UiButton from '../components/uButton';
import UiTextInput from '../components/uTextInput';

const CreateCatScreen = (props) => {

  const [value, setValue] = useState('');

  function onPress() {
    props.createCat(value);
    props.navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[Styles.container]}>
        <ToolsBar title={'New Category'} />
        <View style={Styles.body}>
          <UiTextInput
           onChangeText={txt => setValue(txt)}
           value={value}
           style={{ marginVertical: '10%' }}
          /> 
          <UiButton onPress={onPress} title={'SAVE'}/>
        </View>
      </View>

    </TouchableWithoutFeedback>
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


const mapDispatchToProps = (dispatch) => {
  return {
    createCat: (str) => dispatch(createCat(str))
  };
};


export default connect(null, mapDispatchToProps)(CreateCatScreen);