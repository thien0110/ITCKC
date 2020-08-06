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
import { WebView } from 'react-native-webview';

export default class ScoreTableComponent extends Component {

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          title={'Bảng điểm'}
          titleColor={Colors.white}
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
      </View>
    );
  }
}
