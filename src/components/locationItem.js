import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Styles, Sizes } from '../utils/styles';
import UiText from '../components/uText';

const categoryItem = (props) => {

  const item = props.item;

  return (
    <TouchableOpacity
      style={[stl.locItem, props.hightlighted && { ...Styles.elevateFifteen }]}
      onPress={() => props.setCurrentLoc(item)}
    >
      <View style={stl.blackWrap}>
        <View style={stl.block}>
          <UiText>{item.name}</UiText>
          <UiText>{item.address}</UiText>
        </View>
        <View style={stl.block}>
          <UiText>{'lat: ' + item.coordinates.lat}</UiText>
          <UiText>{'lng: ' + item.coordinates.lng}</UiText>
        </View>
      </View>
      <UiText>{'caterogies:'}</UiText>
      <UiText>{item.category.map(i => ' ' + i._name)}</UiText>
    </TouchableOpacity>
  );
}

const stl = StyleSheet.create({
  locItem: {
    width: Sizes.FAV_BOX,
    width: '46%',
    ...Styles.box,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '1%'
  },
  blackWrap: {
    flexDirection: 'row',
    flex: 1,
  },
  block: {
    flex: 1,
    height: '100%',
  },
});

export default categoryItem;