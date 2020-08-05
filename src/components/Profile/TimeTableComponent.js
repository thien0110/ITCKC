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
  timeItem(timeStart, timeEnd, subjectName, teacherName, roomNumber) {
    return (
      <View style={{flexDirection: 'row', marginBottom:10}}>
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
          <View style={{marginTop: 20}}>
            <Text style={styles.textContentTime}>{teacherName}</Text>
            <Text style={styles.textContentTime}>{roomNumber}</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
  showTime() {
    return <View style={styles.timeContainer}>
      {this.timeItem('9:00','11:30','Toán rời rạc','Nguyễn Vũ Dzũng','F5.13')}
      {this.timeItem('12:30','15:00','Thiết kế web','Lữ Cao Tiến','F7.11')}
      {this.timeItem('15:10','17:35','Cấu trúc DL và TT','Nguyễn Đức Chuẩn','F7.2')}
    </View>;
  }
  render() {
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
          {this.showTime()}
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
    padding: 15,
    backgroundColor: Colors.white,
  },
  timeContentsLeft: {
    paddingVertical: 20,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContentsRight: {
    width: '75%',
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
