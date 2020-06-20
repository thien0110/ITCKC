import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class SplashComponent extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2500);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../res/image/LogoITCKC.png')}
          style={{
            resizeMode: 'contain',
            width:'50%',
            height:'50%'
          }}></Image>
      </View>
    );
  }
}
