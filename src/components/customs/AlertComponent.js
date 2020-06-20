import AwesomeAlert from 'react-native-awesome-alerts';
import React, {Component} from 'react';
import Colors from '../../res/Colors';
export default AlertCustom = (show, des, onclose) => {
  return (
    <AwesomeAlert
      show={show}
      showProgress={false}
      title="Thông báo"
      message={des}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showConfirmButton={true}
      confirmText="Đóng"
      confirmButtonColor={Colors.blue}
      onConfirmPressed={() => {
        onclose();
      }}
    />
  );
};
