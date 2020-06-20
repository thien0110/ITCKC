import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Colors from '../../res/Colors'

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={Colors.blue} />
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
    backgroundColor:'rgba(0,0,0,0.2)',
  },
});

export default Loading;
