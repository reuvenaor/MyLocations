import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import {  } from '../store/actions/locationAction';
import { Styles, Strings, Sizes, Colors } from '../utils/styles';
import Header from '../components/header';
import UiTextInput from '../components/uiTextInput';
import UiText from '../components/uText';
import Error from '../components/errorText';
import Loader from '../components/loader';


const HomeScreen = (props) => {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[Styles.container]}>

      </View>
    </TouchableWithoutFeedback>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {

  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locationReducer.locations
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);