import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
} from 'react-native';
import Colors from '../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AlertCustom from './customs/AlertComponent';
import Loading from './customs/Loading';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',

      isChecked: false,
      showAlert: false,
      messageAlert: '',
      pressEye: true,
      showPass:false,
    };
  }
  componentDidUpdate(){
    if(this.props.data !=null ){
      this.props.navigation.navigate('Tab');
    }
  }

  onChangeStateAlert = (state, des) => {
    this.setState({
      showAlert: state,
      messageAlert: des,
    });
  };
  showPass =()=>{
    if(this.state.pressEye ===false){
        this.setState({
          pressEye: true,
          showPass:false
        })
    }else{
      this.setState({
        pressEye: false,
        showPass:true
      })
    }
  }
  onLogin=(username, password)=>{
      
      //  this.props.navigation.navigate('Tab');
      if (username === '' || password === '') {
        this.onChangeStateAlert(true, 'Vui lòng nhập đầy đủ thông tin');
      }else {
        const input = {username: username, password: password};
        
         this.props.loginAction(input);
      }
  }
  showView() {
    const {username,password,pressEye,isChecked, showPass} =this.state;
    return (
      <KeyboardAvoidingView style={{flex: 1,
      justifyContent:'flex-start'}}>
      <View
          style={{
            width: '70%',
            height:windowHeight,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
        <View style={{ justifyContent: 'center', alignItems: 'center',
         height:windowHeight/2.3,
         backgroundColor:'#fff'}}>
          <Image
            source={require('../res/image/LogoKhoaCNTT.png')}
            style={{
              width: 250,
              height: 250,
            }}></Image>
        </View>
        
          <View style={styles.input}>
            <TextInput
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
            style={{paddingRight:30}}
              secureTextEntry={showPass}
              placeholder="Mật khẩu"
              value={password}

              onChangeText={(text) => {
                this.setState({
                  password: text.trim(),
                });
              }}></TextInput>
              <TouchableOpacity style={{
                position: 'absolute',
                right: 15,
              }}
              onPress={this.showPass.bind(this)}
              >
            <Icon
              name={pressEye==false?'eye-slash':'eye'}
              size={18}
              color='gray'
              ></Icon></TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', width: '100%', }}>
            <CheckBox
              style={{color: Colors.lightBlue}}
              value={isChecked}
              onValueChange={() => {
                this.setState({isChecked: !isChecked});
              }}
            />
            <Text style={{alignSelf: 'center', color: Colors.lightBlue}}>
              Ghi nhớ tài khoản
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.onLogin(username, password)
            }}>
            <Text
              style={{
                color: Colors.white,
                textAlign: 'center',
                fontSize: 20,
              }}>
              Đăng nhập
            </Text>
            {/* <Icon
              name="arrow-right"
              size={18}
              color={Colors.white}
              style={{position: 'absolute', right: 90}}></Icon> */}
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 15}}>
            <Text style={{color: Colors.lightBlue}}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
  render() {
    const {messageAlert, showAlert,} = this.state;
    const {data, error, isFetching} = this.props;
    console.warn(data,"data")
    console.warn(isFetching,"isFetching")
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        {this.showView()}
        {this.state.showAlert &&
          AlertCustom(showAlert, messageAlert, () => {
            this.onChangeStateAlert(false, '');
          })}
          {isFetching&&<Loading></Loading>}
      </View>
    );
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {},
  input: {
    marginBottom:15,
    alignItems: 'center',
    width: '100%',
    height: 45,
    borderRadius: 15,
    backgroundColor: Colors.gray,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  button: {
    marginTop: 15,
    width: '100%',
    height: 45,
    backgroundColor: Colors.blue,
    borderRadius: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
