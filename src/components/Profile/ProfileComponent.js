import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';

import Colors from '../../res/Colors';
import Images from '../../res/Images';

export default class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  showInput(title, value,) {
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
          <Text style={{
              //color:Colors.grayStrong
              }}> {title} </Text>
        </View>
        <TextInput
          style={{
            borderRadius: 10,
            borderWidth: 1,
            paddingLeft: 15,
            width: '100%',
            borderColor:Colors.grayStrong,
            // backgroundColor:Colors.white
          }}
          editable={false}
          value={value}
        />
      </View>
    );
  }
  showView() {
    // const {name, birthDay, studentCode, className, schoolYear, majors} = this.state;
    return (
      <View style={{flex: 1, padding: 10}}>
        {this.showInput('Họ tên',  "thien")}
        {this.showInput('Ngày sinh', 'birthDay')}
        {this.showInput('Mã số sinh viên', 'studentCode')}
        {this.showInput('Lớp', 'className')}
        {this.showInput('Khóa', 'schoolYear')}
        {this.showInput('Ngành', 'majors')}
      </View>
    );
  }
  render() {
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
            this.props.navigation.navigate('EditProfile');
          }}></HeaderNavigation>
        {this.showView()}
      </View>
    );
  }
}
