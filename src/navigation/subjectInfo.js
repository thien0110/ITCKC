import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ThreadComponent from '../components/LearningInfo/ThreadComponent';
import WorkingComponent from '../components/LearningInfo/WorkingComponent';
import OthersSubjectComponent from '../components/LearningInfo/OthersSubjectComponent';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../res/Colors';
import HeaderNavigation from '../components/customs/HeaderNavigation';
import Images from '../res/Images';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();
export default function TabSubjectNavigator({route}) {
  const {item} = route.params;
  return (
    <Tab.Navigator
      backBehavior="none"
      tabBarOptions={{
        style: {
          backgroundColor: Colors.backgroundBlue,
        },
        keyboardHidesTabBar: true,
        tabStyle: {
          justifyContent: 'center',
        },
        showIcon: false,
        activeTintColor: Colors.white,
        inactiveTintColor: 'gray',
      }}
      adaptive={false}>
      <Tab.Screen
        name="Luồng"
        component={ThreadComponent}
        initialParams={{item}}
      />
      <Tab.Screen
        name="Bài tập"
        component={WorkingComponent}
        initialParams={{item}}
      />
      <Tab.Screen
        name="Khác"
        component={OthersSubjectComponent}
        initialParams={{item}}
      />
    </Tab.Navigator>
  );
}
