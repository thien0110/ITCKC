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
            backgroundColor: Colors.white,
            borderRadius: 10,
            marginBottom: 10,
            padding: 10,
            overflow:'hidden'
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <View
              style={{
                backgroundColor: Colors.gray,
                alignItems: 'center',
                borderRadius: 50,
                width: 35,
                height: 35,
              }}>
              <Image
                source={icon}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  position: 'absolute',
                  top: 6,
                }}></Image>
            </View>
            <Text style={{color: Colors.gray2, marginLeft: 5, fontSize: windowHeight / 45}}>{type}</Text>
          </View>
          <Text
            style={{
              color: Colors.grayOpacity,
              position: 'absolute',
              right: 10,
              top: 10,
              fontSize: windowHeight / 50
            }}>
            {time}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: windowHeight / 50}}>{title}</Text>
          <Text style={{fontSize: windowHeight / 55}}>{des}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  showBody() {
    return (
      <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 10}}>
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
    const {isFetching} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          title={'Thông báo'}
          titleColor={Colors.white}
          color={Colors.backgroundBlue}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        {this.showBody()}
        {isFetching && <Loading></Loading>}
      </View>
    );
  }
}
