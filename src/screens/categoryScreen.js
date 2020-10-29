import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { onSetCurrentCat } from '../store/actions/locationAction';
import { Styles, Sizes, Colors } from '../utils/styles';
import ToolsBar from '../components/toolsBar';
import UiText from '../components/uText';

const CategoryScreen = (props) => {


  return (
    <View style={[Styles.container]}>
      <ToolsBar vader={''}/>
      <View style={{ flex: 0.9, width: '100%' }}>
    
      </View>
    </View>
  );
}

const stl = StyleSheet.create({

});


const mapDispatchToProps = (dispatch) => {
  return {
    onSetCurrentCat: (item) => dispatch(onSetCurrentCat(item))
  };
};

const mapStateToProps = (state) => {
  return {
    categories: state.locationReducer.categories,
    currentCategory: state.locationReducer.currentCategory,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);