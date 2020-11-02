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
import MapView, { PROVIDER_GOOGLE, Polyline, Marker, MAP_TYPES } from 'react-native-maps';


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
        <MapView
          // ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={stl.map}
          showsUserLocation
          followsUserLocation
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          // onPress={props.onPressMap}
          // showsCompass
          loadingEnabled
        // region={props.region}
        // onRegionChange={reg => true}
        >
        </MapView>
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
  map: {
    marginTop: '2%',
    width: '100%',
    height: 100,
  }
});


export default LocationScreen;