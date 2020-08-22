import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import PushNotification from 'react-native-push-notification';

import SplashScreen from 'react-native-splash-screen';
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
    // startSocketIO(store);
  }
  LocalNotification() {
    PushNotification.localNotification({
      autoCancel: true,
      bigText: 'Bạn có thông báo mới.',
      //   subText: 'Local Notification Demo',

      title: 'Thông báo',
      message: 'Nhấn để xem thêm',
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
      actions: '["Đồng ý"]',
      visibility: 'public',
      ignoreInForeground: false,
      //   invokeApp:true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Press a button to trigger the notification</Text>
        <View style={{marginTop: 20}}>
          <Button
            title={'Local Push Notification'}
            onPress={() => this.LocalNotification()}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
