import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';

import Colors from '../../res/Colors';
import Images from '../../res/Images';

export default class SettingComponent extends Component {
  showItem(icon, title, onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 15,
            alignItems: 'center',
          }}>
          <Image
            source={icon}
            style={{
              flex: 1,
              resizeMode: 'contain',
              width: 40,
              height: 40,
            }}></Image>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.grayStrong,
              justifyContent: 'center',
              flex: 5,
              padding: 15,
            }}>
            <Text style={{fontSize: 20, color: Colors.gray2}}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          title={'Cài đặt'}
          titleColor={Colors.white}
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        <View style={{flex: 1, padding: 15}}>
          {this.showItem(Images.iconBell, 'Thông báo', ()=>{})}
          {this.showItem(Images.moon, 'Chế độ đêm', ()=>{})}
          {this.showItem(Images.translation, 'Ngôn ngữ', ()=>{})}
          {this.showItem(Images.password, 'Đổi mật khẩu', ()=>{})}
        </View>
      </View>
    );
  }
}
