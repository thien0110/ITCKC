import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import Colors from '../../res/Colors';
import CoverImg from '../../res/Images';

const windowWidth = Dimensions.get('window').width;

export default class SubjectsBlock extends Component {
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
    const {
      onPress,
      name,
      numberOf,
      teacherName,
      width,
      height,
      marginBottom,
      marginLeft,
      marginRight,
      iconName,
      padding,
    } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: width,
            height: height,
            borderRadius: 15,
            backgroundColor: '#fff',
            overflow: 'hidden',
            justifyContent: 'space-around',
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            padding: padding
          }}>
          <Image
            source={covers[this.state.currentImageIndex]}
            style={{
              alignContent: 'center',
              width: '120%',
              position: 'absolute',
              top: -10,
              resizeMode: 'cover',
            }}></Image>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {name}
          </Text>
          <Text style={{textAlign: 'left', color: '#fff'}}>
            Sĩ số: {numberOf}
          </Text>
          <Text
            style={{
              textAlign: 'left',
              fontStyle: 'italic',
              fontSize: 14,
              marginBottom: 0,
              color: '#fff',
            }}>
            GV: {teacherName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
SubjectsBlock.defaultProps = {
  onPress: () => {},
  name: '',
  semester: '',
  teacherName: '',
  width: '100%',
  height: 120,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  padding: 10,
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
