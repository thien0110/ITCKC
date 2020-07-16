import React, {Component} from 'react';
import {Text, View, TextInput, ScrollView, Picker} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
// import DateTimePicker from '@react-native-community/datetimepicker';
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
      sex: 'nam', //Giới tính
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
      <View
        style={{
          padding: 3,
          width: '100%',
          marginBottom: 10,
          paddingTop: 10,
        }}>
        <View
          style={{
            position: 'absolute',
            left: 30,
            backgroundColor: Colors.background,
            zIndex: 1,
          }}>
          <Text
            style={
              {
                //color:Colors.grayStrong
              }
            }>
            {' '}
            {title}{' '}
          </Text>
        </View>
        <TextInput
          style={{
            borderRadius: 10,
            borderWidth: 1,
            paddingLeft: 15,
            width: '100%',
            borderColor: Colors.grayStrong,
            // backgroundColor:Colors.white
          }}
          keyboardType={keyboardType}
          value={value}
          onChangeText={(text) => {
            onChangeText(text);
          }}
        />
      </View>
    );
  }
  showDatePicker(title, value, onDateChange) {
    return (
      <View
        style={{
          padding: 3,
          width: '100%',
          marginBottom: 10,
          paddingTop: 10,
        }}>
        <View
          style={{
            position: 'absolute',
            left: 30,
            backgroundColor: Colors.background,
            zIndex: 1,
          }}>
          <Text
            style={
              {
                //color:Colors.grayStrong
              }
            }>
            {' '}
            {title}{' '}
          </Text>
        </View>
        <DatePicker
          style={{
            width: '100%',
          }}
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
              height: 50,
              borderRadius: 10,
              borderWidth: 1,
              paddingLeft: 15,
              borderColor: Colors.grayStrong,
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
      <View
        style={{
          padding: 3,
          width: '100%',
          marginBottom: 10,
          paddingTop: 10,
        }}>
        <View
          style={{
            position: 'absolute',
            left: 30,
            backgroundColor: Colors.background,
            zIndex: 1,
          }}>
          <Text
            style={
              {
                //color:Colors.grayStrong
              }
            }>
            {' '}
            {title}{' '}
          </Text>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            paddingLeft: 15,
            borderColor: Colors.grayStrong,
          }}>
          <Picker
            mode="dropdown"
            selectedValue={selectedValue}
            onValueChange={(itemValue) => {
              onValueChange(itemValue);
            }}
            style={{height: 50}}>
            <Picker.Item label={'Nam'} value={'nam'} />
            <Picker.Item label={'Nữ'} value={'nu'} />
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
    console.warn(this.props.message, 'cpnent');
    return (
      <ScrollView>
        <View style={{flex: 1, padding: 10}}>
          {this.showInput('Họ', lastName, 'default', (text) => {
            this.setState({lastName: text});
          })}
          {this.showInput('Tên', firstName, 'default', (text) => {
            this.setState({firstName: text});
          })}
          {this.showPicker('Giới tính', sex, (itemValue) => {
            this.setState({sex: itemValue});
          })}
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

          {this.showInput('Số điện thoại', phoneNumber, 'phone-pad', (text) => {
            this.setState({phoneNumber: text});
          })}
          {this.showDatePicker('Ngày sinh', birthDay, (date) => {
            this.setState({birthDay: date});
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
    const{message, isFetching}= this.props;
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          color={Colors.navigation}
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
            this.props.formatData({});
            this.props.navigation.goBack()
          })}
        {isFetching && <Loading></Loading>}
      </View>
    );
  }
}
