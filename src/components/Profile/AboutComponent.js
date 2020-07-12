import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderNavigation from '../customs/HeaderNavigation'

import Colors from '../../res/Colors';
import Images from '../../res/Images';

export default class AboutComponent extends Component {
    render() {
        return (
            <View>
            <HeaderNavigation
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
