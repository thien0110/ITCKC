import React, {Component} from 'react';
import {Text, View, TextInput, ScrollView, Picker} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
// import DateTimePicker from '@react-native-community/datetimepicker';
import {objectIsNull} from '../../res/Functions';
import DatePicker from 'react-native-datepicker';
import Colors from '../../res/Colors';
import Images from '../../res/Images';

import AlertCustom from '../customs/AlertComponent';
export default class EditProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '', //Tên
      lastName: '', //Họ
      sex: 'Nam', //Giới tính
      permanentAddress: '', // địa chỉ thường trú
      temporaryAddress: '', // địa chỉ tạm trú
      phoneNumber: '',
      birthDay: new Date(),
      idCode: '', //số chứng minh thư
      fatherName: '',
      motherName: '',
      fatherPhoneNumber: '',
      motherPhoneNumber: '',
    };
  }
  setDataEditProfile(data) {
    this.setState({
      firstName: data.ten,
      lastName: data.ho,
      sex: data.sex,
      permanentAddress: data.diaChiThuongTru,
      temporaryAddress: data.diaChiTamTru,
      phoneNumber: data.sdt,
      birthDay: data.ngaySinh,
      idCode: data.cmnd,
      fatherName: data.hoTenCha,
      motherName: data.hoTenMe,
      fatherPhoneNumber: data.sdtCha,
      motherPhoneNumber: data.sdtMe,
    });
  }
  componentDidMount() {
    const {data} = this.props.route.params;
    if (!objectIsNull(data)) {
      this.setDataEditProfile(data);
    }
  }
  onPressSave() {
    const {
      firstName,
      lastName,
      sex,
      permanentAddress,
      temporaryAddress,
      phoneNumber,
      birthDay,
      idCode,
      fatherName,
      motherName,
      fatherPhoneNumber,
      motherPhoneNumber,
    } = this.state;
    const input = {
      firstName,
      lastName,
      sex,
      permanentAddress,
      temporaryAddress,
      phoneNumber,
      birthDay,
      idCode,
      fatherName,
      motherName,
      fatherPhoneNumber,
      motherPhoneNumber,
    };
    this.props.editProfileAction(input);
  }
  showInput(title, value, keyboardType, onChangeText) {
    return (
      <View style={{marginTop: 15, marginHorizontal: 15}}>
        <Text style={{marginBottom: 5, fontSize: 15, color: Colors.buttonBlue}}>
          {title}
          {':'}
        </Text>
        <TextInput
          value={value}
          onChangeText={(text) => {
            onChangeText(text);
          }}
          keyboardType={keyboardType}
          style={{
            backgroundColor: Colors.white,
            borderRadius: 5,
            borderColor: Colors.grayOpacity,
            borderWidth: 1,
            height: 38,
            paddingLeft: 15,
          }}
        />
      </View>
    );
  }
  showDatePicker(title, value, onDateChange) {
    return (
      <View style={{marginTop: 15, marginHorizontal: 15}}>
        <Text style={{marginBottom: 5, fontSize: 15, color: Colors.blue}}>
          {title}
          {':'}
        </Text>
        <DatePicker
          style={{width: '102.5%'}}
          date={value}
          mode="date"
          placeholder="--:--"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              width: 0,
              height: 0,
            },
            dateInput: {
              backgroundColor: Colors.white,
              borderRadius: 5,
              borderColor: Colors.grayOpacity,
              borderWidth: 1,
              height: 38,
            },
          }}
          onDateChange={(date) => {
            onDateChange(date);
          }}
        />
      </View>
    );
  }
  showPicker(title, selectedValue, onValueChange) {
    return (
      <View style={{marginTop: 15, marginHorizontal: 15}}>
        <Text style={{marginBottom: 5, fontSize: 15, color: Colors.blue}}>
          {title}
          {':'}
        </Text>
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 5,
            borderColor: Colors.grayOpacity,
            borderWidth: 1,
          }}>
          <Picker
            mode="dropdown"
            selectedValue={selectedValue}
            onValueChange={(itemValue) => {
              onValueChange(itemValue);
            }}
            style={{height: 38, paddingLeft: 15}}>
            <Picker.Item label={'Nam'} value={'Nam'} />
            <Picker.Item label={'Nữ'} value={'Nữ'} />
          </Picker>
        </View>
      </View>
    );
  }
  showView() {
    const {
      firstName,
      lastName,
      sex,
      permanentAddress,
      temporaryAddress,
      phoneNumber,
      birthDay,
      idCode,
      fatherName,
      motherName,
      fatherPhoneNumber,
      motherPhoneNumber,
    } = this.state;
    return (
      <ScrollView>
        <View style={{flex: 1, paddingBottom: 15}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              {this.showInput('Họ', lastName, 'default', (text) => {
                this.setState({lastName: text});
              })}
            </View>
            <View style={{flex: 1}}>
              {this.showInput('Tên', firstName, 'default', (text) => {
                this.setState({firstName: text});
              })}
            </View>
          </View>

          {this.showInput(
            'Địa chỉ thường trú',
            permanentAddress,
            'default',
            (text) => {
              this.setState({permanentAddress: text});
            },
          )}
          {this.showInput(
            'Địa chỉ tạm trú',
            temporaryAddress,
            'default',
            (text) => {
              this.setState({temporaryAddress: text});
            },
          )}
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              {this.showDatePicker('Ngày sinh', birthDay, (date) => {
                this.setState({birthDay: date});
              })}
            </View>
            <View style={{flex: 1}}>
              {this.showPicker('Giới tính', sex, (itemValue) => {
                this.setState({sex: itemValue});
              })}
            </View>
          </View>

          {this.showInput('Số điện thoại', phoneNumber, 'phone-pad', (text) => {
            this.setState({phoneNumber: text});
          })}
          {this.showInput('CMND/CCCD', idCode, 'phone-pad', (text) => {
            this.setState({idCode: text});
          })}
          {this.showInput('Họ tên cha', fatherName, 'default', (text) => {
            this.setState({fatherName: text});
          })}
          {this.showInput('Họ tên mẹ', motherName, 'default', (text) => {
            this.setState({motherName: text});
          })}
          {this.showInput(
            'Số điện thoại cha',
            fatherPhoneNumber,
            'phone-pad',
            (text) => {
              this.setState({fatherPhoneNumber: text});
            },
          )}

          {this.showInput(
            'Số điện thoại mẹ',
            motherPhoneNumber,
            'phone-pad',
            (text) => {
              this.setState({motherPhoneNumber: text});
            },
          )}
        </View>
      </ScrollView>
    );
  }
  onChangeStateAlert = (state, des) => {
    this.setState({
      showAlert: state,
      messageAlert: des,
    });
  };
  render() {
    const {message, isFetching} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          color={Colors.backgroundBlue}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          haveSave={true}
          textSave={'Lưu'}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          onClickSave={() => {
            this.onPressSave();
          }}></HeaderNavigation>
        {this.showView()}
        {message &&
          AlertCustom(true, message, () => {
            this.onChangeStateAlert(false, '');
            this.props.formatData();
            this.props.navigation.goBack();
          })}
        {isFetching && <Loading></Loading>}
      </View>
    );
  }
}
