import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Colors, Styles } from '../utils/styles';
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

  const onAction = (id) => {
    switch (id) {
      case 'delete': return props.onDelete && props.onDelete(id)

      case 'read': return props.onRead && props.onRead()

      case 'update': return props.onUpdate && props.onUpdate()

      case 'create': return props.onCreate && props.onCreate()

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
      <UiText style={stl.title}>{props.title}</UiText>

      <View style={stl.backBtn}>
        <Icon.Button
          onPress={navigation.goBack}
          name={'arrow-left'}
          color={'#000'}
          backgroundColor={Colors.LIGHT}
        />
      </View>

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
  title: { fontSize: 20, minHeight: 40 },
  tools: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  backBtn: {position: 'absolute', bottom: '3%', left: '3%'}
});


const mapStateToProps = (state) => {
  return {
    toolsbar: state.globalReducer.toolsbar,
  };
};

export default connect(mapStateToProps, null)(ToolsBarComp);

