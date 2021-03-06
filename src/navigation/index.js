import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import LoginContainer from '../containers/LoginContainer';
import TabNavigator from './Tab';
import SearchContainer from '../containers/SearchContainer';
import ItCenterContainer from '../containers/ItCenter/ItCenterContainer';
import WorkInfoContainer from '../containers/WorkInfoContainer';
import AlumniContainer from '../containers/AlumniContainer';
import DepartmentInfoContainer from '../containers/DepartmentInfo/DepartmentInfoContainer';


import SchoolInfoContainer from '../containers/SchoolInfo/SchoolInfoContainer';
import LearningInfoContainer from '../containers/LearningInfo/LearningInfoContainer';
import TabSubjectNavigator from './subjectInfo';
import NotiContainer from '../containers/NotiContainer';
import AboutComponent from '../components/Profile/AboutComponent';
import SettingComponent from '../components/Profile/SettingComponent';
import TimeTable from '../containers/MenuProfile/TimeTableContainer';
import ScoreTableContainer from '../containers/MenuProfile/ScoreTableContainer';
import YourClassContainer from '../containers/MenuProfile/YourClassContainer';

import EditProfileContainer from '../containers/MenuProfile/EditProfileContainer';
import ProfileContainer from '../containers/MenuProfile/ProfileContainer';
import PostDetail from '../components/postDetail';
import AlarmComponent from '../components/customs/AlarmComponent';

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
        <Stack.Screen name="ItCenter" component={ItCenterContainer}/>
        <Stack.Screen name="WorkInfo" component={WorkInfoContainer}/>
        <Stack.Screen name="Alumni" component={AlumniContainer}/>
        <Stack.Screen name="DepartmentInfo" component={DepartmentInfoContainer}/>

        <Stack.Screen name="LearningInfo" component={LearningInfoContainer} />

        <Stack.Screen name="Noti" component={NotiContainer} />
        <Stack.Screen name="About" component={AboutComponent} />
        
        <Stack.Screen name="Setting" component={SettingComponent} />
        <Stack.Screen name="EditProfile" component={EditProfileContainer} />
        <Stack.Screen name="Profile" component={ProfileContainer} />
        <Stack.Screen name="Subject" component={TabSubjectNavigator} />
        <Stack.Screen name="PostDetail" component={PostDetail}/>
        <Stack.Screen name="TimeTable" component={TimeTable}/>
        <Stack.Screen name="ScoreTable" component={ScoreTableContainer}/>
        <Stack.Screen name="YourClassComponent" component={YourClassContainer}/>
        <Stack.Screen name="AlarmNoti" component={AlarmComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigator;
