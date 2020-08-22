import socketIO from 'socket.io-client';
import PushNotification from 'react-native-push-notification';

import {URL} from './config'
const socket = socketIO(URL, {
  transports: ['websocket'],
  jsonp: false
});
const LocalNotification =(message)=> {
  PushNotification.localNotification({
    autoCancel: true,
    bigText: message,
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

// export the function to connect and use socket IO:
export const startSocketIO = (store) => {
  socket.connect();
  
  socket.on('connect', () => {
    // const { userId } = store.getState().user;
    console.log('connected to socket server'); 
  })
  socket.on('disconnect', () => {
    console.log('connection to server lost.');
  });
  
  socket.on('ThongBaoKhanCap', (message) => {
    // store.dispatch(storePublicMessages([ message ]));
    LocalNotification(message)
    console.log(message)
  });
}

