import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';
import {Switch} from 'react-native-switch';

import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Icon from 'react-native-vector-icons/FontAwesome5';
const window = Dimensions.get('window');

export default class SettingComponent extends Component {
  state = {
    modalVisible: false,
    oldPass: '',
    newPass: '',
    confirmNewPass: '',
    status:false
  };
  onPressChangePass() {
    const {modalVisible, oldPass, newPass, confirmNewPass} = this.state;
    const input = {
      oldPass,
      newPass,
      confirmNewPass,
    };
    this.setModalVisible(!modalVisible);
  }
  showPassInput(placeholder, value, onChangeText) {
    return (
      <TextInput
        style={{
          marginBottom: 15,
          alignItems: 'center',
          width: window.width / 1.5,
          borderRadius: 5,
          backgroundColor: Colors.gray,
          paddingHorizontal: 10,
          flexDirection: 'row',
          // shadowColor: 'black',
          // shadowOpacity: 0.3,
          // shadowRadius: 5,
          // elevation: 5,
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => {
          onChangeText(text);
        }}></TextInput>
    );
  }
  showModel() {
    const {modalVisible, oldPass, newPass, confirmNewPass} = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          this.setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: Colors.black,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <View style={{width: window.width / 1.5, alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}>
                <Icon name={'times'} size={18} color="gray"></Icon>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                marginBottom: 15,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                color: Colors.gray2,
              }}>
              Đổi mật khẩu
            </Text>
            {this.showPassInput('Mật Khẩu cũ', oldPass, (text) => {
              this.setState({oldPass: text.trim()});
            })}
            {this.showPassInput('Mật Khẩu mới', newPass, (text) => {
              this.setState({newPass: text.trim()});
            })}
            {this.showPassInput(
              'Nhập lại Mật Khẩu mới',
              confirmNewPass,
              (text) => {
                this.setState({confirmNewPass: text.trim()});
              },
            )}

            <TouchableOpacity
              style={{
                borderRadius: 5,
                width: window.width / 1.5,
                padding: 10,
                marginTop: 10,
                elevation: 2,
                backgroundColor: Colors.buttonBlue,
              }}
              onPress={() => {
                this.onPressChangePass();
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 20,
                }}>
                Xong
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  showItem(icon, title, onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 15,
            alignItems: 'center',
          }}>
          <Image
            source={icon}
            style={{
              flex: 1,
              resizeMode: 'contain',
              width: 40,
              height: 40,
            }}></Image>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: Colors.grayOpacity,
              justifyContent: 'center',
              flex: 5,
              padding: 15,
            }}>
            <Text style={{fontSize: 20, color: Colors.gray2}}>{title}</Text>
          </View>
          <Switch
              value={this.state.status}
              onValueChange={() =>
                this.setState({status:!this.state.status})
              }
              //disabled={true}
              circleSize={25}
              //barHeight={25}
              circleBorderWidth={0}
              backgroundActive={'green'}
              backgroundInactive={'gray'}
              // circleActiveColor={'#30a566'}
              // circleInActiveColor={'#000000'}
              changeValueImmediately={true}
              changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
              innerCircleStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }} // style for inner animated circle for what you (may) be rendering inside the circle
              // outerCircleStyle={{}} // style for outer animated circle
              renderActiveText={false}
              renderInActiveText={false}
              switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
              switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
              //switchBorderRadius={10} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
            />
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          title={'Cài đặt'}
          titleColor={Colors.white}
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        <View style={{flex: 1, padding: 15}}>
          {this.showItem(Images.iconBell, 'Thông báo', () => {})}
          {this.showItem(Images.moon, 'Chế độ đêm', () => {})}
          {this.showItem(Images.translation, 'Ngôn ngữ', () => {})}
          {/* {this.showItem(Images.password, 'Đổi mật khẩu', () => {
            this.setModalVisible(true);
          })} */}
        </View>
        {/* {this.showModel()} */}
      </View>
    );
  }
}
