import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Board from '../customs/Board';

export default class ThreadComponent extends Component {
  shareBlock() {
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return (
            <View style={styles.viewStyle}>
              <View style={{padding: 10}}>
                <Text style={{fontSize: 18, marginLeft: 10}}>
                  Tài liệu mới: {item.docName}
                </Text>
                <Text style={{fontSize: 15, marginLeft: 10}}>
                  Đã đăng: {item.time}
                </Text>
                <TextInput
                  style={{color: Colors.gray2, fontSize: 15, marginLeft: 10}}
                  placeholder="Thêm nhận xét..."></TextInput>
              </View>
            </View>
          );
        }}></FlatList>
    );
  }
  showBody() {
    return (
      <View style={{flex: 1, padding: 10}}>
        <Board
          studentName={'Lê Dương Hưng Thịnh'}
          name={'CDTH17PMC'}
          semester={'Học kỳ 2'}
          teacherName={'Nguyễn Vũ Dzũng'}></Board>

        <View style={styles.viewStyle}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent:'flex-start'}}>
              <Image
                source={Images.iconPersonProfile}
                style={{
                  margin:10,
                  width: 25,
                  height: 30,
                  resizeMode:'contain',
                }}></Image>
            <TextInput
              style={{
                color: Colors.gray2,
                fontSize: 15,
                marginLeft: 10,
                width: '60%',
              }}
              placeholder="Chia sẻ với lớp học..."></TextInput>
          </View>
        </View>
        {this.shareBlock()}
      </View>
    );
  }
  render() {
    
    console.log(this.props);
    const data = {nameSubject: this.props.routeSubject?this.props.routeSubject.data:''};
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <HeaderNavigation
          data={this.data}
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
const data = [
  {docName: 'Bài 9', time: 'Hôm qua'},
  {docName: 'Bài 8', time: '11 thg 7'},
  {docName: 'Bài 7', time: '2 thg 7'},
  {docName: 'Bài 6', time: '25 thg 6'},
];
const styles = StyleSheet.create({
  viewStyle: {
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
