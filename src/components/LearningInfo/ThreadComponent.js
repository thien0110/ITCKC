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
import {
  objectIsNull,
  stringIsEmpty,
  arrayIsEmpty,
  SplitDate,
} from '../../res/Functions';

import Loading from '../customs/Loading';

export default class ThreadComponent extends Component {
  componentDidMount() {
    const {item} = this.props.route.params;
    this.props.getLessonAction(item.maLopHocPhan);
  }
  shareBlock() {
    const {data} = this.props;
    if (!arrayIsEmpty(data)) {
      return (
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}) => {
            return (
              <View style={styles.viewStyle}>
                <View style={{padding: 10, marginBottom: 0}}>
                  <Text style={{fontSize: 18, marginLeft: 10, fontWeight:'bold', color:Colors.gray2}}>
                    Tài liệu mới: {item.tieuDe}
                  </Text>
                  <Text style={{fontSize: 15, marginLeft: 10, color:Colors.gray2}}>
                    Đã đăng: {SplitDate(item.ngayTao)}
                  </Text>
                  <Text style={{fontSize: 15, marginLeft: 10, color:Colors.gray2}}>
                    Mô tả: {item.moTa}
                  </Text>
                  {/* <TextInput
                    style={{color: Colors.gray2, fontSize: 15, marginLeft: 10}}
                    placeholder="Thêm nhận xét..."></TextInput> */}
                </View>
              </View>
            );
          }}></FlatList>
      );
    } else
      return (
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: Colors.gray2}}>
            Chưa có bài giảng mới....
          </Text>
        </View>
      );
  }
  showBody() {
    const {item} = this.props.route.params;
    // console.log(item)
    return (
      <ScrollView style={{flex: 1, padding: 10}}>
        <Board
          name={item.tenMonHoc}
          numberOf={'Học kỳ: ' + item.hocKi}
          teacherName={item.tenGiaoVien}></Board>

        <View style={styles.viewStyle}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            {/* <Image
              source={Images.iconPersonProfile}
              style={{
                margin: 10,
                width: 25,
                height: 30,
                resizeMode: 'contain',
              }}></Image>
            <TextInput
              style={{
                color: Colors.gray2,
                fontSize: 15,
                marginLeft: 10,
                width: '60%',
              }}
              placeholder="Chia sẻ với lớp học..."></TextInput> */}
          </View>
        </View>
        {this.shareBlock()}
      </ScrollView>
    );
  }
  render() {
    const {item} = this.props.route.params;
    const {data, isFetching} = this.props;
    var titleHeader = '';
    if (!objectIsNull(item)) {
      titleHeader = item.name;
    }
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <HeaderNavigation
          title={titleHeader}
          titleColor={Colors.white}
          color={Colors.backgroundBlue}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        {this.showBody()}
        {isFetching && <Loading></Loading>}
      </View>
    );
  }
}
// const data = [
//   {docName: 'Bài 9', time: 'Hôm qua'},
//   {docName: 'Bài 8', time: '11 thg 7'},
//   {docName: 'Bài 7', time: '2 thg 7'},
//   {docName: 'Bài 6', time: '25 thg 6'},
// ];
const styles = StyleSheet.create({
  viewStyle: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // elevation: 5,
  },
});
