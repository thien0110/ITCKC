import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
  TextInput,
  SafeAreaView,
} from 'react-native';
import HeaderNavigation from '../customs/HeaderNavigation';

import Colors from '../../res/Colors';
import Images from '../../res/Images';
import Icon from 'react-native-vector-icons/FontAwesome5';
const window = Dimensions.get('window');
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {userProfile} from '../../config';
import Loading from '../customs/Loading';
import AlertCustom from '../customs/AlertComponent';
import {Picker} from '@react-native-community/picker';
import {
  objectIsNull,
  arrayIsEmpty,
  sortArrayObject,
  sortSemester,
} from '../../res/Functions';
export default class ScoreTableComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Semestery: '0',
      Name: '1',
      subjects: [{}],
    };
  }

  componentDidMount() {
    this.props.getScoreTableAction(
      userProfile.mssv,
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
    const {data, isFetching, getScoreTableAction} = this.props;
    // console.warn(this.state.Name)
    let finalData = [];
    if (!arrayIsEmpty(data)) {
      if(this.state.Semestery=="0"){
        finalData=data
      }else{
        finalData = data.filter((item) => item.hocKi == this.state.Semestery);
      }
      // if (this.state.Name == 1) {
      //   finalData = data.sort(sortArrayObject('diemsinhvien'));
     
      // } else {
      //   finalData = data.sort(sortArrayObject('diemsinhvien', 'desc'));
      //   finalData = data.filter((item) => item.hocKi == this.state.Semestery);
      // }
    }
    return (
      <FlatList
        data={finalData}
        // style={{paddingHorizontal: 15}}
        keyExtractor={(item, index) => 'key' + index}
        onRefresh={() => getScoreTableAction(userProfile.mssv)}
        refreshing={isFetching}
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
        <Text
          style={{fontSize: 18, fontWeight: 'bold', color: Colors.grayStrong}}>
          {subjectName}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: Colors.grayStrong,
          }}>
          {score}
        </Text>
      </View>
    );
  }
  Semester(Name) {
    return (
      <View>
        <Picker
          selectedValue={this.state.Semestery}
          style={{width: 150, fontSize: 15}}
          mode={'dialog'}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({Semestery: itemValue});
          }}>
          <Picker.Item label="Tất cả" value="0" />
          <Picker.Item label="Học kỳ 1" value="1" />
          <Picker.Item label="Học kỳ 2" value="2" />
          <Picker.Item label="Học kỳ 3" value="3" />
          <Picker.Item label="Học kỳ 4" value="4" />
          <Picker.Item label="Học kỳ 5" value="5" />
          <Picker.Item label="Học kỳ 6" value="6" />
        </Picker>
      </View>
    );
  }

  NameSort() {
    return (
      <View>
        <Picker
          selectedValue={this.state.Name}
          style={{width: 150}}
          mode={'dialog'}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({Name: itemValue})
          }>
          <Picker.Item label="0 - 10" value="1" />
          <Picker.Item label="10 - 0" value="2" />
        </Picker>
      </View>
    );
  }

  ShowSort() {
    return (
      <View
        style={{
          alignItems: 'center',
          // height:windowHeight/12,
          // paddingHorizontal: 15,
          width: '100%',
          // flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          // backgroundColor:Colors.white,
        }}>
        {/* <Text>Sắp xếp theo: </Text> */}
        {/* {this.NameSort()} */}
        {this.Semester()}
      </View>
    );
  }
  render() {
    const {isFetching, message} = this.props;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.backgroundWhite}}>
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
          {this.ShowSort()}
          {this.titleBoard('Môn học', 'Điểm')}
          {this.showSubjectScore()}
        </View>
        {isFetching && <Loading></Loading>}
        {message &&
          AlertCustom(true, message, () => {
            this.props.navigation.goBack();
            this.props.formatData();
          })}
      </SafeAreaView>
    );
  }
}
