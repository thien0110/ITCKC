import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions, ImageBackground} from 'react-native';
import Colors from '../../res/Colors';

const windowWidth = Dimensions.get('window').width;
export default class Board extends Component {
  render() {
    const {studentName, name, numberOf, teacherName, onClick} = this.props;
    return (
      <TouchableOpacity onPress={onClick}>
        {/* <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginVertical: 5,
            color: Colors.navigation,
          }}>
          {studentName}
        </Text> */}
        <ImageBackground
          style={{
            
            borderRadius: 10,
            padding: 10,
            backgroundColor: Colors.backgroundBlue,
            marginBottom: 10,
            width: windowWidth - (windowWidth * 1) / 15,
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 5,
              color: '#fff',
            }}>
            {name}
          </Text>
          <Text
            numberOfLines={2}
            style={{fontWeight: 'bold', marginVertical: 5, color: '#fff'}}>
            {numberOf}
          </Text>
          <Text style={{color: '#eeeeee', fontStyle: 'italic'}}>
            {teacherName}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
Board.defaultProps = {
  studentName: '',
  name: '',
  numberOf: '',
  teacherName: '',
  onClick: () => {},
};
