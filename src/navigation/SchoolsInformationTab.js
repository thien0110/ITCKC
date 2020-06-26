import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeeComponent from '../components/SchoolsInformation/FeeComponent';
import InsuranceComponent from '../components/SchoolsInformation/InsuranceComponent';
import OthersComponent from '../components/SchoolsInformation/OthersComponent';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../res/Colors';
const Tab = createBottomTabNavigator();
export default function TabSchoolInformationNavigator() {
  return (
    <Tab.Navigator
      backBehavior="none"
      tabBarOptions={{
        // style:{
        //   backgroundColor:Colors.navigation
        // },
        keyboardHidesTabBar: true,
        tabStyle: {
          justifyContent: 'center',
        },
        showIcon: false,
      }}
      adaptive={false}>
      <Tab.Screen name="Fee" component={FeeComponent} />
      <Tab.Screen name="Insurance" component={InsuranceComponent} />
      <Tab.Screen name="Others" component={OthersComponent} />
    </Tab.Navigator>
  );
}
