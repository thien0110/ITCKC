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
import {WebView} from 'react-native-webview';
import Colors from '../res/Colors';
import Loading from './customs/Loading';

// import { WebView } from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;

export default class postDetail extends Component {
  componentDidMount() {}
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {item} = this.props.route.params;
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
        <View style={{flex: 1, backgroundColor:Colors.white,padding:15}}>
          <Text style={{fontWeight:'bold', fontSize:15}}>{item.tieuDe}</Text>
          <Image source={item.anhBia}></Image>
          <WebView
            source={{html: '<div style="font-size:35px";>'+item.noiDung+'</div>'}}
            // source={{html: '<h5>Post</h5>'}}
            startInLoadingState={true}
            renderLoading={() => <Loading />}
            allowsFullscreenVideo={true}
          />
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
