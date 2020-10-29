import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { setCurrentCat } from '../store/actions/locationAction';
import { Styles, Sizes, Colors } from '../utils/styles';
import ToolsBar from '../components/toolsBar';
import UiText from '../components/uText';

const CreateScreen = (props) => {


  return (
    <View style={[Styles.container]}>
      <ToolsBar title={'New Category'}/>
      <View style={{ flex: 0.9, width: '100%' }}>
    
      </View>
    </View>
  );
}

const stl = StyleSheet.create({

});


const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentCat: (item) => dispatch(setCurrentCat(item))
  };
};

const mapStateToProps = (state) => {
  return {
    categories: state.locationReducer.categories,
    currentCategory: state.locationReducer.currentCategory,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);