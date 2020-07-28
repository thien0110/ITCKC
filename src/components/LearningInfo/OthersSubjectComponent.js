import React, {Component} from 'react';
import {Text, View, TextInput, FlatList, StyleSheet, Dimensions} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import Images from '../../res/Images';

import {objectIsNull, stringIsEmpty} from '../../res/Functions';

export default class OthersSubjectComponent extends Component {
    render() {
        const {item} = this.props.route.params;
        var titleHeader=""
        if (!objectIsNull(item)) {
          titleHeader=item.name
        } 
        return (
          <View style={{flex: 1, alignItems: 'center'}}>
            <HeaderNavigation
              title={titleHeader}
              titleColor={Colors.white}
              color={Colors.backgroundBlue}
              iconLeft={Images.iconBack}
              iconRight={Images.icontabmenu}
              iconLeftColor={Colors.black}
              onClickLeft={() => {
                this.props.navigation.goBack();
              }}></HeaderNavigation>
              
          </View>
        );
      }
}
