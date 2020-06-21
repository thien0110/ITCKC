import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import HeaderNavigation from './customs/HeaderNavigation';
import Colors from '../res/Colors';
export default class MenuComponent extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <HeaderNavigation
          title={'Schedule'}
          iconRight="bell"
          iconRightColor={Colors.white}
          haveSearch={true}
          color={Colors.navigation}
          ></HeaderNavigation>
        <View style={{}}>
        </View>
      </View>
    );
  }
}
