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
  FlatList,SafeAreaView
} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import LinearGradient from 'react-native-linear-gradient';

import Loading from '../customs/Loading';
import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {userProfile} from '../../config';
import AlertCustom from '../customs/AlertComponent';
import {
  arrayIsEmpty,
  objectIsNull,
  objectIsEmpty,
  objectIsEqual,
} from '../../res/Functions';
const window = Dimensions.get('window');

var d = new Date();
var weekday = new Array(7);
weekday[0] = '8';
weekday[1] = '2';
weekday[2] = '3';
weekday[3] = '4';
weekday[4] = '5';
weekday[5] = '6';
weekday[6] = '7';

var n = weekday[d.getDay()];
export default class TimeTableComponent extends Component {
  state = {
    modalVisible: false,
    daysWeek: weekday[d.getDay()],
    current: weekday[d.getDay()],
    confirmNewPass: '',
  };
  componentDidMount() {
    const input = {maLopHoc: userProfile.maLopHoc, hocKi: '1'};
    this.props.getTimeTableAction(input);
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  ShowItems(day, onPress) {
    const {daysWeek, current} = this.state;
    let isDay = day[1];
    return (
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}>
        <View
          style={
            isDay == daysWeek
              ? styles.dayOn
              : isDay == current
              ? styles.dayCurrent
              : styles.dayOff
          }>
          <Text
            style={
              isDay == daysWeek
                ? styles.textOn
                : isDay == current
                ? styles.textCurrent
                : styles.textOff
            }>
            {day}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  showDayOfWeek() {
    return (
      <View>
      <Text style={{textAlign:'center', color:'#fff'}}>Hôm nay, ngày {d.getDate()} tháng {d.getMonth()+1} năm {d.getFullYear()}</Text>
      <View style={styles.container}>
        {this.ShowItems('T2', () => this.setState({daysWeek: '2'}))}
        {this.ShowItems('T3', () => this.setState({daysWeek: '3'}))}
        {this.ShowItems('T4', () => this.setState({daysWeek: '4'}))}
        {this.ShowItems('T5', () => this.setState({daysWeek: '5'}))}
        {this.ShowItems('T6', () => this.setState({daysWeek: '6'}))}
      </View>
      </View>
    );
  }
  timeItem(subjectName, teacherName, type) {
    return (
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <LinearGradient
          colors={['#F68080', '#F9B16E']}
          style={styles.timeContentsLeft}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#fff',
                width: '90%',
              }}>
              {subjectName}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('AlarmNoti',{subjectName});
              }}
              style={{width: '10%'}}>
              <Image
                source={Images.iconTimer}
                style={{width: 35, height: 35}}></Image>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 0}}>
            <Text style={styles.textContentTime}>{teacherName}</Text>
            <Text style={styles.textContentTime}>{type}</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }

  showTime() {
    const {data} = this.props;
    let dataList = [
      {
        day: '2',
        subjects: [],
      },
      {
        day: '3',
        subjects: [],
      },
      {
        day: '4',
        subjects: [],
      },
      {
        day: '5',
        subjects: [],
      },
      {
        day: '6',
        subjects: [],
      },
    ];
    if (!arrayIsEmpty(data)) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          if (j == 0) {
            dataList[j].subjects.push(data[i][j]);
          }
          if (j == 1) {
            dataList[j].subjects.push(data[i][j]);
          }
          if (j == 2) {
            dataList[j].subjects.push(data[i][j]);
          }
          if (j == 3) {
            dataList[j].subjects.push(data[i][j]);
          }
          if (j == 4) {
            dataList[j].subjects.push(data[i][j]);
          }
        }
      }
    }
    let dataFill = [];
    let dataDay = [];
    let arrFinal = [];
    dataFill = dataList.filter((item) => item.day === this.state.daysWeek);
    if (!objectIsNull(dataFill[0])) {
      for (let i = 0; i < dataFill[0].subjects.length; i++) {
        if (!objectIsEmpty(dataFill[0].subjects[i])) {
          dataDay.push(dataFill[0].subjects[i]);
        }
      }

      if (!objectIsNull(dataDay)) {
        let temp = dataDay[0];
        for (let i = 1; i < dataDay.length; i++) {
          if (objectIsEqual(temp, dataDay[i])) {
            delete dataDay[i];
          } else {
            temp = dataDay[i];
          }
        }

        arrFinal = dataDay.filter((item) => item != null);
      }
    }
    return (
      <FlatList
        data={arrFinal}
        style={{paddingHorizontal: 15}}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return this.timeItem(
            item.tenMonHoc,
            item.LoaiMonHoc,
            item.tenGiaoVien,
          );
        }}></FlatList>
    );
    //   }
    // }
  }
  showSunday(message) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 30}}>
          Hôm nay là chủ nhật,
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 30, textAlign:'center'}}>
          {message}
        </Text>
      </View>
    );
  }
  showSaturday(message) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 30}}>
          Hôm nay là Thứ 7,
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 30, textAlign:'center'}}>
        {message}
        </Text>
      </View>
    );
  }
  render() {
    const {daysWeek, current} = this.state;
    const {isFetching, data, message} = this.props;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.navigation}}>
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
          <View style={styles.timeContainer}>
            {daysWeek === '8' ? this.showSunday('Ngủ thêm chút đi :))') : daysWeek==='7'?this.showSaturday('Bạn không có lịch học!'): this.showTime()}
          </View>
        </View>
        {isFetching && <Loading></Loading>}
        {message &&
          AlertCustom(true, message, () => {
            this.props.navigation.goBack();
            this.props.formatData();
          })}
      </SafeAreaView>
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
    marginTop: 20,
    padding: 5,
  },
  dayOff: {
    width: 30,
    height: 30,
    color: '#fff',
    marginTop: 20,
    padding: 5,
  },
  dayCurrent: {
    width: 30,
    height: 30,
    alignItems: 'center',
    backgroundColor: Colors.grayStrong,
    marginTop: 20,
    padding: 5,
    borderRadius: 20,
  },
  textCurrent: {
    color: '#fff',
  },
  textOn: {
    color: Colors.backgroundBlue,
  },
  textOff: {
    color: '#fff',
  },
  timeContainer: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 15,
    paddingHorizontal: 0,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  timeContentsRight: {
    paddingVertical: 20,
    width: '20%',
    marginLeft: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContentsLeft: {
    width: '100%',
    height: 120,
    padding: 15,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  textContentTime: {
    fontSize: 18,
    color: '#fff',
  },
});
