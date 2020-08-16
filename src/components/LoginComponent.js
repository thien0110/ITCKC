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
import {
  arrayIsEmpty,
  objectIsNull,
  getRememberedUser,
  rememberUser,
  forgetUser,
  stringIsEmpty,
} from '../res/Functions';
import images from '../res/Images';
import {userProfile} from '../config';
export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '0306171311',
      password: '123456',

      rememberMe: false,
      showAlert: false,
      messageAlert: '',
      pressEye: false,
      showPass: true,

      modalVisible: false,
      email: '0306171301@caothang.edu.vn',
    };
  }
  changeState(key, value) {
    const {changeStateAction} = this.props;
    changeStateAction(['state'], -1);
    var stateNew = {...this.state};
    for (var i = 0; i < key.length; i++) {
      stateNew = {...stateNew, [key[i]]: value[i]};
    }
    this.setState({
      ...stateNew,
    });
  }
  async componentDidMount() {
    const {params} = this.props.route;

    const myLogin = await getRememberedUser();
    // console.warn(myLogin)
    if (
      !objectIsNull(myLogin) &&
      !stringIsEmpty(myLogin.username) &&
      !stringIsEmpty(myLogin.password)
    ) {
      this.changeState(
        ['username', 'password', 'rememberMe'],
        [myLogin.username, myLogin.password, true],
      );
      if (objectIsNull(params) || params.isLogout != true) {
        this.onLogin();
      }
    } else {
      this.changeState(['rememberMe'], [false]);
    }
  }
  loginSuccess() {
    const {data, changeStateAction} = this.props;
    userProfile.token=data.token;
    userProfile.mssv=data.mssv;
    userProfile.maLopHoc=data.maLopHoc;
    
    userProfile.role=data.role;
    const myLogin = {
      username: this.state.username,
      password: this.state.password,
    };
    if (this.state.rememberMe === true) {
      rememberUser(myLogin);
    } else {
      forgetUser();
    }
    this.props.navigation.replace('Tab');
    changeStateAction(['state'], -1);
  }
  onPressForgetPass() {
    const {modalVisible, email} = this.state;
    const input = {
      email,
    };
    this.props.forgetPasswordAction(input)
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
  onLogin = () => {
    if (this.state.username === '' || this.state.password === '') {
      this.onChangeStateAlert(true, 'Vui lòng nhập đầy đủ thông tin');
    } else {
      const input = {
        username: this.state.username + '@caothang.edu.vn',
        password: this.state.password,
      };
      this.props.loginAction(input);
    }
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  showPassInput(placeholder, value, keyboardType, onChangeText) {
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
          paddingVertical:6,
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
    const {modalVisible,  email} = this.state;
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
            {this.showPassInput('Email', email, 'default', (text) => {
              this.setState({email: text.trim()});
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
    const {username, password, pressEye, rememberMe, showPass} = this.state;
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
                  height: '35%',
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
                  value={rememberMe}
                  onValueChange={() => {
                    this.setState({rememberMe: !rememberMe});
                  }}
                />
                <Text style={{alignSelf: 'center', color: Colors.grayStrong,marginLeft:5}}>
                  Ghi nhớ tài khoản
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.onLogin();
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
    const {
      data,
      message,
      isFetching,
      changeStateAction,
      loginState,
    } = this.props;
    // console.warn(message)
    return (
      <View style={{flex:1}}>
      <ImageBackground
        source={Images.bg}
        style={{flex:1}}>
        {this.showView()}
        {showAlert &&
          AlertCustom(showAlert, messageAlert, () => {
            this.onChangeStateAlert(false, '');
          })}
        {loginState === 1 && this.loginSuccess()}
        {loginState === 2 &&
          AlertCustom(true, message, () => {
            this.onChangeStateAlert(false, '');
            changeStateAction(['state'], -1);
          })}
        {isFetching && <Loading></Loading>}
        {this.showModel()}
      </ImageBackground>
      </View>
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
