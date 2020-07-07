import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import HeaderNavigation from './customs/HeaderNavigation';
import Colors from '../res/Colors';
import Images from '../res/Images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class NotiComponent extends Component {
  showNoti(type, title, des, time, icon) {
    return (
      <TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: windowHeight / 6,
            backgroundColor: Colors.lightBlue,
            borderRadius: 10,
            marginTop: 10,
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Image
              source={icon}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}></Image>
            <Text style={{color: Colors.gray2, marginLeft: 5}}>{type}</Text>
          </View>
          <Text
            style={{
              color: Colors.gray2,
              position: 'absolute',
              right: 10,
              top: 10,
            }}>
            {time}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>{title}</Text>
          <Text>{des}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  showBody() {
    return (
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ScrollView>
          {this.showNoti(
            'THÔNG TIN NHÀ TRƯỜNG',
            'Weekly Report Available',
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'bây giờ',
            Images.iconSchool,
          )}
          {this.showNoti(
            'THÔNG TIN NHÀ TRƯỜNG',
            'Weekly Report Available',
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'bây giờ',
            Images.iconSchool,
          )}

          {this.showNoti(
            'THÔNG TIN NHÀ TRƯỜNG',
            'Weekly Report Available',
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'bây giờ',
            Images.iconSchool,
          )}
          {this.showNoti(
            'THÔNG TIN NHÀ TRƯỜNG',
            'Weekly Report Available',
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'bây giờ',
            Images.iconSchool,
          )}
          {this.showNoti(
            'THÔNG TIN NHÀ TRƯỜNG',
            'Weekly Report Available',
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'bây giờ',
            Images.iconSchool,
          )}
          {this.showNoti(
            'THÔNG TIN NHÀ TRƯỜNG',
            'Weekly Report Available',
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'bây giờ',
            Images.iconSchool,
          )}
          {this.showNoti(
            'THÔNG TIN NHÀ TRƯỜNG',
            'Weekly Report Available',
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'bây giờ',
            Images.iconSchool,
          )}
        </ScrollView>
      </View>
    );
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          title={'Thông baos'}
          titleColor={Colors.white}
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        {this.showBody()}
      </View>
    );
  }
}
