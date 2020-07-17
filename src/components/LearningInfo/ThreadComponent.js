import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TextInput} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Board from '../customs/Board';

export default class ThreadComponent extends Component {
  showBody() {
    return (
      <View style={{flex: 1, padding: 10}}>
        <Board
          studentName={'Lê Dương Hưng Thịnh'}
          name={'CDTH17PMC'}
          semester={'Học kỳ 2'}
          teacherName={'Nguyễn Vũ Dzũng'}></Board>

        <View
          style={{
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
          }}>
          <TextInput 
            style={{color: Colors.gray2, fontSize: 15, marginLeft: 10}} placeholder='Chia sẽ với lớp học...'>
          </TextInput>
        </View>
      </View>
    );
  }
  render() {
    const data = {nameSubject:'Toán rời rạc'}
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <HeaderNavigation data = {this.data}
          title={data.nameSubject}
          titleColor={Colors.white}
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconRight={Images.icontabmenu}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        {this.showBody()}
      </View>
    );
  }
}
