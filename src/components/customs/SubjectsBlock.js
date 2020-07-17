import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import Colors from '../../res/Colors';

const windowWidth = Dimensions.get('window').width;

export default class SubjectsBlock extends Component {
  render() {
    const {
      onPress,
      name,
      semester,
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
            backgroundColor: Colors.white,
            justifyContent: 'space-around',
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            padding:padding,
            borderWidth: 1,
            borderColor: Colors.grayStrong,
            // shadowColor: Colors.black,
            // shadowOpacity: 0.3,
            // shadowRadius: 5,
            // elevation: 5,
          }}>
          {/* <Image
              source={iconName}
              style={{
                width: '40%',
                height: '40%',
  
                resizeMode: 'contain',
              }}></Image> */}
          <Text style={{textAlign: 'left', fontSize: 30, fontWeight: 'bold'}}>
            {name}
          </Text>
          <Text style={{textAlign: 'left'}}>{semester}</Text>
          <Text
            style={{
              textAlign: 'left',
              fontStyle: 'italic',
              fontSize: 20,
              marginBottom:0,
            }}>
            {teacherName}
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
  height: 150,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  padding: 10
};
