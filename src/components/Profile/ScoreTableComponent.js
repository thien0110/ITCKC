import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';

import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Icon from 'react-native-vector-icons/FontAwesome5';
const window = Dimensions.get('window');
import {WebView} from 'react-native-webview';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

export default class ScoreTableComponent extends Component {
  subjectScore(subjectName, score) {
    return (
      <View
        style={{
          width: window.width - 30,
          height: 50,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginBottom: 10,
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: window.width - 150,
            height: 40,
            padding: 7,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18}}>{subjectName}</Text>
        </View>
        <View
          style={score<5?{
            width: 40,
            height: 40,
            borderRadius: 50,
            justifyContent: 'center',
            backgroundColor: '#ef476f',
          }:{
            width: 40,
            height: 40,
            borderRadius: 50,
            justifyContent: 'center',
            backgroundColor: '#06d6a0',
          }}>
          <Text style={{fontSize: 18, textAlign: 'center', color: '#fff'}}>
            {score}
          </Text>
        </View>
      </View>
    );
  }
  showSubjectScore() {
    return (
      <ScrollView>
        {this.subjectScore('Cơ sở dữ liệu', '4.9')}
        {this.subjectScore('Mạng máy tính', '6.1')}
        {this.subjectScore('Thiết kế website', '7.2')}
        {this.subjectScore('Cấu trúc dữ liệu và thuật toán', '7.6')}
        {this.subjectScore('Anh văn A2', '6.1')}
        {this.subjectScore('Toán rời rạc và lý thuyết đồ thị', '6.3')}
        {this.subjectScore('Thực hành mạng máy tính', '7.7')}
        {this.subjectScore('Giáo dục thể chất 2', '10.0')}
        {this.subjectScore('TH Cấu trúc dữ liệu và thuật toán', '7')}
        {this.subjectScore('Thực hành thiết kế website', '10.0')}
        {this.subjectScore('Đồ họa ứng dụng (Photoshop)', '7.0')}
      </ScrollView>
    );
  }
  titleBoard(subjectName, score) {
    return (
      <View
        style={{
          width: window.width - 50,
          marginBottom: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 18, fontWeight:'bold', color: '#fff'}}>{subjectName}</Text>
        <Text style={{fontSize: 18, fontWeight:'bold', textAlign: 'center', color: '#fff'}}>
          {score}
        </Text>
      </View>
    );
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.backgroundBlue}}>
        <HeaderNavigation
          title={'Bảng điểm'}
          titleColor={Colors.white}
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        <View style={{flex:1,padding: 15, alignItems: 'center'}}>
          {this.titleBoard('Môn học', 'Điểm')}
          {this.showSubjectScore()}
        </View>
      </View>
    );
  }
}
