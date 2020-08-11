import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  DeviceEventEmitter,
  StyleSheet,
  ToastAndroid,
  Platform,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

import ReactNativeAN from 'react-native-alarm-notification';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import HeaderNavigation from './HeaderNavigation';
import Images from '../../res/Images';
import Loading from './Loading';
import Colors from '../../res/Colors';
import {objectIsNull} from '../../res/Functions';
import Icon from 'react-native-vector-icons/FontAwesome5';

const alarmNotifData = {
  title: 'Thông báo đi học',
  message: 'Chuẩn bị học "môn học"',
  tag: '',
  vibrate: true,
  play_sound: true,
  schedule_type: 'once',
  channel: 'wakeup',
  data: {content: 'my notification'},
  loop_sound: true,
  has_button: true,
};

export default class AlarmComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false,
      fireDate: ReactNativeAN.parseDate(new Date(Date.now())),
      update: [],
      alarmId: null,
    };
  }
  showDatePicker() {
    this.setState({
      isDatePickerVisible: true,
    });
  }

  hideDatePicker() {
    this.setState({
      isDatePickerVisible: false,
    });
  }

  handleConfirm = (date) => {
    this.setState({
      fireDate: ReactNativeAN.parseDate(date),
    });
    this.hideDatePicker();
  };
  setAlarm = async () => {
    const {subjectName} = this.props.route.params;
    const {fireDate, update} = this.state;
    // console.warn('fireDate', fireDate);
    const details = {
      ...alarmNotifData,
      fire_date: fireDate,
      message: 'Chuẩn bị học ' + subjectName + ' lúc ' + fireDate,
      tag: subjectName,
    };
    console.log(`alarm set: ${fireDate}`);

    try {
      const alarm = await ReactNativeAN.scheduleAlarm(details);
      const stringDate = fireDate.toString();
      if (alarm) {
        this.setState({
          update: [
            ...update,
            {
              date: {
                day: stringDate.slice(0, 2),
                month: stringDate.slice(3, 5),
                year: stringDate.slice(6, 10),
                hour: stringDate.slice(11, 13),
                minute: stringDate.split(':')[1],
                second: stringDate.split(':')[2],
			  },
			  subjectName: subjectName,
              // date: `alarm set: ${fireDate}`,
              id: alarm.id,
            },
          ],
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.viewAlarms();
    DeviceEventEmitter.addListener('OnNotificationDismissed', async function (
      e,
    ) {
      const obj = JSON.parse(e);
      console.log(`Notification id: ${obj.id} dismissed`);
    });

    DeviceEventEmitter.addListener('OnNotificationOpened', async function (e) {
      const obj = JSON.parse(e);
      console.log(obj);
    });

    if (Platform.OS === 'ios') {
      this.showPermissions();

      ReactNativeAN.requestPermissions({
        alert: true,
        badge: true,
        sound: true,
      }).then(
        (data) => {
          console.log('RnAlarmNotification.requestPermissions', data);
        },
        (data) => {
          console.log('RnAlarmNotification.requestPermissions failed', data);
        },
      );
    }
  }

  showPermissions = () => {
    ReactNativeAN.checkPermissions((permissions) => {
      console.log(permissions);
    });
  };

  async viewAlarms() {
    const list = await ReactNativeAN.getScheduledAlarms();
    // console.warn('list', list);
    const update = list.map((l) => ({
      //   date: `alarm: ${l.day}-${l.month}-${l.year} ${l.hour}:${l.minute}:${l.second}`,
      date: {
        day: l.day,
        month: l.month,
        year: l.year,
        hour: l.hour,
        minute: l.minute,
        second: l.second,
      },
      subjectName: l.tag,
      id: l.id,
    }));
    // console.warn('view', update);
    this.setState({update});
  }
  async deleteAlarm(id) {
    if (id !== '') {
      console.log(`delete alarm: ${id}`);

      const idNew = parseInt(id, 10);
      ReactNativeAN.deleteAlarm(idNew);

      //   await this.viewAlarms();
    }
    this.viewAlarms();
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener('OnNotificationDismissed');
    DeviceEventEmitter.removeListener('OnNotificationOpened');
  }
  showAlarm(item) {
    if (!objectIsNull(item)) {
      return (
        <View
          style={{
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderColor: Colors.grayOpacity,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View  style={{
            flexDirection: 'row',
            alignItems: 'center',
			width:window.width/2
          }}>
            <View style={{marginRight:10}}>
              <Text style={{fontSize: 25}}>
                {item.date.hour}:{item.date.minute}
              </Text>
              <Text>
                {item.date.day}/{item.date.month}/{item.date.year}
              </Text>
            </View>
            <Text style={{fontWeight:'bold'}}>{item.subjectName}</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.deleteAlarm(item.id)}
              style={{
                borderRadius: 5,
                justifyContent: 'center',
                height: 30,
                width: 30,
                alignSelf: 'center',
                backgroundColor: Colors.buttonBlue,
              }}>
              <Text style={{color: Colors.white, textAlign: 'center'}}>
                Xóa
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  render() {
    const {update, fireDate, alarmId} = this.state;
    const list = ReactNativeAN.getScheduledAlarms();
    return (
      <View style={{flex: 1}}>
        <HeaderNavigation
          title={'Đặt báo lịch học'}
          titleColor={Colors.white}
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        <View style={{padding: 15}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                this.showDatePicker();
              }}
              style={styles.dateTimePick}>
              <Text>{fireDate}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.setAlarm}
              style={styles.dateTimeButton}>
              <Text style={{color: Colors.white}}>Đặt lịch</Text>
            </TouchableOpacity>
          </View>
          <View>
            {/* <Text>{data}</Text> */}
            <FlatList
              data={update}
              keyExtractor={(item, index) => 'key' + index}
              renderItem={({item}) => {
                return this.showAlarm(item);
              }}></FlatList>
          </View>
        </View>
        <DateTimePickerModal
          isVisible={this.state.isDatePickerVisible}
          mode="datetime"
          onConfirm={this.handleConfirm}
          onCancel={() => this.hideDatePicker()}
        />
      </View>
    );
  }
}
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  dateTimePick: {
    borderBottomStartRadius: 5,
    borderTopStartRadius: 5,
    borderColor: Colors.gray2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: (window.width * 80) / 100 - 15,

    backgroundColor: Colors.white,
  },
  dateTimeButton: {
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    borderColor: Colors.gray2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: (window.width * 20) / 100 - 15,
    alignSelf: 'center',
    backgroundColor: Colors.buttonBlue,
  },
});

// <View style={{padding: 20}}>
//           <Button
//             style={{position: 'absolute'}}
//             title={'Đặt giờ'}
//             onPress={() => {
//               this.showDatePicker();
//             }}>
//             <Text style={{color: '#000'}}>Show Date Picker</Text>
//           </Button>
//         </View>

//         <View style={styles.margin}>
//           <Button onPress={this.setAlarm} title="Đặt hẹn" color="#007fff" />
//         </View>
//         <View>
//           <TextInput
//             style={styles.date}
//             onChangeText={(text) => this.setState({alarmId: text})}
//             value={alarmId}
//           />
//         </View>
//         <View style={styles.margin}>
//           <Button
//             onPress={this.deleteAlarm}
//             title="Delete Alarm"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.margin}>
//           <Button
//             onPress={this.viewAlarms}
//             title="See all active alarms"
//             color="#841584"
//           />
//         </View>
//         <Text>{JSON.stringify(update, null, 2)}</Text>
// <DateTimePickerModal
//   isVisible={this.state.isDatePickerVisible}
//   mode="datetime"
//   onConfirm={this.handleConfirm}
//   onCancel={() => this.hideDatePicker()}
// />
