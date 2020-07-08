import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

class CheckBok extends React.Component {
  render() {
    const { value, onValueChange, size } = this.props;

    return (
      <TouchableOpacity
      style={{marginRight:20}}
        onPress={() => {
          onValueChange(!value);
        }}
      >
        <Icon color={'blue'} name={value?"check-circle":"circle"} size={size}></Icon>
      </TouchableOpacity>
    );
  }
}

CheckBok.defaultProps = {
  value: false,
  onValueChange: () => {},
  size: 20
};
export default CheckBok;
