import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';

import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Icon from 'react-native-vector-icons/FontAwesome5';
const window = Dimensions.get('window');
import {WebView} from 'react-native-webview';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {userProfile} from '../../config';
import Loading from '../customs/Loading';
import AlertCustom from '../customs/AlertComponent';
export default class ScoreTableComponent extends Component {
  componentDidMount() {
    this.props.getScoreTableAction(
      userProfile.mssv
      // '0306171004',
    );
  }
  subjectScore(subjectName, score) {
    return (
      <View
        style={{
          width: window.width - 30,
          height: 50,
          paddingHorizontal: 5,
          paddingVertical: 5,
          marginBottom: 10,
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: window.width - 150,
            height: 40,
            padding: 7,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18}}>{subjectName}</Text>
        </View>
        <View
          style={
            score < 5
              ? {
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  justifyContent: 'center',
                  backgroundColor: '#ef476f',
                }
              : {
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  justifyContent: 'center',
                  backgroundColor: '#06d6a0',
                }
          }>
          <Text style={{fontSize: 18, textAlign: 'center', color: '#fff'}}>
            {score}
          </Text>
        </View>
      </View>
    );
  }
  showSubjectScore() {
    const {data} = this.props;
    return (
      <FlatList
        data={data}
        // style={{paddingHorizontal: 15}}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return this.subjectScore(item.tenMonHoc, item.diemsinhvien);
        }}></FlatList>
    );
  }
  titleBoard(subjectName, score) {
    return (
      <View
        style={{
          width: window.width - 50,
          marginBottom: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
          {subjectName}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#fff',
          }}>
          {score}
        </Text>
      </View>
    );
  }
  render() {
    const {isFetching, message} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: Colors.backgroundBlue}}>
        <HeaderNavigation
          title={'Bảng điểm'}
          titleColor={Colors.white}
          color={Colors.navigation}
          iconLeft={Images.iconBack}
          iconLeftColor={Colors.black}
          onClickLeft={() => {
            this.props.navigation.goBack();
          }}></HeaderNavigation>
        <View style={{flex: 1, paddingHorizontal: 10, alignItems: 'center'}}>
          {this.titleBoard('Môn học', 'Điểm')}
          {this.showSubjectScore()}
        </View>
        {isFetching && <Loading></Loading>}
        {message &&
          AlertCustom(true, message, () => {
            this.props.navigation.goBack();
            this.props.formatData()
          })}
      </View>
    );
  }
}
