import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';

import Colors from '../../res/Colors';
import Images from '../../res/Images';

export default class EditProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birthDay: '',
      studentCode: '',
      className: '',
      schoolYear: '',
      majors: '',
    };
  }
  showInput(title, value, onChangeText) {
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
          }}
          value={value}
          onChangeText={(text) => {
            onChangeText(text);
          }}
        />
      </View>
    );
  }
  showView() {
    const {name, birthDay, studentCode, className, schoolYear, majors} = this.state;
    return (
      <View style={{flex: 1, padding: 10}}>
        {this.showInput('Họ tên', name, (text) => {
          this.setState({name: text});
        })}
        {this.showInput('Ngày sinh', birthDay, (text) => {
          this.setState({birthDay: text});
        })}
        {this.showInput('Mã số sinh viên', studentCode, (text) => {
          this.setState({studentCode: text});
        })}
        {this.showInput('Lớp', className, (text) => {
          this.setState({className: text});
        })}
        {this.showInput('Khóa', schoolYear, (text) => {
          this.setState({schoolYear: text});
        })}
        {this.showInput('Ngành', majors, (text) => {
          this.setState({majors: text});
        })}
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
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}
          onClickSave={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        {this.showView()}
      </View>
    );
  }
}
