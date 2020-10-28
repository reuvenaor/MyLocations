import React from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Sizes, Colors, Styles } from '../utils/styles';


const Loader = ({ loader }) => {
  if (loader) {
    return <View style={{...Styles.container, position: 'absolute', top: -Sizes.HALF, zIndex: 4, alignItems: 'center', justifyContent: 'center',  }}>
      <ActivityIndicator  size="large" color={Colors.DARK} />
    </View>
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    loader: state.globalReducer.loader,
  };
};

export default connect(mapStateToProps, null)(Loader);