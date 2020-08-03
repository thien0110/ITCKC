import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import LoginContainer from '../containers/LoginContainer';
import TabNavigator from './Tab';
import SearchContainer from '../containers/SearchContainer';
import ItCenterComponent from '../components/ItCenter/ItCenterComponent';
import WorkInfoComponent from '../components/WorkInfo/WorkInfoComponent';
import AlumniComponent from '../components/Alumni/AlumniComponent';
import DepartmentInfoContainer from '../containers/DepartmentInfo/DepartmentInfoContainer';


import SchoolInfoContainer from '../containers/SchoolInfo/SchoolInfoContainer';
import LearningInfoContainer from '../containers/LearningInfo/LearningInfoContainer';
import TabSubjectNavigator from './subjectInfo';
import NotiComponent from '../components/NotiComponent'
import AboutComponent from '../components/Profile/AboutComponent'
import SettingComponent from '../components/Profile/SettingComponent'
import TimeTable from '../components/Profile/TimeTableComponent'
import ScoreTable from '../components/Profile/ScoreTableComponent'
import YourClassComponent from '../components/Profile/YourClassComponent'

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

        <Stack.Screen name="SchoolInfo" component={SchoolInfoContainer}/>
        <Stack.Screen name="Search" component={SearchContainer}/>
        <Stack.Screen name="ItCenter" component={ItCenterComponent}/>
        <Stack.Screen name="WorkInfo" component={WorkInfoComponent}/>
        <Stack.Screen name="Alumni" component={AlumniComponent}/>
        <Stack.Screen name="DepartmentInfo" component={DepartmentInfoContainer}/>

        <Stack.Screen name="LearningInfo" component={LearningInfoContainer} />

        <Stack.Screen name="Noti" component={NotiComponent} />
        <Stack.Screen name="About" component={AboutComponent} />
        
        <Stack.Screen name="Setting" component={SettingComponent} />
        <Stack.Screen name="EditProfile" component={EditProfileContainer} />
        <Stack.Screen name="Profile" component={ProfileContainer} />
        <Stack.Screen name="Subject" component={TabSubjectNavigator} />
        <Stack.Screen name="PostDetail" component={PostDetail}/>
        <Stack.Screen name="TimeTable" component={TimeTable}/>
        <Stack.Screen name="ScoreTable" component={ScoreTable}/>
        <Stack.Screen name="YourClassComponent" component={YourClassComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigator;
