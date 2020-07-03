import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import Images from '../../res/Images';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class LearningInfoComponent extends Component {
  showView(onPress, title, iconName) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            width: windowWidth - 30,
            height:107,
            borderRadius: 15,
            backgroundColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 15,
            paddingLeft:40,
            shadowColor: Colors.black,
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
            marginBottom:15
          }}>
          <Image
            source={iconName}
            style={{
              width: 40,
              height: 40,
              resizeMode: 'contain',
              marginRight: 25,
            }}></Image>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  showBody() {
    return (
      <View style={{flex: 1, alignItems:'center', padding:15}}>
        {this.showView(() => {}, 'THỜI KHÓA BIỂU', Images.iconProject)}
        {this.showView(() => {}, 'BẢNG ĐIỂM', Images.iconProject)}
        {this.showView(() => {}, 'HỌC KỲ PHỤ', Images.iconProject)}
        {this.showView(() => {}, 'HỌC GHÉP', Images.iconProject)}
      </View>
    );
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: Colors.background,
          flex: 1,
        }}>
        <HeaderNavigation
          iconLeft={Images.iconBack}
          color={Colors.white}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          title={"Thông tin học tập"}></HeaderNavigation>
        {this.showBody()}
      </View>
    );
  }
}
