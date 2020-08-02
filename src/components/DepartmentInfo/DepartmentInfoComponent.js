import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderNavigation from '../customs/HeaderNavigation';

import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Images from '../../res/Images';

export default class DepartmentInfoComponent extends Component {
    render() {
        return (
            <View style={{flex: 1,}}>
            <HeaderNavigation
              iconLeft={Images.iconBack}
              color={Colors.backgroundBlue}
              onClickLeft={() => {
                this.props.navigation.goBack();
              }}
              title={'Thông tin khoa'}
              titleColor={Colors.white}></HeaderNavigation>
              <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 25, color:Colors.gray2}}>
              {' '}
              Chức năng đang phát triển!{' '}
            </Text>
              </View>
           
          </View>
        )
    }
}
