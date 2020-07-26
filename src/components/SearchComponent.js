import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import HeaderNavigation from './customs/HeaderNavigation';
import Colors from '../res/Colors';
import Images from '../res/Images';
const window = Dimensions.get('window');

export default class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  showBody() {
    return <View style={{flex: 1, }}></View>;
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          searching={true}
          color={Colors.navigation}
          buttonRight={true}
          textButtonRight={'Đóng'}
          valueSearch={this.state.value}
          onClickButtonRight={() => {
            this.props.navigation.goBack();
          }}
          onChangeTextSearch={(text)=>{this.setState({ value:text})}}></HeaderNavigation>
        {this.showBody()}
      </View>
    );
  }
}
