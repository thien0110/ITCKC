import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuComponent from '../components/MenuComponent';
import ProfileComponent from '../components/ProfileComponent';
import Images from '../res/Images';
import {
  Image,
} from 'react-native';
const Tab = createBottomTabNavigator();



export default function TabNavigator() {
  return (
      <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon:({color, size, focused })=>{
          let iconName
          if(route.name== 'Menu'){
            focused
            ?iconName =Images.iconMenuActive
            :iconName =Images.iconMenuInactive
          }else if(route.name== 'Profile'){
            focused
            ?iconName =Images.iconPersonActive
            :iconName =Images.iconPersonInactive
          }
          return <Image
            source={iconName}
            style={{
              width: 30,
              height: 30,
              resizeMode:"contain"
            }}></Image>
        }
      })}
      backBehavior='none'
      tabBarOptions={{
        showLabel:false,
        // style:{
        //   backgroundColor:Colors.navigation
        // },
        keyboardHidesTabBar: true,
      }}
      >
        <Tab.Screen name="Menu" component={MenuComponent} />
        <Tab.Screen name="Profile" component={ProfileComponent} />
      </Tab.Navigator>
  );
}
