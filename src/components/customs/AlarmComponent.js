import React, { Component } from 'react'
import {
	View,
	Text,
	Button,
	TextInput,
	DeviceEventEmitter,
	StyleSheet,
	ToastAndroid,
	Platform,
  } from 'react-native';
  

import ReactNativeAN from 'react-native-alarm-notification';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const alarmNotifData = {
	title: 'Thông báo đi học',
	message: 'Chuẩn bị học "môn học"',
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
		console.warn('fireDate1', this.state.fireDate);
		this.hideDatePicker();
	  };
	  setAlarm = async () => {
		const {fireDate, update} = this.state;
		console.warn('fireDate', fireDate);
		const details = {...alarmNotifData, fire_date: fireDate,message:'Chuẩn bị học "môn học" luc '+fireDate };
		console.log(`alarm set: ${fireDate}`);
	
		try {
		  const alarm = await ReactNativeAN.scheduleAlarm(details);
		  console.log(alarm);
		  if (alarm) {
			this.setState({
			  update: [...update, {date: `alarm set: ${fireDate}`, id: alarm.id}],
			});
		  }
		} catch (e) {
		  console.log(e);
		}
	  };
	
	  componentDidMount() {
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
	
	  viewAlarms = async () => {
		const list = await ReactNativeAN.getScheduledAlarms();
	
		const update = list.map((l) => ({
		  date: `alarm: ${l.day}-${l.month}-${l.year} ${l.hour}:${l.minute}:${l.second}`,
		  id: l.id,
		}));
	
		this.setState({update});
	  };
	
	  deleteAlarm = async () => {
		const {alarmId} = this.state;
		if (alarmId !== '') {
		  console.log(`delete alarm: ${alarmId}`);
	
		  const id = parseInt(alarmId, 10);
		  ReactNativeAN.deleteAlarm(id);
		  this.setState({alarmId: ''});
	
		  ToastAndroid.show('Alarm deleted!', ToastAndroid.SHORT);
	
		  await this.viewAlarms();
		}
	  };
	
	  componentWillUnmount() {
		DeviceEventEmitter.removeListener('OnNotificationDismissed');
		DeviceEventEmitter.removeListener('OnNotificationOpened');
	  }
	
	render() {
		const {update, fireDate, alarmId} = this.state;
		return (
			<View style={styles.wrapper}>
			  <View style={{padding: 20}}>
				<Button
				  style={{position: 'absolute'}}
				  title={'Đặt giờ'}
				  onPress={() => {
					this.showDatePicker();
				  }}>
				  {/* <View style={{width:200, height:100, backgroundColor:'#000'}}> */}
				  <Text style={{color: '#000'}}>Show Date Picker</Text>
				  {/* </View> */}
				</Button>
			  </View>
	  
			  <View style={styles.margin}>
				<Button onPress={this.setAlarm} title="Đặt hẹn" color="#007fff" />
			  </View>
			  <View>
				<TextInput
				  style={styles.date}
				  onChangeText={(text) => this.setState({alarmId: text})}
				  value={alarmId}
				/>
			  </View>
			  <View style={styles.margin}>
				<Button
				  onPress={this.deleteAlarm}
				  title="Delete Alarm"
				  color="#841584"
				/>
			  </View>
			  <View style={styles.margin}>
				<Button
				  onPress={this.viewAlarms}
				  title="See all active alarms"
				  color="#841584"
				/>
			  </View>
			  <Text>{JSON.stringify(update, null, 2)}</Text>
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
