import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuComponent from '../components/MenuComponent';
import ProfileComponent from '../components/ProfileComponent';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../res/Colors';
import { shadow } from 'react-native-paper';
const Tab = createBottomTabNavigator();



export default function TabNavigator() {
  return (
      <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon:({color, size})=>{
          let iconName
          if(route.name== 'Menu'){
            iconName ='th'
          }else if(route.name== 'Profile'){
            iconName ='user-circle'
          }
          return <Icon name={iconName} size={size} color={color}></Icon>
        }
      })}
      backBehavior='none'
      tabBarOptions={{
        showLabel:false,
        style:{
          backgroundColor:Colors.navigation
        },
        activeTintColor:Colors.lightBlue,
        inactiveTintColor:Colors.white
      }}
      >
        <Tab.Screen name="Menu" component={MenuComponent} />
        <Tab.Screen name="Profile" component={ProfileComponent} />
      </Tab.Navigator>
  );
}
