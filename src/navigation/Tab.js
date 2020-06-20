import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TableScoreComponent from '../components/TableScoreComponent';
import ScheduleComponent from '../components/ScheduleComponent';
import ProfileComponent from '../components/ProfileComponent';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();



export default function TabNavigator() {
  return (
      <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon:({color, size})=>{
          let iconName
          if(route.name== 'Schedule'){
            iconName ='calendar-alt'
          }else if(route.name== 'TableScore'){
            iconName ='star'
          }else if(route.name== 'Profile'){
            iconName ='user'
          }
          return <Icon name={iconName} size={size} color={color}></Icon>
        }
      })}
      backBehavior='none'
      tabBarOptions={{
        showLabel:false
      }}
      >
        <Tab.Screen name="Schedule" component={ScheduleComponent} />
        <Tab.Screen name="TableScore" component={TableScoreComponent} />
        <Tab.Screen name="Profile" component={ProfileComponent} />
      </Tab.Navigator>
  );
}
