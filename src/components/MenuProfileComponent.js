import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import HeaderNavigation from './customs/HeaderNavigation';
import Colors from '../res/Colors';
import Images from '../res/Images';
import {forgetUser} from '../res/Functions'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const widthBlock = (windowWidth - 45) / 2;
export default class MenuProfileComponent extends Component {
  showBlock(onPress, title, iconName, marginBottom, marginLeft, marginRight) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: widthBlock,
            height: widthBlock * (2 / 3),
            borderRadius: 15,
            backgroundColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            padding: 15,
          }}>
          <Image
            source={iconName}
            style={{
              width: 55,
              height: 55,

              resizeMode: 'contain',
            }}></Image>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  showBody() {
    return (
      <View style={{flexWrap: 'wrap', flexDirection: 'row', margin: 15}}>
        {this.showBlock(
          () => {
            this.props.navigation.navigate('Profile');
          },
          'Cá nhân',
          Images.iconPersonProfile,
        )}
        {this.showBlock(
          () => {
            this.props.navigation.navigate('Setting');
          },
          'Cài đặt',
          Images.iconSetting,
          15,
          15,
        )}
        {this.showBlock(
          () => {
            this.props.navigation.navigate('About');
          },
          'Về ứng dụng',
          Images.iconInfo,
        )}
        {this.showBlock(() => {
          this.props.navigation.replace("Login", { isLogout: true })
        }, 'Đăng xuất', Images.iconLogout, 0, 15)}
      </View>
    );
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          haveSearch={false}
          color={Colors.navigation}></HeaderNavigation>
        {this.showBody()}
      </View>
    );
  }
}
