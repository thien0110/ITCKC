import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';

import Colors from '../../res/Colors';
import Images from '../../res/Images';

const window = Dimensions.get('window');
export default class AboutComponent extends Component {
  render() {
    return (
      <View style={styles.aboutContainer}>
        <HeaderNavigation
          title={'Thông tin ứng dụng'}
          titleColor={Colors.blue}
          color={Colors.white}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../res/image/LogoKhoaCNTT.png')}
                style={{width: 140, height: 140}}></Image>
              <Text
                style={{
                  marginTop: -10,
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: Colors.blue,
                }}>
                Information Technology
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: Colors.blue,
                  textAlign: 'center',
                }}>
                CKC Application
              </Text>
            </View>
            <Text style={styles.textTitle}>Bản quyền thuộc về</Text>
            <View style={styles.blockName}>
              <Text style={styles.textName}>Khoa Công Nghệ Thông Tin trường Cao Đẳng Kỹ Thuật Cao Thắng</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    height: window.height,
    paddingBottom: 15,
  },
  textTitle: {
    marginTop: 15,
    fontSize: 20,
    //fontWeight: 'bold',
    color: Colors.grayStrong,
    textAlign: 'center',
    letterSpacing: 0,
    //width: 300,
    // borderBottomColor: Colors.gray2,
    // borderBottomWidth: 0.5,
  },
  textName: {
    fontSize: 20,
    color: Colors.gray2,
    textAlign: 'center',
    letterSpacing: 0,
    fontWeight: 'bold'
  },
  blockName: {
    width: window.width - 30,
    //margin: 5,
    padding: 5,
  },
});
