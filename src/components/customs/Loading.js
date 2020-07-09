import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Colors from '../../res/Colors'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

const Loading = () => (
  <View style={styles.container}>
   <UIActivityIndicator color={Colors.blue} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:'rgba(255,255,255,0.5)',
  },
});

export default Loading;
