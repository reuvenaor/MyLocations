import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { setCurrentCat, updateCategory } from '../store/actions/locationAction';
import { setTools } from '../store/actions/globalAction';
import { Styles, Sizes } from '../utils/styles';
import ToolsBar from '../components/toolsBar';
import LoccationItem from '../components/locationItem';


const CategoriesScreen = (props) => {

  const [title, setTitle] = useState('Locations');

  useEffect(() => {
    if (props.currentLocation.name === '') {
      props.setTools({
        create: true,
        delete: false,
        read: false,
        update: false,
      });
    } else {
      props.setTools({
        create: true,
        delete: true,
        read: true,
        update: true,
      });
    }
  }, [props.currentLocation])

  const onClear = () => {
    setTitle('Locations')
    if (props.currentLocation.name !== '') {
      props.setCurrentCat({ ['0']: '', ['1']: { _name: '' } })
    }
  }

  function onRead() {
    if (props.currentLocation.name) {
      setTitle(props.currentLocation.name)
    }
  }

  return (
    <View style={[Styles.container]}>
      <ToolsBar title={title} onRead={onRead} />
      <View style={Styles.body}>
        <FlatList
          onScroll={onClear}
          style={stl.scroll}
          numColumns={2}
          columnWrapperStyle={{ alignItems: 'center', justifyContent: 'center' }}
          data={props.locations}
          keyExtractor={(item, idx) => item + idx}
          renderItem={({ item }) => {
            return <LoccationItem 
            key={item} 
            item={item} 
            hightlighted={props.currentLocation.name === item.name}  
            setCurrentCat={props.setCurrentCat}
            updateCategory={props.updateCategory}
            />
          }}
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
    setCurrentCat: (item) => dispatch(setCurrentCat(item)),
    setTools: (obj) => dispatch(setTools(obj)),
    updateCategory: (str) => dispatch(updateCategory(str))
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locationReducer.locations,
    currentLocation: state.locationReducer.currentLocation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen);