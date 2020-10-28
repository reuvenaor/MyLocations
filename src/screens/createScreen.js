import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { setLoader } from '../store/actions/globalAction';
import { Styles, Strings, Sizes, Colors } from '../utils/styles';
import Header from '../components/header';
import Utext from '../components/uText';
import Loader from '../components/loader';

const CreateScreen = (props) => {

  useEffect(() => {
    return () => {
    }
  }, []);




  return (
    <View style={Styles.container} contentContainerStyle={{ alignItems: 'center' }}>

    </View>
  );
}

const stl = StyleSheet.create({
  scroll: {
    width: '100%',
    paddingHorizontal: '5%',
  },
  favItem: {
    width: Sizes.FAV_BOX,
    width: '30%',
    ...Styles.box
  }
});


const mapDispatchToProps = (dispatch) => {
  return {
    setLoader: (bool) => dispatch(setLoader(bool)),
  };
};

const mapStateToProps = (state) => {
  return {
    loader: state.globalReducer.loader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);