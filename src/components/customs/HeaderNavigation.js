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
      buttonRight, //có nút lưu hoặc sửa
      textButtonRight, //là lưu hoặc sửa, hoặc button nào đó
      onClickButtonRight,
      onClickSearch,
      searching,
      onChangeTextSearch,
      valueSearch,
      onSearch
    } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          alignItems: 'center',
          backgroundColor: color,
          // shadowColor: Colors.black,
          // shadowOpacity: 0.3,
          // shadowRadius: 3,
          // elevation: 10,
        }}>
        {iconLeft != null && (
          <TouchableOpacity
            onPress={() => {
              onClickLeft();
            }}
            style={{position:'absolute', zIndex:1,left:15}}
            >
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
            <TouchableOpacity
              style={{
                backgroundColor: Colors.gray,
                paddingHorizontal: 10,
                paddingVertical: 0,
                borderRadius: 8,
                width: (windowWidth * 2) / 3,
                height: 30,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              onPress={() => {
                onClickSearch();
              }}>
              <Text style={{color: Colors.gray2}}>Tìm kiếm</Text>
              <Icon name="search" size={15} color={Colors.gray2}></Icon>
            </TouchableOpacity>
          </View>
        ) : searching ? (
          <View style={{flex: 1}}>
            <TextInput
              style={{
                backgroundColor: Colors.gray,
                paddingHorizontal: 10,
                paddingVertical: 0,
                borderRadius: 8,
                width: (windowWidth * 2) / 3,
                alignItems: 'center',
              }}
              placeholder={'Tìm kiếm'}
              autoFocus={true}
              onChangeText={(text) => {
                onChangeTextSearch(text);
              }}
              value={valueSearch}
              clearButtonMode='while-editing'
              onSubmitEditing={()=>{onSearch()}}
              returnKeyType='search'
              ></TextInput>
            {/* <Icon
              name="search"
              size={15}
              style={{position: 'absolute', right: 70, top: 5}}></Icon> */}
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
            }}
            style={{position:'absolute', right:15}}>
            <Image
              source={iconRight}
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        )}
        {buttonRight === true && (
          <TouchableOpacity
            style={{
              width: 50,
              height: 25,
              borderRadius: 20,
              backgroundColor: Colors.white,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              onClickButtonRight();
            }}>
            <Text style={{color: Colors.blue, fontWeight: 'bold'}}>
              {textButtonRight}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
HeaderNavigation.defaultProps = {
  title: '',
  titleColor: Colors.white,
  iconLeft: null,
  iconRight: null,
  color: Colors.white,
  haveSearch: false,
  buttonRight: false,
  textButtonRight: '',
  searching: false,
  valueSearch:'',
  onClickLeft: () => {},
  onClickRight: () => {},
  onClickButtonRight: () => {},
  onClickSearch: () => {},
  onChangeTextSearch: ()=>{},
  onSearch:()=>{},
  
};
