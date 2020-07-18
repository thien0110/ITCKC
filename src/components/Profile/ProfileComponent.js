import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import {objectIsNull} from '../../res/Functions';
import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Loading from '../customs/Loading';
import { ScrollView } from 'react-native-gesture-handler';

export default class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getProfileAction();
  }
  showInput(title, content) {
    return (
      <View
        style={{
          width: '100%',
          marginBottom: 15,
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 10,
          backgroundColor: Colors.gray,
          shadowColor: Colors.black,
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5,
        }}>
        <Text
          style={{
            color: Colors.gray2,
            marginBottom: 2,
          }}>
          {title}
        </Text>
        <Text style={{fontSize: 18}}>{content}</Text>
      </View>
    );
  }
  showView() {
    if (!objectIsNull(this.props.data) === true) {
      const {
        maSinhVien,
        ho,
        ten,
        gioiTinh,
        ngaySinh,
        diaChiThuongTru,
        diaChiTamTru,
        sdt,
        email,
        cmnd,
        hoTenCha,
        hoTenMe,
        sdtCha,
        sdtMe,
      } = this.props.data;
      return (
        <ScrollView>
        <View style={{flex: 1, padding: 15}}>
          {this.showInput('Mã số sinh viên', maSinhVien)}
          {this.showInput('Họ Tên', `${ho} ${ten}`)}
          {this.showInput('Giới tính', gioiTinh)}
          {this.showInput('Ngày sinh', ngaySinh)}
          {this.showInput('Địa chỉ', diaChiTamTru)}
          {this.showInput('Số điện thoại', sdt)}
          {this.showInput('Email', email)}
          {this.showInput('Chứng minh nhân dân', cmnd)}
          {this.showInput('Họ tên cha', hoTenCha)}
          {this.showInput('Họ tên mẹ', hoTenMe)}
          {this.showInput('Số điện thoại cha', sdtCha)}
          {this.showInput('Số điện thoại mẹ', sdtMe)}
        </View></ScrollView>
      );
    }
  }
  render() {
    const {isFetching, data} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          haveSave={true}
          textSave={'Sửa'}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          onClickSave={() => {
            this.props.navigation.navigate('EditProfile',{data} );
          }}></HeaderNavigation>
        {this.showView()}
        {isFetching && <Loading></Loading>}
      </View>
    );
  }
}
