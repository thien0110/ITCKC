import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../containers/LoginContainer';
import * as React from 'react';
import TabNavigator from './Tab';
import TabSchoolInformationNavigator from './SchoolsInformationTab';
import LearningInfoComponent from '../components/LearningInfo';
import NotiComponent from '../components/NotiComponent'
import EditProfileContainer from '../containers/MenuProfile/EditProfileContainer'
import ProfileComponent from '../components/Profile/ProfileComponent'
import AboutComponent from '../components/Profile/AboutComponent'
import SettingComponent from '../components/Profile/SettingComponent'
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
        <Stack.Screen name="EditProfile" component={EditProfileContainer} />
        <Stack.Screen name="Profile" component={ProfileComponent} />
        <Stack.Screen name="About" component={AboutComponent} />
        <Stack.Screen name="Setting" component={SettingComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigator;
