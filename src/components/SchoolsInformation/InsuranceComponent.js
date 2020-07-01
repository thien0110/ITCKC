import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
import Images from '../../res/Images';
export default class ProfileComponent extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <HeaderNavigation
          title={'THÔNG TIN NHÀ TRƯỜNG'}
          titleColor={Colors.black}
          color={Colors.white}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
      </View>
    );
  }
}
