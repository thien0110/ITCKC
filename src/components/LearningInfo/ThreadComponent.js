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
import {objectIsNull, stringIsEmpty} from '../../res/Functions';

export default class ThreadComponent extends Component {
  
  shareBlock() {
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return (
            <View style={styles.viewStyle}>
              <View style={{padding: 10, marginBottom:0}}>
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
    const {item} = this.props.route.params;
    return (
      <View style={{flex: 1, padding: 10}}>
        <Board
          name={'CDTH17PMC'}
          numberOf={'101'}
          teacherName={item.teacherName}></Board>

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
    const {item} = this.props.route.params;
    var titleHeader=""
    if (!objectIsNull(item)) {
      titleHeader=item.name
    } 
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <HeaderNavigation
          title={titleHeader}
          titleColor={Colors.white}
          color={Colors.backgroundBlue}
          iconLeft={Images.iconBack}
          iconRight={Images.iconTabMenu}
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
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#eee',
    // shadowColor: '#000',
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // elevation: 5,
  },
});
