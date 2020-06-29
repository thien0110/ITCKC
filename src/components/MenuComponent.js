import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import HeaderNavigation from './customs/HeaderNavigation';
import Colors from '../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';
import Images from '../res/String';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class MenuComponent extends Component {
  showSlider(backgroundColor) {
    return (
      <View
        style={{
          borderRadius: 15,
          shadowColor: Colors.black,
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 5,
          backgroundColor: backgroundColor,
          width: windowWidth - 30,
          height: 120,
        }}></View>
    );
  }
  showBlock(onPress, title, iconName, marginBottom, marginLeft, marginRight) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: (windowWidth - 60) / 3,
            height: (windowWidth - 60) / 3,
            borderRadius: 15,
            backgroundColor: Colors.white,
            alignItems: 'center',
            justifyContent: "space-around",
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            padding: 15,
            shadowColor: Colors.black,
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
          }}>
          <Image
            source={iconName}
            style={{
              width: 40,
              height: 40,
              
              resizeMode:"contain"
            }}></Image>
          <Text style={{textAlign: 'center', fontWeight:'bold'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  showBody() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Swiper
          style={{padding: 15, height: 150}}
          autoplay={true}
          showsPagination={false}>
          {this.showSlider(Colors.blockYellow)}
          {this.showSlider(Colors.blockRed)}
          {this.showSlider(Colors.blockPurple)}
        </Swiper>

        <View
          style={{
            margin: 15,
            flex: 3,
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          {this.showBlock(
            () => {
              this.props.navigation.navigate('TabSchool');
            },
            'Thông tin nhà trường',
            Images.iconSchool,
          )}
          {this.showBlock(
            () => {
              this.props.navigation.navigate('TabSchool');
            },
            'Hoạt động ngoại khóa',
            Images.iconExercise,
            15,
            15,
            15,
          )}
          {this.showBlock(
            () => {
              this.props.navigation.navigate('TabSchool');
            },
            'Thông tin học tập',
            Images.iconBooks,
          )}
          {this.showBlock(
            () => {
              this.props.navigation.navigate('TabSchool');
            },
            'Thông tin khoa',
            Images.iconIt,
          )}
          {this.showBlock(
            () => {
              this.props.navigation.navigate('TabSchool');
            },
            'Việc làm',
            Images.iconProject,
            0,
            15,
            15,
          )}
          {this.showBlock(
            () => {
              this.props.navigation.navigate('TabSchool');
            },
            'Cựu sinh viên',
            Images.iconTeam,
          )}
        </View>
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
          iconRight="bell"
          iconRightColor={Colors.navigation}
          haveSearch={true}
          color={Colors.white}></HeaderNavigation>
        {this.showBody()}
      </View>
    );
  }
}
