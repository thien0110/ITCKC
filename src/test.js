import React, {Component} from 'react';
import Colors from '../src/res/Colors';
import {AppRegistry, StyleSheet, Text, View,Dimensions} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default class SwiperComponent extends Component {
  block(color) {const windowWidth = Dimensions.get('window').width;
    return (
      <View
        style={{
          borderRadius: 30,
          shadowColor: Colors.black,
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 5,
          backgroundColor: color,
          width: windowWidth-30,
          height: 107,
        }}></View>
    );
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', }}>
        <Swiper
          style={styles.wrapper}
          autoplay={true}
          showsPagination={false}>
          {this.block(Colors.blockYellow)}
          {this.block(Colors.blockRed)}
          {this.block(Colors.blockPurple)}
         
        </Swiper>
        <View style={{marginVertical: 15,
            flex: 1,backgroundColor:'#000'}}></View>
      </View>
    );
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent);
