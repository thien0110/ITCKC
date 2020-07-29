import React, {Component} from 'react';
import {Text, View, TextInput, FlatList, StyleSheet, Dimensions} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import Images from '../../res/Images';

import {objectIsNull, stringIsEmpty} from '../../res/Functions';


const windowWidth = Dimensions.get('window').width;
export default class WorkingComponent extends Component {
  shareBlock() {
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return (
            <View style={styles.viewStyle}>
              <View style={{padding: 10, marginBottom: 0}}>
                <Text style={{fontSize: 18, marginLeft: 10}}>
                  Tài liệu mới: {item.docName}
                </Text>
                <Text style={{fontSize: 15, marginLeft: 10}}>
                  Đã đăng: {item.time}
                </Text>
                <Text style={{fontSize: 15, marginLeft: 10}}>{item.type}</Text>
                <TextInput
                  style={{color: Colors.gray2, fontSize: 15, marginLeft: 10}}
                  placeholder="Thêm nhận xét..."></TextInput>
              </View>
            </View>
          );
        }}></FlatList>
    );
  }
  Showbody() {
    return <View>{this.shareBlock()}</View>;
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
          iconRight={Images.icontabmenu}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 30}}> Chủ đề 1</Text>
          {this.Showbody()}
        </View>
      </View>
    );
  }
}

const data = [
  {docName: 'Bài 9', time: 'Hôm qua', topic: '1', type: 'Bài tập'},
  {docName: 'Bài 8', time: '11 thg 7', topic: '2', type: 'Bài tập'},
  {docName: 'Bài 7', time: '2 thg 7', topic: '1', type: 'Tài liệu'},
  {docName: 'Bài 6', time: '25 thg 6', topic: '3', type: 'Tài liệu'},
  {docName: 'Bài 5', time: '25 thg 6', topic: '3', type: 'Tài liệu'},
  {docName: 'Bài 4', time: '25 thg 6', topic: '3', type: 'Tài liệu'},
  {docName: 'Bài 3', time: '25 thg 6', topic: '3', type: 'Tài liệu'},
];

const styles = StyleSheet.create({
  viewStyle: {
    alignContent:'center',
    width:windowWidth - (windowWidth*8/100),
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#ddd',
    // shadowColor: '#000',
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // elevation: 5,
  },
});
