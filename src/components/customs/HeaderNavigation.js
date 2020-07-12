import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
const windowWidth = Dimensions.get('window').width;
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
      haveSearch, //  nếu có thanh tìm kiếm =true,
      haveSave,
      onClickSave,
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
            <Image
              source={iconLeft}
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        )}
        {haveSearch ? (
          <View style={{flex: 1}}>
            <TextInput
              style={{
                backgroundColor: Colors.grayStrong,
                paddingHorizontal: 10,
                paddingVertical: 0,
                borderRadius: 8,
                width: (windowWidth * 2) / 3,
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
              color: titleColor,
            }}>
            {title}
          </Text>
        )}

        {iconRight != null && (
          <TouchableOpacity
            onPress={() => {
              onClickRight();
            }}>
            <Image
              source={iconRight}
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        )}
        {haveSave === true && (
          <TouchableOpacity
            onPress={() => {
              onClickSave();
            }}>
            <Text style={{color: Colors.white, fontWeight: 'bold'}}>Lưu</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
HeaderNavigation.defaultProps = {
  title: '',
  titleColor: Colors.black,
  iconLeft: null,
  iconRight: null,
  color: Colors.white,
  haveSearch: false,
  haveSave: false,

  onClickLeft: () => {},
  onClickRight: () => {},
  onClickSave: () => {},
};
