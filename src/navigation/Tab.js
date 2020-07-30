import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuContainer from '../containers/MenuContainer';
import MenuProfileContainer from '../containers/MenuProfileContainer';
import Images from '../res/Images';
import {
  Image,
} from 'react-native';
const Tab = createBottomTabNavigator();



export default function TabNavigator({route}) {
  // const { itemId } = route.params;
  //   console.warn(itemId, "tab")
  return (
      <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon:({color, size, focused })=>{
          let iconName
          if(route.name== 'Menu'){
            focused
            ?iconName =Images.iconMenuActive
            :iconName =Images.iconMenuInactive
          }else if(route.name== 'MenuProfile'){
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
        style:{
          backgroundColor:Colors.backgroundBlue
        },
        keyboardHidesTabBar: true,
      }}
      >
        <Tab.Screen name="Menu" component={MenuContainer} />
        <Tab.Screen name="MenuProfile" component={MenuProfileContainer} />
      </Tab.Navigator>
  );
}
