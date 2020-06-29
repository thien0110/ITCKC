import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../containers/LoginContainer';
import * as React from 'react';
import TabNavigator from './Tab';
import TabSchoolInformationNavigator from './SchoolsInformationTab';

const Stack = createStackNavigator();
function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="none">
        <Stack.Screen name="Login" component={LoginContainer} />
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen
          name="TabSchool"
          component={TabSchoolInformationNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigator;
