import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { createCat } from '../store/actions/locationAction';
import { Styles, Sizes, Colors } from '../utils/styles';
import ToolsBar from '../components/toolsBar';
import UiText from '../components/uText';
import UiButton from '../components/uButton';
import UiTextInput from '../components/uTextInput';


function onPress() {
  // props.createCat(value);
  props.navigation.goBack();
}


const LocationScreen = (props) => {

  const [name, setName] = useState('name');
  const [address, setAddress] = useState('address');
  const [lat, setLat] = useState('lat');
  const [lng, setLng] = useState('lng');

  return (
    <View style={[Styles.container]}>
      <ToolsBar title={name} />
      <ScrollView style={[Styles.bodyScroll, stl.locationWrap]}>
        <UiTextInput
          onChangeText={txt => setName(txt)}
          value={name}
          title={'Name: '}
          editable={false}
        />
        <UiTextInput
          onChangeText={txt => setAddress(txt)}
          value={address}
          title={'Address: '}
          editable={false}
        />
        {/* <UiTextInput
          onChangeText={txt => setLat(txt)}
          value={lat}
          title={'Latitude: '}
          editable={false}
        />
        <UiTextInput
          onChangeText={txt => setLng(txt)}
          value={lng}
          title={'Longitude: '}
          editable={false}
        /> */}
        <UiText>{'categories: '}</UiText>
        <UiButton onPress={onPress} title={'SAVE'} style={{ alignSelf: 'center' }} />
      </ScrollView>
    </View>
  );
}

const stl = StyleSheet.create({
  locationWrap: {
    padding: '4%'
  },
});


export default LocationScreen;