import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../containers/LoginContainer';
import * as React from 'react';
import TabNavigator from './Tab';
import TabSchoolInformationNavigator from './SchoolsInformationTab';
import LearningInfoComponent from '../components/LearningInfo';
import NotiComponent from '../components/NotiComponent'
const Stack = createStackNavigator();
function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="none">
        <Stack.Screen name="Login" component={LoginContainer} />
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="TabSchool" component={TabSchoolInformationNavigator} />
        <Stack.Screen name="LearningInfo" component={LearningInfoComponent} />
        <Stack.Screen name="Noti" component={NotiComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigator;
