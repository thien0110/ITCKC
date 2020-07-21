
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput,Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import SplashScreen from 'react-native-splash-screen'
export default class test extends Component {
  componentDidMount(){
    SplashScreen.hide();
  }
  render() {
    return (
      
      <View>
       <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          display="default"
        />
      </View>
      
    )
  }
}
