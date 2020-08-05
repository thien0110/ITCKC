import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
  TextInput,
  StyleSheet,
  FlatList
} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Icon from 'react-native-vector-icons/FontAwesome5';
const window = Dimensions.get('window');

export default class SettingComponent extends Component {
  state = {
    modalVisible: false,
    daysWeek: '4',
    newPass: '',
    confirmNewPass: '',
  };
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  ShowItems(day, onPress) {
    const {daysWeek} = this.state;
    let isDay = day[1];
    return (
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}>
        <View style={isDay == daysWeek ? styles.dayOn : styles.dayOff}>
          <Text style={isDay == daysWeek ? styles.textOn : styles.textOff}>
            {day}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  showDayOfWeek() {
    return (
      <View style={styles.container}>
        {this.ShowItems('T2', () => this.setState({daysWeek: '2'}))}
        {this.ShowItems('T3', () => this.setState({daysWeek: '3'}))}
        {this.ShowItems('T4', () => this.setState({daysWeek: '4'}))}
        {this.ShowItems('T5', () => this.setState({daysWeek: '5'}))}
        {this.ShowItems('T6', () => this.setState({daysWeek: '6'}))}
        {this.ShowItems('T7', () => this.setState({daysWeek: '7'}))}
      </View>
    );
  }
  timeItem(timeStart, timeEnd, subjectName, teacherName, roomNumber, group, type) {
    return (
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <View style={styles.timeContentsLeft}>
          <Text style={{fontSize: 20, color: Colors.gray2}}>{timeStart}</Text>
          <Text style={{fontSize: 20, color: Colors.gray2}}>{timeEnd}</Text>
        </View>
        <LinearGradient
          colors={['#F68080', '#F9B16E']}
          style={styles.timeContentsRight}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
              {subjectName}
            </Text>
            <Image
              source={Images.iconTimer}
              style={{width: 30, height: 30}}></Image>
          </View>
          <View style={{marginTop: -5}}>
            <Text style={styles.textContentTime}>{teacherName}</Text>
            <Text style={styles.textContentTime}>{type}</Text>
            <Text style={styles.textContentTime}>
              {group === '1' ? 'Nhóm 1' : group === 'Nhóm 2' ? '2' : 'Cả lớp'}
            </Text>
            <Text style={styles.textContentTime}>{roomNumber}</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
  showTime() {
    let dataList = [];
    dataList = data.filter((item) => item.day === this.state.daysWeek);
    //console.warn(dataList);
    for (let i = 0; i < dataList.length; i++) {
      for (let j = 0; j < dataList[i].subjects.length; j++)
        return (
          <FlatList
        data={dataList[i].subjects}
        style={{paddingHorizontal: 15}}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item, inItem}) => {
          return (
                this.timeItem(
                item.timeStart,
                item.timeEnd,
                item.name,
                item.teacherName,
                item.roomNumber,
                item.group,
                item.type
              // dataList[i].subjects[j].timeStart,
              // dataList[i].subjects[j].timeEnd,
              // dataList[i].subjects[j].name,
              // dataList[i].subjects[j].teacherName,
              // dataList[i].subjects[j].roomNumber,
              // dataList[i].subjects[j].group,
            )
          );
        }}></FlatList>
        //   this.timeItem(
        //   dataList[i].subjects[j].timeStart,
        //   dataList[i].subjects[j].timeEnd,
        //   dataList[i].subjects[j].name,
        //   dataList[i].subjects[j].teacherName,
        //   dataList[i].subjects[j].roomNumber,
        //   dataList[i].subjects[j].group,
        // )
      )
    }
  }
  render() {
    let dataList = [];
    dataList = data.filter((item) => item.day === this.state.daysWeek);
    //console.warn(dataList);
    // for (let i = 0; i < dataList.length; i++) {
    //   for (let j = 0; j < dataList[i].subjects.length; j++)
    return (
      <View style={{flex: 1, backgroundColor: Colors.navigation}}>
        <HeaderNavigation
          title={'Thời khóa biểu'}
          titleColor={Colors.white}
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        <View style={{flex: 1}}>
          {this.showDayOfWeek()}
          <View style={styles.timeContainer}>{this.showTime()}</View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginBottom: 15,
  },
  dayOn: {
    width: 30,
    height: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 50,
    padding: 5,
  },
  dayOff: {
    width: 30,
    height: 30,
    color: '#fff',
    marginTop: 50,
    padding: 5,
  },
  textOn: {
    color: Colors.backgroundBlue,
  },
  textOff: {
    color: '#fff',
  },
  timeContainer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    justifyContent:'space-between',
    backgroundColor: Colors.white,
  },
  timeContentsLeft: {
    paddingVertical: 20,
    width: '20%',
    marginRight:15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContentsRight: {
    width: '75%',
    height: 140,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  textContentTime: {
    fontSize: 18,
    color: '#fff',
  },
});
const data = [
  {
    day: '2',
    subjects: [
      {
        name: 'Dịch vụ mạng',
        timeStart: '9:00',
        timeEnd: '11:30',
        type: 'Thực hành',
        group: '1',
        teacherName: 'Lữ Cao Tiến',
        roomNumber: 'F7.2',
      },
      {
        name: 'Dịch vụ mạng',
        timeStart: '9:00',
        timeEnd: '11:30',
        type: 'Thực hành',
        group: '2',
        teacherName: 'Nguyễn Vũ Dzũng',
        roomNumber: 'F7.3',
      },
      {
        name: 'Chính trị 2',
        timeStart: '12:30',
        timeEnd: '15:00',
        type: 'Lý Thuyết',
        group: '',
        teacherName: 'Đ T Huế',
        roomNumber: 'C7.6',
      },
      {
        name: 'ĐA - Lập trình Windows',
        timeStart: '15:10',
        timeEnd: '17:35',
        type: 'Đồ án',
        group: '',
        teacherName: 'Nguyễn Đức Chuẩn',
        roomNumber: 'F7.3',
      },
    ],
  },
  {
    day: '3',
    subjects: [
      {
        name: 'Ngôn Ngữ LT Java',
        timeStart: '12:30',
        timeEnd: '15:00',
        type: 'Lý thuyết',
        teacherName: 'Trần Thanh Duy',
        roomNumber: 'F7.8',
      },
      {
        name: 'Anh Văn Chuyên Ngành',
        timeStart: '15:10',
        timeEnd: '17:35',
        type: 'Lý thuyết',
        teacherName: 'Dương Hữu Phước',
        roomNumber: 'C7.6',
      },
    ],
  },
  {
    day: '4',
    subjects: [
      {
        name: 'Lập trình Windows',
        timeStart: '12:30',
        timeEnd: '15:00',
        type: 'Lý thuyết',
        group: '',
        teacherName: 'Nguyễn Đức Chuẩn',
        roomNumber: 'F7.3',
      },
      {
        name: 'LT web PHP cơ bản',
        timeStart: '15:10',
        timeEnd: '17:35',
        type: 'Lý Thuyết',
        teacherName: 'Phù Khắc Anh',
        roomNumber: 'F7.1',
      },
    ],
  },
  {
    day: '5',
    subjects: [
      {
        name: 'Lập trình windows',
        timeStart: '9:00',
        timeEnd: '11:30',
        type: 'Thực hành',
        group: '1',
        teacherName: 'Nguyễn Đức Chuẩn',
        roomNumber: 'F7.11',
      },
      {
        name: 'Công nghệ phần mềm',
        timeStart: '12:30',
        timeEnd: '15:00',
        type: 'Lý thuyết',
        group: '',
        teacherName: 'Phù Khắc Anh',
        roomNumber: 'C7.6',
      },
      {
        name: 'Dịch vụ mạng',
        timeStart: '15:10',
        timeEnd: '17:35',
        type: 'Lý thuyết',
        group: '',
        teacherName: 'Lữ Cao Tiến',
        roomNumber: 'C7.6',
      },
    ],
  },
  {
    day: '6',
    subjects: [
      {
        name: 'Lập trình Windows',
        timeStart: '12:30',
        timeEnd: '15:00',
        type: 'Thực hành',
        group: '2',
        teacherName: 'Phù Khắc Anh',
        roomNumber: 'F7.2',
      },
    ],
  },
  {
    day: '7',
    subjects: [
      {
        name: 'Giáo dục thể chất',
        timeStart: '7:00',
        timeEnd: '9:30',
        type: 'Chứng chỉ',
        teacherName: 'Không nhớ',
        roomNumber: 'TTTH Phú Thọ',
      },
    ],
  },
];
