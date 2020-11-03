import React, { useState, useEffect } from 'react';
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

const deltas = { latitudeDelta: 0.015, longitudeDelta: 0.0121 }

const LocationScreen = (props) => {

  const { currentLocation, type } = props.route.params;
  const editable = currentLocation.name === '';

  const [name, setName] = useState(currentLocation.name);
  const [address, setAddress] = useState(currentLocation.address);
  const [coords, setCoords] = useState(currentLocation.coordinates);

  function onPressMap(e) {
    setCoords(e.nativeEvent.coordinate);
  }

  function onSave() {
    props.navigation.goBack();
  }

  return (
    <View style={[Styles.container]}>
      <ToolsBar title={name} />
      <ScrollView style={[Styles.bodyScroll, stl.locationWrap]}>
        <UiTextInput
          onChangeText={txt => setName(txt)}
          editable={editable}
          value={name}
          title={'Name: '}
        />
        <UiTextInput
          onChangeText={txt => setAddress(txt)}
          editable={editable}
          value={address}
          title={'Address: '}
        />
        <MapView
          // ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={stl.map}
          showsUserLocation
          followsUserLocation
          onPress={onPressMap}
          liteMode={!editable}
          loadingEnabled
          initialRegion={{ ...deltas, ...coords }}
          region={{ ...deltas, ...coords }}
        >
          <Marker coordinate={coords} title={'Your Location'} description={''} />
        </MapView>
        <UiText>{'categories: '}</UiText>
        {editable ? <UiButton onPress={onSave} title={'SAVE'} style={{ alignSelf: 'center' }} /> : null}
      </ScrollView>
    </View>
  );
}

const stl = StyleSheet.create({
  locationWrap: {
    padding: '4%'
  },
  map: {
    marginVertical: '2%',
    width: '100%',
    height: 150,
  }
});


export default LocationScreen;