import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions, ImageBackground} from 'react-native';
import Colors from '../../res/Colors';
import CoverImg from '../../res/Images';

const windowWidth = Dimensions.get('window').width;
export default class Board extends Component {
  state = {
    currentImageIndex: 0,
  };
  componentDidMount() {
    this.changeImage();
  }
  changeImage = () => {
    const randomNumber = Math.floor(Math.random() * covers.length);
    this.setState({
      currentImageIndex: randomNumber,
    });
  };
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
        source={covers[this.state.currentImageIndex]}
          style={{
            overflow:"hidden",
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
const covers = [
  CoverImg.cover1,
  CoverImg.cover2,
  CoverImg.cover3,
  CoverImg.cover4,
  CoverImg.cover5,
  CoverImg.cover6,
  CoverImg.cover7,
  CoverImg.cover8,
  CoverImg.cover9,
];
