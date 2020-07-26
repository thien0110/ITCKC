import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import LoginContainer from '../containers/LoginContainer';
import TabNavigator from './Tab';
import SearchComponent from '../components/SearchComponent';


import SchoolInfoComponent from '../components/SchoolsInformation/SchoolInfoComponent';
import LearningInfoComponent from '../components/LearningInfo';
import TabSubjectNavigator from './subjectInfo';
import NotiComponent from '../components/NotiComponent'
import AboutComponent from '../components/Profile/AboutComponent'
import SettingComponent from '../components/Profile/SettingComponent'

import EditProfileContainer from '../containers/MenuProfile/EditProfileContainer'
import ProfileContainer from '../containers/MenuProfile/ProfileContainer'
import PostDetail from '../components/postDetail'

const Stack = createStackNavigator();
function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="none">
        <Stack.Screen name="Login" component={LoginContainer} />
        <Stack.Screen name="Tab" component={TabNavigator} />

        <Stack.Screen name="SchoolInfo" component={SchoolInfoComponent}/>
        <Stack.Screen name="Search" component={SearchComponent}/>

        <Stack.Screen name="LearningInfo" component={LearningInfoComponent} />

        <Stack.Screen name="Noti" component={NotiComponent} />
        <Stack.Screen name="About" component={AboutComponent} />
        
        <Stack.Screen name="Setting" component={SettingComponent} />
        <Stack.Screen name="EditProfile" component={EditProfileContainer} />
        <Stack.Screen name="Profile" component={ProfileContainer} />
        <Stack.Screen name="Subject" component={TabSubjectNavigator} />
        <Stack.Screen name="PostDetail" component={PostDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigator;
