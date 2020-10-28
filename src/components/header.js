import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Sizes, Strings, Colors } from '../utils/styles';
import Utext from './uText';

const Btn = ({ onPress, text, style }) =>
  <TouchableOpacity onPress={onPress} style={[stl.btn, style]}>
    <Utext>{text}</Utext>
  </TouchableOpacity>

const Header = (props) => {

  function onNavHome() {
    props.onNav(Strings.HOME)
  }

  function onNavFav() {
      props.onNav(Strings.FAV)
  }

  return (
    <View style={stl.con}>
      <Utext>{'Boilerplate app'}</Utext>

      <View style={stl.btnsWrap}>
        <Btn style={[stl.leftBtn, props.father === Strings.FAV ? { backgroundColor: Colors.DARK } : null]}
          text={Strings.FAV}
          onPress={onNavFav}
        />
        <Btn style={[stl.rightBtn, props.father === Strings.HOME ? { backgroundColor: Colors.DARK } : null]}
          text={Strings.HOME}
          onPress={onNavHome}
        />
      </View>

    </View>
  );
}

const stl = StyleSheet.create({
  con: {
    width: '100%',
    height: Sizes.HEADER_H,
    backgroundColor: Colors.LIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    elevation: 5,
  },
  btnsWrap: {
    height: Sizes.TEXT_IN_H,
    maxWidth: '45%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    height: '100%',
    width: '50%',
    backgroundColor: Colors.AMB,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftBtn: {
    borderBottomLeftRadius: Sizes.PREC_2,
    borderTopLeftRadius: Sizes.PREC_2,
  },
  rightBtn: {
    borderBottomRightRadius: Sizes.PREC_2,
    borderTopRightRadius: Sizes.PREC_2,
  }
});

export default Header;

