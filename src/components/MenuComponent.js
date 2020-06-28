import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions,ScrollView} from 'react-native';
import HeaderNavigation from './customs/HeaderNavigation';
import Colors from '../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class MenuComponent extends Component {
  showBlock(
    onPress,
    title,
    iconName,
    backgroundColor,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  ) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: (windowWidth - 60) / 3,
            height: (windowWidth - 60) / 3,
            borderRadius: 15,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            padding:20,
            // shadowColor: Colors.black,
            // shadowOpacity: 0.3,
            // shadowRadius: 5,
            // elevation: 5,
          }}>
          <Icon name={iconName} size={30} color={Colors.white}></Icon>
          <Text style={{color: Colors.white, textAlign:'center'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  showBody() {
    return (
      <ScrollView>
      <View style={{flex: 1, padding: 15, flexDirection: 'column'}}>
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 15,
            shadowColor: Colors.black,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 5,
            width: '100%',
            height: 107,
          }}></View>
        <View
          style={{
            marginVertical: 15,
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          {this.showBlock(()=>{this.props.navigation.navigate('TabSchool')},'Thông tin nhà trường', 'home', Colors.blockRed)}
          {this.showBlock(()=>{this.props.navigation.navigate('TabSchool')},'Hoạt động ngoại khóa', 'running', Colors.blockOrange, 0, 15, 15, 15)}
          {this.showBlock(()=>{this.props.navigation.navigate('TabSchool')},'Thông tin học tập', 'book', Colors.blockPink)}
          {this.showBlock(()=>{this.props.navigation.navigate('TabSchool')},'Thông tin khoa', 'bug', Colors.blockBlue)}
          {this.showBlock(()=>{this.props.navigation.navigate('TabSchool')},'Việc làm', 'suitcase', Colors.blockCyan, 0, 0, 15, 15)}
          {this.showBlock(()=>{this.props.navigation.navigate('TabSchool')},'Cựu sinh viên', 'users', Colors.blockPurple)}
        </View>
      </View>
      </ScrollView>
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
