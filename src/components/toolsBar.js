import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Colors, Styles } from '../utils/styles';
import { Screens } from '../utils/enums';
import { toolsbarAction, setCurrentCat } from '../store/actions/locationAction';
import { DELETE, UPDATE } from '../store/actionType';
import { setTools } from '../store/actions/globalAction';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import UiText from './uText';
import { useNavigation } from '@react-navigation/native';

const getIconName = (key) => {
  switch (key) {
    case 'delete': return "trash"
    case 'read': return "eye"
    case 'update': return "edit"
    case 'create': return "plus-circle"
    default: return "plus-circle"
  }
}

const CustomTextButton = ({ name, active, action }) => (
  <Icon.Button
    onPress={action}
    name={getIconName(name)}
    disabled={!active}
    backgroundColor={Colors.LIGHT}
    color={active ? Colors.BLACK : Colors.DARK}
    style={{ flexDirection: 'column' }}
  >
    <UiText style={{ color: active ? Colors.BLACK : Colors.DARK }}>
      {name}
    </UiText>
  </Icon.Button>
);

const ToolsBarComp = (props) => {

  const navigation = useNavigation();

  function onCreate() {
    props.setCurrentCat({ ['0']: '', ['1']: { _name: '' } });
    navigation.navigate(Screens.CREATE)
  }

  function onDelete(id) {
    props.toolsbarAction({id, type: DELETE, data: null});
    props.setCurrentCat({ ['0']: '', ['1']: { _name: '' } });
  }


  const onAction = (id) => {
    switch (id) {
      case 'delete': return onDelete(id)

      case 'read': return props.onRead()

      case 'update': return props.toolsbarAction({type: UPDATE})

      case 'create': return onCreate()

      default: return navigation.navigate(Screens.CREATE)
    }
  }

  return (
    <View style={stl.con}>
      <View style={stl.tools}>
        {Object.entries(props.toolsbar).map((i) => (
          <CustomTextButton key={i[0]} name={i[0]} active={i[1]} action={() => onAction(i[0])} />
        ))}
      </View>
      <UiText style={{fontSize: 20, minHeight: 40}}>{props.title}</UiText>
    </View>
  );
}

const stl = StyleSheet.create({
  con: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT,
    flex: 0.15,
    ...Styles.elevateFive,
  },
  tools: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentCat: (item) => dispatch(setCurrentCat(item)),
    setTools: (obj) => dispatch(setTools(obj)),
    toolsbarAction: (obj) => dispatch(toolsbarAction(obj)),
  };
};

const mapStateToProps = (state) => {
  return {
    toolsbar: state.globalReducer.toolsbar,
    currentCategory: state.locationReducer.currentCategory,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolsBarComp);

