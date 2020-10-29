import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { setCurrentCat, updateCategory } from '../store/actions/locationAction';
import { setTools } from '../store/actions/globalAction';
import { Styles, Sizes, Colors } from '../utils/styles';
import ToolsBar from '../components/toolsBar';
import CatItem from '../components/categoryItem';

const HomeScreen = (props) => {

  const [title, setTitle] = useState('Categories');


  useEffect(() => {
    if (props.currentCategory[0] === '') {
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
  }, [props.currentCategory])

  const onClear = () => {
    setTitle('Categories')
    if (props.currentCategory[0] !== '') {
      props.setCurrentCat({ ['0']: '', ['1']: { _name: '' } })
    }
  }

  function onRead() {
    if (props.currentCategory[1]._name) {
      setTitle(props.currentCategory[1]._name)
    }
  }

  return (
    <View style={[Styles.container]}>
      <ToolsBar title={title} onRead={onRead} />
      <View style={{ flex: 0.9, width: '100%', alignItems: 'center'  }}>
        <FlatList
          onScroll={onClear}
          style={stl.scroll}
          numColumns={3}
          columnWrapperStyle={{ alignItems: 'center', justifyContent: 'center' }}
          data={Object.entries(props.categories)}
          keyExtractor={(item, idx) => item + idx}
          renderItem={({ item }) => {
            return <CatItem 
            key={item[0]} 
            item={item} 
            hightlighted={props.currentCategory[0] === item[0]}  
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
    categories: state.locationReducer.categories,
    currentCategory: state.locationReducer.currentCategory,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);