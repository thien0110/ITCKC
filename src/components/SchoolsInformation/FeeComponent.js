import React, {Component} from 'react';
import {Text, View, Image,ScrollView} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Article from '../customs/Article'
export default class ProfileComponent extends Component {
  showBody(){
    return(
      <View style={{flex:1,padding:10,}}>
          <ScrollView>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
      </ScrollView></View>
    )
  }
  render() {
    
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <HeaderNavigation
          title={'Thông tin nhà trường'}
          titleColor={Colors.white}
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={()=>{this.props.navigation.goBack()}}
          ></HeaderNavigation>
        {this.showBody()}
      </View>
    );
  }
}