import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import { createCat } from '../store/actions/locationAction';
import { Styles, Sizes, Colors } from '../utils/styles';
import ToolsBar from '../components/toolsBar';
import UiText from '../components/uText';

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
          <TextInput
            allowFontScaling={false}
            style={stl.textInput}
            numberOfLines={1}
            underlineColorAndroid={'transparent'}
            onChangeText={txt => setValue(txt)}
            multiline={true}
            maxLength={20}
            value={value}
            blurOnSubmit={true}
            disableFullscreenUI={true}
          />
          <TouchableOpacity onPress={onPress} style={[stl.btn]}>
            <UiText>{'SAVE'}</UiText>
          </TouchableOpacity>
        </View>
      </View>

    </TouchableWithoutFeedback>
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
    marginVertical: '10%'
  },
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