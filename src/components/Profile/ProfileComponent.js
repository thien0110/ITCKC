import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import {objectIsNull, arrayIsEmpty} from '../../res/Functions';
import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Loading from '../customs/Loading';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import AlertCustom from '../customs/AlertComponent';

export default class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      showAlert: false,
      messageAlert: '',
      typeChange: true,
      newPhone: '',
      oldPass: '',
      newPass: '',
      confirmNewPass: '',
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
  showItem(title, content, isEdit, onEdit) {
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
        <View style={{marginBottom: 10, marginTop: 15}}>
          <Text
            style={{
              color: Colors.gray2,
              marginBottom: 2,
            }}>
            {title}
          </Text>
          <Text style={{fontSize: 18}}>{content}</Text>
          {isEdit && (
            <TouchableOpacity
              onPress={() => {
                onEdit();
              }}
              style={{position: 'absolute', right: 0, top: 10}}>
              <Text style={{color: Colors.grayStrong}}>Chỉnh sửa</Text>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: Colors.gray,
          }}></View>
      </View>
    );
  }
  onPressChangePass() {
    const {modalVisible, oldPass, newPass, confirmNewPass} = this.state;
    const input = {
      oldPass,
      newPass,
      confirmNewPass,
    };
    this.setModalVisible(!modalVisible);
  }
  onPressChangePhone() {
    const {maSinhVien} = this.props.data;
    const {newPhone, modalVisible} = this.state;
    const input = {
      newPhone,
      maSinhVien,
    };
    // if (newPhone.length == 10) {
    this.props.editProfileAction(input);
    this.setModalVisible(!modalVisible);
    // } else {
    //   this.onChangeStateAlert(true, 'Số điện thoại không hợp lệ');
    // }
  }
  showPassInput(placeholder, value, onChangeText, keyboardType) {
    return (
      <TextInput
        style={{
          marginBottom: 15,
          alignItems: 'center',
          width: window.width / 1.5,
          borderRadius: 5,
          backgroundColor: Colors.gray,
          paddingHorizontal: 10,
          flexDirection: 'row',
          // shadowColor: 'black',
          // shadowOpacity: 0.3,
          // shadowRadius: 5,
          // elevation: 5,
        }}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => {
          onChangeText(text);
        }}></TextInput>
    );
  }
  showModel() {
    const {
      modalVisible,
      oldPass,
      newPass,
      confirmNewPass,
      typeChange,
      newPhone,
    } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          this.setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: Colors.black,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <View style={{width: window.width / 1.5, alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}>
                <Icon name={'times'} size={18} color="gray"></Icon>
              </TouchableOpacity>
            </View>
            {typeChange ? (
              <View>
                <Text
                  style={{
                    marginBottom: 15,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: Colors.gray2,
                  }}>
                  Đổi mật khẩu
                </Text>
                {this.showPassInput('Mật Khẩu cũ', oldPass, (text) => {
                  this.setState({oldPass: text.trim()});
                })}
                {this.showPassInput('Mật Khẩu mới', newPass, (text) => {
                  this.setState({newPass: text.trim()});
                })}
                {this.showPassInput(
                  'Nhập lại Mật Khẩu mới',
                  confirmNewPass,
                  (text) => {
                    this.setState({confirmNewPass: text.trim()});
                  },
                )}
              </View>
            ) : (
              <View>
                <Text
                  style={{
                    marginBottom: 15,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: Colors.gray2,
                  }}>
                  Đổi số điện thoại
                </Text>
                {this.showPassInput(
                  'Số điện thoại mới',
                  newPhone,
                  (text) => {
                    this.setState({newPhone: text.trim()});
                  },
                  'phone-pad',
                )}
              </View>
            )}
            <View>
              <TouchableOpacity
                style={{
                  borderRadius: 5,
                  width: window.width / 1.5,
                  padding: 10,
                  marginTop: 10,
                  elevation: 2,
                  backgroundColor: Colors.buttonBlue,
                }}
                onPress={() => {
                  typeChange
                    ? this.onPressChangePass()
                    : this.onPressChangePhone();
                }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 20,
                  }}>
                  Xong
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
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
        CMND,
        hoTenCha,
        hoTenMe,
        sdtCha,
        sdtMe,
      } = this.props.data;
      return (
        <ScrollView>
          <View style={{flex: 1}}>
            <View style={styles.container}>
              {this.showItem('Họ Tên', `${ho} ${ten}`)}
              {this.showItem('Mã số sinh viên', maSinhVien)}
              {this.showItem('Email', email)}
              {this.showItem('Mật khẩu', '********', true, () => {
                this.setModalVisible(true);
                this.setState({
                  typeChange: true,
                });
              })}
            </View>
            <View style={styles.container}>
              {this.showItem('Giới tính', gioiTinh == 0 ? 'Nam' : 'Nữ')}
              {this.showItem('Ngày sinh', ngaySinh)}
              {this.showItem('Số điện thoại', sdt, true, () => {
                this.setModalVisible(true);
                this.setState({
                  typeChange: false,
                });
              })}
              {this.showItem('Chứng minh nhân dân', CMND)}
            </View>
            <View style={styles.container}>
              {this.showItem('Địa chỉ', diaChiTamTru)}
              {this.showItem('Họ tên cha', hoTenCha)}
              {this.showItem('Họ tên mẹ', hoTenMe)}
              {this.showItem('Số điện thoại cha', sdtCha)}
              {this.showItem('Số điện thoại mẹ', sdtMe)}
            </View>
          </View>
        </ScrollView>
      );
    }
  }
  render() {
    const {isFetching, data, message, formatData} = this.props;
    const {showAlert, messageAlert} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          color={Colors.backgroundBlue}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          title={'Thông tin sinh viên'}
          titleColor={Colors.white}
          // buttonRight={true}
          // textButtonRight={'Sửa'}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          // onClickButtonRight={() => {
          //   data && this.props.navigation.navigate('EditProfile', {data});
          // }}
        ></HeaderNavigation>
        {this.showView()}
        {this.showModel()}
        {isFetching && <Loading></Loading>}

        {message &&
          AlertCustom(true, message, () => {
            this.onChangeStateAlert(false, '');
            formatData();
            if (arrayIsEmpty(data)) {
              this.props.navigation.goBack();
            }
          })}
        {/* {showAlert &&
          AlertCustom(showAlert, messageAlert, () => {
            this.onChangeStateAlert(false, '');
          })} */}
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
