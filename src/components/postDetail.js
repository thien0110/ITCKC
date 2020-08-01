import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import HeaderNavigation from '../components/customs/HeaderNavigation';
import Images from '../res/Images';
import {arrayIsEmpty, objectIsNull, stringIsEmpty} from '../res/Functions';
import { WebView } from 'react-native-webview';
import Colors from '../res/Colors';

// import { WebView } from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;

export default class postDetail extends Component {
  componentDidMount() {
  }
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const {item}= this.props.route.params;
  //  console.warn(item)
    return (
      <View style={{flex: 1}}>
        <HeaderNavigation
          title={'Bài viết'}
          titleColor={Colors.white}
          color={Colors.backgroundBlue}
          iconLeft={Images.iconBack}
          iconRight={Images.iconTabMenu}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        {/* {this.contentPost()}; */}
        <View style={{flex: 1}}>
          {/* {this.bodyVideo()} */}
          <WebView source={{ uri: item.urlContent }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {padding: 16, paddingTop: 30},
  header: {height: 50, backgroundColor: Colors.backgroundBlue},
  text: {textAlign: 'center', fontWeight: '100'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#E7E6E1'},
});
