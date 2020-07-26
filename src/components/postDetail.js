import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import HeaderNavigation from '../components/customs/HeaderNavigation';
import Images from '../res/Images';
import Video from 'react-native-video';
import Webview from 'react-native-webview';
import YouTube from 'react-native-youtube';

const windowWidth = Dimensions.get('window').width;
export default class postDetail extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  coverImg() {
    return <View>{/* <Image soure={}
            ></Image> */}</View>;
  }

  contentPost() {
    return (
      <View>
        <Image
          source={
            'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg'
          }></Image>
      </View>
    );
  }
  render() {
    return (
      <View>
        <HeaderNavigation
          title={'Bài viết'}
          titleColor={Colors.white}
          color={Colors.backgroundBlue}
          iconLeft={Images.iconBack}
          iconRight={Images.icontabmenu}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        {/* {this.contentPost()}; */}
        <View>
          <Image
            source={{
              uri:
                'http://cntt.caothang.edu.vn/wp-content/uploads/2019/12/banner-42020.png',
            }}
            style={{
              width: windowWidth,
              height: windowWidth / 3,
              resizeMode: 'cover',
            }}></Image>
          <View style={{padding: windowWidth * (5 / 100)}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              TUYỂN SINH CAO ĐẲNG CÔNG NGHỆ THÔNG TIN CHÍNH QUY NĂM 2020
            </Text>
            <Text style={{fontSize: 15}}>
              Khoa Công nghệ Thông tin trường Cao đẳng Kỹ thuật Cao Thắng thông
              báo tuyển sinh hệ Cao Đẳng Công Nghệ Thông Tin Chính Quy năm 2020
              trên toàn quốc.
            </Text>
            
          </View>
        </View>
      </View>
    );
  }
}
