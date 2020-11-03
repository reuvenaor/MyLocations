import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  SectionList,
} from 'react-native';
import { connect } from 'react-redux';
import { setCurrentLoc, toolsbarAction } from '../store/actions/locationAction';
import { setTools } from '../store/actions/globalAction';
import { DELETE_LOCATION } from '../store/actionType';
import { Styles } from '../utils/styles';
import { EpLocation, Screens } from '../utils/enums';
import ToolsBar from '../components/toolsBar';
import LoccationItem from '../components/locationItem';
import UiPicker from '../components/uPicker';
import UiBottun from '../components/uButton';
import UiText from '../components/uText';

const LocationsScreen = (props) => {

  const [title, setTitle] = useState('Locations');
  const [locations, setLocations] = useState([{ title: 'all', data: props.locations }]);
  const [pickerValue, setPickerValue] = useState('')
  const [sortAsc, setSortAsc] = useState('')
  const isGroup = locations[0]?.title === 'all' && locations.length === 1;

  useEffect(() => {
    setTitle('Locations')
    if (props.currentLocation.name === '') {
      props.setTools({
        create: true,
        delete: false,
        read: false,
        update: false,
      });
    } else {
      setTitle(props.currentLocation.name)
      props.setTools({
        create: true,
        delete: true,
        read: true,
        update: true,
      });
    }
  }, [props.currentLocation])

  useEffect(() => {
    setLocations([{ title: 'all', data: props.locations }])
  }, [props.locations])

  function sortName(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return sortAsc === 'asc' ? -1 : 1;
    }
    if (nameA > nameB) {
      return sortAsc === 'asc' ? 1 : -1;
    }
    return 0;
  }

  function onValueChange(val) {
    const newList = props.locations.filter(l => {
      return l.category.find(ci => {
        return ci[1]._name === val[1]._name
      })
    })
    if (newList.length) {
      setLocations([{ title: val[1]._name, data: newList }]);
    } else {
      setLocations([{ title: val[1]._name, data: [] }]);
    }
    setPickerValue(val)
  }

  function onSort() {
    const newList = locations.map(lo => {
      return { data: lo.data.sort(sortName), title: lo.title }
    });
    setLocations(newList)
    setSortAsc(sortAsc === 'asc' ? 'desc' : 'asc')
  }

  function onGroupBy() {
    if (isGroup) {
      const newList = Object.entries(props.categories).map(co => {
        const filteredLoctions = props.locations.filter(l => {
          return l.category.find(ci => {
            return ci[1]._name === co[1]._name
          })
        })
        return { title: co[1]._name, data: filteredLoctions }
      });
      setLocations(newList);
    } else {
      setLocations([{ title: 'all', data: props.locations }]);
    }
  }

  const onClear = () => {
    setTitle('Locations')
    if (props.currentLocation.name !== '') {
      props.setCurrentLoc(EpLocation)
    }
  }

  function onRead() {
    if (props.currentLocation) {
      props.setTools({
        create: false,
        delete: true,
        read: false,
        update: false
      });
      props.navigation.navigate(Screens.LOCATION, { edit: false });
    }
  }

  function onCreate() {
    props.setTools({
      create: false,
      delete: false,
      read: false,
      update: false
    });
    props.navigation.navigate(Screens.LOCATION, { edit: true });
    props.setCurrentLoc(EpLocation)
  }

  function onDelete() {
    if (props.currentLocation.id >= 0) {
      props.toolsbarAction({ type: DELETE_LOCATION });
    }
  }

  function onUpdate() {
    props.setTools({
      create: false,
      delete: true,
      read: false,
      update: false
    });
    props.navigation.navigate(Screens.LOCATION, { edit: true });
  }


  return (
    <View style={[Styles.container]}>
      <ToolsBar title={title} onRead={onRead} onCreate={onCreate} onDelete={onDelete} onUpdate={onUpdate} />
      <View style={Styles.body}>
        <View style={stl.btnsWrap}>
          <UiBottun title={'Alphabetically ' + sortAsc} style={[stl.srtBtn]} onPress={onSort} />
          <UiBottun title={isGroup ? 'Group by category' : 'All'} style={[stl.srtBtn]} onPress={onGroupBy} />
        </View>
        <UiPicker array={Object.entries(props.categories)} value={pickerValue} title={'Filter'} onValueChange={onValueChange} />
        <SectionList
          onScroll={onClear}
          style={stl.scroll}
          numColumns={2}
          columnWrapperStyle={{ alignItems: 'center', justifyContent: 'center' }}
          sections={locations}
          keyExtractor={(item, idx) => item + idx}
          renderItem={({ item, index }) => {
            return <LoccationItem
              key={index}
              id={index}
              item={item}
              hightlighted={props.currentLocation.name === item.name}
              setCurrentLoc={props.setCurrentLoc}
            />
          }}
          renderSectionHeader={({ section: { title } }) => title ? (
            <UiText style={{ fontSize: 20 }}>{title}</UiText>
          ) : null}
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
  srtBtn: { width: '45%' },
  btnsWrap: { width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }
});


const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentLoc: (item) => dispatch(setCurrentLoc(item)),
    setTools: (obj) => dispatch(setTools(obj)),
    updateCategory: (str) => dispatch(updateCategory(str)),
    toolsbarAction: (tool) => dispatch(toolsbarAction(tool)),
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locationReducer.locations,
    currentLocation: state.locationReducer.currentLocation,
    categories: state.locationReducer.categories,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsScreen);