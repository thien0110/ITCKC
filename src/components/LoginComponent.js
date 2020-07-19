import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
  Modal,
} from 'react-native';
import Colors from '../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AlertCustom from './customs/AlertComponent';
import Loading from './customs/Loading';
import CheckBox from '@react-native-community/checkbox';
import Images from '../res/Images';
import {arrayIsEmpty} from '../res/Functions';
import images from '../res/Images';
export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'thien',
      password: '123',

      isChecked: false,
      showAlert: false,
      messageAlert: '',
      pressEye: false,
      showPass: true,

      modalVisible: false,
      idCard: '',
      email: '',
    };
  }
  componentDidUpdate() {
    if (!arrayIsEmpty(this.props.data)) {
      this.props.navigation.replace('Tab');
      this.props.formatData({});
    }
  }
  onPressForgetPass() {
    const {modalVisible, idCard, email} = this.state;
    const input = {
      idCard,
      email,
    };
    this.setModalVisible(!modalVisible);
  }
  onChangeStateAlert = (state, des) => {
    this.setState({
      showAlert: state,
      messageAlert: des,
    });
  };
  showPass = () => {
    if (this.state.pressEye === false) {
      this.setState({
        pressEye: true,
        showPass: false,
      });
    } else {
      this.setState({
        pressEye: false,
        showPass: true,
      });
    }
  };
  onLogin = (username, password) => {
    if (username === '' || password === '') {
      this.onChangeStateAlert(true, 'Vui lòng nhập đầy đủ thông tin');
    } else {
      const input = {username: username, password: password};
      this.props.loginAction(input);
    }
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  showPassInput(placeholder, value,keyboardType, onChangeText) {
    return (
      <TextInput
        style={{
          marginBottom: 15,
          alignItems: 'center',
          width: windowWidth / 1.5,
          borderRadius: 5,
          backgroundColor: Colors.gray,
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => {
          onChangeText(text);
        }}></TextInput>
    );
  }
  showModel() {
    const {modalVisible, idCard, email} = this.state;
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
            <View style={{width: windowWidth / 1.5, alignItems: 'flex-end'}}>
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
              Quên mật khẩu
            </Text>
            {this.showPassInput('Email', email,'default', (text) => {
              this.setState({email: text.trim()});
            })}
            {this.showPassInput('Chứng minh nhân dân', idCard,'phone-pad', (text) => {
              this.setState({idCard: text.trim()});
            })}

            <TouchableOpacity
              style={{
                borderRadius: 5,
                width: windowWidth / 1.5,
                padding: 10,
                marginTop: 10,
                elevation: 2,
                backgroundColor: Colors.buttonBlue,
              }}
              onPress={() => {
                this.onPressForgetPass();
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 20,
                }}>
                Lấy mật khẩu
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
  showView() {
    const {username, password, pressEye, isChecked, showPass} = this.state;
    return (
      <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            width: '80%',
            height: 400,
            marginTop: windowHeight / 9,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <ImageBackground
            source={images.card}
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              shadowColor: Colors.black,
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 5,
            }}
            resizeMode={'stretch'}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 20,
              }}>
              <View
                style={{
                  // justifyContent: 'center',
                  alignItems: 'center',
                  height: '38%',
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../res/image/LogoKhoaCNTT.png')}
                  style={{
                    width: 100,
                    height: 100,
                  }}></Image>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: Colors.blue,
                    }}>
                    Information Technology
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: Colors.blue,
                    }}>
                    CKC Application
                  </Text>
                </View>
              </View>

              <View style={styles.input}>
                <TextInput
                  style={{flex: 1}}
                  placeholder="Mã số sinh viên"
                  value={username}
                  onChangeText={(text) => {
                    this.setState({
                      username: text.trim(),
                    });
                  }}></TextInput>
              </View>
              <View style={styles.input}>
                <TextInput
                  style={{paddingRight: 30, flex: 1}}
                  secureTextEntry={showPass}
                  placeholder="Mật khẩu"
                  value={password}
                  onChangeText={(text) => {
                    this.setState({
                      password: text.trim(),
                    });
                  }}></TextInput>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 15,
                  }}
                  onPress={this.showPass.bind(this)}>
                  <Icon
                    name={pressEye == false ? 'eye-slash' : 'eye'}
                    size={18}
                    color="gray"></Icon>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <CheckBox
                  style={{color: Colors.grayStrong}}
                  value={isChecked}
                  onValueChange={() => {
                    this.setState({isChecked: !isChecked});
                  }}
                />
                <Text style={{alignSelf: 'center', color: Colors.grayStrong}}>
                  Ghi nhớ tài khoản
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.onLogin(username, password);
                }}>
                <Text
                  style={{
                    color: Colors.white,
                    textAlign: 'center',
                    fontSize: 20,
                  }}>
                  Đăng nhập
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginTop: 15}}
                onPress={() => {
                  this.setModalVisible(true);
                }}>
                <Text style={{color: Colors.grayStrong}}>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    );
  }
  render() {
    const {messageAlert, showAlert} = this.state;
    const {data, message, isFetching} = this.props;
    // console.warn("data", data)
    return (
      <ImageBackground
        source={Images.bg}
        style={{width: windowWidth, height: windowHeight}}>
        {this.showView()}
        {showAlert &&
          AlertCustom(showAlert, messageAlert, () => {
            this.onChangeStateAlert(false, '');
          })}
        {message &&
          AlertCustom(true, message, () => {
            this.onChangeStateAlert(false, '');
            this.props.formatData({});
          })}
        {isFetching && <Loading></Loading>}
        {this.showModel()}
      </ImageBackground>
    );
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {},
  input: {
    marginBottom: 15,
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.gray,
    paddingHorizontal: 10,
    flexDirection: 'row',
    shadowColor: Colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    marginTop: 15,
    width: '100%',
    height: 40,
    backgroundColor: Colors.blue,
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
