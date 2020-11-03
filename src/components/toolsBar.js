import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Colors, Styles } from '../utils/styles';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import UiText from './uText';

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

  const onAction = (id) => {
    switch (id) {
      case 'delete': return props.onDelete(id)

      case 'read': return props.onRead()

      case 'update': return props.onUpdate() //props.toolsbarAction({ type: UPDATE })

      case 'create': return props.onCreate()

      default: return () => true
    }
  }

  return (
    <View style={stl.con}>
      <View style={stl.tools}>
        {Object.entries(props.toolsbar).map((i) => (
          <CustomTextButton key={i[0]} name={i[0]} active={i[1]} action={() => onAction(i[0])} />
        ))}
      </View>
      <UiText style={{ fontSize: 20, minHeight: 40 }}>{props.title}</UiText>
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


const mapStateToProps = (state) => {
  return {
    toolsbar: state.globalReducer.toolsbar,
  };
};

export default connect(mapStateToProps, null)(ToolsBarComp);

