import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Styles, Sizes } from '../utils/styles';
import UiText from '../components/uText';

const categoryItem = (props) => {

  const item = props.item;

  if (item) {
    return (
      <TouchableOpacity
        style={[stl.locItem, props.hightlighted && { ...Styles.elevateFifteen }]}
        onPress={() => props.setCurrentLoc({...item, id: props.id})}
      >
        <View style={stl.blackWrap}>
          <View style={stl.block}>
            <UiText style={{fontSize: 18}}>{item.name}</UiText>
            <UiText>{item.address}</UiText>
          </View>
          <View style={stl.block}>
            <UiText>{'lat: ' + item.coordinates.latitude.toFixed(4)}</UiText>
            <UiText>{'lng: ' + item.coordinates.longitude.toFixed(4)}</UiText>
          </View>
        </View>
        <UiText>{'caterogies:'}</UiText>
        <UiText>{item.category.map(i => ' ' + i[1]._name + ',')}</UiText>
      </TouchableOpacity>
    );
  } else {
    return null
  }

}

const stl = StyleSheet.create({
  locItem: {
    width: Sizes.FAV_BOX,
    width: '96%',
    ...Styles.box,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '2%'
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