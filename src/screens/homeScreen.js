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

const HomeScreen = (props) => {

  const onClear = () => {
    if (props.currentCategory[0] !== '') {
      props.onSetCurrentCat({ ['0']: '', ['1']: { _name: '' } })
    }
  }

  return (
    <View style={[Styles.container]}>
      <ToolsBar vader={'Categories'}/>
      <View style={{ flex: 0.9, width: '100%' }}>
        <FlatList
          onScroll={onClear}
          style={stl.scroll}
          numColumns={3}
          columnWrapperStyle={{ alignItems: 'center', justifyContent: 'center' }}
          renderItem={({ item }) => {
            return <TouchableOpacity
              style={[stl.catItem, props.currentCategory[0] === item[0] && { ...Styles.elevateFifteen }]}
              key={item[0]}
              onPress={() => props.onSetCurrentCat(item)}
            >
              <UiText>{item[1]?._name || ''}</UiText>
            </TouchableOpacity>
          }}
          data={Object.entries(props.categories)}
          keyExtractor={(item, idx) => item + idx}
        />
      </View>
    </View>
  );
}

const stl = StyleSheet.create({
  scroll: {
    width: '100%',
    paddingHorizontal: '5%',
  },
  catItem: {
    width: Sizes.FAV_BOX,
    width: '30%',
    ...Styles.box
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);