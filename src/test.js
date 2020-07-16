import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AlertCustom from './components/customs/AlertComponent';
import AwesomeAlert from 'react-native-awesome-alerts';
export default class test extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity >
          <Text>Alert</Text>
        </TouchableOpacity>
       
      </View>
    );
  }
}
