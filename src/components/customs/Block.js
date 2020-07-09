import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import Colors from '../../res/Colors';

const windowWidth = Dimensions.get('window').width;
export default class Block extends Component {
  render() {
    const {
      onPress,
      title,
      width,
      height,
      marginBottom,
      marginLeft,
      marginRight,
      iconName,
      padding,
    } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: width,
            height: height,
            borderRadius: 15,
            backgroundColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            padding: padding,
            shadowColor: Colors.black,
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
          }}>
          <Image
            source={iconName}
            style={{
              width: '40%',
              height: '40%',

              resizeMode: 'contain',
            }}></Image>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
Block.defaultProps = {
  onPress: () => {},
  title: '',
  width: (windowWidth - 60) / 3,
  height: (windowWidth - 60) / 3,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  padding: 15,
};
