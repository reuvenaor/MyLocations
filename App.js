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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from './src/utils/enums';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from './src/utils/styles'
import CategoriesScreen from './src/screens/CategoriesScreen';
import CreateCatScreen from './src/screens/createCatScreen';
import LocationsScreen from './src/screens/LocationsScreen';
import LocationScreen from './src/screens/LocationScreen';


const CategoriesStack = createStackNavigator();

function CategoriesScreens() {
  return (
    <CategoriesStack.Navigator headerMode="none">
      <CategoriesStack.Screen name={Screens.CAT_HOME} component={CategoriesScreen} />
      <CategoriesStack.Screen name={Screens.CREATE} component={CreateCatScreen} />
    </CategoriesStack.Navigator>
  );
}

const LocationsStack = createStackNavigator();

function LocationsScreens() {
  return (
    <LocationsStack.Navigator headerMode="none">
      <LocationsStack.Screen name={Screens.CAT_HOME} component={LocationsScreen} />
      <LocationsStack.Screen name={Screens.LOCATION} component={LocationScreen} />
    </LocationsStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

StatusBar.setHidden(true)

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === Screens.LOCATIONS) {
                iconName = 'compass'
              } else if (route.name === Screens.CATEGORIES) {
                iconName = 'th-large';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: Colors.BLACK,
            inactiveTintColor: Colors.DARK,
          }}
        >
          <Tab.Screen name={Screens.LOCATIONS} component={LocationsScreens} />
          <Tab.Screen name={Screens.CATEGORIES} component={CategoriesScreens} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;