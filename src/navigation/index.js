import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashComponent from '../components/SplashComponent';
import LoginComponent from '../components/LoginComponent';
import * as React from 'react';
import TabNavigator from './Tab'


const Stack = createStackNavigator();
function MainNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" headerMode="none"
        animation='fade'>
          <Stack.Screen name="Splash" component={SplashComponent} />
          <Stack.Screen name="Login" component={LoginComponent} />
          <Stack.Screen name="Tab" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
      
    );
  }
export default MainNavigator;

