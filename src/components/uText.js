import React from 'react';
import {
  Text
} from 'react-native';

const Utext = (props) => {

  return (
    <Text
      allowFontScaling={false}
      style={props.style}
      textAlign={props.textAlign}
      onPress={props.onPress}
      adjustsFontSizeToFit={props.adjustsFontSizeToFit}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
    >
      {props.children}
    </Text>
  );
}

export default Utext;

