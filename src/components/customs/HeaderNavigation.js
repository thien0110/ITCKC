import React from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HeaderNavigation extends React.Component {
  render() {
    const {
      color,
      title,
      titleColor,
      iconLeft,
      iconRight,
      onClickLeft,
      onClickRight,
      iconLeftColor,
      iconRightColor,
      haveSearch,//  nếu có thanh tìm kiếm =true
    } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          alignItems: 'center',
          backgroundColor: color,
          shadowColor: Colors.black,
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 10,
        }}>
        {iconLeft != null && (
          <TouchableOpacity
            onPress={() => {
              onClickLeft();
            }}>
            <Icon name={iconLeft} size={40} color={iconLeftColor} />
          </TouchableOpacity>
        )}
        {haveSearch ? (
          <View style={{flex: 1}}>
            <TextInput
              style={{
                backgroundColor: Colors.grayStrong,
                paddingHorizontal: 10,
                paddingVertical:0,
                borderRadius: 8,
                width: 300,
              }}
              placeholder="Tìm kiếm"></TextInput>
          </View>
        ) : (
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color:titleColor
            }}>
            {title}
          </Text>
        )}

        {iconRight != null && (
          <TouchableOpacity
            onPress={() => {
              onClickRight();
            }}>
            <Icon name={iconRight} size={35} color={iconRightColor} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
HeaderNavigation.defaultProps = {
  title: '',
  titleColor:Colors.white,
  iconLeft: null,
  iconRight: null,
  color: Colors.white,
  haveSearch: false,

  onClickLeft: () => {},
  onClickRight: () => {},
};
