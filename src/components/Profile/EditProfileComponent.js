import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Picker,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
      phoneNumber: '',
      birthDay: new Date(),
      showChangePass: false,
      oldPass: '',
      newPass: '',
      confirmNewPass: '',
    };
  }
  setDataEditProfile(data) {
    this.setState({
      phoneNumber: data.sdt,
      birthDay: data.ngaySinh,
    });
  }
  componentDidMount() {
    const {data} = this.props.route.params;
    if (!objectIsNull(data)) {
      this.setDataEditProfile(data);
    }
  }
  onPressSave() {
    const {phoneNumber, birthDay} = this.state;
    const input = {
      phoneNumber,
      birthDay,
    };
    this.props.editProfileAction(input);
  }
  onPressChangePass() {
    const { oldPass, newPass, confirmNewPass} = this.state;
    const input = {
      oldPass,
      newPass,
      confirmNewPass,
    };
  }
  showInput(title, value, keyboardType, onChangeText, showPass, onFocus) {
    return (
      <View style={{marginTop: 15, marginHorizontal: 15}}>
        <Text style={{marginBottom: 5, fontSize: 15, color: Colors.buttonBlue}}>
          {title}
          {':'}
        </Text>
        <TextInput
          secureTextEntry={showPass}
          value={value}
          onChangeText={(text) => {
            onChangeText(text);
          }}
          onFocus={() => {
            onFocus();
          }}
          keyboardType={keyboardType}
          style={{
            backgroundColor: Colors.white,
            borderRadius: 5,
            borderColor: Colors.grayOpacity,
            borderWidth: 1,
            paddingLeft: 15,
            textAlign: 'center',
          }}
          clearTextOnFocus={true}
        />
      </View>
    );
  }
  showDatePicker(title, value, onDateChange) {
    return (
      <View style={{marginTop: 15, marginHorizontal: 15}}>
        <Text style={{marginBottom: 10, fontSize: 15, color: Colors.blue}}>
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
              height: 48,
            },
          }}
          onDateChange={(date) => {
            onDateChange(date);
          }}
        />
      </View>
    );
  }
  // showPicker(title, selectedValue, onValueChange) {
  //   return (
  //     <View style={{marginTop: 15, marginLeft:15}}>
  //       <Text style={{marginBottom: 5, fontSize: 15, color: Colors.blue}}>
  //         {title}
  //         {':'}
  //       </Text>
  //       <View
  //         style={{
  //           backgroundColor: Colors.white,
  //           borderRadius: 5,
  //           borderColor: Colors.grayOpacity,
  //           borderWidth: 1,
  //         }}>
  //         <Picker
  //           mode="dropdown"
  //           selectedValue={selectedValue}
  //           onValueChange={(itemValue) => {
  //             onValueChange(itemValue);
  //           }}
  //           style={{height: 48, paddingLeft: 15}}>
  //           <Picker.Item label={'Nam'} value={'Nam'} />
  //           <Picker.Item label={'Nữ'} value={'Nữ'} />
  //         </Picker>
  //       </View>
  //     </View>
  //   );
  // }
  showButton(text, onPress) {
    return (
      <View style={{alignItems: 'flex-end', marginHorizontal: 15}}>
        <TouchableOpacity
          style={{
            marginTop: 15,
            borderRadius: 5,
            backgroundColor: Colors.buttonBlue,
            padding: 10,
          }}
          onPress={() => {
            onPress;
          }}>
          <Text style={{color: Colors.white}}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  showView() {
    const {
      phoneNumber,
      birthDay,
      oldPass,
      newPass,
      confirmNewPass,
      showChangePass,
    } = this.state;
    return (
      <ScrollView>
        <View style={{flex: 1, paddingBottom: 15}}>
          <View style={{flex: 1}}>
            {this.showDatePicker('Ngày sinh', birthDay, (date) => {
              this.setState({birthDay: date});
            })}
          </View>
          {this.showInput(
            'Số điện thoại',
            phoneNumber,
            'phone-pad',
            (text) => {
              this.setState({phoneNumber: text});
            },
            false,
            () => {
              this.setState({phoneNumber: ''});
            },
          )}
          {this.showButton('Lưu thay đổi', () => {this.onPressSave()})}
          <View
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: Colors.grayOpacity,
              marginTop: 15,
              shadowColor: Colors.black,
            shadowOpacity: 0.8,
            shadowRadius: 1,
            elevation:2,
            }}></View>
          {this.showInput(
            'Mật khẩu',
            oldPass,
            'default',
            (text) => {
              this.setState({oldPass: text});
            },
            true,
            () => {
              this.setState({oldPass: '', showChangePass: true});
            },
          )}
          {showChangePass && (
            <View>
              {this.showInput(
                'Mật khẩu mới',
                newPass,
                'default',
                (text) => {
                  this.setState({newPass: text});
                },
                true,
                () => {},
              )}
              {this.showInput(
                'Xác nhận mật khẩu mới',
                confirmNewPass,
                'default',
                (text) => {
                  this.setState({confirmNewPass: text});
                },
                true,
                () => {},
              )}
              {this.showButton('Đổi mật khẩu', () => {this.onPressChangePass()})}
            </View>
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
          onClickLeft={() => {
            this.props.navigation.goBack();
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
