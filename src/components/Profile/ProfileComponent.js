import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import {objectIsNull} from '../../res/Functions';
import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Loading from '../customs/Loading';
import {ScrollView} from 'react-native-gesture-handler';

export default class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      messageAlert:'',
    };
  }
  componentDidMount() {
    this.props.getProfileAction();
  }
  onChangeStateAlert = (state, des) => {
    this.setState({
      showAlert: state,
      messageAlert: des,
    });
  };
  showInput(title, content) {
    return (
      <View
        style={{
          width: '100%',
          paddingHorizontal: 15,
          // borderRadius: 10,
          backgroundColor: Colors.white,
          // shadowColor: Colors.black,
          // shadowOpacity: 0.3,
          // shadowRadius: 5,
          // elevation: 5,
        }}>
        <Text
          style={{
            color: Colors.gray2,
            marginBottom: 2,
            marginTop: 15,
          }}>
          {title}
        </Text>
        <Text style={{fontSize: 18, marginBottom: 10}}>{content}</Text>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: Colors.gray,
          }}></View>
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
          <View style={{flex: 1}}>
            <View style={styles.container}>
              {this.showInput('Họ Tên', `${ho} ${ten}`)}
              {this.showInput('Mã số sinh viên', maSinhVien)}
              {this.showInput('Email', email)}
            </View>
            <View style={styles.container}>
              {this.showInput('Giới tính', gioiTinh)}
              {this.showInput('Ngày sinh', ngaySinh)}
              {this.showInput('Số điện thoại', sdt)}
            </View>
            <View style={styles.container}>
              {this.showInput('Địa chỉ', diaChiTamTru)}
              {this.showInput('Chứng minh nhân dân', cmnd)}
              {this.showInput('Họ tên cha', hoTenCha)}
              {this.showInput('Họ tên mẹ', hoTenMe)}
              {this.showInput('Số điện thoại cha', sdtCha)}
              {this.showInput('Số điện thoại mẹ', sdtMe)}
            </View>
          </View>
        </ScrollView>
      );
    }
  }
  render() {
    const {isFetching, data, message,formatData} = this.props;
    const { showAlert,messageAlert, } = this.state;
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          color={Colors.backgroundBlue}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          buttonRight={true}
          textButtonRight={'Sửa'}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          onClickButtonRight={() => {
            data && this.props.navigation.navigate('EditProfile', {data});
          }}
          ></HeaderNavigation>
        {this.showView()}
        {isFetching && <Loading></Loading>}
        {message &&
          AlertCustom(true, message, () => {
            this.onChangeStateAlert(false, '');
            formatData();
            this.props.navigation.goBack();
          })}
      </View>
    );
  }
}
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    // backgroundColor:'#f00',
    // padding:15,
    marginTop: 10,
    // shadowColor: Colors.black,
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,

    // elevation: 6,
  },
});
