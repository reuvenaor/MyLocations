import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { setCurrentLoc, createLocation, toolsbarAction, updateLocation } from '../store/actions/locationAction';
import { Styles } from '../utils/styles';
import { DELETE_LOCATION } from '../store/actionType';
import { EpLocation } from '../utils/enums';
import UiPicker from '../components/uPicker';
import ToolsBar from '../components/toolsBar';
import UiText from '../components/uText';
import UiButton from '../components/uButton';
import UiTextInput from '../components/uTextInput';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const deltas = { latitudeDelta: 0.015, longitudeDelta: 0.0121 }

const LocationScreen = (props) => {

  const currentLocation = props.currentLocation;

  const [name, setName] = useState(currentLocation.name);
  const [address, setAddress] = useState(currentLocation.address);
  const [category, setCategory] = useState(currentLocation.category);
  const [coords, setCoords] = useState(currentLocation.coordinates);
  const [editable, setEditable] = useState(currentLocation.name === '' || props.route?.params?.edit)
  const [pickerValue, setPickerValue] = useState('');

  function onValueChange(val) {
    setCategory([...category, val])
    setPickerValue(val)
  }


  function onPressMap(e) {
    if (editable) {
      setCoords(e.nativeEvent.coordinate);
    }
  }

  function onSave() {
    if (editable && currentLocation.id >= 0) {
      props.updateLocation({
        id: currentLocation.id,
        name,
        address,
        category,
        coordinates: coords
      })
    } else {
      props.createLocation({
        name,
        address,
        category,
        coordinates: coords
      });
    }
    props.navigation.goBack();
  }

  function onRead() {

  }

  function onUpdate() {

  }

  function onDelete() {
    props.toolsbarAction({ type: DELETE_LOCATION });
    props.navigation.goBack();
  }

  function onCreate() {
    props.setCurrentLoc(EpLocation)
  }

  return (
    <View style={[Styles.container]}>
      <ToolsBar title={name} onRead={onRead} onUpdate={onUpdate} onDelete={onDelete} onCreate={onCreate} />
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
          region={{ ...deltas, ...coords }}
        >
          <Marker coordinate={coords} title={'Your Location'} description={''} />
        </MapView>
        <UiText>{'categories: '}</UiText>
        <UiText style={{ fontSize: 20 }}>{category.map(i => ' ' + i[1]._name + ',')}</UiText>
        {editable ? <UiPicker array={Object.entries(props.categories)} value={pickerValue} title={'Add: '} onValueChange={onValueChange} /> : null}
        {editable ? <UiButton onPress={onSave} title={'SAVE'} style={{ alignSelf: 'center', marginBottom: '5%' }} /> : null}
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

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentLoc: (item) => dispatch(setCurrentLoc(item)),
    setTools: (obj) => dispatch(setTools(obj)),
    toolsbarAction: (tool) => dispatch(toolsbarAction(tool)),
    createLocation: (loc) => dispatch(createLocation(loc)),
    updateLocation: (loc) => dispatch(updateLocation(loc))
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locationReducer.locations,
    currentLocation: state.locationReducer.currentLocation,
    categories: state.locationReducer.categories,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen);