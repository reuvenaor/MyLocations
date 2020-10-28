import 'react-native-gesture-handler';
import * as React from 'react';
import { I18nManager, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
I18nManager.allowRTL(false);
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import configureStore from './src/store/configureStore';
const store = configureStore();
import HomeScreen from './src/screens/homeScreen';
import CreateScreen from './src/screens/createScreen';
import {Strings} from './src/utils/styles';


const Stack = createStackNavigator();
StatusBar.setHidden(true)

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={Strings.HOME} component={HomeScreen} />
          <Stack.Screen name={Strings.CREATE} component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;