import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashComponent from '../components/SplashComponent';
import LoginContainer from '../containers/LoginContainer';
import * as React from 'react';
import TabNavigator from './Tab';
import TabSchoolInformationNavigator from './SchoolsInformationTab';

const Stack = createStackNavigator();
function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        headerMode="none"
        animation="fade">
        <Stack.Screen name="Splash" component={SplashComponent} />
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
