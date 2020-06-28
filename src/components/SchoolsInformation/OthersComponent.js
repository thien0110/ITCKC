import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
export default class ProfileComponent extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <HeaderNavigation
          title={'THÔNG TIN NHÀ TRƯỜNG'}
          color={Colors.navigation}
          iconLeft="arrow-left"
          iconLeftColor={Colors.white}
          onClickLeft={()=>{this.props.navigation.goBack()}}
          ></HeaderNavigation>
      </View>
    );
  }
}