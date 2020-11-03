import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  SectionList,
} from 'react-native';
import { connect } from 'react-redux';
import { setCurrentLoc } from '../store/actions/locationAction';
import { setTools } from '../store/actions/globalAction';
import { Styles, Sizes } from '../utils/styles';
import ToolsBar from '../components/toolsBar';
import LoccationItem from '../components/locationItem';
import UiPicker from '../components/uPicker';
import UiBottun from '../components/uButton';
import UiText from '../components/uText';
import { Screens } from '../utils/enums';

const CategoriesScreen = (props) => {

  const [title, setTitle] = useState('Locations');
  const [locations, setLocations] = useState([{ title: 'all', data: props.locations }]);
  const [pickerValue, setPickerValue] = useState('')
  const [sortAsc, setSortAsc] = useState('')
  const isGroup = locations[0]?.title === 'all' && locations.length === 1;

  // useEffect(() => {
  //   setLocations([{ title: 'all', data: props.locations }])
  // },[])

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
        return ci._name === val
      })
    })
    console.log(newList);
    if (newList.length) {
      setLocations([{ title: val, data: newList }]);
    } else {
      setLocations([{ title: val, data: [] }]);
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
            return ci._name === co[1]._name
          })
        })
        return { title: co[1]._name, data: filteredLoctions }
      });
      setLocations(newList);
    } else {
      console.log('all')
      setLocations([{ title: 'all', data: props.locations }]);
    }
  }

  const onClear = () => {
    setTitle('Locations')
    if (props.currentLocation.name !== '') {
      props.setCurrentLoc({
        name: '',
        address: '',
        coordinates: {
          latitude: '',
          longitude: ''
        },
        category: []
      })
    }
  }

  function onRead() {
    if (props.currentLocation) {
      props.setTools({        
        create: true,
        delete: true,
        read: false,
        update: false
      });
      props.navigation.navigate(Screens.LOCATION, {currentLocation: props.currentLocation, type: 'read'});
    }
  }

  return (
    <View style={[Styles.container]}>
      <ToolsBar title={title} onRead={onRead} />
      <View style={Styles.body}>
        <View style={{ width: '100%', flexDirection: 'row' }}>
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
          renderItem={({ item }) => {
            return <LoccationItem
              key={item}
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
  srtBtn: { width: '45%', marginLeft: '1%', alignSelf: 'flex-start' }
});


const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentLoc: (item) => dispatch(setCurrentLoc(item)),
    setTools: (obj) => dispatch(setTools(obj)),
    updateCategory: (str) => dispatch(updateCategory(str)),
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locationReducer.locations,
    currentLocation: state.locationReducer.currentLocation,
    categories: state.locationReducer.categories,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen);