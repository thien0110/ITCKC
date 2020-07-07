import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import Images from '../../res/Images';
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Block from '../customs/Block';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class LearningInfoComponent extends Component {
  showBody() {
    return (
      <View
        style={{flex: 1, padding: 15, flexWrap: 'wrap', flexDirection: 'row'}}>
        <Block
          onPress={() => {}}
          title={'THỜI KHÓA BIỂU'}
          iconName={Images.iconProject}
          marginRight={15}
          marginBottom={15}></Block>
        <Block
          onPress={() => {}}
          title={'BẢNG ĐIỂM'}
          iconName={Images.iconProject}
          marginRight={15}></Block>
        <Block
          onPress={() => {}}
          title={'HỌC KỲ PHỤ'}
          iconName={Images.iconProject}></Block>
        <Block
          onPress={() => {}}
          title={'HỌC GHÉP'}
          iconName={Images.iconProject}></Block>
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
          color={Colors.navigation}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          title={'Thông tin học tập'}
          titleColor={Colors.white}></HeaderNavigation>
        {this.showBody()}
      </View>
    );
  }
}
