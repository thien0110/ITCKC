import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import HeaderNavigation from './customs/HeaderNavigation';
import Colors from '../res/Colors';
import Images from '../res/Images';
import {arrayIsEmpty, SplitDate, SplitTime} from '../res/Functions';
import Loading from '../components/customs/Loading';
import AsyncStorage from '@react-native-community/async-storage';

const window = Dimensions.get('window');
export default class NotiComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notiState: [],
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('@seenKey').then((value) => {
      const seen = JSON.parse(value);
      // console.warn(seen)
      this.setState({
        notiState: seen,
      });
    });
  }
  async storeData(value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@seenKey', jsonValue);
    } catch (e) {
      console.log(e);
    }
  }

  async getData() {
    try {
      const value = await AsyncStorage.getItem('@seenKey');
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
      const jsonValue = JSON.parse(value);
      console.warn(jsonValue);
      if (jsonValue !== null) {
        return jsonValue;
      }
    } catch (e) {
      // error reading value
    }
  }
  async removeValue() {
    try {
      await AsyncStorage.removeItem('@seenKey');
      this.setState({notiState: []});
    } catch (e) {}
  }
  async onSave(item) {
    try {
      const jsonValue = await AsyncStorage.getItem('@seenKey');
      let arr = await JSON.parse(jsonValue);
      // console.warn('arr',arr)
      if (jsonValue !== null) {
        arr.push(item.maBaiViet);
        const uniqueSet = new Set(arr);
        const backToArray = [...uniqueSet];
        this.storeData(backToArray);
      } else {
        this.storeData([item.maBaiViet]);
        
      }
      if(arr === null){
        const jsonValue = await AsyncStorage.getItem('@seenKey');
        this.setState({notiState:JSON.parse(jsonValue)});
      }else this.setState({notiState: arr});
    } catch (e) {}
    this.props.navigation.navigate('PostDetail', {item: item});
  }
  seenAll() {
    const {dataNoti} = this.props.route.params;
    let arr = [];
    dataNoti.forEach(function (item) {
      arr.push(item.maBaiViet);
    });
    this.setState({notiState: arr});
    this.storeData(arr);
  }
  showNoti(type, title, des, time, icon, id, onPress) {
    const {notiState} = this.state;
    let result = [];
    if (!arrayIsEmpty(notiState)) {
      result = notiState.filter((word) => word == id);
    }
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={
            arrayIsEmpty(result)
              ? {...styles.block, backgroundColor: '#deeaff'}
              : {...styles.block, backgroundColor: '#fff'}
          }>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <View
              style={{
                backgroundColor: Colors.gray,
                alignItems: 'center',
                borderRadius: 50,
                width: 35,
                height: 35,
              }}>
              <Image
                source={icon}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  position: 'absolute',
                  top: 6,
                }}></Image>
            </View>
            <Text
              style={{
                color: Colors.gray2,
                marginLeft: 5,
                fontSize: window.height / 45,
              }}>
              {type}
            </Text>
            {/* <View style={{width:8, height:8, borderRadius:20, backgroundColor:Colors.lightBlue, marginLeft:5}}></View> */}
          </View>
          <Text
            style={{
              color: Colors.grayStrong,
              position: 'absolute',
              right: 10,
              top: 10,
              fontSize: window.height / 50,
            }}>
            {SplitDate(time) + '  ' + SplitTime(time)}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: window.height / 50}}>
            {title}
          </Text>
          <Text style={{fontSize: window.height / 55}} numberOfLines={2}>
            {des}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  showBody() {
    const {dataNoti} = this.props.route.params;
    // console.warn(dataNoti)
    if (!arrayIsEmpty(dataNoti)) {
      return (
        <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 10}}>
          <FlatList
            data={dataNoti}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item}) => {
              return this.showNoti(
                'THÔNG BÁO',
                item.tieuDe,
                item.moTaNgan,
                item.thoiGianDangBai,
                Images.iconIt,
                item.maBaiViet,
                () => {
                  this.onSave(item);
                },
              );
            }}
          />
        </View>
      );
    }
  }
  render() {
    const {isFetching} = this.props;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
        <HeaderNavigation
          title={'Thông báo'}
          titleColor={Colors.white}
          color={Colors.backgroundBlue}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.navigate("Menu");
          }}
          iconRight={Images.iconSeen}
          onClickRight={() => {
            this.seenAll();
          }}></HeaderNavigation>
        {/* <TouchableOpacity
          style={{
            height: 15,
            width: '100%',
            backgroundColor: Colors.lightBlue,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.removeValue();
          }}>
          <Text style={{color: '#fff'}}>Reset</Text>
        </TouchableOpacity> */}
        {this.showBody()}
        {isFetching && <Loading></Loading>}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    width: '100%',
    height: window.height / 6,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    overflow: 'hidden',
  },
});
