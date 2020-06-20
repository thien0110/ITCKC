import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = (title,iconRight,onPressRight, isFirst) => (
    <View
    style={{
      flexDirection: 'row',
      padding: 15,
      alignItems: 'center',
      backgroundColor: Colors.white,
      shadowColor: Colors.black,
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 4,
    }}>
   { isFirst&&(<TouchableOpacity
      onPress={() => {
        this.props.navigation.goBack();
      }}>
      <Icon name={'arrow-left'} size={40} color={Colors.gray} />
    </TouchableOpacity>)}
    <Text
      style={{
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      }}>
      {title}
    </Text>
    <TouchableOpacity onPress={onPressRight}>
      <Icon name={iconRight} size={40} color={Colors.gray} />
    </TouchableOpacity>
  </View>
);


export default Header;
